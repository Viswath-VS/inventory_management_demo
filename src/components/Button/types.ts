import { PropsWithChildren } from 'react';

type ButtonVariant = 'filled' | 'outlined' | 'text';

export type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  size: 'sm' | 'md' | 'lg';
  variant: ButtonVariant;
  disabled: boolean;
}>;
