import { FC } from 'react';
import { NumberLiteralType } from 'typescript';

import image from '../../MiniCourse/images/01.png';

// styles 
import styles from './styles.module.scss';

interface IProgram {
  title: string;
  image: string;
  description: string;
};

interface IProps {
  program: IProgram;
  number: number;
}

const CourseProgram: FC<IProps> = ({ program, number }) => {
  return (
    <div className={styles.container}>
      <div className={styles.lesson_number}>Урок {number}</div>
      <div className={styles.title}>{program.title}</div>
      <img src={program.image}/>
      <div className={styles.description}>
        {program.description}
      </div>
    </div>
  );
};

export default CourseProgram;
