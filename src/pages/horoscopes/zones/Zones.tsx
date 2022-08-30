import React, { useState } from 'react';
import Options from '../../../components/options/Options';
import styles from './Zones.module.scss';
import circle from './assets/circle.svg';
import compas from './assets/compas.svg';
import table from './assets/table.svg';
import shany from './assets/shany.svg';
import kalanala from './assets/kalanala.svg';

const options = [
  {
    label: 'Бхава чалит',
    value: 1
  },
  {
    label: 'Сарватобхадра',
    value: 2
  },
  {
    label: 'Чандра Каланала',
    value: 3
  },
  {
    label: 'Сурйа Каланала',
    value: 4
  },
  {
    label: 'Шани',
    value: 5
  },
  {
    label: 'Сударшана',
    value: 6
  }
];

const Zones = () => {
  const [targetOption, setTargetOption] = useState(options[0]);

  return (
    <>
      <section className={styles.items}>
        <div style={{ width: '600px' }}>
          <Options options={options} setValue={setTargetOption} value={targetOption.value} />
        </div>
      </section>
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', height: '415px', paddingTop: '20px' }}>
        {targetOption.value === 6 && <img alt='circle' src={circle}/>}
        {targetOption.value === 5 && <img alt='shany' src={shany}/>}
        {targetOption.value === 4 && <img alt='kalanala' src={kalanala}/>}
        {targetOption.value === 3 && <img alt='compas' src={compas}/>}
        {targetOption.value === 2 && <img alt='table' src={table}/>}
      </section>
    </>
  );
};

export default Zones;
