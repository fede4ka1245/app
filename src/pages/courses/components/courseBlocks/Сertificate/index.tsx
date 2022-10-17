import { FC } from 'react';

// image
import certificate from '../../../images/certificate.png';

// styles
import globalStyles from '../../../styles.module.scss';
import styles from './styles.module.scss';

const Certificate: FC = () => {
  return (
    <div className={styles.container}>
      <div className={globalStyles.title}>
        <span style={{ color: '#F2D113' }}>Именной</span><br/>
        <span style={{ color: '#F2D113' }}>сертификат</span><br/>
        школы
      </div>
      <img src={certificate} alt="certificate" className={styles.image}/>
      <div className={styles.description}>
        После обучения вы защитите теоретический и практический
        экзамены перед комиссией и получите сертификат школы Альфа.
      </div>
      <div className={globalStyles.link}>
        договор оферты на обучение
      </div>
    </div>
  );
};

export default Certificate;
