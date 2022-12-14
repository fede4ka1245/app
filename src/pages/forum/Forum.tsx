import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './Forum.module.scss';
import Options from '../../components/options/Options';
import CourseAd from '../../components/courseAd/CourseAd';
import Topic from './components/topic/Topic';
import { topics } from './helpers/topics';
import UserHeader from '../../components/userHeader/UserHeader';
import Rules from './components/rules/Rules';
import { LocalStorageKey } from '../../models/enums/LocalStorageKey';
import Video from '../../components/video/Video';
import PageHeader from '../../components/pageHeader/PageHeader';
import Background from '../../components/background/Background';

const options = [
  {
    label: 'Категории',
    value: 1
  },
  {
    label: 'Мои темы',
    value: 2
  },
  {
    label: 'Популярные',
    value: 3
  },
  {
    label: 'Новые',
    value: 4
  },
  {
    label: 'item item',
    value: 5
  },
  {
    label: 'item item',
    value: 6
  }
];

const Forum = () => {
  const [targetOption, setTargetOption] = useState(options[0]);
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(LocalStorageKey.isForumRulesConfirmed) === null) {
      setIsRulesOpen(true);
      localStorage.setItem(LocalStorageKey.isForumRulesConfirmed, JSON.stringify({ isForumRulesConfirmed: true }));
    }
  }, []);

  return (
    <div className={styles.main}>
      <Background background={'#f0f0f3'} />
      <UserHeader/>
      <PageHeader page={'Форум'}/>
      <Grid item width={'100%'} pl={2} pr={2} pt={3} pb={3}>
        <Options options={options} setValue={setTargetOption} value={targetOption.value} isScrollable isOutlined/>
      </Grid>
      <Grid item container direction={'column'} pl={2} pr={2}>
        {topics.map((topic) => (
          <Grid item key={topic.name} pb={1}>
            <Topic name={topic.name} discussions={topic.discussions} tags={topic?.tags}/>
          </Grid>
        ))}
      </Grid>
      <Grid item p={2}>
        <Video />
      </Grid>
      <Grid item container direction={'column'} pl={2} pr={2}>
        {topics.map((topic) => (
          <Grid item key={topic.name} pb={1}>
            <Topic name={topic.name} discussions={topic.discussions} tags={topic?.tags}/>
          </Grid>
        ))}
      </Grid>
      <Grid item pl={2} pt={1}>
        <CourseAd />
      </Grid>
      <Grid item container direction={'column'} pl={2} pr={2}>
        {topics.map((topic) => (
          <Grid item key={topic.name} pb={1}>
            <Topic name={topic.name} discussions={topic.discussions} tags={topic?.tags}/>
          </Grid>
        ))}
      </Grid>
      <Typography pt={1} textAlign={'center'} fontFamily={'Gilroy'} fontWeight={500} fontSize={'16px'} color={'#37366B'} onClick={() => setIsRulesOpen(true)}>
        Правила поведения на форуме
      </Typography>
      <Rules isOpen={isRulesOpen} close={() => setIsRulesOpen(false)} />
    </div>
  );
};

export default Forum;
