import { FC } from 'react';

// styles
import styles from './styles.module.scss';
import globalStyles from '../../styles.module.scss';

interface ITeacher {
  image: string;
  name: string;
  title: string;
  description: string;
  link: string;
};

interface IProps {
  teacher: ITeacher;
};

const Teacher: FC<IProps> = ({ teacher }) => {
  return (
    <div className={styles.container}>
      <img src={teacher.image} className={styles.teacher}/>
      <div className={styles.name}>
        {teacher.name}
      </div>
      <div className={styles.title}>
        {teacher.title}
      </div>
      <div className={styles.description}>
        {teacher.description}
      </div>
      <div className={globalStyles.link}>
        страница астролога
      </div>
    </div>
  );
};

export default Teacher;
