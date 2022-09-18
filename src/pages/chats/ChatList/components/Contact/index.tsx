import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Messages from '../buttons/Messages';
import Pin from '../buttons/Pin';

// models
import { ChatRoutes } from '../../../../../models/enums/Chat';

// styles
import styles from './styles.module.scss';

const Contact: FC = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(ChatRoutes.ChatUser);
  };

  return (
    <div className={styles.container} onClick={onNavigate}>
      <div className={styles.avatar_container}>
        <img className={styles.avatar} alt="avatar" src="./__mocks__/images/person_1.jpg"/>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className={styles.name}>
            Алексей Пивоваров
          </div>
          <div className={styles.name}>
            17:45
          </div>
        </div>
        <div className={styles.message}>
          Новый курс это просто нечто! Давай попробуем вместе
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

export default Contact;
