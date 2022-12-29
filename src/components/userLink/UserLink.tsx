import React from 'react';
import styles from './UserCheckBox.module.scss';
import { Checkbox, Grid, Skeleton, Typography } from '@mui/material';

const UserLink = ({ isCheckbox }: any) => {
  return (
    <div className={styles.main}>
      <Grid container display={'flex'} alignItems={'center'} p={1}>
        <Grid item pr={2}>
          <Skeleton variant={'circular'} width={'45px'} height={'45px'}/>
        </Grid>
        <Grid item flex={1}>
          <Typography color={'#292E30'} fontWeight={500} fontSize={'16px'}>
            Анастасия Квашонкина
          </Typography>
          <Typography color={'#292E30'} fontWeight={400} fontSize={'12px'}>
            19.01.1980 15:00, Москва
          </Typography>
        </Grid>
        {isCheckbox && <Grid item>
          <Checkbox />
        </Grid>}
      </Grid>
    </div>
  );
};

export default UserLink;
