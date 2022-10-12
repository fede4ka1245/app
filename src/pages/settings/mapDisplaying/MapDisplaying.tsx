import React, { useState } from 'react';
import PlanetBackground from '../../../components/planetBackground/PlanetBackground';
import { Grid, Typography } from '@mui/material';
import ButtonBack from '../../../components/buttonBack/ButtonBack';
import ButtonSave from '../../../components/buttonSave/ButtonSave';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button/Button';
import { ButtonType } from '../../../components/button/ButtonProps';
import { graxaDisplaying } from './helpers/graxaDisplaying';
import { languages } from './helpers/languages';
import { mapStyles } from './helpers/mapStyles';
import { mapsHelpers } from './helpers/mapsHelpers';
import Options from '../../../components/options/Options';
import Divider from '../../../components/divider/Divider';
import Switch from '../../../components/switch/Switch';
import { useHideNavbar } from '../../../hooks/useHideNavbar';

const MapDisplaying = () => {
  const navigate = useNavigate();
  const [targetLanguage, setTargetLanguage] = useState(languages[0]);
  const [targetMapStyle, setTargetMapStyle] = useState(mapStyles[0]);
  const [targetMapHelper, setTargetMapHelper] = useState(mapsHelpers[0]);
  const [targetGraxaDisplaying, setTargetGraxaDispaying] = useState(graxaDisplaying[0]);

  useHideNavbar();

  return (
    <>
      <PlanetBackground />
      <Grid container pr={4} pl={4} pt={5} pb={5} rowSpacing={2}>
        <Grid item container alignItems={'center'} justifyContent={'space-between'}>
          <Grid item>
            <ButtonBack label={'Настройки'} onClick={() => navigate(-1)}/>
          </Grid>
          <Grid item>
            <ButtonSave onClick={() => console.log(123)}/>
          </Grid>
        </Grid>
        <Grid item pt={2}>
          <Typography fontFamily={'Playfair Display'} fontWeight={'bold'} fontSize={24} color={'white'}
            textAlign={'left'}>
            Настройки отображения
          </Typography>
        </Grid>
        <Grid item container direction={'column'}>
          <Grid item>
            <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
              Стиль начертания карты
            </Typography>
          </Grid>
          <Grid item pt={1}>
            <Options options={mapStyles} value={targetMapStyle.value} setValue={setTargetMapStyle}/>
          </Grid>
          <Grid item pt={2}>
            <Divider color={'#37366B'}/>
          </Grid>
        </Grid>
        <Grid item container direction={'column'}>
          <Grid item>
            <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
              Язык наименований на карте
            </Typography>
          </Grid>
          <Grid item pt={1}>
            <Options options={languages} value={targetLanguage.value} setValue={setTargetLanguage}/>
          </Grid>
          <Grid item pt={2}>
            <Divider color={'#37366B'}/>
          </Grid>
        </Grid>
        <Grid item container direction={'column'}>
          <Grid item>
            <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
              Вспомогательные элементы
            </Typography>
          </Grid>
          <Grid item pt={1}>
            <Options options={mapsHelpers} value={targetMapHelper.value} setValue={setTargetMapHelper}/>
          </Grid>
          <Grid item pt={2}>
            <Divider color={'#37366B'}/>
          </Grid>
        </Grid>
        <Grid item container direction={'column'}>
          <Grid item>
            <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
              Отображение ретроградности грахи
            </Typography>
          </Grid>
          <Grid item pt={1}>
            <Options options={graxaDisplaying} value={targetGraxaDisplaying.value} setValue={setTargetGraxaDispaying}/>
          </Grid>
          <Grid item pt={2}>
            <Divider color={'#37366B'}/>
          </Grid>
        </Grid>
        <Grid item container direction={'column'}>
          <Grid item container direction={'row'} justifyContent={'space-between'}>
            <Grid item>
              <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
                Земля
              </Typography>
            </Grid>
            <Grid item>
              <Switch defaultChecked/>
            </Grid>
          </Grid>
          <Grid item pt={2}>
            <Divider color={'#37366B'}/>
          </Grid>
        </Grid>
        <Grid item container direction={'column'}>
          <Grid item container direction={'row'} justifyContent={'space-between'}>
            <Grid item>
              <Typography fontFamily={'Gilroy'} fontWeight={600} fontSize={16} color={'white'} textAlign={'left'}>
                Показ звезд
              </Typography>
            </Grid>
            <Grid item>
              <Switch defaultChecked />
            </Grid>
          </Grid>
        </Grid>
        <Grid item width={'100%'}>
          <Button type={ButtonType.gradient} text={'Сохранить изменеия'}/>
        </Grid>
      </Grid>
    </>
  );
};

export default MapDisplaying;
