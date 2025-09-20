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
    <div className="relative w-full aspect-square max-w-[300px] mx-auto">
      <svg viewBox="0 25 200 150" className="w-full h-full -rotate-90">
        {/* Base ring track */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={radius} 
          fill="none" 
          stroke="hsl(var(--muted))" 
          strokeWidth="12" 
        />
        
        {/* Day dots around the circle */}
        {Array.from({ length: cycleLength }, (_, index) => {
          const day = index + 1;
          const phase = getPhaseForDay(day);
          const pos = getDotPosition(day);
          const isCurrentDay = day === currentDay;
          const isSelectedPhase = selectedPhase ? 
            day >= selectedPhase.start && day <= selectedPhase.end : false;
          
          return (
            <circle
              key={day}
              cx={pos.x}
              cy={pos.y}
              r={isCurrentDay ? 8 : 4}
              fill={isCurrentDay ? "hsl(var(--primary))" : getPhaseColor(phase.key)}
              stroke={isCurrentDay ? "white" : "none"}
              strokeWidth={isCurrentDay ? 2 : 0}
              className={`transition-all duration-200 ${
                isSelectedPhase ? 'opacity-100' : selectedPhase ? 'opacity-30' : 'opacity-70'
              }`}
            />
          );
        })}
        
        {/* Center circle - clickable area */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r="66" 
          fill="hsl(var(--chart-center))" 
          className="cursor-pointer"
          onClick={() => onPhaseSelect?.(currentPhase)}
        />
        
        {/* "DNES" label pointing to current day */}
        <text
          x={currentDayPos.x + (currentDayPos.x > centerX ? 15 : -15)}
          y={currentDayPos.y}
          fill="hsl(var(--cycle-secondary-text))"
          fontSize="10"
          fontWeight="600"
          textAnchor={currentDayPos.x > centerX ? "start" : "end"}
          className="rotate-90"
        >
          {UI_TEXT.today}
        </text>
      </svg>
      
      {/* Center content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center">
          <div 
            className="text-lg font-semibold mb-1"
            style={{ color: getPhaseColor(currentPhase.key) }}
          >
            {currentPhase.name}
          </div>
          <div className="text-2xl font-bold mb-1" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
            {currentDay}
          </div>
          <div className="text-xs" style={{ color: 'hsl(var(--cycle-body-text))' }}>
            {UI_TEXT.cycleDay}
          </div>
        </div>
      </div>
    </div>
  );
};