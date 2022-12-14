import React, { useCallback, useMemo, useState } from 'react';
import YearPicker from '../../../components/yearPicker/YearPicker';
import { Grid, Typography } from '@mui/material';
import Button from '../../../components/button/Button';
import planet from './img.png';
import { getVarshpahala } from '../../../api/getVarshpahala';
import {
  useGetDashiTable,
  useGetHoroscopeUserInfo,
  useGetIsVarshpahalaLoading,
  useGetIsYearPickerActive,
  useGetVarshpahalaDate, useGetVarshpahalaMuntkha,
  useGetVarshpahalaRashiTable,
  useGetYearMaster,
  useGetYearMasterTable,
  useGetYogasTable
} from '../../../store/selectors';
import DashiTable from '../../../components/dashiTable/DashiTable';
import { useAppDispatch } from '../../../store/store';
import {
  setDashiTable,
  setIsVarshpahalaLoading,
  setYearMasterTable,
  setYogasTable,
  setYearMaster, setVarshpahalaRashiTable, setIsYearPickerActive, setVarshpahalaMaps, setMuntkha, setVarshpahalaDate
} from '../../../store/reducers/varshpahalaReducer';
import YogasTable from '../../../components/yogasTable/YogasTable';
import Header from '../../../components/header/Header';
import Modal from '../../../components/modal/Modal';
import YearMasterTable from './yearMasterTable/YearMasterTable';
import HoroscopesLoader from '../components/horoscopeLoader/HoroscopesLoader';
import RashiTable from '../../../components/rashiTable/RashiTable';
import ButtonBack from '../../../components/buttonBack/ButtonBack';
import ButtonClose from '../../../components/buttonClose/ButtonClose';
import { RashiTableParts } from '../../../models/types/RashiTable';

const Varshapkhala = () => {
  const { latitude, longitude, time, userName, date, hours, greenwich, minutes } = useGetHoroscopeUserInfo();
  const dashiTable = useGetDashiTable();
  const yogasTable = useGetYogasTable();
  const yearMasterTable = useGetYearMasterTable();
  const isVarshpahalaLoading = useGetIsVarshpahalaLoading();
  const dispatch = useAppDispatch();
  const [isYearMasterModalOpen, setIsYearMasterModalOpen] = useState(false);
  const [year, setYear] = useState(2022);
  const yearMaster = useGetYearMaster();
  const isYearPickerActive = useGetIsYearPickerActive();
  const rashiTable = useGetVarshpahalaRashiTable();
  const horoscopeDate = useGetVarshpahalaDate();
  const muntkha = useGetVarshpahalaMuntkha();

  const [isYogasModalOpen, setIsYogasModalOpen] = useState(false);

  const toggleIsYogasModalOpen = useCallback(() => {
    setIsYogasModalOpen(!isYogasModalOpen);
  }, [isYogasModalOpen]);

  const toggleIsYearPickerActive = useCallback(() => {
    dispatch(setIsYearPickerActive(!isYearPickerActive));
  }, [isYearPickerActive]);

  const table = useMemo(() => {
    return rashiTable.find((rashiTableItem) => rashiTableItem.tableName === 'D-1')?.table as RashiTableParts;
  }, [rashiTable]);

  const onCreateHoroscopeClick = useCallback(() => {
    dispatch(setIsVarshpahalaLoading(true));

    getVarshpahala({
      userName,
      latitude,
      longitude,
      date,
      time,
      year,
      hours,
      greenwich,
      minutes
    }).then((result) => {
      dispatch(setDashiTable(result.dashiTable));
      dispatch(setVarshpahalaRashiTable(result.rashiTable));
      dispatch(setYogasTable(result.yogasTable));
      dispatch(setYearMasterTable(result.yearMasterTable));
      dispatch(setYearMaster(result.yearMaster));
      dispatch(setVarshpahalaMaps(result.varshpahalaMaps));
      dispatch(setMuntkha(result.muntkha));
      dispatch(setVarshpahalaDate(result.horoscopeDate));
      toggleIsYearPickerActive();
    }).finally(() => {
      dispatch(setIsVarshpahalaLoading(false));
    });
  }, [userName, year, time, latitude, longitude, toggleIsYearPickerActive, dispatch, date]);

  const toggleYearMasterModal = useCallback(() => {
    setIsYearMasterModalOpen(!isYearMasterModalOpen);
  }, [isYearMasterModalOpen]);

  return (
    <Grid container direction={'column'} position='relative'>
      {isVarshpahalaLoading && <HoroscopesLoader/>}
      {isYearPickerActive && !isVarshpahalaLoading && (
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
          <Grid pr={'30px'} pl={'30px'} pb={3}>
            <Button text={'?????????????????? ????????????????'} onClick={onCreateHoroscopeClick}/>
          </Grid>
        </>
      )}
      {!isYearPickerActive && !isVarshpahalaLoading && (
        <>
          <Grid item padding={1}>
            <ButtonBack label={'?????????????????? ?? ???????????? ????????'} onClick={toggleIsYearPickerActive} />
          </Grid>
          <Typography color={'white'} width={'100%'} fontWeight={700} fontFamily={'Gilroy'} fontSize={'20px'} mr={'auto'} pb={2} textAlign={'center'}>
            {horoscopeDate}
          </Typography>
          <Grid item>
            <RashiTable table={table} />
          </Grid>
          <Grid item paddingTop={2} pl={2} pr={2} fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={'700'} color={'white'}>
            <Typography color={'white'} width={'100%'} fontWeight={700} fontFamily={'Gilroy'} fontSize={'20px'} mr={'auto'} pb={2} textAlign={'center'}>
              ???????????? - ?? {muntkha} ????????
            </Typography>
            <Button text={'???????????????????? ?????????????? ????????'} onClick={toggleYearMasterModal} />
            <Modal isOpen={isYearMasterModalOpen} close={toggleYearMasterModal} height={'360px'}>
              <Grid pl={2} pt={1} pr={1} ml={'auto'} display={'flex'} width={'100%'}>
                <Typography color={'#292E30'} fontWeight={700} fontFamily={'Gilroy'} fontSize={'20px'} mr={'auto'}>
                  ???????????? ???????? - {yearMaster}
                </Typography>
                <ButtonClose onClick={toggleYearMasterModal} />
              </Grid>
              <Grid item>
                <YearMasterTable rows={yearMasterTable} />
              </Grid>
            </Modal>
          </Grid>
          <Grid item paddingTop={2} pl={2} onClick={toggleIsYogasModalOpen}>
            <Header header={'???????? ????????????????????'} />
            <Modal isOpen={isYogasModalOpen} close={toggleIsYogasModalOpen}>

            </Modal>
          </Grid>
          <Grid item paddingTop={2}>
            <YogasTable rows={yogasTable}/>
          </Grid>
          <Grid item paddingTop={2} pl={2}>
            <Header header={'?????????? ????????'}/>
          </Grid>
          <Grid item paddingTop={3}>
            <DashiTable rows={dashiTable.slice(0, 9)}/>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Varshapkhala;
