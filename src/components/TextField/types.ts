import { InputHTMLAttributes } from 'react';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Label for the text field */
  label?: string;
  /** Optional className for custom styling */
  className?: string;
};
