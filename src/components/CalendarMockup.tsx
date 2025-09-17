import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const CalendarMockup = () => {
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const periodDays = [1, 2, 3, 4, 5];
  const predictedDays = [28, 29, 30];

  return (
    <Card className="glass p-6 rounded-2xl">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">September 2025</h3>
        <div className="space-y-2">
          <p className="text-lg">Ďalšia menštruácia: <span className="font-semibold">15. október 2025</span></p>
          <p className="text-muted-foreground">Priemerná dĺžka cyklu: 28 dní</p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map(day => {
          const isPeriodDay = periodDays.includes(day);
          const isPredictedDay = predictedDays.includes(day);
          
          return (
            <div
              key={day}
              className={`
                aspect-square flex items-center justify-center text-sm rounded-lg
                ${isPeriodDay ? 'bg-primary text-primary-foreground font-semibold' : ''}
                ${isPredictedDay ? 'bg-primary/20 text-primary font-medium' : ''}
                ${!isPeriodDay && !isPredictedDay ? 'hover:bg-muted/50' : ''}
              `}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full" />
          <span className="text-xs text-muted-foreground">Menštruácia</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary/20 rounded-full" />
          <span className="text-xs text-muted-foreground">Predpoveď</span>
        </div>
      </div>
    </Card>
  );
};