import React from 'react';
import { Grid, Typography } from '@mui/material';
import firstLevel from '../../pages/forum/assets/firstLevel.svg';
import secondLevel from '../../pages/forum/assets/secondLevel.svg';
import thirdLevel from '../../pages/forum/assets/thirdLevel.svg';

const UserHeader = () => {
  return (
    <Grid container pl={2} pr={2} pt={4} display={'flex'} alignItems={'center'}>
      <Grid item zIndex={3}>
        <section style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'gray' }}>
        </section>
      </Grid>
      <Grid item container direction={'column'} flex={1} pl={2}>
        <Grid item>
          <Typography fontFamily={'Playfair Display'} fontWeight={700} fontSize={'18px'} color={'#292E30'}>
            Александра
          </Typography>
        </Grid>
        <Grid item display={'flex'} alignItems={'center'}>
          <Typography fontFamily={'Playfair Display'} fontWeight={700} fontSize={'18px'} color={'#967440'}>
            II
          </Typography>
          <Typography pl={'6px'} fontFamily={'Gilroy'} fontWeight={400} fontSize={'14px'} color={'#967440'}>
            уровень
          </Typography>
        </Grid>
      </Grid>
      <Grid item container width={'150px'} justifyContent={'space-between'} alignItems={'center'}>
        <Grid item>
          <img src={firstLevel} width={40} height={40}/>
        </Grid>
        <Grid item>
          <img src={secondLevel} width={40} height={40}/>
        </Grid>
        <Grid item>
          <img src={thirdLevel} width={40} height={40}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserHeader;
