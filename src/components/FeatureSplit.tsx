import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
interface FeatureSplitProps {
  title: string;
  description: string;
  bullets?: string[];
  linkText?: string;
  linkHref?: string;
  icon: LucideIcon;
  imageUrl?: string;
  reverse?: boolean;
  className?: string;
}
export const FeatureSplit: React.FC<FeatureSplitProps> = ({
  title,
  description,
  bullets,
  linkText,
  linkHref,
  icon: Icon,
  imageUrl,
  reverse = false,
  className = ""
}) => {
  return;
};