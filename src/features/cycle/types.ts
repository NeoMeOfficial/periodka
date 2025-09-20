export type PhaseKey = "menstrual" | "follicular" | "ovulation" | "luteal";

export interface PhaseRange {
  key: PhaseKey;
  name: string;
  start: number; // 1-indexed
  end: number;   // 1-indexed
}

export interface CustomSettings {
  notifications: boolean;
  symptomTracking: boolean;
  moodTracking: boolean;
  notes: string;
}

export interface CycleData {
  lastPeriodStart: string | null; // ISO YYYY-MM-DD
  cycleLength: number; // default 28
  periodLength: number; // default 5
  customSettings: CustomSettings;
  history?: PeriodLog[];
}

export interface PeriodLog {
  startDate: string;
  endDate?: string;
  flow?: string;
  symptoms?: string[];
  notes?: string;
}

export interface DerivedState {
  today: Date;
  minDate: Date; // 90 days before today
  maxDate: Date; // today
  currentDay: number; // 1..cycleLength
  phaseRanges: PhaseRange[];
  currentPhase: PhaseRange;
  isFirstRun: boolean;
}

export interface Symptom {
  id: string;
  name: string;
  icon: string;
  phases: PhaseKey[];
}

export interface EnergyMoodData {
  energy: number; // 0-100
  mood: number; // 1-5
}