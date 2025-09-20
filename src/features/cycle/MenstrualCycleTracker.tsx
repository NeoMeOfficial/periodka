import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Settings, Play, Square, TrendingUp, Lightbulb } from 'lucide-react';
import { WellnessDonutChart } from './WellnessDonutChart';
import { SuggestedToday } from './SuggestedToday';
import { PhaseOverview } from './PhaseOverview';
import { SymptomTracker } from './SymptomTracker';
import { DatePickerModal } from './DatePickerModal';
import { SettingsModal } from './SettingsModal';
import { useCycleData } from './useCycleData';
import { PhaseRange } from './types';
import { UI_TEXT } from './insights';
import { getDaysUntilPeriod, formatDisplayDate } from './utils';

interface MenstrualCycleTrackerProps {
  accessCode?: string;
}

export const MenstrualCycleTracker: React.FC<MenstrualCycleTrackerProps> = ({ accessCode }) => {
  const {
    cycleData,
    derivedState,
    loading,
    startPeriod,
    updateSettings,
    updateCycleSettings,
    saveSymptoms,
    getSymptoms,
    saveNotes,
    getNotes
  } = useCycleData(accessCode);

  const [selectedPhase, setSelectedPhase] = useState<PhaseRange | undefined>();
  const [activeTab, setActiveTab] = useState('today');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  if (loading) {
    return (
      <div className="w-full max-w-md mx-auto p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-48 bg-muted rounded-2xl"></div>
        </div>
      </div>
    );
  }

  const daysUntilPeriod = getDaysUntilPeriod(cycleData.lastPeriodStart, cycleData.cycleLength);
  const isInPeriod = derivedState.currentPhase.key === 'menstrual';

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold" style={{ color: 'hsl(var(--foreground))' }}>
          Menštruačný kalendár
        </h1>
      </div>

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
              {daysUntilPeriod !== null && daysUntilPeriod > 0 ? `za ${daysUntilPeriod} ${daysUntilPeriod === 1 ? 'deň' : 'dní'}` : 'Dnes'}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Tabs System */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-5">
        {/* Phase selector buttons */}
        <div className="flex gap-2 justify-center overflow-x-auto px-2 py-1 -mx-2">
          {derivedState.phaseRanges.map((phase) => (
            <Button
              key={phase.key}
              onClick={() => setSelectedPhase(selectedPhase?.key === phase.key ? undefined : phase)}
              className={`text-sm px-3 py-1.5 rounded-full transition-all whitespace-nowrap flex-shrink-0 ${
                selectedPhase?.key === phase.key 
                  ? 'bg-gradient-primary border-none symptom-glass shadow-sm' 
                  : 'bg-gradient-to-r from-rose-50/80 to-pink-50/80 border border-rose-200/30 symptom-glass hover:from-rose-50 hover:to-pink-50 shadow-sm'
              }`}
              style={{ color: '#F4415F' }}
            >
              {phase.name}
            </Button>
          ))}
        </div>

        {/* Wellness Donut Chart */}
        {!derivedState.isFirstRun && (
          <WellnessDonutChart
            cycleLength={cycleData.cycleLength}
            currentDay={derivedState.currentDay}
            phaseRanges={derivedState.phaseRanges}
            currentPhase={derivedState.currentPhase}
            selectedPhase={selectedPhase}
            onPhaseSelect={setSelectedPhase}
          />
        )}

        <TabsList className="grid w-full grid-cols-2 gap-3 bg-transparent p-0">
          <TabsTrigger 
            value="today" 
            className="flex items-center gap-2 text-base font-semibold rounded-3xl px-6 py-3 transition-all data-[state=active]:bg-rose-300 data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:border data-[state=inactive]:border-rose-200/30"
            style={{ 
              backgroundColor: activeTab === 'today' ? '#F8BBD0' : 'transparent',
              color: activeTab === 'today' ? '#8E1538' : '#F4415F'
            }}
          >
            <TrendingUp className="w-4 h-4" />
            Odhad na dnes
          </TabsTrigger>
          <TabsTrigger 
            value="overview" 
            className="flex items-center gap-2 text-base rounded-3xl px-6 py-3 transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=inactive]:bg-transparent"
            style={{ 
              backgroundColor: activeTab === 'overview' ? 'white' : 'transparent',
              color: '#F4415F'
            }}
          >
            <Lightbulb className="w-4 h-4" />
            Čo s tým
          </TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <TabsContent value="today" className="space-y-4">
          {!derivedState.isFirstRun ? (
            <SuggestedToday currentPhase={derivedState.currentPhase} />
          ) : (
            <div className="text-center py-8" style={{ color: 'hsl(var(--cycle-body-text))' }}>
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Nastav si dátum poslednej menštruácie pre personalizované rady</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="overview" className="space-y-4">
          <PhaseOverview 
            currentPhase={selectedPhase || derivedState.currentPhase}
            selectedPhase={selectedPhase}
          />
        </TabsContent>
      </Tabs>

      {/* Bottom Action Buttons */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Button 
          onClick={() => setShowDatePicker(true)}
          className="flex items-center gap-2 text-base bg-gradient-primary font-semibold rounded-3xl px-6 py-3 symptom-glass hover:opacity-90 transition-opacity"
          style={{ color: '#F4415F' }}
        >
          <Calendar className="w-4 h-4" />
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

      {/* Period Action Button */}
      {!derivedState.isFirstRun && (
        <Button
          onClick={() => startPeriod()}
          className="w-full symptom-glass"
          style={{
            backgroundColor: isInPeriod ? 'hsl(var(--destructive))' : 'hsl(var(--cycle-secondary-text))',
            color: 'white'
          }}
        >
          {isInPeriod ? (
            <>
              <Square className="w-4 h-4 mr-2" />
              {UI_TEXT.endPeriod}
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              {UI_TEXT.startPeriod}
            </>
          )}
        </Button>
      )}

      {/* Modals */}
      <DatePickerModal
        isOpen={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        onDateSelect={startPeriod}
        title={UI_TEXT.lastPeriod}
        minDate={derivedState.minDate}
        maxDate={derivedState.maxDate}
      />

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        cycleData={cycleData}
        onUpdateCycleSettings={updateCycleSettings}
        onUpdateSettings={updateSettings}
      />
    </div>
  );
};