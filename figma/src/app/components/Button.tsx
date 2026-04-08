import React from 'react';
import { cn } from '../utils/cn'; // I should create a cn utility

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[#9d4edd] text-white hover:bg-[#7b2cbf] shadow-[0_0_15px_rgba(157,78,221,0.3)] hover:shadow-[0_0_20px_rgba(157,78,221,0.5)] border border-transparent",
      secondary: "bg-[#141414] text-white border border-[#2a2a2a] hover:bg-[#1f1f1f] hover:border-[#3a3a3a]",
      ghost: "text-[#a0a0a0] hover:text-white hover:bg-[#141414] bg-transparent",
      icon: "p-3 rounded-full bg-[#141414] border border-[#2a2a2a] text-white hover:bg-[#1f1f1f] hover:border-[#3a3a3a] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-wider uppercase",
      md: "h-11 px-6 text-sm tracking-wide",
      lg: "h-14 px-8 text-base tracking-wide",
    };

    // If icon variant, ignore size paddings and use specific icon sizing
    const appliedSize = variant === 'icon' ? "w-11 h-11 p-0" : sizes[size];

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], appliedSize, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
