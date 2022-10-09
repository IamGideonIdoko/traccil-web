import React from 'react';

interface LayoutBaseProps {
  children: React.ReactNode;
}

export type OnboardLayoutProps = LayoutBaseProps;

export interface OnboardInputProps {
  type: string;
  name: string;
  placeholder: string;
}

export interface OnboardButtonProps {
  type: string;
  children: React.ReactNode;
}
