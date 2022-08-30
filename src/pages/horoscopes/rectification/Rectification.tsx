import React from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../../../components/input/Input';
import { ButtonType } from '../../../components/button/ButtonProps';
import Button from '../../../components/button/Button';

const Rectification = () => {
  return (
    <Grid container direction={'column'} rowSpacing={2} pb={2} pl={4} pr={4} pt={2}>
      <Grid item>
        <Typography fontFamily={'Playfair Display'} fontWeight={700} fontSize={'24px'} color={'white'}>
          Ректификации
        </Typography>
      </Grid>
      <Grid item>
        <Input placeholder={'Задать имя'} />
      </Grid>
      <Grid item container direction={'row'} justifyContent={'space-between'}>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder='Дата'/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder='Время'/>
        </Grid>
      </Grid>
      <Grid item container direction={'row'} justifyContent={'space-between'}>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder='-5 минут'/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder='+5 минут'/>
        </Grid>
      </Grid>
      <Grid item>
        <Typography fontFamily={'Gilroy'} fontWeight={700} fontSize={'14px'} color={'white'}>
          Установить свой шаг
        </Typography>
      </Grid>
      <Grid item xs={6} md={6}>
        <Input placeholder={'35'} />
      </Grid>
      <Grid item>
        <Typography fontFamily={'Gilroy'} fontWeight={700} fontSize={'14px'} color={'white'}>
          Часовой пояс
        </Typography>
      </Grid>
      <Grid item container direction={'row'} width={'calc(50% - 5px)'} justifyContent={'space-between'}>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder={'0'} isSelect={true}/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder={'00'} isSelect={true}/>
        </Grid>
      </Grid>
      <Grid item>
        <Button text={'Расчитать'} type={ButtonType.gradient}/>
      </Grid>
      <Grid item>
        <Button text={'Сохранить'} type={ButtonType.outline}/>
      </Grid>
    </Grid>
  );
};

export default Rectification;
