import React, { useEffect } from 'react';
import UserHeader from '../../components/userHeader/UserHeader';
import PageHeader from '../../components/pageHeader/PageHeader';
import { Grid } from '@mui/material';
import Notification from './components/notitfication/Notification';

const Notifications = () => {
  useEffect(() => {
    document.body.style.background = '#F0F0F3 no-repeat';
    document.body.style.minHeight = `${window.innerHeight}px`;

    return () => {
      document.body.style.background = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <>
      <UserHeader />
      <PageHeader page={'Уведомления'} />
      <Grid container direction={'column'} pt={2}>
        <Grid item pl={2} pr={2} pb={1}>
          <Notification notificationVariant={'DARK'} />
        </Grid>
        <Grid item pl={2} pr={2} pb={1}>
          <Notification isMoreButtonShowed={true}/>
        </Grid>
        <Grid item pl={2} pr={2} pb={1}>
          <Notification notificationVariant={'GRADIENT'} isImageCircled={true}/>
        </Grid>
        <Grid item pl={2} pr={2} pb={1}>
          <Notification isMoreButtonShowed={true} isImageCircled={true}/>
        </Grid>
        <Grid item pl={2} pr={2} pb={1}>
          <Notification text={'Данные профиля сохранены Сообщение в две строки'} notificationType={'ERROR'} notificationVariant={'DARK'} />
        </Grid>
        <Grid item pl={2} pr={2} pb={1}>
          <Notification text={'Первая тема создана и опуликована вы достигли такого то прогеррса'} notificationType={'ACCEPT'} notificationVariant={'DARK'} />
        </Grid>
        <Grid item pl={2} pr={2} pb={1}>
          <Notification text={'Тема НАЗВАНИЕ ТЕМЫ отправлена на модерацию'} notificationType={'TIME'} notificationVariant={'DARK'} />
        </Grid>
      </Grid>
    </>
  );
};

export default Notifications;
