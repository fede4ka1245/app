import { FC } from 'react';

// images
import moon from '../images/moon.png';

// styles 
import styles from '../styles.module.scss';
import globalStyles from '../../../styles.module.scss';

const MoonCard: FC = () => {
  return (
    <div className={styles.container} style={{ backgroundColor: '#192239' }}>
      <img src={moon} alt="moon" className={styles.image}/>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Оформить рассрочку 
          в Тинькофф
        </div>
        <div className={styles.bonus_container}>
          <div className={styles.bonus}>
            Бонус
          </div>
          <div className={styles.bonus_text}>
            Мастер-класс по определению времени замужества
          </div>
          <div className={styles.bonus}>
            Бонус
          </div>
          <div className={styles.bonus_text}>
            Мастер-класс по определению времени замужества
          </div>
        </div>
        <div className={styles.description_container}>
          <div className={styles.description}>
            Оплата один раз в месяц
          </div>
          <div className={styles.description_payment}>
            12 платежей <span style={{ color: '#F9F9F9' }}>Х</span>  3 950  Rub
          </div>
        </div>
        <div>
          <div className={styles.full_cost_title}>
            Полная стоимость
          </div>
          <div className={styles.full_cost}>
            52 200 Rub
          </div>
        </div>
        <div className={styles.cost}>
          4 400 Rub
        </div>
        <div className={globalStyles.button}>
          оплатить
        </div>
      </div>
    </div>
  );
};

export default MoonCard;
