import React, { FC } from 'react';

// components
import UserHeader from '../../../components/userHeader/UserHeader';
import Contact from '../../../components/Contact';
import SectionPreview from '../../../components/sectionPreview';
import AstroForecast from './components/AstroForecast';
import Answer from './components/Answer';

// styles
import styles from './styles.module.scss';
import PageHeader from '../../../components/pageHeader/PageHeader';
import Background from '../../../components/background/Background';

const ChatList: FC = () => {
  return (
    <div className={styles.container}>
      <Background background={'#f0f0f3'} />
      <UserHeader/>
      <PageHeader page={'Чаты'}/>
      <div className={styles.list}>
        <div className={styles.list_item}>
          <Contact/>
        </div>
        <div className={styles.list_item}>
          <SectionPreview isPinned variant={'group'} header={'Карта Д - 10, что она означает...'} body={'Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.'}/>
        </div>
        <div className={styles.list_item}>
          <AstroForecast/>
        </div>
        <div className={styles.list_item}>
          <Answer/>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
