import { FC } from 'react';

// components
import Header from '../components/Header';
import { Box } from '@mui/material';
import Slider from '../../../components/courseAd/components/Slider';
import Teacher from '../components/Teacher';
import { 
  CourseList,
  CourseSlider,
  Cause
} from '../components/courseBlocks';

// images
import masterClass from '../images/master_class.png';
import mainTeacher from '../images/teachers/main_teacher.png';

// styles
import globalStyles from '../styles.module.scss';
import styles from './styles.module.scss';

const MasterClass: FC = () => {
  const marks = [{ value: 0 }, { value: 33 }, { value: 66 }, { value: 100 }];
  const list = [
    {
      title: 'Старт МК',
      text: '22 ноября, 6 месяцев'
    },
    {
      title: 'Формат ',
      text: 'Студийная видеозапись'
    },
    {
      title: 'Доступ к видеозаписи',
      text: '1 год'
    },
    {
      title: 'Ведущая МК',
      text: 'Елена Карпинчик'
    }
  ];

  const sliderList = [
    {
      title: 'ДЛЯ ТЕХ, КТО',
      text: 'хочет углубить свою личную практику до преподавательского уровня'
    },
    {
      title: 'ДЛЯ ТЕХ, КТО',
      text: 'хочет углубить свою личную практику до преподавательского уровня'
    }
  ];

  const teacher = {
    image: mainTeacher,
    name: 'Елена Карпинчик',
    title: 'Ведущая живых онлайн-практикумов, куратор курса',
    description: 'Практикующий джйотиш-астролог, одна из самых сильных учениц Татьяны Калининой. Специалист в сфере прогнозов.',
    link: ''
  };

  return (
    <div className={globalStyles.container}>
      <div className={styles.background_img}>
        <Box sx={{ px: 3.5, flex: 1 }}>
          <Header/>
          <Box sx={{ mb: 1 }}>
            <div className={globalStyles.title} style={{ marginBottom: 20 }}>
              Прогнозирование 
              в деторождении
            </div>
            <img src={masterClass} alt="mater-class" className={styles.image}/>
          </Box>
        </Box>
        <div className={styles.shadow_wrapper}>
          <Box sx={{ px: 3.5 }}>
            <Box sx={{ mb: 6 }}>
              <div className={globalStyles.description}>
              Гражданский брак в женском гороскопе. Оригинальное 
              исследование на тему задержки вступления в брак в гороскопах женщин.
              </div>
            </Box>
            <Slider
              marks={marks}
              valueLabelDisplay="on"
              value={66}
              valueLabelFormat={() => '3 дня'}
            />
          </Box>
        </div>
      </div>
      <Box sx={{ px: 3.5 }}>
        <Box sx={{ mb: 3 }}>
          <button className={globalStyles.button}>
            купить мастер-класс
          </button>
        </Box>
        <div className={globalStyles.link} style={{ textAlign: 'center' }}>
          задать вопрос
        </div>
      </Box>
      <CourseList list={list}/>
      <CourseSlider list={sliderList}/>
      <div className={styles.question}>
        <div className={globalStyles.title} style={{ marginBottom: 20 }}>
          Основной вопрос
        </div>
        <div className={styles.description}>
          Для многих не секрет, что вопрос 
          <span style={{ color: '#F2D113' }}> «Когда я выйду замуж» </span> является 
          одним из самых популярных вопросов, задаваемых клиентами-женщинами 
          во время астрологической консультации. Между тем, отбросив всякую иронию, популярность 
          этого вопроса обусловлена устройством общества и института брака в современном мире.
        </div>
      </div>  
      <div className={styles.master_class_list}>
        <div className={globalStyles.title} style={{ marginBottom: 30 }}>
          На мастер-классе <br/>
          <span style={{ color: '#F2D113' }}> вы изучите:</span>
        </div>
        <div className={globalStyles.list_item}>
          формулы, показывающие позднее замужество
        </div>
        <div className={globalStyles.list_item}>
          формулы на отсутствие брака и серьезные задержки
        </div>
        <div className={globalStyles.list_item}>
          ормулы на отсутствие брака и серьезные задержки
        </div>
      </div>
      <div className={styles.master_class_container}>
        <div className={styles.master_class_title}>Старт МК</div>
        <div className={styles.master_class_date}>22 ноября</div>
        <div className={styles.master_class_descr}>
          Изучите новую дисциплину по астрологии и углубите личную практику
        </div>
        <div className={styles.master_class_price}>
          3 000 RUB
        </div>
        <div className={globalStyles.button} style={{ marginBottom: 35 }}>
          Купить мастер-класс
        </div>
        <div className={globalStyles.link}>
          Задать вопросы
        </div>
      </div>
      <Box sx={{ px: 3.5, mb: 3.5 }}>
        <div className={globalStyles.title} style={{ marginBottom: 20 }}>
          <span style={{ color: '#F2D113' }}>
            Для кого 
          </span>  этот Мастер-класс
        </div>
        <p className={styles.description}>
          Данный мастер-класс рассчитан на астрологов, имеющих
          знание основ Джйотиш, а также для тех, кто прошел в нашей
          школе хотя бы Интенсив с Нуля до Прогнозов.
        </p>
        <p className={styles.description}>
          Мы постарались адаптировать уже имеющиеся знания,
          а также дополнили их своими наработками и наблюдениями. 
          Весь <span style={{ color: '#F2D113' }}> материал преподносится в максимально простой
          и понятной форме</span> даже для тех, кто совсем недавно начал изучать Астрологию.
        </p>
      </Box> 
      <div className={styles.main_teacher}>
        <div className={globalStyles.title}>
          <span className={globalStyles.cyan_text}>Ведущая</span> Мастер-класса 
        </div>
        <Teacher teacher={teacher}/>
      </div> 
      <Cause/>
    </div>
  );
};

export default MasterClass;
