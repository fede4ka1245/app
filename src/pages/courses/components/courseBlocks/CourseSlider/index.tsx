import { FC } from 'react';

// styles
import globalStyles from '../../../styles.module.scss';
import styles from './styles.module.scss';

interface IList {
  title: string;
  text: string;
}

interface IProps {
  list: IList[]
};

const CourseSlider: FC<IProps> = ({ list }) => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {list.map((item, index) => (
          <div className={styles.item_container} key={index}>
            <div className={styles.item_number}>
              0{index + 1}
            </div>
            <div className={globalStyles.yellow_text} style={{ marginBottom: 10 }}>
              {item.title}
            </div>
            <div className={styles.item_text}>
              {item.text}
            </div>
          </div>
        ))}

      </div>
      <div className={styles.gradient}/>
    </div>
  );
};

export default CourseSlider;
