import { FC } from 'react';

// icons
import { Telescope, Sputnik, Planetary } from './icons';

// styles
import styles from './styles.module.scss';

const UserHeader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.avatar_container}>
          <div className={styles.avatar}>
            <img src="./__mocks__/images/avatar.jpg" alt="avatar" className={styles.avatar_img}/>
          </div>
          <div className={styles.user_status}/>
        </div>
        <div>
          <div className={styles.user_name}>
            Евгения Сергеевна
          </div>
          <div className={styles.user_level}>
            II <span>уровень</span>
          </div>
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.status_icon}>
          <Telescope isActive={true}/>
        </div>
        <div className={styles.status_icon}>
          <Planetary isActive={false}/>
        </div>
        <div className={styles.status_icon}>
          <Sputnik isActive={false}/>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
