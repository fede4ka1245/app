import React, { useEffect, useState } from 'react';
import UserHeader from '../../components/userHeader/UserHeader';
import PageHeader from '../../components/pageHeader/PageHeader';
import { Grid, Typography } from '@mui/material';
import CalendarComponent from '../../components/calendar/Calendar';
import Options from '../../components/options/Options';
import Notification from '../notifications/components/notitfication/Notification';

const options = [
  {
    value: 'option1',
    label: 'Событие 1'
  },
  {
    value: 'option2',
    label: 'Событие 2'
  },
  {
    value: 'option3',
    label: 'Событие 3'
  }
];

const Calendar = () => {
  useEffect(() => {
    document.body.style.background = '#F0F0F3 no-repeat';
    document.body.style.minHeight = `${window.innerHeight}px`;

    return () => {
      document.body.style.background = '';
      document.body.style.minHeight = '';
    };
  }, []);

  const [targetOption, setTargetOption] = useState(options[0]);

  return (
    <Grid container direction={'column'}>
      <UserHeader/>
      <PageHeader page={'Календарь'}/>
      <Grid item pt={2}>
        <CalendarComponent />
      </Grid>
      <Grid item pt={2} pl={2} pr={2}>
        <Typography textTransform={'uppercase'} fontWeight={'bold'} color={'#37366B'} fontFamily={'Gilroy'}>
          16 сентября
        </Typography>
      </Grid>
      <Grid item pl={2} pr={2}>
        <Options options={options} isOutlined={true} setValue={setTargetOption} value={targetOption.value}/>
      </Grid>
      <Grid item pl={2} pr={2} pb={1} pt={2}>
        <Notification isMoreButtonShowed={true}/>
      </Grid>
      <Grid item pl={2} pr={2} pb={1}>
        <Notification isMoreButtonShowed={true}/>
      </Grid>
      <Grid item pl={2} pr={2} pb={1}>
        <Notification isMoreButtonShowed={true}/>
      </Grid>
    </Grid>
  );
};

export default Calendar;
