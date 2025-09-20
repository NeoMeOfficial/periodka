import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { UI_TEXT } from './insights';
import { cn } from '@/lib/utils';

interface DatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: Date) => void;
  title: string;
  selectedDate?: Date;
  minDate?: Date;
  maxDate?: Date;
}

export const DatePickerModal: React.FC<DatePickerModalProps> = ({
  isOpen,
  onClose,
  onDateSelect,
  title,
  selectedDate,
  minDate,
  maxDate
}) => {
  const [date, setDate] = useState<Date | undefined>(selectedDate);

  const handleDateSelect = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
    }
  };

  const handleConfirm = () => {
    if (date) {
      onDateSelect(date);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle style={{ color: 'hsl(var(--cycle-secondary-text))' }}>
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            fromDate={minDate}
            toDate={maxDate}
            className={cn("w-full justify-center p-3 pointer-events-auto")}
            classNames={{
              day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
              day_today: "bg-accent text-accent-foreground",
            }}
            initialFocus
          />
          
          {date && (
            <div className="text-center text-sm" style={{ color: 'hsl(var(--cycle-body-text))' }}>
              Vybraný dátum: {format(date, 'd.M.yyyy')}
            </div>
          )}
          
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>
              {UI_TEXT.cancel}
            </Button>
            <Button 
              onClick={handleConfirm}
              disabled={!date}
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