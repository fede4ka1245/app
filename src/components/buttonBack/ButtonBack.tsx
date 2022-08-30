import React from 'react';
import { Typography } from '@mui/material';
import back from './assets/back.svg';
import { ButtonBackProps } from './ButtonBackProps';

const ButtonBack = ({ label, onClick } : ButtonBackProps) => {
  return (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', zIndex: 2 }}>
      <img alt='back' src={back} width={8} height={14}/>
      <Typography pl={'5px'} fontFamily={'Gilroy'} fontWeight={'bold'} fontSize={14} color={'#99DAEA'} textAlign={'left'}>
        {label}
      </Typography>
    </div>
  );
};

export default ButtonBack;
