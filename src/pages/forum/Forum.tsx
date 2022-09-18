import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './Forum.module.scss';
import menu from './assets/menu.svg';
import wallet from './assets/wallet.svg';
import search from './assets/search.svg';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import Options from '../../components/options/Options';
import CourseAd from '../../components/courseAd/CourseAd';
import Topic from './components/topic/Topic';
import { topics } from './helpers/topics';
import UserHeader from '../../components/userHeader/UserHeader';
import Rules from './components/rules/Rules';
import { LocalStorageKey } from '../../helpers/LocalStorageKey';
import Video from '../../components/video/Video';

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

  useEffect(() => {
    document.body.style.background = '#f0f0f3';

    return () => {
      document.body.style.background = '';
    };
  }, []);

  const navigate = useNavigate();

  const onMenuClick = () => {
    navigate(routes.menu);
  };

  return (
    <div className={styles.main}>
      <UserHeader />
      <Grid container pl={2} pr={2} pt={3} position={'relative'} alignItems={'center'} width={'100%'} direction={'row'}>
        <div style={{ left: 0, pointerEvents: 'none', top: 0, zIndex: 2, width: 'calc(100% + 10px)', height: '80px', position: 'absolute', overflow: 'hidden', borderRadius: '40px 0 0 0', marginLeft: '-10px', marginTop: '-5px' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100px', background: 'linear-gradient(268.23deg, #37366B 2.7%, #5C5B9F 44.59%, #59ABDA 99.71%), #C4C4C4', filter: 'blur(20px)', transform: 'rotate(-180deg)', top: '-90px' }}/>
        </div>
        <Grid item pr={2} alignItems={'center'} display={'flex'}>
          <img src={menu} width={30} height={30} onClick={onMenuClick}/>
        </Grid>
        <Grid item mr={'auto'}>
          <Typography fontFamily={'Gilroy'} fontWeight={700} fontSize={'18px'} color={'#37366B'}>
            Форум
          </Typography>
        </Grid>
        <Grid item mr={3}>
          <img src={wallet} width={30} height={30}/>
        </Grid>
        <Grid item>
          <img src={search} width={30} height={30}/>
        </Grid>
      </Grid>
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
