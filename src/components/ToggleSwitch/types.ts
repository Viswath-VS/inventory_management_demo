import { InputHTMLAttributes } from 'react';

export type ToggleSwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
};
