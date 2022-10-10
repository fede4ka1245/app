import React from 'react';
import Modal from '../../../../components/modal/Modal';
import { Grid } from '@mui/material';
import TextGradient from '../../../../components/textGradient/TextGradient';
import Draft from './draft/Draft';

export interface DraftsProps {
  isOpen: boolean,
  close: (params?: any) => any
}

const Drafts = ({ isOpen, close }: DraftsProps) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <Grid container direction={'column'}>
        <Grid item pt={3} pb={2}>
          <TextGradient
            textAlign={'center'}
            textTransform={'uppercase'}
            fontWeight={'bold'}
          >
            Черновики
          </TextGradient>
        </Grid>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid key={index} item pt={1} pl={2} pr={2}>
            <Draft />
          </Grid>
        ))}
      </Grid>
    </Modal>
  );
};

export default Drafts;
