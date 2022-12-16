import React, { useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../models/enums/routes';
import GalaxyBackground from '../../components/galaxyBackground/GalaxyBackground';
import { useHideNavbar } from '../../hooks/useHideNavbar';
import { InputType } from '../../components/input/InputType';
import { useAppDispatch } from '../../store/store';
import { setIsAppLoading, setIsAuthenticated } from '../../store/reducers/preferencesReducer';
import { userRegistration } from '../../api/userRegistration';
import { LocalStorageKey } from '../../models/enums/LocalStorageKey';

const Authorization = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const dispatch = useAppDispatch();

  useHideNavbar();

  const onEnterClick = () => {
    dispatch(setIsAppLoading(true));

    userRegistration({
      name,
      phone: `+${phone}`,
      password,
      confirmedPassword
    })
      .then(({ data }) => {
        if (!data.access || !data.refresh) {
          return;
        }

        localStorage.setItem(LocalStorageKey.access, data.access);
        localStorage.setItem(LocalStorageKey.refresh, data.refresh);

        dispatch(setIsAuthenticated(true));
        navigate(routes.menu);
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      })
      .finally(() => {
        dispatch(setIsAppLoading(false));
      });
  };

  const isSaveButtonDisabled = useMemo(() => {
    return !(name && phone && password && confirmedPassword);
  }, [name, password, confirmedPassword, phone]);

  return (
    <Grid position={'relative'} container direction={'column'} height={'100%'} pl={2} pr={2} pb={4}>
      <GalaxyBackground minHeight={'100%'} />
      <Grid item container width={'100%'} pt={6}>
        <Grid item width={'100%'}>
          <Input
            placeholder={'Имя'}
            value={name}
            onChange={(value) => setName(value)}
          />
        </Grid>
        <Grid item width={'100%'} pt={2}>
          <Input
            placeholder={'Телефон'}
            inputType={InputType.phone}
            value={phone}
            onChange={(value) => setPhone(value)}
          />
        </Grid>
        <Grid item width={'100%'} pt={4}>
          <Input
            placeholder={'Пароль'}
            value={password}
            onChange={setPassword}
            type={'password'}
          />
        </Grid>
        <Grid item width={'100%'} pt={2}>
          <Input
            placeholder={'Подтверждение пароля'}
            value={confirmedPassword}
            onChange={setConfirmedPassword}
            type={'password'}
          />
        </Grid>
      </Grid>
      <Grid item pt={5}>
        <Button text='Сохранить' isDisabled={isSaveButtonDisabled} onClick={onEnterClick}/>
      </Grid>
    </Grid>
  );
};

export default Authorization;
