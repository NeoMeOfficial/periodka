import React from 'react';
import { Card } from '@/components/ui/card';

const phases = [
  { name: 'Menštruácia', active: true, color: 'bg-primary' },
  { name: 'Folikulárna', active: false, color: 'bg-primary/30' },
  { name: 'Plodná', active: false, color: 'bg-accent/30' },
  { name: 'Ovulácia', active: false, color: 'bg-secondary/30' },
  { name: 'Luteálna', active: false, color: 'bg-muted/30' },
];

export const CycleTimeline = () => {
  return (
    <Card className="glass p-6 rounded-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold mb-2">Deň 1 z vášho aktuálneho cyklu</h3>
        <p className="text-muted-foreground">Sledovanie fáz menštruačného cyklu</p>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        {phases.map((phase, index) => (
          <div key={phase.name} className="flex flex-col items-center flex-1">
            <div className={`w-4 h-4 rounded-full ${phase.active ? phase.color : 'bg-muted/20'} mb-2`} />
            <span className={`text-xs text-center ${phase.active ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              {phase.name}
            </span>
            {index < phases.length - 1 && (
              <div className="absolute h-0.5 bg-muted/20 w-full mt-2 -z-10" style={{ left: `${(100 / phases.length) * (index + 0.5)}%` }} />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};