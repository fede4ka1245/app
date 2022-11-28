import React from 'react';
import { FormControlLabel, Grid, RadioGroup, Typography } from '@mui/material';
import PlanetBackground from '../../../components/planetBackground/PlanetBackground';
import ButtonBack from '../../../components/buttonBack/ButtonBack';
import { useNavigate } from 'react-router-dom';
import ButtonSave from '../../../components/buttonSave/ButtonSave';
import Button from '../../../components/button/Button';
import { ButtonType } from '../../../components/button/ButtonProps';
import Divider from '../../../components/divider/Divider';
import Radio from '../../../components/radio/Radio';
import FormLabel from '../../../components/formLabel/FormLabel';
import { useHideNavbar } from '../../../hooks/useHideNavbar';

const Main = () => {
  const navigate = useNavigate();

  useHideNavbar();

  return (
    <Grid position={'relative'}>
      <PlanetBackground/>
      <Grid item container alignItems={'center'} justifyContent={'space-between'} p={2}>
        <Grid item>
          <ButtonBack label={'Настройки'} onClick={() => navigate(-1)}/>
        </Grid>
        <Grid item>
          <ButtonSave onClick={() => console.log(123)}/>
        </Grid>
      </Grid>
      <Grid item pt={2} p={2}>
        <Typography fontFamily={'Playfair Display'} fontWeight={'bold'} fontSize={24} color={'white'}
          textAlign={'left'}>
            Основные настройки
        </Typography>
      </Grid>
      <Grid item container direction={'column'} p={2}>
        <Grid item>
          <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
              Длина года
          </Typography>
        </Grid>
        <Grid item>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="1"
            name="radio-buttons-group"
            value="1"
          >
            <FormControlLabel value="1" control={<Radio/>} label={<FormLabel label={'Средний сидерический год'}/>}/>
            <FormControlLabel disabled value="2" control={<Radio/>} label={<FormLabel label={'Средний тропический год'}/>}/>
            <FormControlLabel disabled value="3" control={<Radio/>} label={<FormLabel label={'Савана (360 дней)'}/>}/>
            <FormControlLabel disabled value="4" control={<Radio/>} label={<FormLabel label={'360 титхи'}/>}/>
          </RadioGroup>
        </Grid>
        <Grid item pt={2}>
          <Divider color={'#37366B'}/>
        </Grid>
      </Grid>
      <Grid item container direction={'column'} p={2}>
        <Grid item>
          <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
              Количество ЧАРА-КАРАК
          </Typography>
        </Grid>
        <Grid item pt={1}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="1"
            name="radio-buttons-group"
          >
            <FormControlLabel value="1" control={<Radio/>} label={<FormLabel label={'7 карак (АК, АмК, БК, МК, ПК, ГК, ДК)'}/>}/>
            <FormControlLabel disabled value="2" control={<Radio/>} label={<FormLabel label={'8 карак (АК, АмК, БК, ПиК, ПК, ГК, ДК)'}/>}/>
          </RadioGroup>
        </Grid>
        <Grid item pt={2}>
          <Divider color={'#37366B'}/>
        </Grid>
      </Grid>
      <Grid item container direction={'column'} p={2}>
        <Grid item>
          <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
              Расчет АРУДХ
          </Typography>
        </Grid>
        <Grid item pt={1}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="1"
            name="radio-buttons-group"
          >
            <FormControlLabel value="1" control={<Radio/>} label={<FormLabel label={'Согласно К.Н. Рао'} subLabel={'(Без исключений)'}/>}/>
            <FormControlLabel value="2" control={<Radio/>} label={<FormLabel label={'Согласно С. Ратху'} subLabel={'(С исключениями)'}/>}/>
            <FormControlLabel value="3" control={<Radio/>} label={<FormLabel label={'Согласно И. Рангачарьи'} subLabel={'(С исключениями для мутабельных раши)'} />}/>
            <FormControlLabel value="4" control={<Radio/>} label={<FormLabel label={'Согласно Шри Джйотиш Акубенсу'} subLabel={'(С исключениями для мутабельных раши (модифицированный метод))'}/>}/>
          </RadioGroup>
        </Grid>
        <Grid item pt={2}>
          <Divider color={'#37366B'}/>
        </Grid>
      </Grid>
      <Grid item container direction={'column'} p={2}>
        <Grid item>
          <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
              Значение узлов
          </Typography>
        </Grid>
        <Grid item container direction={'row'}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="1"
            name="radio-buttons-group"
            row
            sx={{ display: 'flex', width: '100%' }}
          >
            <FormControlLabel sx={{ flex: 1 }} value="1" control={<Radio/>} label={<FormLabel label={'Истинные'}/>}/>
            <FormControlLabel sx={{ flex: 1 }} disabled value="2" control={<Radio/>} label={<FormLabel label={'Ложные'}/>}/>
          </RadioGroup>
        </Grid>
        <Grid item pt={2}>
          <Divider color={'#37366B'}/>
        </Grid>
      </Grid>
      <Grid item width={'100%'} p={2}>
        <Button type={ButtonType.gradient} text={'Сохранить изменеия'}/>
      </Grid>
    </Grid>
  );
};

export default Main;
