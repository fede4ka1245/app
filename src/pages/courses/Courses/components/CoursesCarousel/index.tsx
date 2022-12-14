import { FC } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

// components
import SliderBar from '../../../../../components/courseAd/components/Slider'; 

// images
import mockImage from './images/mock_img.png';

// modules
import { routes } from '../../../routes';

// styles
import './slider.scss';
import styles from './styles.module.scss';

const CarouselItem: FC = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(routes.CourseSteps);
  };

  return (
    <div className={styles.slider_item} onClick={navigateTo}>
      <div className={styles.text_wrapper}>
        <div className={styles.title}>
          Инструменты астролога
        </div>
        <div className={styles.date}>
          Дата старта 11.05.2023
        </div>
      </div>
      <img src={mockImage} className={styles.slider_image}/>
    </div>
  );
};

const CoursesCarousel:FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: 'courses-slider_dots'
  };

  return (
    <div className={styles.slider}>
      <div className={classnames(styles.slider_wrapper, 'courses-slider-wrapper')}>
        <Slider {...settings}>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Slider>
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
