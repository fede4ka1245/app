import { FC } from 'react';

// components
import Messages from '../buttons/Messages';
import Pin from '../buttons/Pin';

// styles
import styles from './styles.module.scss';

const Group: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <div className={styles.icon}>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1666 14.6667H18.3333V13C18.3333 12.4805 18.1713 11.9739 17.8701 11.5506C17.5688 11.1273 17.1431 10.8084 16.6523 10.6382C16.1614 10.468 15.6296 10.4549 15.131 10.6009C14.6324 10.7468 14.1916 11.0445 13.87 11.4525M14.1666 14.6667H5.83329M14.1666 14.6667V13C14.1666 12.4534 14.0616 11.9309 13.87 11.4525M13.87 11.4525C13.5605 10.6792 13.0264 10.0163 12.3366 9.54931C11.6468 9.08236 10.8329 8.83279 9.99996 8.83279C9.16697 8.83279 8.35309 9.08236 7.6633 9.54931C6.9735 10.0163 6.43942 10.6792 6.12996 11.4525M5.83329 14.6667H1.66663V13C1.66666 12.4805 1.82857 11.9739 2.12984 11.5506C2.43112 11.1273 2.85678 10.8084 3.34767 10.6382C3.83856 10.468 4.37027 10.4549 4.86891 10.6009C5.36754 10.7468 5.80832 11.0445 6.12996 11.4525M5.83329 14.6667V13C5.83329 12.4534 5.93829 11.9309 6.12996 11.4525M12.5 3.83337C12.5 4.49642 12.2366 5.1323 11.7677 5.60114C11.2989 6.06998 10.663 6.33337 9.99996 6.33337C9.33692 6.33337 8.70103 6.06998 8.23219 5.60114C7.76335 5.1323 7.49996 4.49642 7.49996 3.83337C7.49996 3.17033 7.76335 2.53445 8.23219 2.06561C8.70103 1.59677 9.33692 1.33337 9.99996 1.33337C10.663 1.33337 11.2989 1.59677 11.7677 2.06561C12.2366 2.53445 12.5 3.17033 12.5 3.83337ZM17.5 6.33337C17.5 6.7754 17.3244 7.19932 17.0118 7.51188C16.6992 7.82445 16.2753 8.00004 15.8333 8.00004C15.3913 8.00004 14.9673 7.82445 14.6548 7.51188C14.3422 7.19932 14.1666 6.7754 14.1666 6.33337C14.1666 5.89135 14.3422 5.46742 14.6548 5.15486C14.9673 4.8423 15.3913 4.66671 15.8333 4.66671C16.2753 4.66671 16.6992 4.8423 17.0118 5.15486C17.3244 5.46742 17.5 5.89135 17.5 6.33337ZM5.83329 6.33337C5.83329 6.7754 5.6577 7.19932 5.34514 7.51188C5.03258 7.82445 4.60865 8.00004 4.16663 8.00004C3.7246 8.00004 3.30068 7.82445 2.98811 7.51188C2.67555 7.19932 2.49996 6.7754 2.49996 6.33337C2.49996 5.89135 2.67555 5.46742 2.98811 5.15486C3.30068 4.8423 3.7246 4.66671 4.16663 4.66671C4.60865 4.66671 5.03258 4.8423 5.34514 5.15486C5.6577 5.46742 5.83329 5.89135 5.83329 6.33337Z" stroke="#ABB0B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.name}>
            Астро
          </div>
        </div>
        <div className={styles.description}>
          Мощный инструмент для профессионального астролога, лёгкий в изучении и удобный в применении для начинающего астролога.
        </div>
        <div className={styles.footer}>
          <div className={styles.users}>
            <div className={styles.admin}>
              <img src="./__mocks__/images/person_1.jpg" alt="user" className={styles.admin_img}/>
            </div>
            <div className={styles.user}>
              <img src="./__mocks__/images/person_2.jpg" alt="user" className={styles.user_img}/>
            </div>
            <div className={styles.user}>
              <img src="./__mocks__/images/person_3.jpeg" alt="user" className={styles.user_img}/>
            </div>
            <div className={styles.quantity}>
              +10
            </div>
          </div>
          <div className={styles.button}>
            Перейти в группу
          </div>
        </div>
      </div>
      <div className={styles.tools}>
        <div style={{ marginBottom: 6 }}>
          <Pin/>
        </div>
        <Messages quantity={5}/>
      </div>
    </div>
  );
};

export default Group;
