import React, { useCallback, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import ButtonBack from '../../components/buttonBack/ButtonBack';
import { useNavigate } from 'react-router-dom';
import share from './assets/share.svg';
import send from './assets/send.svg';
import draft from './assets/draft.svg';
import UserHeader from '../../components/userHeader/UserHeader';
import Map from '../../components/map/Map';
import Table from '../../components/table/Table';
import Button from '../../components/button/Button';
import Message from './message/Message';
import CommentForm from './commentForm/CommentForm';
import ProphecyForm from './prophecyForm/ProphecyForm';
import ExpertHelp from './expertHelp/ExpertHelp';
import ExpertMessage from './expertMessage/ExpertMessage';
import { useHideNavbar } from '../../hooks/useHideNavbar';

const ForumItem = () => {
  useEffect(() => {
    document.body.style.background = '#f0f0f3';

    return () => {
      document.body.style.background = '';
    };
  }, []);

  useHideNavbar();

  const navigate = useNavigate();

  const onButtonBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <>
      <UserHeader />
      <Grid container pl={2} pr={2} pb={2}>
        <Grid item mr={'auto'}>
          <ButtonBack label={'Назад'} onClick={onButtonBackClick} color={'#37366B'}/>
        </Grid>
        <Grid pr={2}>
          <img src={draft} width={'25px'} height={'25px'}/>
        </Grid>
        <Grid item pr={2}>
          <img src={send} width={'25px'} height={'25px'}/>
        </Grid>
        <Grid item>
          <img src={share} width={'25px'} height={'25px'}/>
        </Grid>
      </Grid>
      <Grid item pl={2} pr={2}>
        <Typography color={'#292E30'} fontWeight={700} fontSize={'16px'} fontFamily={'Gilroy'}>
          Карта Д - 10, что она означает и как ее интрепритировать?
        </Typography>
      </Grid>
      <Grid item pl={2} pr={2} pt={2}>
        <Typography color={'#FF0000'} fontWeight={400} fontSize={'14px'} fontFamily={'Gilroy'}>
          Внимание! В это теме есть экспертный контент.
        </Typography>
      </Grid>
      <Grid item pl={2} pr={2} pt={2}>
        <Map/>
      </Grid>
      <Grid item pt={2}>
        <Table minimized={true} textColor={'black'}/>
      </Grid>
      <Grid item pl={2} pr={2} pt={2}>
        <Button text={'Посмотреть в астропроцессоре'}/>
      </Grid>
      <Grid item pl={2} pr={2} pt={4} pb={4}>
        <ProphecyForm />
      </Grid>
      <Grid item pl={2} pr={2} pt={2}>
        <ExpertHelp />
      </Grid>
      <Grid item pl={2} pr={2} pt={2}>
        <ExpertMessage />
      </Grid>
      <Grid item pl={2} pr={2} pt={2} pb={4}>
        <CommentForm />
      </Grid>
      <Grid item pl={2} pr={2} pt={2}>
        <Message/>
      </Grid>
      <Grid item pl={2} pr={2} pt={2}>
        <Message/>
      </Grid>
      <Grid item pl={2} pr={2} pt={2}>
        <Message/>
      </Grid>
      <Grid item pl={2} pr={2} pt={2}>
        <Message isCurrentUserMessage={true}/>
      </Grid>
      <Grid item pl={2} pr={2} pt={2} pb={4}>
        <CommentForm />
      </Grid>
    </>
  );
};

export default ForumItem;
