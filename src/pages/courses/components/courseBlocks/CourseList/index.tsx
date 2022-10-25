import { FC } from 'react';

// components
import { Box } from '@mui/material';

// styles
import globalStyles from '../../../styles.module.scss';
import styles from './styles.module.scss';

interface ListItem {
  title: string;
  text: string;
}

interface IProps {
  list: ListItem[];
};

const CourseList: FC<IProps> = ({ list }) => {
  return (
    <Box sx={{ px: 3.5, py: 3 }}>
      {list.map((item, index) => (
        <div className={styles.item_continer} key={index}>
          <div className={globalStyles.yellow_text} style={{ marginBottom: 12 }}>
            {item.title}
          </div>
          <div className={styles.text}>
            {item.text}
          </div>
        </div>
      ))}
    </Box>
  );
};

export default CourseList;
