import React, { useMemo, useState } from 'react';
import styles from './Personal.module.scss';
import { Grid, Typography } from '@mui/material';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { useSetBackground } from '../../hooks/useSetBackground';
import ProfilePhoto from '../../components/profilePhoto/ProfilePhoto';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../helpers/routes';

const Personal = () => {
  useSetBackground('#f0f0f3');
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
              inputType={'outlined'}
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Фамилия'}
              inputType={'outlined'}
              value={secondName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSecondName(event.target.value)}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Дата Рождения'}
              inputType={'outlined'}
              value={birthday}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBirthday(event.target.value)}
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
              inputType={'outlined'}
              value={phone}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Email'}
              inputType={'outlined'}
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
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
