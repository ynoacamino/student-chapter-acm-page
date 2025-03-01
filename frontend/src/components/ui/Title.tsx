import { cn } from '@/lib/utils';
import React from 'react';

type TitleProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Title<T extends React.ElementType = 'h1'>({
  as,
  className,
  children,
  ...props
}: TitleProps<T>) {
  const Component = as || 'h1';
  return (
    <Component
      className={cn('bg-primary text-background text-4xl font-semibold rounded-lg py-4 px-14', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Title;
