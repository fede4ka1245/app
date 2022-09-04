import React, { useState } from 'react';
import { Typography } from '@mui/material';
import img from '../../pages/horoscopes/natMap/img.png';
import sign from '../../pages/horoscopes/natMap/sign.svg';
import Info from './info/Info';
import arrowUp from './arrowUp.svg';
import arrowDown from './arrowDown.svg';

const Row = () => {
  const [isInfoOpen, setIsOpen] = useState(false);
  const fontColor = !isInfoOpen ? 'white' : '#261C5C';

  return (
    <>
      <tr style={{ background: isInfoOpen ? 'white' : '' }}>
        <td>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontFamily={'Gilroy'} fontWeight={700} color={'#B4B3FF'} fontSize={'15px'} pr={1}>
              ДК
            </Typography>
            <Typography fontFamily={'Gilroy'} fontWeight={500} color={fontColor} fontSize={'15px'} pr={1}>
              Асцендент
            </Typography>
            <Typography fontFamily={'Gilroy'} fontWeight={400} color={'rgba(255, 255, 255, 0.5)'} fontSize={'15px'} pr={1}>
              (R)
            </Typography>
          </div>
        </td>
        <td onClick={() => setIsOpen(!isInfoOpen)}>
          {!isInfoOpen && <img src={arrowDown} width={28} height={28}/>}
          {isInfoOpen && <img src={arrowUp} width={28} height={28}/>}
        </td>
        <td>
          <img src={sign} />
        </td>
        <td>
          <Typography fontFamily={'Gilroy'} fontWeight={700} color={fontColor} fontSize={'15px'}>
            23° 06’
          </Typography>
        </td>
        <td>
          <Typography fontFamily={'Gilroy'} fontWeight={500} color={fontColor} fontSize={'15px'}>
            ПШа (3/Be)
          </Typography>
        </td>
      </tr>
      {isInfoOpen && <td colSpan={5}>
        <Info />
      </td>}
    </>
  );
};

export default Row;
