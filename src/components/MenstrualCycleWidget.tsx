import { MenstrualCycleTracker } from '@/features/cycle/MenstrualCycleTracker';

export function MenstrualCycleWidget({ userAccessCode }: { userAccessCode?: string }) {
  return (
    <div className="w-full h-full p-4 bg-background rounded-[2.2rem] overflow-auto">
      <MenstrualCycleTracker />
    </div>
  );
}