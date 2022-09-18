import { FC } from 'react';

// styles
import styles from './styles.module.scss';

const Answer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src="./__mocks__/images/person_1.jpg"/>
        </div>
        <div className={styles.name}>
          Алексей Пивоваров ответила на ваш вопрос:
          Длинное название темы
        </div>
        <div className={styles.date}>
          01.10.21
        </div>
      </div>
    </div>
  );
};

export default Answer;
