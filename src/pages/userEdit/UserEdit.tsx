import React from 'react';
import Background from '../../components/background/Background';
import { Button as MuiButton, Grid, ToggleButton, Typography } from '@mui/material';
import ProfilePhoto from '../../components/profilePhoto/ProfilePhoto';
import Input from '../../components/input/Input';
import { InputStyle } from '../../components/input/InputStyle';
import { InputType } from '../../components/input/InputType';
import UserHeader from '../../components/userHeader/UserHeader';
import ButtonBack from '../../components/buttonBack/ButtonBack';
import { useNavigate } from 'react-router-dom';
import plus from './assets/plus.png';
import Switch from '../../components/switch/Switch';
import Button from '../../components/button/Button';
import { ButtonType } from '../../components/button/ButtonProps';

const UserEdit = () => {
  const navigate = useNavigate();

  return (
    <>
      <Background background={'#f0f0f3'} />
      <UserHeader />
      <Grid container direction={'column'} pl={2} pr={2}>
        <Grid container>
          <Grid item>
            <ButtonBack color={'#37366b'} label={'назад'} onClick={() => navigate(-1)} />
          </Grid>
          <Grid item ml={'auto'} mr={'auto'}>
            <MuiButton>
              <Typography color={'black'} fontFamily={'Gilroy'} textTransform={'none'} fontWeight={500} fontSize={'14px'}>
                Предпросмотр
              </Typography>
            </MuiButton>
          </Grid>
          <Grid item>
            <MuiButton>
              <Typography color={'black'} fontFamily={'Gilroy'} textTransform={'none'} fontWeight={500} fontSize={'14px'}>
                Сохранить
              </Typography>
            </MuiButton>
          </Grid>
        </Grid>
        <Grid item pt={2}>
          <ProfilePhoto />
        </Grid>
        <Grid pt={2} item container width={'100%'} rowSpacing={2}>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Имя'}
              inputStyle={InputStyle.outlined}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Фамилия'}
              inputStyle={InputStyle.outlined}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Дата Рождения'}
              inputStyle={InputStyle.outlined}
              inputType={InputType.date}
            />
          </Grid>
        </Grid>
        <Grid item display={'flex'} alignItems={'center'} pt={2} pb={2}>
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1}>
            Контакты
          </Typography>
        </Grid>
        <Grid item container width={'100%'} rowSpacing={2}>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Телефон'}
              inputStyle={InputStyle.outlined}
              inputType={InputType.phone}
            />
          </Grid>
          <Grid item width={'100%'}>
            <Input
              placeholder={'Email'}
              inputStyle={InputStyle.outlined}
            />
          </Grid>
        </Grid>
        <Grid item display={'flex'} alignItems={'center'} pt={2} pb={2}>
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1}>
            Расскажите о себе
          </Typography>
        </Grid>
        <Grid>
          <Input inputStyle={InputStyle.outlined} inputType={InputType.textarea} placeholder={'Расскажите о себе пару предложений, \n' +
            'соблюдайте этику общения'}/>
        </Grid>
        <Grid item display={'flex'} alignItems={'center'} pt={2} pb={2}>
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1}>
            Добавить фото
          </Typography>
        </Grid>
        <Grid container justifyContent={'space-between'}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Grid sx={{ backgroundColor: '#c3c9cd' }} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'5px'} height={'180px'} width={'calc(33% - 5px)'} key={index}>
              <img src={plus} height={64} width={64} />
            </Grid>
          ))}
        </Grid>
        <Grid item display={'flex'} alignItems={'center'} pt={2} pb={2}>
          <Grid borderRadius={'50%'} height={'15px'} width={'15px'} sx={{ background: '#37366b' }} />
          <Typography color={'#37366b'} letterSpacing={'0.1em'} textTransform={'uppercase'} fontFamily={'Gilroy'} fontWeight={700} pl={1}>
            Добавить сертификаты
          </Typography>
        </Grid>
        <Grid container justifyContent={'space-between'}>
          {Array.from({ length: 2 }).map((_, index) => (
            <Grid sx={{ backgroundColor: '#c3c9cd' }} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'5px'} height={'100px'} width={'calc(50% - 5px)'} key={index}>
              <img src={plus} height={64} width={64} />
            </Grid>
          ))}
        </Grid>
        <Typography color={'black'} fontFamily={'Gilroy'} fontWeight={700} pt={2}>
          Отображение блоков в вашем профиле
        </Typography>
        <Grid pt={2}>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Сертификаты
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Активность на форуме
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Группы
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Друзья
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Подписчики
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
        </Grid>
        <Typography color={'black'} fontFamily={'Gilroy'} fontWeight={700} pt={2}>
          Уведомления
        </Typography>
        <Grid pt={2}>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Уведомления от пользователей
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Сертификаты
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Календарь
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Астропроцессор
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
          <Grid item container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={16} color={'black'} textAlign={'left'}>
              Форум
            </Typography>
            <Grid item>
              <Switch/>
            </Grid>
          </Grid>
        </Grid>
        <Grid pt={5}>
          <Button type={ButtonType.gradient} text={'Сохранить'}/>
        </Grid>
      </Grid>
    </>
  );
};

export default UserEdit;
