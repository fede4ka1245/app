import React, { useCallback, useState } from 'react';
import Modal from '../modal/Modal';
import Main from '../../pages/settings/main/Main';
import MapDisplaying from '../../pages/settings/mapDisplaying/MapDisplaying';
import { Grid } from '@mui/material';
import Button from '../button/Button';
import ButtonClose from '../buttonClose/ButtonClose';

interface SettingsModalProps {
  isOpen: boolean,
  close: () => any,
}

const SettingsModal = ({ isOpen, close }: SettingsModalProps) => {
  const [isMainSettingsModalOpen, setIsMainSettingsModalOpen] = useState(false);
  const [isMapDisplayingOpen, setIsMapDisplayingOpen] = useState(false);

  const toggleMainSettingsModal = useCallback(() => {
    setIsMainSettingsModalOpen(!isMainSettingsModalOpen);
    close();
  }, [isMainSettingsModalOpen, close]);

  const toggleMapDisplaying = useCallback(() => {
    setIsMapDisplayingOpen(!isMapDisplayingOpen);
    close();
  }, [isMapDisplayingOpen, close]);

  return (
    <div>
      <Modal isOpen={isOpen} close={close} height={'190px'}>
        <Grid container direction={'column'} p={2}>
          <Grid pb={2}>
            <Button text={'Основные'} onClick={toggleMainSettingsModal} />
          </Grid>
          <Grid>
            <Button text={'Отображение карт'} onClick={toggleMapDisplaying} />
          </Grid>
        </Grid>
      </Modal>
      <Modal isOpen={isMainSettingsModalOpen} close={toggleMainSettingsModal} height={'calc(100vh - 100px)'}>
        <Grid position={'absolute'} right={'10px'} top={'10px'} zIndex={4}>
          <ButtonClose onClick={toggleMainSettingsModal} />
        </Grid>
        <Main closeSettings={toggleMainSettingsModal}/>
      </Modal>
      <Modal isOpen={isMapDisplayingOpen} close={toggleMapDisplaying} height={'calc(100vh - 100px)'}>
        <Grid position={'absolute'} right={'10px'} top={'10px'} zIndex={4}>
          <ButtonClose onClick={toggleMapDisplaying} />
        </Grid>
        <MapDisplaying closeSettings={toggleMapDisplaying}/>
      </Modal>
    </div>
  );
};

export default SettingsModal;
