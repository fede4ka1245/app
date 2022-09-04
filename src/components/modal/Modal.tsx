import React from 'react';
import { Drawer } from '@mui/material';
import styles from '../input/components/Options.module.scss';
import { ModalProps } from './ModalProps';

const Modal: React.FC<ModalProps> = ({ isOpen, close, children, height }) => {
  return (
    <Drawer
      anchor={'bottom'}
      open={isOpen}
      onClose={() => close()}
      PaperProps={{ style: { borderRadius: '20px 20px 0 0', background: '#F0F0F3', height: height || '350px' } }}
    >
      {children}
    </Drawer>
  );
};

export default Modal;
