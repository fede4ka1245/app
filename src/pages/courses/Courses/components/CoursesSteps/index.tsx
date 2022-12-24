import { FC } from 'react';

import styles from './styles.module.scss';
import globalStyles from '../../styles.module.scss';

export const CoursesStep:FC = () => {
  return (
    <div className={styles.step_container}>
    </div>
  );
};

const CoursesSteps:FC = () => {
  return (
    <div className={styles.container}>
      <div className={globalStyles.title_purple}>
        Ступени мастерства
      </div>
    </div>
  );
};

export default CoursesSteps;
