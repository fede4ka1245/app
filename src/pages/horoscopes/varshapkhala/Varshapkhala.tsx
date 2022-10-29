import React, { useCallback, useState } from 'react';
import YearPicker from '../../../components/yearPicker/YearPicker';
import { Grid, IconButton, Typography } from '@mui/material';
import Button from '../../../components/button/Button';
import planet from './img.png';
import { getVarshpahala } from '../../../api/getVarshpahala';
import {
  useGetDashiTable,
  useGetHoroscopeUserInfo, useGetIsVarshpahalaLoading, useGetRashiTable,
  useGetUserName, useGetYearMaster,
  useGetYearMasterTable,
  useGetYogasTable
} from '../../../store/selectors';
import PlanetsTable from '../../../components/planetsTable/PlanetsTable';
import { useAppDispatch } from '../../../store/store';
import {
  setDashiTable,
  setIsVarshpahalaLoading,
  setYearMasterTable,
  setYogasTable,
  setYearMaster, setRashiTable
} from '../../../store/reducers/varshpahalaReducer';
import YogasTable from '../../../components/yogasTable/YogasTable';
import Header from '../../../components/header/Header';
import Modal from '../../../components/modal/Modal';
import YearMasterTable from './yearMasterTable/YearMasterTable';
import HoroscopesLoader from '../components/horoscopeLoader/HoroscopesLoader';
import RashiTable from './rashiTable/RashiTable';

const Varshapkhala = () => {
  const name = useGetUserName();
  const { latitude, longitude, date, time } = useGetHoroscopeUserInfo();
  const dashiTable = useGetDashiTable();
  const yogasTable = useGetYogasTable();
  const yearMasterTable = useGetYearMasterTable();
  const isVarshpahalaLoading = useGetIsVarshpahalaLoading();
  const dispatch = useAppDispatch();
  const [isYearMasterModalOpen, setIsYearMasterModalOpen] = useState(false);
  const [year, setYear] = useState(2022);
  const yearMaster = useGetYearMaster();

  const onCreateHoroscopeClick = useCallback(() => {
    dispatch(setIsVarshpahalaLoading(true));

    getVarshpahala({
      userName: name || '',
      latitude,
      longitude,
      date: `01.01.${year}`,
      time
    }).then((result) => {
      console.log(result.rashiTable);
      dispatch(setDashiTable(result.dashiTable));
      dispatch(setRashiTable(result.rashiTable));
      dispatch(setYogasTable(result.yogasTable));
      dispatch(setYearMasterTable(result.yearMasterTable));
      dispatch(setYearMaster(result.yearMaster));
    }).finally(() => {
      dispatch(setIsVarshpahalaLoading(false));
    });
  }, [year]);

  const toggleYearMasterModal = useCallback(() => {
    setIsYearMasterModalOpen(!isYearMasterModalOpen);
  }, [isYearMasterModalOpen]);

  return (
    <Grid container direction={'column'} position='relative'>
      {isVarshpahalaLoading && <HoroscopesLoader/>}
      {!dashiTable.length && !isVarshpahalaLoading && (
        <>
          <img
            src={planet}
            height={'582px'}
            width={'100%'}
            style={{ objectFit: 'cover', position: 'absolute', opacity: 0.5, zIndex: -1, overflowY: 'visible', top: '-250px' }}
          />
          <Grid item pt={'30px'} pb={'30px'}>
            <YearPicker setYear={setYear} />
          </Grid>
          <Grid pr={'30px'} pl={'30px'}>
            <Button text={'Построить гороскоп'} onClick={onCreateHoroscopeClick}/>
          </Grid>
        </>
      )}
      {!!dashiTable.length && !isVarshpahalaLoading && (
        <>
          <Grid item paddingTop={2}>
            <RashiTable />
          </Grid>
          <Grid item paddingTop={4} pl={2} pr={2} fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={'700'} color={'white'}>
            <Button text={'Определить хозяина года'} onClick={toggleYearMasterModal} />
            <Modal isOpen={isYearMasterModalOpen} close={toggleYearMasterModal} height={'360px'}>
              <Grid pl={2} pt={1} pr={1} ml={'auto'} display={'flex'} width={'100%'}>
                <Typography color={'#292E30'} fontWeight={700} fontFamily={'Gilroy'} fontSize={'20px'} mr={'auto'}>
                  Хозяин года - {yearMaster}
                </Typography>
                <IconButton onClick={toggleYearMasterModal}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.58398 1.58334L14.4173 14.4167" stroke="#C3C9CD" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14.416 1.58334L1.58268 14.4167" stroke="#C3C9CD" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </IconButton>
              </Grid>
              <Grid item>
                <YearMasterTable rows={yearMasterTable} />
              </Grid>
            </Modal>
          </Grid>
          <Grid item paddingTop={2} pl={2} fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={'700'} color={'white'}>
            Йоги варшапхала
          </Grid>
          <Grid item paddingTop={3}>
            <YogasTable rows={yogasTable}/>
          </Grid>
          <Grid item paddingTop={2} pl={2}>
            <Header header={'Периоды (Даши)'}/>
          </Grid>
          <Grid item paddingTop={3}>
            <PlanetsTable rows={dashiTable}/>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Varshapkhala;
