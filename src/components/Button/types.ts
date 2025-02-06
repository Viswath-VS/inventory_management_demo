import React from 'react';

type ButtonVariant = 'filled' | 'outlined' | 'text';

export type ButtonProps = React.PropsWithChildren<{
  onClick: () => void;
  size: 'sm' | 'md' | 'lg';
  variant: ButtonVariant;
  disabled: boolean;
}>;
