import { FC } from 'react';

// styles
import globalStyles from '../../../styles.module.scss';
import styles from './styles.module.scss';

const Workshop: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={globalStyles.yellow_text} style={{ marginBottom: 10 }}>
          Онлайн-практикум
        </div>
        <div className={styles.title} style={{ marginBottom: 10 }}>
          11 июля 2022 года
        </div>
        <div className={globalStyles.description} style={{ marginBottom: 130 }}>
          Вы проходите 6 уроков самостоятельно. А на онлайн-практикуме мы
          вместе отработаем полученные знания, рассмотрим новые примеры.
          У вас есть возможность задать вопросы по своему гороскопу.
        </div>
        <div className={styles.footer}>
          <div className={globalStyles.button} style={{ marginBottom: 30 }}>
            стать участником курса
          </div>
          <div className={globalStyles.link}>
            получить консультацию
          </div>
        </div>
      </div>

    </div>
  );
};

export default Workshop;
