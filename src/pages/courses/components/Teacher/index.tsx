import { FC } from 'react';

// types
import { ICourseTeacher } from '../../../../models/types/Courses';

// styles
import styles from './styles.module.scss';
import globalStyles from '../../styles.module.scss';

interface IProps {
  teacher: ICourseTeacher;
};

const Teacher: FC<IProps> = ({ teacher }) => {
  return (
    <div className={styles.container}>
      {teacher?.avatar && <img src={teacher?.avatar} className={styles.teacher} alt="teacher"/>}
      <div className={styles.name}>
        {teacher?.first_name} {teacher?.last_name}
      </div>
      <div className={styles.title}>
        {teacher?.teacher_title}
      </div>
      <div className={styles.description}>
        {teacher?.teacher_description}
      </div>
      <div className={globalStyles.link}>
        страница астролога
      </div>
    </div>
  );
};

export default Teacher;
