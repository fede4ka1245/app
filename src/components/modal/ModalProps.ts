import React from 'react';

export interface ModalProps {
  isOpen: boolean,
  close: Function,
  height?: string,
  children?: React.ReactNode;
}
