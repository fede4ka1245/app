import { FC } from 'react';

// components
import UserHeader from '../../../components/userHeader/UserHeader';
import Header from '../components/Header';
import Contact from './components/Contact';
import Group from './components/Group';
import AstroForecast from './components/AstroForecast';
import Answer from './components/Answer';

// styles
import styles from './styles.module.scss';

const ChatList: FC = () => {
  return (
    <div className={styles.container}>
      <UserHeader/>
      <div className={styles.list}>
        <div className={styles.list_item}>
          <Contact/>
        </div>
        <div className={styles.list_item}>
          <Group/>
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
