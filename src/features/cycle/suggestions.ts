import { PhaseKey } from './types';

export const SYMPTOMS = [
  // Menstrual phase symptoms
  { id: 'cramps', name: 'Kŕče', icon: '💢', phases: ['menstrual'] as PhaseKey[] },
  { id: 'heavy_flow', name: 'Silné krvácanie', icon: '🩸', phases: ['menstrual'] as PhaseKey[] },
  { id: 'fatigue', name: 'Únava', icon: '😴', phases: ['menstrual'] as PhaseKey[] },
  { id: 'back_pain', name: 'Bolesť chrbta', icon: '🤕', phases: ['menstrual'] as PhaseKey[] },
  { id: 'headache', name: 'Bolesti hlavy', icon: '🤯', phases: ['menstrual'] as PhaseKey[] },
  
  // Follicular phase symptoms  
  { id: 'energy_boost', name: 'Energia', icon: '⚡', phases: ['follicular'] as PhaseKey[] },
  { id: 'positive_mood', name: 'Dobrá nálada', icon: '😊', phases: ['follicular'] as PhaseKey[] },
  { id: 'clear_skin', name: 'Čistá pleť', icon: '✨', phases: ['follicular'] as PhaseKey[] },
  { id: 'motivation', name: 'Motivácia', icon: '🎯', phases: ['follicular'] as PhaseKey[] },
  
  // Ovulation phase symptoms
  { id: 'increased_libido', name: 'Zvýšené libido', icon: '💖', phases: ['ovulation'] as PhaseKey[] },
  { id: 'cervical_mucus', name: 'Hlieny', icon: '💧', phases: ['ovulation'] as PhaseKey[] },
  { id: 'mild_cramping', name: 'Ľahké kŕče', icon: '🤏', phases: ['ovulation'] as PhaseKey[] },
  { id: 'breast_tenderness', name: 'Citlivé prsia', icon: '🤱', phases: ['ovulation'] as PhaseKey[] },
  { id: 'high_energy', name: 'Vysoká energia', icon: '🔥', phases: ['ovulation'] as PhaseKey[] },
  
  // Luteal phase symptoms
  { id: 'bloating', name: 'Nadúvanie', icon: '🎈', phases: ['luteal'] as PhaseKey[] },
  { id: 'mood_swings', name: 'Zmeny nálad', icon: '🎭', phases: ['luteal'] as PhaseKey[] },
  { id: 'food_cravings', name: 'Chute na jedlo', icon: '🍫', phases: ['luteal'] as PhaseKey[] },
  { id: 'acne', name: 'Akné', icon: '😖', phases: ['luteal'] as PhaseKey[] },
  { id: 'irritability', name: 'Podráždenosť', icon: '😤', phases: ['luteal'] as PhaseKey[] },
  { id: 'anxiety', name: 'Úzkosť', icon: '😰', phases: ['luteal'] as PhaseKey[] },
  
  // General symptoms (can occur in any phase)
  { id: 'nausea', name: 'Nevoľnosť', icon: '🤢', phases: ['menstrual', 'luteal'] as PhaseKey[] },
  { id: 'dizziness', name: 'Závraty', icon: '😵‍💫', phases: ['menstrual', 'luteal'] as PhaseKey[] },
  { id: 'tender_breasts', name: 'Bolesť pŕs', icon: '🤲', phases: ['luteal', 'menstrual'] as PhaseKey[] },
  { id: 'constipation', name: 'Zápcha', icon: '🚫', phases: ['luteal'] as PhaseKey[] },
  { id: 'hot_flashes', name: 'Návaly tepla', icon: '🔥', phases: ['menstrual', 'luteal'] as PhaseKey[] }
];

export function getSymptomsForPhase(phase: PhaseKey) {
  return SYMPTOMS.filter(symptom => 
    symptom.phases.includes(phase) || symptom.phases.length === 0
  );
}

export function getAllSymptoms() {
  return SYMPTOMS;
}

export const MOOD_LABELS = {
  1: 'Veľmi zlá',
  2: 'Zlá', 
  3: 'Neutrálna',
  4: 'Dobrá',
  5: 'Výborná'
};

export const ENERGY_LABELS = {
  0: 'Žiadna energia',
  25: 'Nízka energia', 
  50: 'Stredná energia',
  75: 'Vysoká energia',
  100: 'Maximálna energia'
};