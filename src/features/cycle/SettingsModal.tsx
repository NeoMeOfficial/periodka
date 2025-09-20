import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { CycleData, CustomSettings } from './types';
import { UI_TEXT } from './insights';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  cycleData: CycleData;
  onUpdateCycleSettings: (settings: { cycleLength?: number; periodLength?: number }) => void;
  onUpdateSettings: (settings: Partial<CustomSettings>) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  cycleData,
  onUpdateCycleSettings,
  onUpdateSettings
}) => {
  const [cycleLength, setCycleLength] = useState(cycleData.cycleLength);
  const [periodLength, setPeriodLength] = useState(cycleData.periodLength);
  const [settings, setSettings] = useState(cycleData.customSettings);

  const handleSave = () => {
    onUpdateCycleSettings({ cycleLength, periodLength });
    onUpdateSettings(settings);
    onClose();
  };

  const handleSettingChange = (key: keyof CustomSettings, value: boolean | string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
            {UI_TEXT.settings}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Cycle Settings */}
          <div className="space-y-4">
            <h3 className="font-medium" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
              Nastavenia cyklu
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="cycle-length">{UI_TEXT.cycleLength} (dni)</Label>
              <div className="px-3">
                <Slider
                  id="cycle-length"
                  min={21}
                  max={35}
                  step={1}
                  value={[cycleLength]}
                  onValueChange={(value) => setCycleLength(value[0])}
                  className="w-full"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'hsl(var(--cycle-body-text))' }}>
                  <span>21</span>
                  <span className="font-medium">{cycleLength} dní</span>
                  <span>35</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="period-length">{UI_TEXT.periodLength} (dni)</Label>
              <div className="px-3">
                <Slider
                  id="period-length"
                  min={3}
                  max={8}
                  step={1}
                  value={[periodLength]}
                  onValueChange={(value) => setPeriodLength(value[0])}
                  className="w-full"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'hsl(var(--cycle-body-text))' }}>
                  <span>3</span>
                  <span className="font-medium">{periodLength} dní</span>
                  <span>8</span>
                </div>
              </div>
            </div>
          </div>

          {/* App Settings */}
          <div className="space-y-4">
            <h3 className="font-medium" style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
              Nastavenia aplikácie
            </h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="text-sm">
                Pripomienky
              </Label>
              <Switch
                id="notifications"
                checked={settings.notifications}
                onCheckedChange={(checked) => handleSettingChange('notifications', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="symptom-tracking" className="text-sm">
                Sledovanie príznakov
              </Label>
              <Switch
                id="symptom-tracking"
                checked={settings.symptomTracking}
                onCheckedChange={(checked) => handleSettingChange('symptomTracking', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="mood-tracking" className="text-sm">
                Sledovanie nálady
              </Label>
              <Switch
                id="mood-tracking"
                checked={settings.moodTracking}
                onCheckedChange={(checked) => handleSettingChange('moodTracking', checked)}
              />
            </div>
          </div>
          
          <div className="flex gap-2 justify-end pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              {UI_TEXT.cancel}
            </Button>
            <Button 
              onClick={handleSave}
              style={{ backgroundColor: 'hsl(var(--cycle-secondary-text))' }}
            >
              {UI_TEXT.save}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};