import React, { useCallback, useState } from 'react';
import styles from './Buttons.module.scss';
import folder from './assets/folder.svg';
import home from './assets/home.svg';
import pen from './assets/pen.svg';
import send from './assets/send.svg';
import share from './assets/share.svg';
import settings from './assets/settings.svg';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../../models/enums/routes';
import SettingsModal from '../../../../components/settingsModal/SettingsModal';
import EditHoroscopeModal from '../editHoroscopeModal/EditHoroscopeModal';

const Buttons = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate(routes.astrologicalProcessor);
  };

  const toggleSettingsModal = useCallback(() => {
    setIsSettingsModalOpen(!isSettingsModalOpen);
  }, [isSettingsModalOpen]);

  const toggleEditModal = useCallback(() => {
    setIsEditModalOpen(!isEditModalOpen);
  }, [isEditModalOpen]);

  return (
    <Grid container direction={'row'} justifyContent={'space-between'} width={'100%'}>
      <Grid item>
        <div className={styles.button} onClick={onHomeClick}>
          <img alt='home' src={home}/>
        </div>
      </Grid>
      <Grid item>
        <div className={styles.button} onClick={toggleSettingsModal}>
          <img alt='plus' src={settings}/>
        </div>
        <SettingsModal isOpen={isSettingsModalOpen} close={toggleSettingsModal} />
      </Grid>
      <Grid item>
        <div className={styles.button} onClick={toggleEditModal}>
          <img alt='pen' src={pen}/>
        </div>
        <EditHoroscopeModal isEditModalOpen={isEditModalOpen} toggleEditModal={toggleEditModal} />
      </Grid>
      <Grid item>
        <div className={styles.button}>
          <img alt='folder' src={folder}/>
        </div>
      </Grid>
      <Grid item pl={5}>
        <div className={styles.button}>
          <img alt='share' src={share}/>
        </div>
      </Grid>
      <Grid item>
        <div className={styles.button}>
          <img alt='chat' src={send}/>
        </div>
      </Grid>
    </Grid>
  );
};

export default Buttons;
