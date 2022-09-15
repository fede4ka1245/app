import React, { useEffect, useMemo, useState } from 'react';
import styles from './Personal.module.scss';
import { Grid, Typography } from '@mui/material';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import ProfilePhoto from '../../components/profilePhoto/ProfilePhoto';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import { InputStyle } from '../../components/input/InputStyle';
import { InputType } from '../../components/input/InputType';

const Personal = () => {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const isSaveButtonDisabled = useMemo(() => {
    return !(name && secondName && birthday && phone && email);
  }, [name, secondName, birthday, phone, email]);

  const navigate = useNavigate();

  const onButtonSaveClick = () => {
    navigate(routes.menu);
  };

  useEffect(() => {
    document.body.style.background = '#F0F0F3 no-repeat';
    document.body.style.minHeight = `${window.innerHeight}px`;

    return () => {
      document.body.style.background = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className={styles.main}>
      <Grid container direction={'column'} p={4} spacing={4} height={'100%'}>
        <Grid item>
          <Typography fontFamily={'Playfair'} fontSize={24}>
            Заполните профиль
          </Typography>
        </Grid>
        <Grid item>
          <ProfilePhoto />
        </Grid>
        <Grid item container width={'100%'} rowSpacing={2}>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Имя'}
              inputStyle={InputStyle.outlined}
              value={name}
              onChange={(value) => setName(value)}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Фамилия'}
              inputStyle={InputStyle.outlined}
              value={secondName}
              onChange={(value) => setSecondName(value)}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Дата Рождения'}
              inputStyle={InputStyle.outlined}
              inputType={InputType.date}
              value={birthday}
              onChange={(value) => setBirthday(value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Typography fontFamily={'Playfair'} fontSize={24}>
            Контакты
          </Typography>
        </Grid>
        <Grid item container width={'100%'} rowSpacing={2}>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Телефон'}
              inputStyle={InputStyle.outlined}
              inputType={InputType.phone}
              value={phone}
              onChange={(value) => setPhone(value)}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Email'}
              inputStyle={InputStyle.outlined}
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </Grid>
        </Grid>
        <Grid item marginTop={'auto'}>
          <Button text='Сохранить' isDisabled={isSaveButtonDisabled} onClick={onButtonSaveClick}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Personal;
