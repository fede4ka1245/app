import React, { useCallback, useState } from 'react';
import UserHeader from '../../components/userHeader/UserHeader';
import { Checkbox, FormControlLabel, Grid, Skeleton, Typography, FormGroup } from '@mui/material';
import ButtonBack from '../../components/buttonBack/ButtonBack';
import Input from '../../components/input/Input';
import { InputType } from '../../components/input/InputType';
import ButtonAdd from '../../components/buttonAdd/ButtonAdd';
import Divider from '../../components/divider/Divider';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import MuiButton from '@mui/material/Button';
import addPerson from './assets/addPerson.svg';
import load from './assets/load.svg';
import Topics from './components/topics/Topics';
import TextGradient from '../../components/textGradient/TextGradient';
import GradientButton from '../../components/gradientButton/GradientButton';
import Drafts from './components/drafts/Drafts';
import UserLink from '../../components/userLink/UserLink';
import { useHideNavbar } from '../../hooks/useHideNavbar';
import Background from '../../components/background/Background';

const CreateTopic = () => {
  const [isHoroscopesModalActive, setIsHoroscopesModalActive] = useState(false);
  const [isDraftsOpen, setIsDraftsOpen] = useState(false);

  const toggleIsDraftsOpen = useCallback(() => {
    setIsDraftsOpen(!isDraftsOpen);
  }, [isDraftsOpen]);

  const navigate = useNavigate();

  const onButtonBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const toggleIsHoroscopeModalActive = useCallback(() => {
    setIsHoroscopesModalActive(!isHoroscopesModalActive);
  }, [isHoroscopesModalActive]);

  const [isInviteUserModalActive, setIsInviteUsersModalActive] = useState(false);

  const toggleIsInviteUsersModalActive = useCallback(() => {
    setIsInviteUsersModalActive(!isInviteUserModalActive);
  }, [isInviteUserModalActive]);

  useHideNavbar();

  return (
    <>
      <Background background={'#F0F0F3'} />
      <UserHeader />
      <Grid container direction={'column'} pl={2} pr={2}>
        <Grid item>
          <ButtonBack color={'#37366B'} label={'Назад'} onClick={onButtonBackClick} />
        </Grid>
        <Grid item container justifyContent={'space-between'} pt={2}>
          <Grid item>
            <Typography fontFamily={'Playfair Display'} fontWeight={700} fontSize={'18px'} color={'#292E30'}>
              Новая тема
            </Typography>
          </Grid>
          <Grid item>
            <Typography onClick={toggleIsDraftsOpen} fontFamily={'Playfair Display'} fontWeight={700} fontSize={'18px'} color={'#292E30'}>
              Черновики
            </Typography>
            <Drafts isOpen={isDraftsOpen} close={toggleIsDraftsOpen}/>
          </Grid>
        </Grid>
        <Grid item pt={2}>
          <Input inputType={InputType.options} placeholder={'Выберите категорию/подкатегорию'}/>
        </Grid>
        <Grid item pt={2}>
          <Input inputType={InputType.options} placeholder={'Название темы'}/>
        </Grid>
        <Grid item pt={2}>
          <Input inputType={InputType.textarea} placeholder={'Сообщение'}/>
        </Grid>
        <Grid item pt={2}>
          <ButtonAdd onClick={toggleIsHoroscopeModalActive}>
            Добавить гороскоп
          </ButtonAdd>
          <Modal isOpen={isHoroscopesModalActive} close={toggleIsHoroscopeModalActive}>
            <Grid container direction={'column'} pl={2} pr={2} pt={3}>
              <Grid item pb={2}>
                <Typography
                  sx={{
                    background: 'linear-gradient(268.23deg, #37366B 2.7%, #5C5B9F 44.59%, #59ABDA 99.71%), #C4C4C4',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                  fontFamily={'Gilroy'}
                  textAlign={'center'}
                  textTransform={'uppercase'}
                  fontWeight={'bold'}
                >
                  Сохраненные гороскопы
                </Typography>
              </Grid>
              {Array.from({ length: 3 }).map((_, index) => (
                <Grid key={index} pb={1}>
                  <Skeleton height={'60px'} variant={'rectangular'} width={'100%'} />
                </Grid>
              ))}
              <Grid pt={1} pb={1}>
                <GradientButton>
                  Готово
                </GradientButton>
              </Grid>
            </Grid>
          </Modal>
        </Grid>
      </Grid>
      <Topics />
      <Grid container direction={'column'} pl={2} pr={2}>
        <Grid item pt={4}>
          <Divider color={'#D9D9D9'} />
        </Grid>
        <Grid item pt={2}>
          <ButtonAdd>
            Настройки темы
          </ButtonAdd>
        </Grid>
        <Grid item pt={2} pl={'13px'}>
          <FormGroup>
            <FormControlLabel disabled control={<Checkbox sx={{ padding: '2px' }} />} label="Разрешить делать прогнозы" />
            <FormControlLabel disabled control={<Checkbox sx={{ padding: '2px' }} />} label="Приватнаятема" />
          </FormGroup>
        </Grid>
        <Grid item pt={2}>
          <MuiButton startIcon={<img src={load}/>} disableRipple>
            <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'16px'} color={'#37366B'} textTransform={'none'}>
              Загрузить изображение
            </Typography>
          </MuiButton>
          <MuiButton startIcon={<img src={addPerson}/>} disableRipple onClick={toggleIsInviteUsersModalActive}>
            <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'16px'} color={'#37366B'} textTransform={'none'}>
              Пригласить пользователей
            </Typography>
          </MuiButton>
          <Modal isOpen={isInviteUserModalActive} close={toggleIsInviteUsersModalActive}>
            <Grid container direction={'column'} pl={2} pr={2} pt={3}>
              <Grid item pb={2}>
                <TextGradient
                  textAlign={'center'}
                  textTransform={'uppercase'}
                  fontWeight={'bold'}
                >
                  Раздать приглашения
                </TextGradient>
              </Grid>
              {Array.from({ length: 3 }).map((_, index) => (
                <Grid key={index} pb={1}>
                  <UserLink isCeckbox />
                </Grid>
              ))}
              <Grid pt={1} pb={1}>
                <GradientButton>
                  Готово
                </GradientButton>
              </Grid>
            </Grid>
          </Modal>
        </Grid>
        <Grid item pt={3} pl={6} pr={6}>
          <Button text={'Выпустить тему'}/>
        </Grid>
        <Grid item pt={3} pl={6} pr={6} pb={3}>
          <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'18px'} color={'black'} textAlign={'center'}>
            Сохранить в черновик
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateTopic;
