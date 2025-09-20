import { format, addDays, differenceInDays, startOfDay } from 'date-fns';
import { PhaseRange, PhaseKey } from './types';

export function getPhaseRanges(cycleLength: number, periodLength: number): PhaseRange[] {
  const follicularStart = periodLength + 1;
  const ovulationStart = Math.max(follicularStart, cycleLength - 16);
  const ovulationEnd = Math.min(ovulationStart + 2, cycleLength - 3);
  const lutealStart = ovulationEnd + 1;

  return [
    { key: "menstrual", name: "Menštruácia", start: 1, end: periodLength },
    { key: "follicular", name: "Folikulárna", start: follicularStart, end: ovulationStart - 1 },
    { key: "ovulation", name: "Ovulácia", start: ovulationStart, end: ovulationEnd },
    { key: "luteal", name: "Luteálna", start: lutealStart, end: cycleLength }
  ];
}

export function getCurrentCycleDay(lastPeriodStart: string | null, cycleLength: number): number {
  if (!lastPeriodStart) return 1;
  
  const startDate = new Date(lastPeriodStart);
  const today = startOfDay(new Date());
  const daysSinceStart = differenceInDays(today, startDate);
  
  return ((daysSinceStart % cycleLength) + cycleLength) % cycleLength + 1;
}

export function getCurrentPhase(currentDay: number, phaseRanges: PhaseRange[]): PhaseRange {
  for (const phase of phaseRanges) {
    if (currentDay >= phase.start && currentDay <= phase.end) {
      return phase;
    }
  }
  return phaseRanges[0]; // fallback to menstrual
}

export function getExpectedPeriodDate(lastPeriodStart: string | null, cycleLength: number): Date | null {
  if (!lastPeriodStart) return null;
  
  const startDate = new Date(lastPeriodStart);
  return addDays(startDate, cycleLength);
}

export function getDaysUntilPeriod(lastPeriodStart: string | null, cycleLength: number): number | null {
  const expectedDate = getExpectedPeriodDate(lastPeriodStart, cycleLength);
  if (!expectedDate) return null;
  
  const today = startOfDay(new Date());
  return differenceInDays(expectedDate, today);
}

export function getPhaseColor(phase: PhaseKey): string {
  const colors = {
    menstrual: 'hsl(var(--destructive))',
    follicular: 'hsl(var(--mint))',
    ovulation: 'hsl(var(--lavender))',
    luteal: 'hsl(var(--peach))'
  };
  return colors[phase];
}

export function getEnergyColor(energy: number): string {
  if (energy < 30) return 'hsl(var(--destructive))';
  if (energy < 60) return 'hsl(var(--peach))';
  if (energy < 80) return 'hsl(var(--mint))';
  return 'hsl(var(--primary))';
}

export function formatDate(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

export function formatDisplayDate(date: Date): string {
  return format(date, 'd.M.yyyy');
}