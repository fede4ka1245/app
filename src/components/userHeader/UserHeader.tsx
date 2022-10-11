import React from 'react';
import { Grid, Typography } from '@mui/material';
import firstLevel from '../../pages/forum/assets/firstLevel.svg';
import secondLevel from '../../pages/forum/assets/secondLevel.svg';
import thirdLevel from '../../pages/forum/assets/thirdLevel.svg';
import { useGetAvatar } from '../../store/selectors';

const UserHeader = () => {
  const avatar = useGetAvatar();

  return (
    <>
      <Grid container pl={2} pr={2} pt={4} display={'flex'} alignItems={'center'}>
        <Grid item zIndex={3}>
          <section style={{ width: '70px', height: '70px', borderRadius: '50%', background: avatar ? `url(${avatar}` : 'gray' }}>
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
      <Grid container pl={2} pr={2} pt={3} position={'relative'} alignItems={'center'} width={'100%'} direction={'row'}>
        <div style={{ left: 0, pointerEvents: 'none', top: 0, zIndex: 2, width: 'calc(100% + 10px)', height: '80px', position: 'absolute', overflow: 'hidden', borderRadius: '40px 0 0 0', marginLeft: '-10px', marginTop: '-5px' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100px', background: 'linear-gradient(268.23deg, #37366B 2.7%, #5C5B9F 44.59%, #59ABDA 99.71%), #C4C4C4', filter: 'blur(20px)', transform: 'rotate(-180deg)', top: '-90px' }}/>
        </div>
      </Grid>
    </>
  );
};

export default UserHeader;
