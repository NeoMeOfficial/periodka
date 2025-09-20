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
    <div className="space-y-4">
      {/* Energy & Mood Display */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium" style={{ color: 'hsl(var(--cycle-body-text))' }}>
            {UI_TEXT.energy}
          </span>
          <div className="relative h-2 w-16 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full rounded-full transition-all duration-500"
              style={{
                width: `${insights.energy}%`,
                background: `linear-gradient(90deg, ${getEnergyColor(insights.energy)}, hsl(var(--peach)))`
              }}
            />
          </div>
          <span className="text-xs" style={{ color: 'hsl(var(--cycle-body-text))' }}>
            {insights.energy}%
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium" style={{ color: 'hsl(var(--cycle-body-text))' }}>
            {UI_TEXT.mood}
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(star => (
              <div 
                key={star}
                className={`w-2 h-2 rounded-full transition-colors ${
                  star <= Math.round(insights.mood) ? 'bg-yellow-400' : 'bg-muted'
                }`} 
              />
            ))}
          </div>
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