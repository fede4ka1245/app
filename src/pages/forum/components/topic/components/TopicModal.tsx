import React, { useEffect, useState } from 'react';
import Modal from '../../../../../components/modal/Modal';
import { ModalProps } from '../../../../../components/modal/ModalProps';
import { Grid, Typography } from '@mui/material';
import SectionPreview from '../../../../../components/sectionPreview';
import ButtonClose from '../../../../../components/buttonClose/ButtonClose';
import Tags from './Tags';
import Options from '../../../../../components/options/Options';
import search from '../assets/search.png';
import closeSrc from '../assets/close.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../../../../models/enums/routes';
import styles from '../Topic.module.scss';

interface TopicModalProps extends ModalProps {
  name: string,
  tags?: Array<string>,
  targetTag?: string,
  setTargetTag?: (props?: any) => any
}

const options = [
  {
    label: 'Популярные',
    value: 1
  },
  {
    label: 'Новые',
    value: 2
  },
  {
    label: 'С прогнозами',
    value: 3
  }
];

const TopicModal = ({ isOpen, close, tags, name, targetTag, setTargetTag }: TopicModalProps) => {
  const [targetOption, setTargetOption] = useState(options[0]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === routes.forum) {
      return;
    }

    close();
  }, [location]);

  return (
    <Modal isOpen={isOpen} close={close} height={'90vh'}>
      <Grid p={2} height={'100%'} sx={{ background: 'white' }}>
        <Grid position={'absolute'} top={'15px'} right={'15px'}>
          <ButtonClose onClick={close}/>
        </Grid>
        <Typography fontFamily={'Gilroy'} fontWeight={'bold'} fontSize={'18px'} textTransform={'uppercase'}>
          {name}
        </Typography>
        <Tags tags={tags} targetTag={targetTag} setTargetTag={setTargetTag} />
        <Grid className={styles.search} mt={2} mb={1}>
          <Grid pl={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img width={18} height={18} src={search} />
          </Grid>
          <input placeholder={'Введите фразу для поиска'}/>
          <Grid pr={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img width={18} height={18} src={closeSrc} />
          </Grid>
        </Grid>
        <Grid pt={1} container justifyContent={'space-between'}>
          <Options options={options} isOutlined value={targetOption.value} setValue={setTargetOption}/>
        </Grid>
        <Grid item pt={2} width={'100%'} onClick={() => navigate(routes.forumItem)}>
          <SectionPreview isPinned variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pt={2} width={'100%'} onClick={() => navigate(routes.forumItem)}>
          <SectionPreview isGray variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
        <Grid item pt={2} width={'100%'} onClick={() => navigate(routes.forumItem)}>
          <SectionPreview isGray variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default TopicModal;
