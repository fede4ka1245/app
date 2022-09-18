import { FC } from 'react';

// icons
import { Group, Search, Wallet } from './icons';

// icons
import MenuIcon from '../../../../assets/icons/MenuIcon';

// style
import styles from './styles.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.gradient}/>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MenuIcon/>
          <div className={styles.title}>
            Чаты
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.icon}>
            <Wallet isActive={true}/>
          </div>
          <div className={styles.icon}>
            <Group isActive={false}/>
          </div>
          <div className={styles.icon}>
            <Search isActive={false}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
