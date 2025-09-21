import { useState, useEffect, useCallback } from 'react';
import { CycleData, DerivedState, CustomSettings } from './types';
import { getPhaseRanges, getCurrentCycleDay, getCurrentPhase, formatDate } from './utils';

const defaultCycleData: CycleData = {
  lastPeriodStart: null,
  cycleLength: 28,
  periodLength: 5,
  customSettings: {
    notifications: true,
    symptomTracking: false,
    moodTracking: true,
    notes: ''
  }
};

export function useCycleData(accessCode?: string) {
  const [cycleData, setCycleData] = useState<CycleData>(defaultCycleData);
  const [loading, setLoading] = useState(true);

  const storageKey = accessCode ? `cycle_data_${accessCode}` : 'cycle_data';

  // Load data from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        setCycleData({ ...defaultCycleData, ...parsed });
      }
    } catch (error) {
      console.error('Error loading cycle data:', error);
    } finally {
      setLoading(false);
    }
  }, [storageKey]);

  // Save data to localStorage
  const saveCycleData = useCallback((data: Partial<CycleData>) => {
    const newData = { ...cycleData, ...data };
    setCycleData(newData);
    try {
      localStorage.setItem(storageKey, JSON.stringify(newData));
    } catch (error) {
      console.error('Error saving cycle data:', error);
    }
  }, [cycleData, storageKey]);

  // Calculate derived state
  const derivedState: DerivedState = {
    today: new Date(),
    minDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
    maxDate: new Date(),
    currentDay: getCurrentCycleDay(cycleData.lastPeriodStart, new Date()),
    phaseRanges: getPhaseRanges(cycleData.cycleLength, cycleData.periodLength),
    currentPhase: getCurrentPhase(
      getCurrentCycleDay(cycleData.lastPeriodStart, new Date()),
      getPhaseRanges(cycleData.cycleLength, cycleData.periodLength)
    ),
    isFirstRun: !cycleData.lastPeriodStart
  };

  // Symptom and notes management
  const getSymptomKey = (date: string) => {
    return accessCode ? `symptoms_${accessCode}_${date}` : `temp_symptoms_${date}`;
  };

  const getNotesKey = (date: string) => {
    return accessCode ? `notes_${accessCode}_${date}` : `temp_notes_${date}`;
  };

  const saveSymptoms = useCallback((date: string, symptoms: string[]) => {
    const key = getSymptomKey(date);
    try {
      localStorage.setItem(key, JSON.stringify(symptoms));
    } catch (error) {
      console.error('Error saving symptoms:', error);
    }
  }, [accessCode]);

  const getSymptoms = useCallback((date: string): string[] => {
    const key = getSymptomKey(date);
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading symptoms:', error);
      return [];
    }
  }, [accessCode]);

  const saveNotes = useCallback((date: string, notes: string) => {
    const key = getNotesKey(date);
    try {
      localStorage.setItem(key, notes);
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  }, [accessCode]);

  const getNotes = useCallback((date: string): string => {
    const key = getNotesKey(date);
    try {
      return localStorage.getItem(key) || '';
    } catch (error) {
      console.error('Error loading notes:', error);
      return '';
    }
  }, [accessCode]);

  // Period management
  const startPeriod = useCallback((date?: Date) => {
    const startDate = date || new Date();
    saveCycleData({
      lastPeriodStart: formatDate(startDate)
    });
  }, [saveCycleData]);

  const updateSettings = useCallback((settings: Partial<CustomSettings>) => {
    saveCycleData({
      customSettings: { ...cycleData.customSettings, ...settings }
    });
  }, [saveCycleData, cycleData.customSettings]);

  const updateCycleSettings = useCallback((settings: { cycleLength?: number; periodLength?: number }) => {
    saveCycleData(settings);
  }, [saveCycleData]);

  return {
    cycleData,
    derivedState,
    loading,
    saveCycleData,
    startPeriod,
    updateSettings,
    updateCycleSettings,
    saveSymptoms,
    getSymptoms,
    saveNotes,
    getNotes
  };
}