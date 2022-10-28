import React, { useEffect, useState } from 'react';
import UserHeader from '../../components/userHeader/UserHeader';
import PageHeader from '../../components/pageHeader/PageHeader';
import { Grid, Button as MuiButton, Typography } from '@mui/material';
import CourseAd from '../../components/courseAd/CourseAd';
import Options from '../../components/options/Options';
import SectionPreview from '../../components/sectionPreview';
import Button from '../../components/button/Button';
import UserPreview from '../../components/userPreview/UserPreview';
import Processor from './components/processor/Processor';
import ShowMoreButton from './components/showMoreButton/ShowMoreButton';
import Background from '../../components/background/Background';

const forumTopics = [
  {
    label: 'Мои темы',
    value: 'my-topics'
  },
  {
    label: 'Избранное',
    value: 'favourites'
  },
  {
    label: 'Коментируемые',
    value: 'commented'
  },
  {
    label: 'тема 1',
    value: 'topic-1'
  },
  {
    label: 'тема 2',
    value: 'topic-2'
  }
];

const groups = [
  {
    label: 'Мои группы',
    value: 'my'
  },
  {
    label: 'Все',
    value: 'all'
  }
];

const Main = () => {
  const [targetForumTopic, setTargetForumTopic] = useState(forumTopics[0]);
  const [targetGroups, setTargetGroups] = useState(groups[0]);

  return (
    <>
      <Background background={'#F0F0F3'} />
      <UserHeader />
      <PageHeader page={'Меню'}/>
      <Grid container direction={'column'}>
        <Grid item pl={2} pr={2} pt={3}>
          <CourseAd />
        </Grid>
        <Grid item color={'#292E30'} fontWeight={700} fontSize={'24px'} fontFamily={'Playfair Display'} pl={2} pr={2} pt={1}>
          Темы на форуме
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <Options options={forumTopics} value={targetForumTopic.value} setValue={setTargetForumTopic} isOutlined isScrollable/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isPinned header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isGray header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isGray header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <ShowMoreButton />
        </Grid>
        <Grid item color={'#292E30'} fontWeight={700} fontSize={'24px'} fontFamily={'Playfair Display'} pl={2} pr={2} pt={3}>
          Группы
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <Options options={groups} value={targetGroups.value} setValue={setTargetGroups} isOutlined isScrollable/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isPinned variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isGray variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isGray variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <ShowMoreButton />
        </Grid>
        <Grid item color={'#292E30'} fontWeight={700} fontSize={'24px'} fontFamily={'Playfair Display'} pl={2} pr={2} pt={3}>
          Открытые прогнозы
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <Options options={groups} value={targetGroups.value} setValue={setTargetGroups} isOutlined isScrollable/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isPinned variant={'prophecy'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isGray variant={'prophecy'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isGray variant={'prophecy'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <ShowMoreButton />
        </Grid>
        <Grid item pl={2} pr={2} pt={3} display={'flex'} justifyContent={'space-between'}>
          <Typography color={'#292E30'} fontWeight={700} fontSize={'24px'} fontFamily={'Playfair Display'}>
            Курсы
          </Typography>
          <MuiButton endIcon={<>
            <svg width="6" height="12" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.666016 8L2.81445 4.77735C2.92642 4.6094 2.92642 4.3906 2.81445 4.22265L0.666015 1" stroke="#ABB0B2" strokeLinecap="round"/>
            </svg>
          </>}>
            <Typography textTransform={'none'} color={'#ABB0B2'} fontWeight={400} fontSize={'14px'} fontFamily={'Gilroy'}>
              Все курсы
            </Typography>
          </MuiButton>
        </Grid>
        <Grid item container direction={'row'} wrap={'nowrap'} maxWidth={'100%'} pl={2} pr={2} pt={3} overflow={'scroll'}>
          <Grid item minWidth={'180px'} pr={2}>
            <CourseAd isPriceShowed />
          </Grid>
          <Grid item minWidth={'180px'} pr={2}>
            <CourseAd isPriceShowed />
          </Grid>
          <Grid item minWidth={'180px'} pr={2}>
            <CourseAd isPriceShowed />
          </Grid>
          <Grid item minWidth={'180px'} pr={2}>
            <CourseAd isPriceShowed />
          </Grid>
          <Grid item minWidth={'180px'} pr={2}>
            <CourseAd isPriceShowed />
          </Grid>
          <Grid item minWidth={'180px'} pr={2}>
            <CourseAd isPriceShowed />
          </Grid>
        </Grid>
        <Grid item color={'#292E30'} fontWeight={700} fontSize={'24px'} fontFamily={'Playfair Display'} pl={2} pr={2} pt={2}>
          <Button text={'Все курсы'} />
        </Grid>
        <Grid item pl={2} pr={2} pt={3} display={'flex'} justifyContent={'space-between'}>
          <Typography color={'#292E30'} fontWeight={700} fontSize={'24px'} fontFamily={'Playfair Display'}>
            Друзья
          </Typography>
          <MuiButton endIcon={<>
            <svg width="6" height="12" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.666016 8L2.81445 4.77735C2.92642 4.6094 2.92642 4.3906 2.81445 4.22265L0.666015 1" stroke="#ABB0B2" strokeLinecap="round"/>
            </svg>
          </>}>
            <Typography textTransform={'none'} color={'#ABB0B2'} fontWeight={400} fontSize={'14px'} fontFamily={'Gilroy'}>
              Все Друзья
            </Typography>
          </MuiButton>
        </Grid>
        <Grid item container direction={'row'} wrap={'nowrap'} maxWidth={'100%'} pl={2} pr={2} pt={3} overflow={'scroll'}>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
        </Grid>
        <Grid item pl={2} pr={2} pt={3} display={'flex'} justifyContent={'space-between'}>
          <Typography color={'#292E30'} fontWeight={700} fontSize={'24px'} fontFamily={'Playfair Display'}>
            Подписчики
          </Typography>
          <MuiButton endIcon={<>
            <svg width="6" height="12" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.666016 8L2.81445 4.77735C2.92642 4.6094 2.92642 4.3906 2.81445 4.22265L0.666015 1" stroke="#ABB0B2" strokeLinecap="round"/>
            </svg>
          </>}>
            <Typography textTransform={'none'} color={'#ABB0B2'} fontWeight={400} fontSize={'14px'} fontFamily={'Gilroy'}>
              Все Подписчики
            </Typography>
          </MuiButton>
        </Grid>
        <Grid item container direction={'row'} wrap={'nowrap'} maxWidth={'100%'} pl={2} pr={2} pt={3} overflow={'scroll'}>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
          <Grid item pr={2}>
            <UserPreview />
          </Grid>
        </Grid>
        <Grid pt={4}>
          <Processor />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
