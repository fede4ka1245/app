import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import styles from './styles.module.scss';

const Header: FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles.arrow} onClick={goBack}>
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.2583 12.3137L1.04271 6.65687L5.2583 1.00001" stroke="#37366B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={styles.avatar}>
          <img src={'./__mocks__/images/avatar.jpg'} alt="avatar"/>
          <div className={styles.user_status}/>
        </div>
        <div className={styles.name}>
          <div>Алексей</div>
          <div>Пивоваров</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={styles.icon}>
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.60156" y="1" width="16" height="16" rx="8" stroke="#ABB0B2" strokeWidth="2"/>
            <path d="M9.60156 12.75V8.25" stroke="#ABB0B2" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="9.60156" cy="5.25" r="0.5" fill="#ABB0B2" stroke="#ABB0B2" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className={styles.icon}>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.60156 10C6.60156 11.1046 5.70613 12 4.60156 12C3.49699 12 2.60156 11.1046 2.60156 10C2.60156 8.89543 3.49699 8 4.60156 8C5.70613 8 6.60156 8.89543 6.60156 10Z" fill="#ABB0B2"/>
            <path d="M12.6016 10C12.6016 11.1046 11.7062 12 10.6016 12C9.49699 12 8.60156 11.1046 8.60156 10C8.60156 8.89543 9.49699 8 10.6016 8C11.7062 8 12.6016 8.89543 12.6016 10Z" fill="#ABB0B2"/>
            <path d="M16.6016 12C17.7062 12 18.6016 11.1046 18.6016 10C18.6016 8.89543 17.7062 8 16.6016 8C15.497 8 14.6016 8.89543 14.6016 10C14.6016 11.1046 15.497 12 16.6016 12Z" fill="#ABB0B2"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
