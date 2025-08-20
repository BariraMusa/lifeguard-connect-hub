import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  variant?: 'default' | 'success' | 'warning' | 'info' | 'primary';
  onClick?: () => void;
}

const KPICard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  variant = 'default',
  onClick 
}: KPICardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-gradient-success hover:shadow-[0_8px_30px_rgb(34,197,94,0.2)]';
      case 'warning':
        return 'bg-gradient-to-br from-warning to-warning/80 hover:shadow-[0_8px_30px_rgb(245,158,11,0.2)]';
      case 'info':
        return 'bg-gradient-info hover:shadow-[0_8px_30px_rgb(59,130,246,0.2)]';
      case 'primary':
        return 'bg-gradient-primary hover:shadow-glow';
      default:
        return 'bg-gradient-card hover:shadow-card-hover';
    }
  };

  const getTextColor = () => {
    if (variant === 'default') return 'text-card-foreground';
    return 'text-white';
  };

  const getChangeColor = () => {
    if (variant !== 'default') return 'text-white/80';
    
    switch (changeType) {
      case 'positive':
        return 'text-success';
      case 'negative':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 border-0 overflow-hidden group",
        getVariantStyles(),
        onClick && "hover:scale-105"
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <p className={cn(
              "text-sm font-medium opacity-90",
              variant === 'default' ? 'text-muted-foreground' : 'text-white/80'
            )}>
              {title}
            </p>
            
            <div className="space-y-1">
              <p className={cn(
                "text-3xl font-bold tracking-tight",
                getTextColor()
              )}>
                {typeof value === 'number' ? value.toLocaleString() : value}
              </p>
              
              <p className={cn(
                "text-sm font-medium",
                getChangeColor()
              )}>
                {change}
              </p>
            </div>
          </div>
          
          <div className={cn(
            "p-3 rounded-xl transition-all duration-300 group-hover:scale-110",
            variant === 'default' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-white/20 text-white'
          )}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        
        {/* Subtle animation indicator */}
        <div className={cn(
          "mt-4 h-1 rounded-full transition-all duration-500 opacity-50",
          variant === 'success' && 'bg-white',
          variant === 'warning' && 'bg-white',
          variant === 'info' && 'bg-white',
          variant === 'primary' && 'bg-white',
          variant === 'default' && 'bg-primary'
        )} />
      </CardContent>
    </Card>
  );
};

export default KPICard;