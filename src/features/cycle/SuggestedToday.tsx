import React from 'react';
import { PhaseRange } from './types';
import { PHASE_INSIGHTS } from './insights';
import { getEnergyColor } from './utils';
import { UI_TEXT } from './insights';

interface SuggestedTodayProps {
  currentPhase: PhaseRange;
}

export const SuggestedToday: React.FC<SuggestedTodayProps> = ({ currentPhase }) => {
  const insights = PHASE_INSIGHTS[currentPhase.key];

  return (
    <div className="symptom-glass rounded-xl p-4 space-y-3" style={{ backgroundColor: '#FBF8F9' }}>
      <div className="flex items-center justify-between">
        <span className="text-base font-medium" style={{ color: '#955F6A' }}>Energia</span>
        <div className="flex items-center gap-2">
          <div className="relative h-2 w-16 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full rounded-full transition-all duration-500"
              style={{
                width: `${insights.energy}%`,
                background: `linear-gradient(90deg, ${getEnergyColor(insights.energy)}, hsl(var(--peach)))`
              }}
            />
          </div>
          <span className="text-xs text-muted-foreground w-8">{insights.energy}%</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-base font-medium" style={{ color: '#955F6A' }}>Nálada</span>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className={`w-2 h-2 rounded-full transition-all ${
                  star <= Math.round(insights.mood) 
                    ? 'bg-yellow-400' 
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-xl">😊</span>
        </div>
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

        <div>
          <h4 className="text-sm font-medium mb-2" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
            {UI_TEXT.whatToDo}
          </h4>
          <ul className="space-y-1">
            {insights.suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm flex items-start gap-2" style={{ color: 'hsl(var(--cycle-body-text))' }}>
                <span className="text-xs mt-0.5">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};