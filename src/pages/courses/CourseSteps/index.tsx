import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import parse from 'html-react-parser';

// components
import Header from '../components/Header';
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

// api 
import { getCourses } from '../../../api/getCourses';

// types 
import { ICourse } from '../../../models/types/Courses';

// styles
import globalStyles from '../styles.module.scss';
import styles from './styles.module.scss';

const CourseSteps: FC = () => {
  const marks = [{ value: 0 }, { value: 33 }, { value: 66 }, { value: 100 }];
  const [course, setCourse] = useState<ICourse | null>(null);

  useEffect(() => {
    getCourses({
      course_type: 0
    })
      .then((data: ICourse[]) => {
        console.log(data[0]);
        setCourse(data[0]);
      });
  }, []);

  if (!course) {
    return null;
  };

  return (
    <div className={globalStyles.container} key={course.id}>
      <div className={styles.background_img}>
        <Box sx={{ px: 3.5, flex: 1 }}>
          <Header/>
          <Box sx={{ mb: 1 }}>
            <div className={globalStyles.title}>
              {course?.title}
            </div>
          </Box>
          <div className={globalStyles.yellow_text}>
            {course?.stage_name}
          </div>
        </Box>
        <div className={styles.shadow_wrapper}>
          <Box sx={{ px: 3.5 }}>
            <Box sx={{ mb: 6 }}>
              <div className={globalStyles.description}>
                {parse(course?.description)}
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
            {course?.duration.split(' ')[0]}
          </span>
          {course?.duration.split(' ')[1]}
        </div>
        <div className={styles.line}/>
        <div className={styles.duration}>
          Старт
          <span className={globalStyles.yellow_text} style={{ margin: '0px 5px' }}>
            {`${new Date(course?.publish_start).getDate()}.${new Date(course?.publish_start).getMonth()}.${new Date(course?.publish_start).getFullYear()}`}
          </span>
        </div>
      </Box>
      <Box sx={{ px: 3.5 }}>
        <Box sx={{ mb: 3 }}>
          <a className={globalStyles.button} href={course?.enroll_in_course}>
            Записаться на курс
          </a>
        </Box>
        {/* <div className={globalStyles.installment_plan}>
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
        </div> */}
      </Box>
      <CourseList list={course?.additional_fields}/>
      <VideoCourse/>
      <Box sx={{ mb: 9.3 }}>
        <CourseSlider list={course?.for_whom_courses}/>
      </Box>
      <Box sx={{ px: 3.5, mb: 3.5 }}>
        <div className={globalStyles.title}>
          В рамках курса вы:
        </div>
      </Box>  
      <div className={styles.course_steps}>
        {course?.within_courses.map((item, index) => (
          <div className={globalStyles.list_item} key={index}>
            {parse(item?.description)}
          </div>
        ))}
      </div>
      {/* <Box sx={{ px: 3.5, mb: 6 }}>
        <Galaxy/>
      </Box> */}
      <Box sx={{ px: 3.5, mb: 3.5 }}>
        <div className={globalStyles.title}>
        преподаватели <span className={globalStyles.cyan_text}>курса</span>
        </div>
        {course?.teachers.map((teacher, index) => (
          <div key={index}>
            <Teacher teacher={teacher}/>
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
        {
          course?.modules.map(module => (
            <React.Fragment key={module.id}>
              <ProgramCard module={module}/>
            </React.Fragment>
          ))
        }
      </Box>
      <Box sx={{ px: 3.5, mb: 6 }}>
        <Certificate certificate_text={course.nominal_certificate}/>
      </Box>
      <Box sx={{ px: 3.5, mb: 3.5 }}>
        <div className={globalStyles.title} style={{ color: '#F2D113' }}>
          ЧТО ВЫ ПОКУПАЕТЕ:
        </div>
      </Box>  
      <div className={styles.course_steps} style={{ marginBottom: 60 }}>
        {course.what_you_buys.map((item) => (
          <div className={globalStyles.list_item} key={item.id}>
            {parse(item.description)}
          </div>
        ))}
      </div>
      <Box sx={{ px: 3.5, mb: 3.5 }}>
        <SunCard
          title="Оплатить полностью"
        />
        <MoonCard/>
        {/* <NeptuneCard
          title="Оплачивать
          помесячно"
        /> */}
      </Box>  
      <Box sx={{ mb: 6 }}>
        <Question/>
      </Box>
      <Cause/>
    </div>
  );
};

export default CourseSteps;
