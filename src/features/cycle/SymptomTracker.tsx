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
      <div className="symptom-glass rounded-xl p-4" style={{ backgroundColor: '#FBF8F9' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-base font-medium" style={{ color: '#955F6A' }}>Príznaky</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllSymptoms(!showAllSymptoms)}
            className="text-xs"
            style={{ color: '#955F6A' }}
          >
            {showAllSymptoms ? 'Menej' : 'Viac'}
          </Button>
        </div>
        <p className="text-sm mb-3" style={{ color: '#955F6A' }}>
          Zaznamenajte príznaky pre lekársku konzultáciu
        </p>
        
        <div className="flex flex-wrap gap-2">
          {symptomsToShow.map((symptom) => (
            <Badge
              key={symptom.id}
              className={`cursor-pointer select-none text-sm py-1.5 px-3 transition-all duration-200 symptom-glass ${
                selectedSymptoms.includes(symptom.id) 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'hover:bg-muted'
              }`}
              style={selectedSymptoms.includes(symptom.id) ? {} : {
                backgroundColor: '#FBF8F9',
                color: '#955F6A'
              }}
              onClick={() => toggleSymptom(symptom.id)}
            >
              <span className="mr-1.5">{symptom.icon}</span>
              {symptom.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="symptom-glass rounded-xl p-4" style={{ backgroundColor: '#FBF8F9' }}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium" style={{ color: '#955F6A' }}>Poznámky</span>
          </div>
          <p className="text-sm mb-3" style={{ color: '#955F6A' }}>
            Zaznamenajte ďalšie informácie o vašom dni
          </p>
          <Textarea
            value={notes}
            onChange={(e) => handleNotesChange(e.target.value)}
            placeholder="Napíšte poznámky o vašom dni..."
            className="min-h-[80px] resize-none"
            style={{
              backgroundColor: '#FBF8F9',
              borderColor: '#E5D4D7',
              color: '#955F6A'
            }}
          />
        </div>
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