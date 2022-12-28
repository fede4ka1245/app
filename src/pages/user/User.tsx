import React, { useState } from 'react';
import Background from '../../components/background/Background';
import UserHeader from '../../components/userHeader/UserHeader';
import PageHeader from '../../components/pageHeader/PageHeader';
import { Skeleton, Typography, Grid, Button as MuiButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import likeImage from './assets/like.png';
import adminLike from './assets/adminLike.png';
import subscribe from './assets/subscribe.png';
import Button from '../../components/button/Button';
import { ButtonType } from '../../components/button/ButtonProps';
import heart from './assets/heart.png';
import share from './assets/share.png';
import UserPreview from '../../components/userPreview/UserPreview';
import Options from '../../components/options/Options';
import SectionPreview from '../../components/sectionPreview';
import Notification from '../notifications/components/notitfication/Notification';
import wallet from '../forum/assets/wallet.svg';
import { routes } from '../../models/enums/routes';
import { useNavigate } from 'react-router-dom';
import setting from './assets/settings.svg';

const groups = [
  {
    label: 'Темы',
    value: 'topics'
  },
  {
    label: 'Прогнозы',
    value: 'prophecies'
  },
  {
    label: 'Комментарии',
    value: 'comments'
  },
  {
    label: 'Все',
    value: 'all'
  }
];

const notificationsOptions = [
  {
    label: 'События',
    value: '1'
  },
  {
    label: 'Практикум',
    value: '2'
  },
  {
    label: 'Напоминания',
    value: '3'
  },
  {
    label: 'Все',
    value: '4'
  }
];

const User = () => {
  const [targetGroups, setTargetGroups] = useState(groups[0]);
  const [targetNotificationOption, setTargetNotificationOption] = useState(notificationsOptions[0]);
  const navigate = useNavigate();

  const onWalletClick = () => {
    navigate(routes.rates);
  };

  const onSettingsClick = () => {
    navigate(routes.userEdit);
  };

  return (
    <Grid>
      <Background background={'#F0F0F3'} />
      <UserHeader />
      <PageHeader page={'Профиль'} content={
        <>
          <Grid item mr={3}>
            <img src={wallet} onClick={onWalletClick} width={30} height={30}/>
          </Grid>
          <Grid item>
            <img alt='setting' width={'28px'} height={'28px'} src={setting} onClick={onSettingsClick}/>
          </Grid>
        </>
      }/>
      <Grid mt={2} width={'100%'} borderRadius={'20px'} container direction={'column'} sx={{ background: 'linear-gradient(225deg, rgba(219,191,46,0.4) 13.28%, rgba(229, 175, 36, 0) 81.25%)' }}>
        <Grid item display={'flex'} alignItems={'center'} p={2}>
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#292E30' }} />
          <Typography color={'#292E30'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1}>
            Обо мне
          </Typography>
        </Grid>
        <Grid item width={'100%'} height={'240px'}>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            freeMode={true}
            centeredSlides={true}
            style={{
              height: '100%'
            }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <SwiperSlide key={index} style={{ height: '230px', width: '165px' }}>
                <Skeleton variant='rectangular' sx={{ borderRadius: '10px', background: 'rgba(73,73,73,0.51)' }} height={'230px'} width={'165px'} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid pt={2} textAlign={'center'} fontFamily={'Playfair Display'} fontWeight={700} fontSize={'24px'} color={'#292E30'}>
          Татьяна Калинина
        </Grid>
        <Grid pr={2} pl={2} pt={3} textAlign={'center'} fontFamily={'Gilroy'} fontWeight={500} fontSize={'16px'} color={'#292E30'}>
          Руководитель школы Альфа. Известный астролог, исследователь и педагог. Автор многих успешных публичных прогнозов для президентов, политиков, стран и выдающихся людей.
        </Grid>
        <Grid pr={2} pl={2} pt={4} textAlign={'center'} fontFamily={'Gilroy'} fontWeight={500} fontSize={'16px'} color={'#292E30'}>
          <Grid width={'100%'} sx={{ background: 'white' }} borderRadius={'10px'} p={2}>
            <Typography pb={2} color={'##37366b'} textAlign={'start'} fontFamily={'Gilroy'} fontWeight={600} fontSize={'16px'}>
              Этого пользователя отметила школа
            </Typography>
            <Grid container alignItems={'center'} wrap={'nowrap'}>
              <Grid display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img style={{ objectFit: 'contain' }} src={likeImage} alt={'like'} height={34} width={34}/>
              </Grid>
              <Grid pl={2} textAlign={'center'} fontFamily={'Gilroy'} fontWeight={700} fontSize={'20px'} color={'#292E30'}>
                +50
              </Grid>
              <Grid ml={'auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img style={{ objectFit: 'contain' }} src={adminLike} alt={'like'} height={34} width={34}/>
              </Grid>
              <Grid pl={2} textAlign={'center'} fontFamily={'Gilroy'} fontWeight={700} fontSize={'20px'} color={'#292E30'}>
                +1
              </Grid>
              <Grid pl={2} height={'100%'} width={'100px'} whiteSpace={'break-spaces'} fontFamily={'Gilroy'} textAlign={'left'} fontWeight={400} fontSize={'8px'} color={'#FF0000'}>
                Татьяна Калинина отметила вас лайком
              </Grid>
            </Grid>
          </Grid>
          <Grid pt={2} container>
            <Grid item flex={1}>
              <Grid container sx={{ background: '#ad3ef1', height: '32px' }} borderRadius={'10px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} ml={2}>
                  <img style={{ objectFit: 'contain' }} src={heart} alt={'heart'} height={18} width={18}/>
                  <Typography pl={1} color={'white'} fontFamily={'Gilroy'} fontSize={'12px'} fontWeight={'bold'} pr={2}>
                    123
                  </Typography>
                </Grid>
                <Typography color={'white'} fontFamily={'Gilroy'} fontSize={'12px'} fontWeight={'bold'} pr={2}>
                  Лайкнуть
                </Typography>
              </Grid>
            </Grid>
            <Grid item flex={1} pl={1}>
              <Grid container sx={{ background: '#F1643E', height: '32px' }} borderRadius={'10px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} ml={2}>
                  <img style={{ objectFit: 'contain' }} src={subscribe} alt={'subscribe'} height={18} width={18}/>
                  <Typography pl={1} color={'white'} fontFamily={'Gilroy'} fontSize={'12px'} fontWeight={'bold'} pr={2}>
                    123
                  </Typography>
                </Grid>
                <Typography color={'white'} fontFamily={'Gilroy'} fontSize={'12px'} fontWeight={'bold'} pr={2}>
                  Подписаться
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid pt={2}>
            <Button type={ButtonType.gradient} text={'Написать сообщение'}/>
          </Grid>
          <Grid pt={2} pb={2} container>
            <Grid item flex={1}>
              <MuiButton
                startIcon={
                  <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mr={1}>
                    <img style={{ objectFit: 'contain' }} src={share} alt={'subscribe'} height={18} width={18}/>
                  </Grid>
                }
                sx={{ width: '100%' }}
              >
                <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'16px'} fontWeight={500} textTransform={'none'}>
                  Поделиться
                </Typography>
              </MuiButton>
            </Grid>
            <Grid item flex={1} pl={1}>
              <MuiButton sx={{ width: '100%' }}>
                <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'16px'} fontWeight={500} textTransform={'none'}>
                  Пожаловаться
                </Typography>
              </MuiButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid pt={3}>
        <Grid item display={'flex'} alignItems={'center'} p={2}>
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1}>
            Сертификаты
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Grid item width={'100%'} height={'110px'}>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={5}
            freeMode={true}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <SwiperSlide key={index} style={{ height: '105px', width: '165px' }}>
                <Skeleton variant='rectangular' sx={{ borderRadius: '10px', background: 'rgba(73,73,73,0.51)' }} height={'105px'} width={'165px'} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
      <Grid pt={3}>
        <Grid item display={'flex'} alignItems={'center'} p={2}>
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1}>
            Активность на форуме
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Grid item pl={2} pr={2} width={'100%'}>
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
      </Grid>
      <Grid pt={3}>
        <Grid item display={'flex'} alignItems={'center'} p={2} >
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1} mr={'auto'}>
            Группы
          </Typography>
          <MuiButton endIcon={<>
            <svg width="6" height="12" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.666016 8L2.81445 4.77735C2.92642 4.6094 2.92642 4.3906 2.81445 4.22265L0.666015 1" stroke="#ABB0B2" strokeLinecap="round"/>
            </svg>
          </>}>
            <Typography textTransform={'none'} color={'#ABB0B2'} fontWeight={400} fontSize={'14px'} fontFamily={'Gilroy'}>
              Все Группы
            </Typography>
          </MuiButton>
        </Grid>
      </Grid>
      <Grid>
        <Grid item pl={2} pr={2} width={'100%'}>
          <SectionPreview isPinned variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isGray variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pl={2} pr={2} width={'100%'} pt={2}>
          <SectionPreview isGray variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
      </Grid>
      <Grid pt={3}>
        <Grid item display={'flex'} alignItems={'center'} p={2} >
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1} mr={'auto'}>
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
      </Grid>
      <Grid item container direction={'row'} wrap={'nowrap'} maxWidth={'100%'} pl={2} pr={2} overflow={'scroll'}>
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
      <Grid pt={3}>
        <Grid item display={'flex'} alignItems={'center'} p={2} >
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1} mr={'auto'}>
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
      </Grid>
      <Grid item container direction={'row'} wrap={'nowrap'} maxWidth={'100%'} pl={2} pr={2} overflow={'scroll'}>
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
      <Grid pt={3}>
        <Grid item display={'flex'} alignItems={'center'} p={2}>
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1}>
            Подписки календарь
          </Typography>
        </Grid>
      </Grid>
      <Grid item pl={2} pr={2} width={'100%'}>
        <Options options={notificationsOptions} value={targetNotificationOption.value} setValue={setTargetNotificationOption} isOutlined isScrollable/>
      </Grid>
      <Grid container direction={'column'} pt={2}>
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
    </Grid>
  );
};

export default User;
