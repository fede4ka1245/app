import { FC } from 'react';
import Slider from 'react-slick';

// modules
import SliderBar from '../../../../../components/courseAd/components/Slider'; 

// styles
import styles from './styles.module.scss';

const CoursesCarousel:FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slider_wrapper}>

      </div>
      <div className={styles.slider_bar_wrapper}>
        <SliderBar
          valueLabelDisplay="on"
          value={80}
          valueLabelFormat={() => '3 дня'}
        />
      </div>

    </div>
  );
};

export default CoursesCarousel;
