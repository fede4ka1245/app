import { useCallback, useState } from 'react';
import styles from './TabBar.module.scss';
import { Grid, IconButton } from '@mui/material';
import add from './images/add.png';
import Modal from '../modal/Modal';
import background from './images/galaxyBackground.png';
import TransparentButton from '../transparentButton/TransparentButton';
import courses from '../../pages/menu/images/courses.svg';
import forum from '../../pages/menu/images/forum.svg';
import calendar from '../../pages/menu/images/calendar.svg';
import close from './images/close.svg';
import Chats from './Chats';
import Courses from './Courses';
import Forum from './Forum';
import Processor from './Processor';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../models/enums/routes';
import { routes as chatsRoutes } from '../../pages/chats/routes';
import classNames from 'classnames';

const TabBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const onNewTopicClick = useCallback(() => {
    navigate(routes.createTopic);
    toggleModal();
  }, [toggleModal, navigate]);

  const onChatsClick = () => {
    navigate(routes.Chat);
  };

  const onProcessorClick = () => {
    navigate(routes.astrologicalProcessor);
  };

  const onForumClick = () => {
    navigate(routes.forum);
  };

  const onMenuClick = () => {
    navigate(routes.main);
  };

  const onGroupClick = () => {
    navigate(chatsRoutes.CreateChatGroup);
    toggleModal();
  };

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
          <IconButton onClick={onMenuClick} size={'large'}>
            <div className={classNames({ [styles.active]: location.pathname === routes.main })}>
              <Courses />
            </div>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onProcessorClick} size={'large'}>
            <div className={classNames({ [styles.active]: location.pathname.includes(routes.astrologicalProcessor) })}>
              <Processor />
            </div>
          </IconButton>
        </Grid>
        <Grid item>
          <img src={add} alt='add' width={50} height={50} onClick={toggleModal}/>
        </Grid>
        <Grid item>
          <IconButton onClick={onForumClick} size={'large'}>
            <div className={classNames({ [styles.active]: location.pathname.includes(routes.forum) })}>
              <Forum />
            </div>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onChatsClick} size={'large'}>
            <div className={classNames({ [styles.active]: location.pathname.includes(routes.Chat) })}>
              <Chats />
            </div>
          </IconButton>
        </Grid>
      </Grid>
      <Modal isOpen={isModalOpen} close={toggleModal} height={'455px'}>
        <Grid container justifyContent={'space-between'} pl={2} pr={2} pt={3} position={'relative'}>
          <Grid item width={'calc(50% - 10px)'} pb={2}>
            <TransparentButton image={<img src={courses}/>} label={'?????????? ????????'} onClick={onNewTopicClick} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'} pb={2}>
            <TransparentButton image={<img src={forum}/>} label={'?????????????? ????????????'} onClick={onGroupClick} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'}>
            <TransparentButton image={<img src={calendar}/>} label={'?????????? ????????????????'} onClick={() => {}} isSquare={true}/>
          </Grid>
          <Grid item width={'calc(50% - 10px)'}>
            <TransparentButton image={<img src={calendar}/>} label={'???????????????? ?? ??????????'} onClick={() => {}} isSquare={true}/>
          </Grid>
        </Grid>
        <img onClick={toggleModal} src={close} width={25} height={25} style={{ position: 'absolute', left: 'calc(50% - 12.5px)', bottom: '20px' }}/>
        <img src={background} width={'100%'} height={'100%'} style={{ margin: 0, padding: 0, overflow: 'hidden', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}/>
      </Modal>
    </div>
  );
};

export default TabBar;
