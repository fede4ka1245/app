import React from 'react';
import Modal from '../../../../components/modal/Modal';
import { Grid, Typography, Checkbox } from '@mui/material';
import cross from './assets/cross.svg';
import styles from './Rules.module.scss';

interface RulesProps {
  isOpen: boolean,
  close: () => any,
}

const Rules = ({ isOpen, close }: RulesProps) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <Grid container position={'relative'} direction={'column'} p={3}>
        <img src={cross} className={styles.cross} onClick={close}/>
        <Grid item>
          <Typography fontFamily={'Gilroy'} fontSize={'20px'} color={'#37366B'}>
            Правила поведения на форуме
          </Typography>
        </Grid>
        <Grid container item direction={'column'}>
          <Grid item pt={1} pb={1}>
            <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={'14px'} color={'#292E30'}>
              Заголовок
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontFamily={'Gilroy'} fontSize={'12px'} color={'#292E30'}>
              Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.
            </Typography>
          </Grid>
          <Grid item pt={1} pb={1}>
            <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={'14px'} color={'#292E30'}>
              Заголовок
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontFamily={'Gilroy'} fontSize={'12px'} color={'#292E30'}>
              Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item pl={2} display={'flex'} alignItems={'center'}>
        <Checkbox />
        <Typography fontFamily={'Gilroy'} fontSize={'15px'} color={'#37366B'}>
          Прочитал и согласен с правилами
        </Typography>
      </Grid>
    </Modal>
  );
};

export default Rules;
