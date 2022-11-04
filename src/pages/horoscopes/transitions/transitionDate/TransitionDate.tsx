import React from 'react';
import { Grid } from '@mui/material';
import Input from '../../../../components/input/Input';
import { InputType } from '../../../../components/input/InputType';
import Button from '../../../../components/button/Button';
import { ButtonType } from '../../../../components/button/ButtonProps';

const TransitionDate = () => {
  return (
    <>
      <Grid item container justifyContent={'space-between'}>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder={'Дата транзита'} inputType={InputType.date}/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder={'Время транзита'} inputType={InputType.time}/>
        </Grid>
      </Grid>
      <Grid pt={3}>
        <Button type={ButtonType.outline} text={'Добавить натальную карту'}/>
      </Grid>
      <Grid pt={2} pb={2}>
        <Button type={ButtonType.gradient} text={'Рассчитать'}/>
      </Grid>
    </>
  );
};

export default TransitionDate;
