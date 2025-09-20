import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { PhaseRange } from './types';
import { getSymptomsForPhase, getAllSymptoms } from './suggestions';
import { UI_TEXT } from './insights';
import { formatDate } from './utils';

interface SymptomTrackerProps {
  currentPhase: PhaseRange;
  selectedDate?: Date;
  onSaveSymptoms: (date: string, symptoms: string[]) => void;
  onSaveNotes: (date: string, notes: string) => void;
  getSymptoms: (date: string) => string[];
  getNotes: (date: string) => string;
}

export const SymptomTracker: React.FC<SymptomTrackerProps> = ({
  currentPhase,
  selectedDate = new Date(),
  onSaveSymptoms,
  onSaveNotes,
  getSymptoms,
  getNotes
}) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [showAllSymptoms, setShowAllSymptoms] = useState(false);

  const dateString = formatDate(selectedDate);
  const phaseSpecificSymptoms = getSymptomsForPhase(currentPhase.key);
  const allSymptoms = getAllSymptoms();
  const symptomsToShow = showAllSymptoms ? allSymptoms : phaseSpecificSymptoms;

  // Load existing data when date changes
  useEffect(() => {
    const existingSymptoms = getSymptoms(dateString);
    const existingNotes = getNotes(dateString);
    setSelectedSymptoms(existingSymptoms);
    setNotes(existingNotes);
  }, [dateString, getSymptoms, getNotes]);

  const toggleSymptom = (symptomId: string) => {
    const newSymptoms = selectedSymptoms.includes(symptomId)
      ? selectedSymptoms.filter(id => id !== symptomId)
      : [...selectedSymptoms, symptomId];
    
    setSelectedSymptoms(newSymptoms);
    onSaveSymptoms(dateString, newSymptoms);
  };

  const handleNotesChange = (value: string) => {
    setNotes(value);
    onSaveNotes(dateString, value);
  };

  return (
    <div className="space-y-6">
      {/* Symptoms Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
            {UI_TEXT.symptoms}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllSymptoms(!showAllSymptoms)}
            className="text-xs"
          >
            {showAllSymptoms ? 'Zobraziť pre fázu' : 'Zobraziť všetky'}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {symptomsToShow.map(symptom => {
            const isSelected = selectedSymptoms.includes(symptom.id);
            const isPhaseSpecific = phaseSpecificSymptoms.some(s => s.id === symptom.id);
            
            return (
              <Badge
                key={symptom.id}
                variant={isSelected ? "default" : "outline"}
                className={`cursor-pointer symptom-glass transition-all ${
                  !isPhaseSpecific && !showAllSymptoms ? 'opacity-60' : ''
                }`}
                style={{
                  backgroundColor: isSelected ? 'hsl(var(--cycle-secondary-text))' : 'var(--symptom-glass-bg)',
                  color: isSelected ? 'white' : 'hsl(var(--cycle-body-text))',
                  borderColor: isSelected ? 'hsl(var(--cycle-secondary-text))' : 'var(--symptom-glass-border)'
                }}
                onClick={() => toggleSymptom(symptom.id)}
              >
                <span className="mr-1.5">{symptom.icon}</span>
                {symptom.name}
              </Badge>
            );
          })}
        </div>

        {!showAllSymptoms && phaseSpecificSymptoms.length === 0 && (
          <p className="text-sm mt-2" style={{ color: 'hsl(var(--cycle-body-text))' }}>
            Pre túto fázu nie sú definované špecifické príznaky.
          </p>
        )}
      </div>

      {/* Notes Section */}
      <div>
        <h3 className="font-semibold mb-3" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
          {UI_TEXT.notes}
        </h3>
        <Textarea
          placeholder="Ako sa dnes cítiš? Zapíš si poznámky..."
          value={notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          rows={4}
          className="symptom-glass resize-none"
          style={{
            backgroundColor: 'var(--symptom-glass-bg)',
            borderColor: 'var(--symptom-glass-border)'
          }}
        />
      </div>

      {/* Summary */}
      {(selectedSymptoms.length > 0 || notes.trim()) && (
        <div className="pt-4 border-t border-border">
          <div className="text-xs" style={{ color: 'hsl(var(--cycle-body-text))' }}>
            Uložené pre {formatDate(selectedDate)}
            {selectedSymptoms.length > 0 && (
              <span> • {selectedSymptoms.length} príznakov</span>
            )}
            {notes.trim() && <span> • Poznámky</span>}
          </div>
        </div>
      )}
    </div>
  );
};