import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Settings, Play, Square } from 'lucide-react';
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
      {/* Cycle Information Card */}
      <div className="symptom-glass rounded-2xl p-4" style={{ backgroundColor: '#FBF8F9' }}>
        <div className="text-center space-y-2">
          {/* Rose dots decoration */}
          <div className="flex justify-center gap-1 mb-3">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--cycle-secondary-text))' }}></div>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'hsl(var(--cycle-secondary-text))' }} opacity-70></div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'hsl(var(--cycle-secondary-text))' }} opacity-50></div>
          </div>

          {derivedState.isFirstRun ? (
            <div>
              <h2 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
                {UI_TEXT.welcome}
              </h2>
              <Button
                onClick={() => setShowDatePicker(true)}
                variant="secondary-glass"
                className="w-full"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {UI_TEXT.lastPeriod}
              </Button>
            </div>
          ) : (
            <div>
              <div className="text-sm mb-1" style={{ color: 'hsl(var(--cycle-body-text))' }}>
                {UI_TEXT.todayEstimate}
              </div>
              {daysUntilPeriod !== null && (
                <div className="text-lg font-semibold" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
                  {daysUntilPeriod > 0 ? (
                    `${UI_TEXT.expectedPeriod} za ${daysUntilPeriod} ${daysUntilPeriod === 1 ? 'deň' : 'dní'}`
                  ) : daysUntilPeriod === 0 ? (
                    `${UI_TEXT.expectedPeriod} dnes`
                  ) : (
                    `${Math.abs(daysUntilPeriod)} ${UI_TEXT.daysPast}`
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Tabs System */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-5">
        {/* Phase Selector Buttons */}
        {!derivedState.isFirstRun && (
          <div className="flex gap-2 justify-center overflow-x-auto px-2 py-1 -mx-2">
            {derivedState.phaseRanges.map(phase => {
              const isSelected = selectedPhase?.key === phase.key;
              const isCurrent = derivedState.currentPhase.key === phase.key;
              
              return (
                <Button
                  key={phase.key}
                  onClick={() => {
                    setSelectedPhase(phase);
                    setActiveTab('phase');
                  }}
                  className={`text-sm px-3 py-1.5 rounded-full transition-all whitespace-nowrap flex-shrink-0 ${
                    isSelected ? 'symptom-glass shadow-sm' : 
                    'bg-gradient-to-r from-rose-50/80 to-pink-50/80 symptom-glass shadow-sm'
                  }`}
                  style={{ 
                    color: 'hsl(var(--cycle-secondary-text))',
                    backgroundColor: isSelected ? 'var(--gradient-primary-button)' : undefined
                  }}
                  variant="ghost"
                >
                  {phase.name}
                  {isCurrent && <span className="ml-1 text-xs">•</span>}
                </Button>
              );
            })}
          </div>
        )}

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

        {/* Tab Navigation */}
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="today">{UI_TEXT.today}</TabsTrigger>
          <TabsTrigger value="symptoms">{UI_TEXT.symptoms}</TabsTrigger>
          <TabsTrigger value="phase" disabled={!selectedPhase}>
            Fáza
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

        <TabsContent value="symptoms" className="space-y-4">
          {!derivedState.isFirstRun ? (
            <SymptomTracker
              currentPhase={derivedState.currentPhase}
              onSaveSymptoms={saveSymptoms}
              onSaveNotes={saveNotes}
              getSymptoms={getSymptoms}
              getNotes={getNotes}
            />
          ) : (
            <div className="text-center py-8" style={{ color: 'hsl(var(--cycle-body-text))' }}>
              <p>Najprv nastav svoj cyklus pre sledovanie príznakov</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="phase" className="space-y-4">
          {selectedPhase ? (
            <PhaseOverview
              selectedPhase={selectedPhase}
              currentPhase={derivedState.currentPhase}
            />
          ) : (
            <div className="text-center py-8" style={{ color: 'hsl(var(--cycle-body-text))' }}>
              <p>Vyber fázu cyklu pre detailné informácie</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Bottom Action Buttons */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          onClick={() => setShowDatePicker(true)}
          className="symptom-glass"
          style={{ backgroundColor: 'var(--symptom-glass-bg)' }}
        >
          <Calendar className="w-4 h-4 mr-2" />
          {UI_TEXT.calendar}
        </Button>
        
        <Button
          variant="outline"
          onClick={() => setShowSettings(true)}
          className="symptom-glass"
          style={{ backgroundColor: 'var(--symptom-glass-bg)' }}
        >
          <Settings className="w-4 h-4 mr-2" />
          {UI_TEXT.settings}
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