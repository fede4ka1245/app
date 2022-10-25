import { FC } from 'react';

// images
import neptune from '../images/neptune.png';

// styles 
import styles from '../styles.module.scss';
import globalStyles from '../../../styles.module.scss';

interface IProps {
  title: string;
  list?: string[];
}

const NeptuneCard: FC<IProps> = ({ title, list = [] }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: '#192239' }}>
      <img src={neptune} alt="neptune" className={styles.image}/>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {title}
        </div>
        {list.map((item, index) => (
          <div className={globalStyles.list_item} key={index}>
            {item}
          </div>)
        )};
        {list.length === 0 && (
          <div className={styles.bonus_container} style={{ opacity: 0.2 }}>
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
        )}
        <div className={styles.description_container}>
          <div className={styles.description}>
            Оплата один раз в месяц
          </div>
          <div className={styles.description_payment}>
            5 платежей <span style={{ color: '#F9F9F9' }}>Х</span>  10 340 Rub
          </div>
        </div>
        <div>
          <div className={styles.full_cost_title}>
            Полная стоимость
          </div>
          {/* <div className={styles.full_cost}>
            52 200 Rub
          </div> */}
        </div>
        <div className={styles.cost}>
          51 700 Rub
        </div>
        <div className={globalStyles.button}>
          оплатить
        </div>
      </div>
    </div>
  );
};

export default NeptuneCard;
