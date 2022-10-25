import { FC } from 'react';

// images
import sun from '../images/sun.png';

// styles 
import styles from '../styles.module.scss';
import globalStyles from '../../../styles.module.scss';

interface IProps {
  title: string;
  list?:string[];
}

const SunCard: FC<IProps> = ({ title, list = [] }) => {
  return (
    <div className={styles.container}>
      <img src={sun} alt="sun" className={styles.image}/>
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
        )}
        <div className={styles.description_container}>
          <div className={styles.description}>
            Оплата производится в один этап
            с фиксированной стоимостью
          </div>
        </div>
        <div>
          <div className={styles.full_cost_title}>
            Полная стоимость
          </div>
          <div className={styles.full_cost}>
            46 900 Rub
          </div>
        </div>
        <div className={styles.cost}>
          42 400 Rub
        </div>
        <div className={globalStyles.button}>
          оплатить
        </div>
      </div>
    </div>
  );
};

export default SunCard;
