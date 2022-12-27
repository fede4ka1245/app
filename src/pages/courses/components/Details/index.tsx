import { FC } from 'react';

// components
import { Box } from '@mui/material';

// styles
import globalStyles from '../../styles.module.scss';
import styles from './styles.module.scss';

const Details: FC = () => {
  return (
    <div className={styles.container}>
      <div style={{ position: 'relative' }}>
        <div className={globalStyles.yellow_text} style={{ textAlign: 'center', marginBottom: 10 }}>
          Нужно больше подробностей?
        </div>
        <div className={styles.title}>
          Поможем с выбором мастер-класса
        </div>
        <Box sx={{ mb: 3 }}>
          <button className={styles.button}>
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2022_93402)">
                <path d="M24.5 32.5H7.5C3.3645 32.5 0 29.1355 0 25V14.4375C0 10.302 3.3645 6.9375 7.5 6.9375H12.5C13.1904 6.9375 13.75 7.49713 13.75 8.1875C13.75 8.87788 13.1904 9.4375 12.5 9.4375H7.5C4.743 9.4375 2.5 11.6805 2.5 14.4375V25C2.5 27.757 4.743 30 7.5 30H24.5C27.257 30 29.5 27.757 29.5 25V17.8125C29.5 17.1221 30.0596 16.5625 30.75 16.5625C31.4404 16.5625 32 17.1221 32 17.8125V25C32 29.1355 28.6355 32.5 24.5 32.5ZM20.5497 22.2124L22.6344 20.6179C23.1828 20.1985 23.2873 19.4139 22.8679 18.8656C22.4485 18.3173 21.6639 18.2128 21.1156 18.6322L19.0323 20.2257C17.2469 21.5874 14.7531 21.5874 12.9663 20.2246L7.00663 15.6926C6.45713 15.2746 5.67294 15.3814 5.255 15.9309C4.83713 16.4804 4.94381 17.2647 5.49337 17.6826L11.4516 22.2135C12.7904 23.2346 14.3949 23.7453 15.9996 23.7453C17.6046 23.7452 19.2099 23.2343 20.5497 22.2124ZM32 8.375C32 4.03269 28.4673 0.5 24.125 0.5C19.7827 0.5 16.25 4.03269 16.25 8.375C16.25 12.7173 19.7827 16.25 24.125 16.25C28.4673 16.25 32 12.7173 32 8.375ZM29.5 8.375C29.5 11.3388 27.0888 13.75 24.125 13.75C21.1613 13.75 18.75 11.3388 18.75 8.375C18.75 5.41125 21.1613 3 24.125 3C27.0888 3 29.5 5.41125 29.5 8.375ZM25.375 10.3125V6.4375C25.375 5.74713 24.8154 5.1875 24.125 5.1875H22.875C22.1846 5.1875 21.625 5.74713 21.625 6.4375C21.625 7.12788 22.1846 7.6875 22.875 7.6875V10.3125C22.875 11.0029 23.4346 11.5625 24.125 11.5625C24.8154 11.5625 25.375 11.0029 25.375 10.3125Z" fill="#192239"/>
              </g>
              <defs>
                <clipPath id="clip0_2022_93402">
                  <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
            Написать в школу
          </button>
        </Box>
      </div>
    </div>
  );
};

export default Details;
