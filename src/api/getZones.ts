import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import camelcaseKeys from 'camelcase-keys';
import { SudarshanaItem } from '../models/types/SudarshanaItem';

const getFormattedSudarshanaCircle = (circle: any) => {
  return [...circle.map((item: any) => ({
    main: {
      value: item.rs.value,
      title: item.rs.title
    },
    elements: item.bh as SudarshanaItem []
  }))];
};

export const getZones = async ({ userName, latitude, longitude, date, time }: HoroscopeData) => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-chakras/', {
    name_user: userName,
    latitude,
    longitude,
    dt: date.split('.').reverse().join('-') + 'T' + time
  });

  const [circleLg, circleCh, circleSy] = data.data.find((table: any) => table.tableName === 'sudarsana').table;

  const bhava = [...data.data.find((table: any) => table.tableName === 'infotable_horizontal').table.map((bhavaItem: any) => {
    const [leftDegree, sign, rightDegree] = bhavaItem.sign.split(' ');

    return {
      ...bhavaItem,
      sign,
      degrees: [`${leftDegree}°`, `${rightDegree}’`]
    };
  })];

  return {
    bhava,
    savatobhadra: camelcaseKeys(data.data.find((table: any) => table.tableName === 'savatobxadra').table, { deep: true }),
    shani: camelcaseKeys(data.data.find((table: any) => table.tableName === 'sani').table, { deep: true }),
    calanala: camelcaseKeys(data.data.find((table: any) => table.tableName === 'surya_kalanala').table, { deep: true }),
    compass: camelcaseKeys(data.data.find((table: any) => table.tableName === 'chandra_kalanala').table, { deep: true }),
    sudarshana: [...getFormattedSudarshanaCircle(circleLg.data), ...getFormattedSudarshanaCircle(circleCh.data), ...getFormattedSudarshanaCircle(circleSy.data)]
  };
};
