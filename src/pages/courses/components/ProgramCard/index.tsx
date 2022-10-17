import { FC } from 'react';

// styles
import styles from './styles.module.scss';

const ProgramCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.module_number}>Модуль 6</div>
        <div className={styles.lesson_number}>4 урока</div>
      </div>
      <div className={styles.title}>Прогностический базис</div>
      <div className={styles.lesson}>
        <div className={styles.lesson_title}>
          Урок 9
        </div>
        <div className={styles.lesson_descr}>
          Предсказательная система Вимшоттари Даша и составление прогнозов (основы).
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
