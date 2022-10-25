import { FC } from 'react';

// components
import Header from '../components/Header';
import { Box } from '@mui/material';
import Slider from '../../../components/courseAd/components/Slider';
import Teacher from '../components/Teacher';
import { 
  SunCard,
  MoonCard,
  NeptuneCard
} from '../components/paymentCards';
import ProgramCard from '../components/ProgramCard';
import { 
  CourseList,
  VideoCourse,
  CourseSlider,
  Galaxy,
  TelegramChat,
  Certificate,
  Question,
  Cause
} from '../components/courseBlocks';

// images
import teacher1 from '../images/teachers/teacher_1.png';
import teacher2 from '../images/teachers/teacher_2.png';
import teacher3 from '../images/teachers/teacher_3.png';

// styles
import globalStyles from '../styles.module.scss';
import styles from './styles.module.scss';

const CourseSteps: FC = () => {
  const marks = [{ value: 0 }, { value: 33 }, { value: 66 }, { value: 100 }];
  const list = [
    {
      title: 'Формат',
      text: '24 видео урока и 12 онлайн-практикумов'
    },
    {
      title: 'Проверка',
      text: '22 теста и большое финальное тестирование'
    },
    {
      title: 'Вы — часть школы',
      text: 'Ваша страница-визитка на сайте Школы'
    },
    {
      title: 'Документы',
      text: 'Сертификат школы с личным ID'
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

  const courseInfo = [
    {
      text: 'Соберете в стройную систему свои знания из других школ или самостоятельного изучения.'
    },
    {
      text: 'Получите основы прогнозирования по натальной карте.'
    },
    {
      text: 'Изучите гороскоп вопроса, который поможет вам делать успешные прогнозы уже через 10 уроков, а не через 3 года.'
    },
    {
      text: 'Адаптируетесь в Джйотиш, если вы учились в Западной традиции.'
    },
    {
      text: 'Освоите дополнительные техники прогнозов, компенсирующие отсутствие большого опыта в прогнозах.'
    },
    {
      text: 'После курса вы можете смело начать работать астрологом, мы вас подготовим.'
    }
  ];

  const teachers = [
    {
      image: teacher3,
      name: 'Татьяна Калинина',
      title: 'Основатель школы Альфа и проекта Deep Sky Strology',
      description: 'Руководитель школы Альфа. Известный астролог, исследователь и педагог. Автор многих успешных публичных прогнозов для президентов, политиков, стран и выдающихся людей.',
      link: ''
    },
    {
      image: teacher1,
      name: 'Елена Карпинчик',
      title: 'Ведущая живых онлайн-практикумов, куратор курса',
      description: 'Практикующий джйотиш-астролог, одна из самых сильных учениц Татьяны Калининой. Специалист в сфере прогнозов.',
      link: ''
    },
    {
      image: teacher2,
      name: 'Александра Ващилко',
      title: 'Ведущая живых онлайн-практикумов, куратор курса',
      description: 'Практикующий джйотиш-астролог, одна из самых сильных учениц Татьяны Калининой. Специалист в сфере прогнозов и ректификации.',
      link: ''
    }
  ];

  return (
    <div className={globalStyles.container}>
      <div className={styles.background_img}>
        <Box sx={{ px: 3.5, flex: 1 }}>
          <Header/>
          <Box sx={{ mb: 1 }}>
            <div className={globalStyles.title}>
              Моя профессия астролог
            </div>
          </Box>
          <div className={globalStyles.yellow_text}>
            1 ступень
          </div>
        </Box>
        <div className={styles.shadow_wrapper}>
          <Box sx={{ px: 3.5 }}>
            <Box sx={{ mb: 6 }}>
              <div className={globalStyles.description}>
                Ввод в восстребованную профессию и возможность обучаться и зарабатывать из любой точки мира
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
      <Box sx={{ display: 'flex', px: 3.5, mb: 2.5 }}>
        <div className={styles.duration}>
          <span className={globalStyles.yellow_text} style={{ marginRight: 5 }}>
            6
          </span>
          месяцев
        </div>
        <div className={styles.line}/>
        <div className={styles.duration}>
          Старт
          <span className={globalStyles.yellow_text} style={{ margin: '0px 5px' }}>
            22
          </span>
          ноября
        </div>
      </Box>
      <Box sx={{ px: 3.5 }}>
        <Box sx={{ mb: 3 }}>
          <button className={globalStyles.button}>
            Записаться на курс
          </button>
        </Box>
        <div className={globalStyles.installment_plan}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_689_36271)">
              <rect x="13.75" width="17.0897" height="12" transform="rotate(50.4446 13.75 0)" fill="#A38E14"/>
              <rect x="13.4993" y="2.05108" width="14.338" height="9" transform="rotate(50.4446 13.4993 2.05108)" stroke="#6D6012"/>
              <rect x="5.18359" y="2.28711" width="20.5735" height="12" transform="rotate(22.0614 5.18359 2.28711)" fill="#CFB416"/>
              <rect x="6.11153" y="4.28181" width="17.4647" height="9" transform="rotate(22.0614 6.11153 4.28181)" stroke="#917E16"/>
              <rect x="0.5" y="9" width="24" height="12" fill="#F2D113"/>
              <rect x="9.5" y="12" width="6" height="6" rx="3" fill="#9B8714"/>
              <rect x="2" y="10.5" width="21" height="9" stroke="#9B8714"/>
            </g>
            <defs>
              <clipPath id="clip0_689_36271">
                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
              </clipPath>
            </defs>
          </svg>
          <span style={{ marginLeft: 10 }}>
            доступно в рассрочку
          </span>
        </div>
      </Box>
      <CourseList list={list}/>
      <VideoCourse/>
      <Box sx={{ mb: 9.3 }}>
        <CourseSlider list={sliderList}/>
      </Box>
      <Box sx={{ px: 3.5, mb: 3.5 }}>
        <div className={globalStyles.title}>
          В рамках курса вы:
        </div>
      </Box>  
      <div className={styles.course_steps}>
        {courseInfo.map((item, index) => (
          <div className={globalStyles.list_item} key={index}>
            {item.text}
          </div>
        ))}
      </div>
      <Box sx={{ px: 3.5, mb: 6 }}>
        <Galaxy/>
      </Box>
      <Box sx={{ px: 3.5, mb: 3.5 }}>
        <div className={globalStyles.title}>
        преподаватели <span className={globalStyles.cyan_text}>курса</span>
        </div>
        {teachers.map((item, index) => (
          <div key={index}>
            <Teacher teacher={item}/>
          </div>
        ))}
      </Box>  
      <Box sx={{ mb: 3.5 }}>
        <TelegramChat/>
      </Box>
      <Box sx={{ px: 3.5, mb: 6 }}>
        <div className={globalStyles.title} style={{ textAlign: 'center', marginBottom: 30 }}>
          Программа курса
        </div>
        <ProgramCard/>
      </Box>
      <Box sx={{ px: 3.5, mb: 6 }}>
        <Certificate/>
      </Box>
      <Box sx={{ px: 3.5, mb: 3.5 }}>
        <div className={globalStyles.title} style={{ color: '#F2D113' }}>
          ЧТО ВЫ ПОКУПАЕТЕ:
        </div>
      </Box>  
      <div className={styles.course_steps} style={{ marginBottom: 60 }}>
        {courseInfo.map((item, index) => (
          <div className={globalStyles.list_item} key={index}>
            {item.text}
          </div>
        ))}
      </div>
      <Box sx={{ px: 3.5, mb: 3.5 }}>
        <SunCard
          title="Оплатить полностью"
        />
        <MoonCard/>
        <NeptuneCard
          title="Оплачивать
          помесячно"
        />
      </Box>  
      <Box sx={{ mb: 6 }}>
        <Question/>
      </Box>
      <Cause/>
    </div>
  );
};

export default CourseSteps;
