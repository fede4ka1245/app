import React from 'react';
import Modal from '../../../components/modal/Modal';
import styles from './PropheciesModal.module.scss';
import background from './assets/img.png';
import cross from './assets/close.svg';
import { Grid, Typography } from '@mui/material';
import Message from '../message/Message';

export interface PropheciesModalProps {
  isOpen: boolean,
  close: (props?: any) => any
}

const PropheciesModal = ({ isOpen, close }: PropheciesModalProps) => {
  return (
    <Modal isOpen={isOpen} close={close} height={'calc(100vh - 40px)'}>
      <section className={styles.main} style={{ position: 'relative' }}>
        <img src={background} className={styles.background}/>
        <img src={cross} className={styles.cross} onClick={close}/>
        <Grid zIndex={3} container height={'100%'} sx={{ overflowY: 'auto' }} pl={4} pr={4} pt={2}>
          <Grid item pt={2} zIndex={3} pb={4} width={'100%'}>
            <Typography textAlign={'center'} color={'white'} fontSize={'16px'} fontFamily={'Gilroy'} fontWeight={'bold'} textTransform={'uppercase'}>
              Прогнозы по этой теме (25)
            </Typography>
          </Grid>
          <Grid item pb={2}>
            <Message isGray={true}/>
          </Grid>
          <Grid item pb={2}>
            <Message isGray={true}/>
          </Grid>
          <Grid item pb={2}>
            <Message isGray={true}/>
          </Grid>
          <Grid item pb={2}>
            <Message isGray={true}/>
          </Grid>
        </Grid>
      </section>
    </Modal>
  );
};

export default PropheciesModal;
