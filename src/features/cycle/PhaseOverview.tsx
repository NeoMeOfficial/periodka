import React from 'react';
import { PhaseRange } from './types';
import { PHASE_INSIGHTS, UI_TEXT } from './insights';
import { getPhaseColor } from './utils';

interface PhaseOverviewProps {
  selectedPhase: PhaseRange;
  currentPhase: PhaseRange;
}

export const PhaseOverview: React.FC<PhaseOverviewProps> = ({ selectedPhase, currentPhase }) => {
  const insights = PHASE_INSIGHTS[selectedPhase.key];
  const isCurrentPhase = selectedPhase.key === currentPhase.key;

  return (
    <div className="space-y-4">
      {/* Phase Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: getPhaseColor(selectedPhase.key) }}
          />
          <h2 className="text-xl font-bold" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
            {selectedPhase.name}
          </h2>
          {isCurrentPhase && (
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
              aktuálne
            </span>
          )}
        </div>
        <p className="text-sm" style={{ color: 'hsl(var(--cycle-body-text))' }}>
          Dni {selectedPhase.start} - {selectedPhase.end} cyklu
        </p>
      </div>

      {/* Phase Insights */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold mb-2" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
            {insights.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--cycle-body-text))' }}>
            {insights.description}
          </p>
        </div>

        {/* Energy & Mood for this phase */}
        <div className="grid grid-cols-2 gap-4 p-3 rounded-xl" style={{ backgroundColor: 'var(--symptom-glass-bg)' }}>
          <div className="text-center">
            <div className="text-xs mb-1" style={{ color: 'hsl(var(--cycle-body-text))' }}>
              {UI_TEXT.energy}
            </div>
            <div className="text-lg font-bold" style={{ color: getPhaseColor(selectedPhase.key) }}>
              {insights.energy}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs mb-1" style={{ color: 'hsl(var(--cycle-body-text))' }}>
              {UI_TEXT.mood}
            </div>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map(star => (
                <div 
                  key={star}
                  className={`w-2 h-2 rounded-full ${
                    star <= Math.round(insights.mood) ? 'bg-yellow-400' : 'bg-muted'
                  }`} 
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
            Odporúčania pre túto fázu
          </h4>
          <ul className="space-y-1">
            {insights.suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm flex items-start gap-2" style={{ color: 'hsl(var(--cycle-body-text))' }}>
                <span className="text-xs mt-0.5" style={{ color: getPhaseColor(selectedPhase.key) }}>•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};