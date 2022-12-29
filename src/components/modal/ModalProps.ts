import React from 'react';

export interface ModalProps {
  isOpen: boolean,
  close: (props?: any) => any,
  height?: string,
  children?: React.ReactNode;
}
