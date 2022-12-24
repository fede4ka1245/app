import { FC } from 'react';

// image
import certificate from '../../../images/certificate.png';

// styles
import globalStyles from '../../../styles.module.scss';
import styles from './styles.module.scss';

interface IProps {
  certificate_text: string;
}

const Certificate: FC<IProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={globalStyles.title}>
        <span style={{ color: '#F2D113' }}>Именной</span><br/>
        <span style={{ color: '#F2D113' }}>сертификат</span><br/>
        школы
      </div>
      <img src={certificate} alt="certificate" className={styles.image}/>
      <div className={styles.description}>
        {props.certificate_text}
      </div>
      <div className={globalStyles.link}>
        договор оферты на обучение
      </div>
    </div>
  );
};

export default Certificate;
