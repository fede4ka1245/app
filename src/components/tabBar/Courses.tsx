import React from 'react';
import styles from './TabBar.module.scss';

const Courses = () => {
  return (
    <svg className={styles.stroke} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="gradient"
        x1="0" y1="0%">
        <stop offset="0%" stopColor="#37366B"
          className="stop-1"/>
        <stop offset="49%" stopColor="#5C5B9F"
          className="stop-2"/>
        <stop offset="100%" stopColor="#59ABDA"
          className="stop-3"/>
      </linearGradient>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9943 1.49486C8.81179 0.669269 2.31992 5.8226 1.49433 13.0051C0.668746 20.1877 5.82208 26.6796 13.0046 27.5051C20.1872 28.3307 26.679 23.1774 27.5046 15.9949C27.5235 15.8305 27.5393 15.6665 27.552 15.5029C26.5646 21.9059 20.6817 26.4354 14.1894 25.6892C7.53892 24.9248 2.76732 18.9138 3.53175 12.2633C4.278 5.77095 10.0242 1.06922 16.4842 1.56038C16.322 1.53561 16.1587 1.51375 15.9943 1.49486Z" fill="#9C9EA8"/>
      <circle cx="14.4625" cy="14.0029" r="12.5543" stroke="#9C9EA8"/>
      <rect x="2.30078" y="19.4954" width="6.66948" height="6.66948" rx="3.33474" fill="#F3F3F5" stroke="#9C9EA8" strokeWidth="2"/>
    </svg>
  );
};

export default Courses;
