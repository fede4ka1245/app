import React from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../../../components/input/Input';
import { InputType } from '../../../components/input/InputType';
import plus from './assets/plus.svg';
import styles from './CommentForm.module.scss';
import GradientButton from '../../../components/gradientButton/GradientButton';

const CommentForm = () => {
  return (
    <Grid container direction={'column'}>
      <Grid item>
        <Input inputType={InputType.textarea} placeholder={'Введите комментарий'}/>
      </Grid>
      <Grid item container justifyContent={'center'} pt={2}>
        <Grid item>
          <div className={styles.cheap}>
            <img src={plus}/>
            <Typography pl={'5px'}>
              Изображение
            </Typography>
          </div>
        </Grid>
        <Grid item pl={2}>
          <div className={styles.cheap}>
            <img src={plus}/>
            <Typography pl={'5px'}>
              Гороскоп
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid item pt={2}>
        <GradientButton>
          Отправить
        </GradientButton>
      </Grid>
    </Grid>
  );
};

export default CommentForm;
