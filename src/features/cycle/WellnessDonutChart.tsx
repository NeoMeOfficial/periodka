import React from 'react';
import { PhaseRange } from './types';
import { getPhaseColor } from './utils';
import { UI_TEXT } from './insights';

interface WellnessDonutChartProps {
  cycleLength: number;
  currentDay: number;
  phaseRanges: PhaseRange[];
  currentPhase: PhaseRange;
  selectedPhase?: PhaseRange;
  onPhaseSelect?: (phase: PhaseRange) => void;
}

export const WellnessDonutChart: React.FC<WellnessDonutChartProps> = ({
  cycleLength,
  currentDay,
  phaseRanges,
  currentPhase,
  selectedPhase,
  onPhaseSelect
}) => {
  const radius = 74;
  const centerX = 100;
  const centerY = 100;

  const getDotPosition = (day: number) => {
    const angle = ((day - 1) / cycleLength) * 360 - 90; // Start from top
    const angleRad = (angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);
    return { x, y, angle };
  };

  const getCurrentDayPosition = () => {
    return getDotPosition(currentDay);
  };

  const getPhaseForDay = (day: number) => {
    return phaseRanges.find(phase => day >= phase.start && day <= phase.end) || phaseRanges[0];
  };

  const currentDayPos = getCurrentDayPosition();

  return (
    <div className="relative w-full max-w-[300px] h-[250px] mx-auto">
      <svg viewBox="0 25 200 150" className="w-full h-full -rotate-90">
        {/* Base ring track */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={radius} 
          fill="none" 
          stroke="hsl(var(--muted))" 
          strokeWidth="12" 
          strokeLinecap="round"
          opacity="0.3"
        />
        
        {/* Day dots around the circle */}
        {Array.from({ length: cycleLength }, (_, index) => {
          const day = index + 1;
          const phase = getPhaseForDay(day);
          const pos = getDotPosition(day);
          const isCurrentDay = day === currentDay;
          const isSelectedPhase = selectedPhase ? 
            day >= selectedPhase.start && day <= selectedPhase.end : false;
          const shouldHighlight = isSelectedPhase || (!selectedPhase && isCurrentDay);
          const phaseColor = getPhaseColor(phase.key);
          
          return (
            <g key={day}>
              {isCurrentDay && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="10"
                  fill="hsl(var(--peach) / 0.35)"
                  stroke="hsl(var(--peach) / 0.55)"
                  strokeWidth="1"
                  style={{
                    filter: 'drop-shadow(0 0 8px hsl(var(--peach) / 0.45))'
                  }}
                />
              )}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isCurrentDay ? "5" : (shouldHighlight ? "4" : "3")}
                fill={phaseColor}
                opacity={shouldHighlight ? 1 : 0.7}
                className="transition-all duration-300"
                stroke={isCurrentDay ? "hsl(var(--background))" : (shouldHighlight ? phaseColor : "none")}
                strokeWidth={isCurrentDay ? "1" : (shouldHighlight ? "1" : "0")}
              />
            </g>
          );
        })}
        
        {/* Center circle - clickable area */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r="66" 
          fill="hsl(var(--chart-center))" 
          className="transition-colors duration-300 cursor-pointer hover:fill-[hsl(var(--chart-center)_/_0.9)]"
          onClick={() => onPhaseSelect?.(currentPhase)}
        />
        
        {/* "DNES" label pointing to current day */}
        <text
          x={100 + 100 * Math.cos(((((currentDay - 1) / cycleLength) * 360 - 90) * Math.PI) / 180)}
          y={100 + 100 * Math.sin(((((currentDay - 1) / cycleLength) * 360 - 90) * Math.PI) / 180)}
          fontSize="14"
          fill="hsl(var(--foreground))"
          textAnchor="middle"
          dominantBaseline="middle"
          fontWeight="700"
          className="rotate-90 transform-origin-center pointer-events-none"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
        >
          Dnes
        </text>
      </svg>
      
      {/* Center content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-sm text-center mb-1 font-medium" style={{ color: 'hsl(var(--foreground))' }}>
          {selectedPhase ? (phaseRanges.find(p => p.key === selectedPhase.key)?.name || currentPhase.name) : currentPhase.name}
        </div>
        <div className="text-4xl font-bold" style={{ color: 'hsl(var(--foreground))' }}>
          {currentDay}
        </div>
        <div className="text-sm text-center font-medium" style={{ color: 'hsl(var(--muted-foreground))' }}>
          deň
        </div>
      </div>
    </div>
  );
};