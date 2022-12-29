import React, { useEffect, useState } from 'react';
import Modal from '../../../../components/modal/Modal';
import { Grid, Typography, Checkbox } from '@mui/material';
import cross from './assets/cross.svg';
import styles from './Rules.module.scss';
import axios from 'axios';

interface RulesProps {
  isOpen: boolean,
  close: () => any,
}

const Rules = ({ isOpen, close }: RulesProps) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    axios.get('/rules.html')
      .then(({ data }) => {
        setHtml(data);
      });
  }, []);

  return (
    <Modal isOpen={isOpen} close={close} height={'calc(100vh - 80px)'}>
      <Grid sx={{ background: 'white' }} width={'100%'} height={'100%'} overflow={'scroll'} display={'flex'} container position={'relative'} flexDirection={'column'} p={3}>
        <img src={cross} className={styles.cross} onClick={close}/>
        <Grid item width={'100%'}>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          <Grid item display={'flex'} alignItems={'center'}>
            <Checkbox />
            <Typography fontFamily={'Gilroy'} fontSize={'15px'} color={'#37366B'}>
              Прочитал и согласен с правилами
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default Rules;
