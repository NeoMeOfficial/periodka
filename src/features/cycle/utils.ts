import { format, differenceInDays, addDays, subDays, isBefore, isAfter } from 'date-fns';
import { PhaseRange, PhaseKey, DerivedState, CycleData } from './types';

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function dayFractionInPhase(day: number, phase: PhaseRange): number {
  const phaseDay = day - phase.start + 1;
  const phaseLength = phase.end - phase.start + 1;
  return Math.max(0, Math.min(1, (phaseDay - 1) / Math.max(1, phaseLength - 1)));
}

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

export function getPhaseByDay(day: number, ranges: PhaseRange[]): PhaseRange {
  return ranges.find(range => day >= range.start && day <= range.end) || ranges[0];
}

export function getCurrentCycleDay(lastPeriodStart: string | null, today: Date): number {
  if (!lastPeriodStart) return 1;
  const startDate = new Date(lastPeriodStart);
  const daysSince = differenceInDays(today, startDate);
  return ((daysSince % 28) + 28) % 28 + 1; // Handle negative values
}

export function getDerivedState(cycleData: CycleData): DerivedState {
  const today = new Date();
  const minDate = subDays(today, 90);
  const maxDate = today;

  const currentDay = cycleData.lastPeriodStart
    ? getCurrentCycleDay(cycleData.lastPeriodStart, today)
    : 1;

  const phaseRanges = getPhaseRanges(cycleData.cycleLength, cycleData.periodLength);
  const currentPhase = getPhaseByDay(currentDay, phaseRanges);

  const isFirstRun = !cycleData.lastPeriodStart;

  return {
    today,
    minDate,
    maxDate,
    currentDay,
    phaseRanges,
    currentPhase,
    isFirstRun
  };
}

export function getNextPeriodDate(lastPeriodStart: string, cycleLength: number): Date {
  const startDate = new Date(lastPeriodStart);
  return addDays(startDate, cycleLength);
}

export function isPeriodDate(date: Date, lastPeriodStart: string, cycleLength: number, periodLength: number): boolean {
  if (!lastPeriodStart) return false;

  const startDate = new Date(lastPeriodStart);
  const daysSince = differenceInDays(date, startDate);

  // Handle past periods (negative days)
  if (daysSince < 0) {
    const daysSinceAbs = Math.abs(daysSince);
    const cyclesSince = Math.floor(daysSinceAbs / cycleLength);
    const remainingDays = daysSinceAbs % cycleLength;
    const daysFromPreviousPeriodStart = cycleLength - remainingDays;
    return daysFromPreviousPeriodStart < periodLength;
  }

  // Handle current and future periods
  const cyclesSince = Math.floor(daysSince / cycleLength);
  const dayInCurrentCycle = daysSince % cycleLength;

  // Check if it's within period length from any cycle start
  return dayInCurrentCycle < periodLength;
}

export function validateDate(date: Date, minDate: Date, maxDate: Date): boolean {
  return !isBefore(date, minDate) && !isAfter(date, maxDate);
}

export function formatDateSk(date: Date): string {
  return format(date, 'd.M.yyyy');
}

export function isFertilityDate(date: Date, lastPeriodStart: string, cycleLength: number): boolean {
  if (!lastPeriodStart) return false;

  const startDate = new Date(lastPeriodStart);
  const daysSince = differenceInDays(date, startDate);

  // Handle past periods (negative days)
  if (daysSince < 0) {
    const daysSinceAbs = Math.abs(daysSince);
    const cyclesSince = Math.floor(daysSinceAbs / cycleLength);
    const remainingDays = daysSinceAbs % cycleLength;
    const dayInCurrentCycle = cycleLength - remainingDays;

    // Fertility window: typically 6 days (5 days before ovulation + ovulation day)
    const ovulationDay = cycleLength - 14; // Typically day 14 in a 28-day cycle
    const fertilityStart = ovulationDay - 5;
    const fertilityEnd = ovulationDay + 1;

    return dayInCurrentCycle >= fertilityStart && dayInCurrentCycle <= fertilityEnd;
  }

  // Handle current and future periods
  const dayInCurrentCycle = (daysSince % cycleLength) + 1;

  // Fertility window: typically 6 days (5 days before ovulation + ovulation day)
  const ovulationDay = cycleLength - 14; // Typically day 14 in a 28-day cycle
  const fertilityStart = ovulationDay - 5;
  const fertilityEnd = ovulationDay + 1;

  return dayInCurrentCycle >= fertilityStart && dayInCurrentCycle <= fertilityEnd;
}

export function isOvulationDate(date: Date, lastPeriodStart: string, cycleLength: number): boolean {
  if (!lastPeriodStart) return false;

  const startDate = new Date(lastPeriodStart);
  const daysSince = differenceInDays(date, startDate);

  // Handle past periods (negative days)
  if (daysSince < 0) {
    const daysSinceAbs = Math.abs(daysSince);
    const cyclesSince = Math.floor(daysSinceAbs / cycleLength);
    const remainingDays = daysSinceAbs % cycleLength;
    const dayInCurrentCycle = cycleLength - remainingDays;

    // Ovulation typically occurs around day 14 (14 days before next period)
    const ovulationDay = cycleLength - 14;
    const ovulationStart = ovulationDay - 1;
    const ovulationEnd = ovulationDay + 1;

    return dayInCurrentCycle >= ovulationStart && dayInCurrentCycle <= ovulationEnd;
  }

  // Handle current and future periods
  const dayInCurrentCycle = (daysSince % cycleLength) + 1;

  // Ovulation typically occurs around day 14 (14 days before next period)
  const ovulationDay = cycleLength - 14;
  const ovulationStart = ovulationDay - 1;
  const ovulationEnd = ovulationDay + 1;

  return dayInCurrentCycle >= ovulationStart && dayInCurrentCycle <= ovulationEnd;
}

// Keep existing functions for backward compatibility
export function getCurrentPhase(currentDay: number, phaseRanges: PhaseRange[]): PhaseRange {
  return getPhaseByDay(currentDay, phaseRanges);
}

export function getExpectedPeriodDate(lastPeriodStart: string | null, cycleLength: number): Date | null {
  if (!lastPeriodStart) return null;
  return getNextPeriodDate(lastPeriodStart, cycleLength);
}

export function getDaysUntilPeriod(lastPeriodStart: string | null, cycleLength: number): number | null {
  const expectedDate = getExpectedPeriodDate(lastPeriodStart, cycleLength);
  if (!expectedDate) return null;
  
  const today = new Date();
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