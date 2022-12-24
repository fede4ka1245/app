import { FC } from 'react';
import parse from 'html-react-parser';

import { ICourseModule } from '../../../../models/types/Courses';

// styles
import styles from './styles.module.scss';

interface IProps {
  module: ICourseModule
}

const ProgramCard:FC<IProps> = ({ module }) => {
  const endingGenerator = (number: number): string => {
    if (number === 1) {
      return `${number} Урок`;
    }

    if (number > 1 && number < 5) {
      return `${number} Урока`;
    }

    return `${number} Уроков`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.module_number}>{module?.title}</div>
        <div className={styles.lesson_number}>{endingGenerator(module?.lessons?.length)}</div>
      </div>
      <div className={styles.title}>{parse(module?.description)}</div>
      {
        module?.lessons?.map(lesson => (
          <div className={styles.lesson} key={lesson?.id}>
            <div className={styles.lesson_title}>
              {lesson?.title}
            </div>
            <div className={styles.lesson_descr}>
              {parse(lesson?.description)}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProgramCard;
