import React, { useCallback, useState } from 'react';
import styles from './ProphecyForm.module.scss';
import { Grid, Skeleton } from '@mui/material';
import Button from '../../../components/button/Button';
import background from './assets/background.png';
import PropheciesModal from '../propheciesModal/PropheciesModal';

const ProphecyForm = () => {
  const [isProphesyModalOpen, setIsProphesyModalOpen] = useState(false);

  const toggleIsProphesyModalOpen = useCallback(() => {
    setIsProphesyModalOpen(!isProphesyModalOpen);
  }, [isProphesyModalOpen]);

  return (
    <div className={styles.main}>
      <img src={background} className={styles.image}/>
      <PropheciesModal isOpen={isProphesyModalOpen} close={toggleIsProphesyModalOpen}/>
      <Grid container p={2} zIndex={1}>
        <Grid item container alignItems={'center'} zIndex={1} display={'flex'}>
          <Grid item pr={1}>
            <Skeleton sx={{ background: 'gray' }} variant={'circular'} height={'40px'} width={'40px'}/>
          </Grid>
          <Grid item>
            <Grid item color={'#FFFFFF'} fontWeight={'bold'} fontFamily={'Playfair Display'}>
              Название темы в две строки
            </Grid>
            <Grid item color={'#FFFFFF'} fontFamily={'Gilroy'} fontSize={'12px'}>
              Название темы в две строки
            </Grid>
          </Grid>
        </Grid>
        <Grid item width={'100%'} pl={4} pr={4} pt={3}>
          <Button text={'Сделать собсвенный прогноз'}/>
        </Grid>
        <Grid onClick={toggleIsProphesyModalOpen} item width={'100%'} pl={4} pr={4} pt={2} textAlign={'center'} color={'#FFFFFF'} fontSize={'12px'} fontFamily={'Gilroy'} sx={{ opacity: 0.7 }}>
          Показать все 25 прогнозов
        </Grid>
      </Grid>
    </div>
  );
};

export default ProphecyForm;
