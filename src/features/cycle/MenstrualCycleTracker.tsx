import React, { useState } from 'react';
import { Calendar as CalendarIcon, TrendingUp, Lightbulb, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useCycleData } from './useCycleData';
import { WellnessDonutChart } from './WellnessDonutChart';
import { PhaseOverview } from './PhaseOverview';
import { DatePickerModal } from './DatePickerModal';
import { SettingsModal } from './SettingsModal';
import { UI_TEXT } from './insights';
import { formatDateSk, getNextPeriodDate } from './utils';

type OutcomeType = 'next-period' | 'fertile-days';

interface MenstrualCycleTrackerProps {
  accessCode?: string;
  compact?: boolean;
  onFirstInteraction?: () => void;
}

export const MenstrualCycleTracker: React.FC<MenstrualCycleTrackerProps> = ({
  accessCode,
  compact = false,
  onFirstInteraction
}) => {
  const {
    cycleData,
    derivedState,
    loading,
    saveCycleData
  } = useCycleData(accessCode);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [setupCycleLength, setSetupCycleLength] = useState(28);
  const [setupPeriodLength, setSetupPeriodLength] = useState(5);

  const handleFirstInteraction = () => {
    onFirstInteraction?.();
  };

  const handleSetupComplete = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    saveCycleData({
      lastPeriodStart: dateString,
      cycleLength: setupCycleLength,
      periodLength: setupPeriodLength
    });
    handleFirstInteraction();
  };

  const handleDateSelect = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    saveCycleData({ lastPeriodStart: dateString });
    handleFirstInteraction();
  };

  if (loading) {
    return (
      <div className="bg-widget-bg p-3 w-full overflow-hidden">
        <div className="w-full max-w-[600px] mx-auto space-y-2">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  // Welcome screen for first-time setup
  if (!cycleData.lastPeriodStart) {
    return (
      <div className="w-full space-y-6">
        <div>
          <p className="md:text-sm text-lg" style={{ color: '#955F6A' }}>
            {UI_TEXT.welcome}
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="setupCycleLength" className="text-mobile-sm md:text-sm font-medium block" style={{ color: '#955F6A' }}>
                {UI_TEXT.cycleLength}
              </Label>
              <Input
                id="setupCycleLength"
                type="number"
                min="21"
                max="45"
                value={setupCycleLength}
                onChange={e => setSetupCycleLength(Number(e.target.value))}
                placeholder="28 dni"
                className="w-full text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="setupPeriodLength" className="text-mobile-sm md:text-sm font-medium block" style={{ color: '#955F6A' }}>
                {UI_TEXT.periodLength}
              </Label>
              <Input
                id="setupPeriodLength"
                type="number"
                min="2"
                max="10"
                value={setupPeriodLength}
                onChange={e => setSetupPeriodLength(Number(e.target.value))}
                placeholder="5 dni"
                className="w-full text-base"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              onClick={() => setShowDatePicker(true)}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 py-3 text-base"
            >
              <CalendarIcon className="w-5 h-5" />
              {UI_TEXT.lastPeriod}
            </Button>
          </div>
        </div>

        <DatePickerModal
          isOpen={showDatePicker}
          onClose={() => setShowDatePicker(false)}
          onDateSelect={handleSetupComplete}
          title={UI_TEXT.lastPeriod}
          minDate={derivedState?.minDate}
          maxDate={derivedState?.maxDate}
        />
      </div>
    );
  }

  if (!derivedState) return null;

  const nextPeriodDate = getNextPeriodDate(cycleData.lastPeriodStart!, cycleData.cycleLength);

  return (
    <div className="w-full space-y-4">
      {/* Cycle Information Card */}
      <div className="symptom-glass rounded-2xl p-4" style={{ backgroundColor: '#FBF8F9' }}>
        <div className="flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              <p className="text-base font-medium" style={{ color: '#955F6A' }}>
                Očakávaná menštruácia
              </p>
              <div className="w-2 h-2 rounded-full bg-rose-400"></div>
            </div>
            <Button
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200/30 rounded-3xl symptom-glass hover:from-rose-50 hover:to-pink-50 transition-all"
              style={{ color: '#F4415F' }}
            >
              {formatDateSk(nextPeriodDate)}
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="today" className="space-y-5">
        <TabsContent value="today" className="space-y-5">
          <div className="space-y-4">
            <WellnessDonutChart
              cycleLength={cycleData.cycleLength}
              currentDay={derivedState.currentDay}
              phaseRanges={derivedState.phaseRanges}
              currentPhase={derivedState.currentPhase}
            />
          </div>
        </TabsContent>

        <TabsContent value="overview" className="space-y-5">
          <div className="space-y-4">
            <WellnessDonutChart
              cycleLength={cycleData.cycleLength}
              currentDay={derivedState.currentDay}
              phaseRanges={derivedState.phaseRanges}
              currentPhase={derivedState.currentPhase}
            />
          </div>
        </TabsContent>

        <TabsList className="grid w-full grid-cols-2 gap-3 bg-transparent p-0">
          <TabsTrigger
            value="today"
            className="flex items-center gap-2 text-base bg-gradient-primary font-semibold rounded-3xl px-6 py-3 symptom-glass hover:opacity-90 transition-opacity data-[state=active]:bg-gradient-primary data-[state=inactive]:bg-gradient-primary"
            style={{ color: '#F4415F' }}
          >
            <TrendingUp className="w-4 h-4" />
            {UI_TEXT.todayEstimate}
          </TabsTrigger>
          <TabsTrigger
            value="overview"
            className="flex items-center gap-2 text-base bg-gradient-to-r from-rose-50/80 to-pink-50/80 border border-rose-200/30 backdrop-blur-sm rounded-3xl px-6 py-3 symptom-glass hover:from-rose-50 hover:to-pink-50 transition-all data-[state=active]:from-rose-50 data-[state=active]:to-pink-50 data-[state=inactive]:from-rose-50/80 data-[state=inactive]:to-pink-50/80"
            style={{ color: '#F4415F' }}
          >
            <Lightbulb className="w-4 h-4" />
            {UI_TEXT.whatToDo}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="mt-5">
          <div className="space-y-4">
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#FBF8F9' }}>
              <h3 className="text-base font-semibold mb-2" style={{ color: '#955F6A' }}>
                Dnešné odporúčania
              </h3>
              <p className="text-sm" style={{ color: '#955F6A' }}>
                Na základe vašej aktuálnej fázy cyklu ({derivedState.currentPhase.name}) 
                odporúčame si dnes dopriať dostatok odpočinku a hydratácie.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="overview" className="mt-5">
          <PhaseOverview
            selectedPhase={derivedState.currentPhase}
            currentPhase={derivedState.currentPhase}
          />
        </TabsContent>
      </Tabs>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <Button
          onClick={() => setShowDatePicker(true)}
          className="flex items-center gap-2 text-base bg-gradient-primary font-semibold rounded-3xl px-6 py-3 symptom-glass hover:opacity-90 transition-opacity"
          style={{ color: '#F4415F' }}
        >
          <CalendarIcon className="w-4 h-4" />
          Kalendár
        </Button>
        <Button
          onClick={() => setShowSettings(true)}
          className="flex items-center gap-2 text-base bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200/30 rounded-3xl px-6 py-3 symptom-glass hover:from-rose-50 hover:to-pink-50 transition-all"
          style={{ color: '#F4415F' }}
        >
          <Settings className="w-4 h-4" />
          Nastavenia
        </Button>
      </div>

      <DatePickerModal
        isOpen={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        onDateSelect={handleDateSelect}
        title="Nová menštruácia"
        minDate={derivedState?.minDate}
        maxDate={derivedState?.maxDate}
      />

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        cycleData={cycleData}
        onUpdateCycleSettings={(settings) => saveCycleData(settings)}
        onUpdateSettings={(settings) => saveCycleData({ 
          customSettings: { ...cycleData.customSettings, ...settings }
        })}
      />
    </div>
  );
};