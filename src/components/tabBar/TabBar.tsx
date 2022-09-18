import React, { useCallback, useState, useEffect } from 'react';
import styles from './TabBar.module.scss';
import { Grid } from '@mui/material';
import home from './images/home.svg';
import add from './images/add.png';
import list from './images/list.svg';
import messenger from './images/messenger.svg';
import astrologicalProcessor from './images/astrologicalProcessor.svg';
import Modal from '../modal/Modal';
import background from './images/galaxyBackground.png';
import TransparentButton from '../transparentButton/TransparentButton';
import courses from '../../pages/menu/images/courses.svg';
import forum from '../../pages/menu/images/forum.svg';
import calendar from '../../pages/menu/images/calendar.svg';
import close from './images/close.svg';

const TabBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    document.body.style.paddingBottom = '90px';

    return () => {
      document.body.style.paddingBottom = '0px';
    };
  }, []);

  return (
    <div className={styles.tabBar}>
      <Grid
        container
        direction={'row'}
        height={'100%'}
        width={'100%'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Grid item>
          <img src={home} alt='home'/>
        </Grid>
        <Grid item>
          <img src={astrologicalProcessor} alt='astrologicalProcessor'/>
        </Grid>
        <Grid item>
          <img src={add} alt='add' width={50} height={50} onClick={toggleModal}/>
        </Grid>
        <Grid item>
          <img src={list} alt='list'/>
        </Grid>
        <Grid item>
          <img src={messenger} alt='messenger'/>
        </Grid>
      </Grid>
      <Modal isOpen={isModalOpen} close={toggleModal} height={'455px'}>
        <Grid container justifyContent={'space-between'} pl={3} pr={3} pt={4} position={'relative'}>
          <Grid item width={'calc(50% - 10px)'} pb={2}>
            <TransparentButton image={<img src={courses}/>} label={'Новая тема'} onClick={() => {}} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'} pb={2}>
            <TransparentButton image={<img src={forum}/>} label={'Создать группу'} onClick={() => {}} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'}>
            <TransparentButton image={<img src={calendar}/>} label={'Новый гороскоп'} onClick={() => {}} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'}>
            <TransparentButton image={<img src={calendar}/>} label={'Написать в школу'} onClick={() => {}} isSquare={true}/>
          </Grid>
        </Grid>
        <img onClick={toggleModal} src={close} width={25} height={25} style={{ position: 'absolute', left: 'calc(50% - 12.5px)', bottom: '20px' }}/>
        <img src={background} width={'100%'} height={'100%'} style={{ margin: 0, padding: 0, overflow: 'hidden', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}/>
      </Modal>
    </div>
  );
};

export default TabBar;
