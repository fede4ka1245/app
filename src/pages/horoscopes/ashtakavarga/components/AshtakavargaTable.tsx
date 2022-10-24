import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import map from './map.svg';
import { AshtakavargaTable as AshtakavargaTableProps } from '../../../../models/types/AshtakavargaTable';
import { Typography } from '@mui/material';
import '../../../../components/map/Map.scss';

const AshtakavargaTable = ({ table, tableName }: AshtakavargaTableProps) => {
  return (
    <>
      <Typography fontFamily={'Playfair Display'} fontSize={'18px'} fontWeight={700} color={'white'} pb={2}>
        {tableName}
      </Typography>
      <section className={'astro-processor-map'}>
        <AspectRatio ratio={1}>
          <img src={map} className={'image'}/>
        </AspectRatio>
        {table?.map(({ mainInfo, isHighlighted }, index) => (
          <div key={index} className={`sector sector-${(index + 6) % 12 + 1}`}>
            <h3 className={'main-info'}>
              {mainInfo}
            </h3>
            {isHighlighted && <div className={'highlighted'}/>}
          </div>
        ))}
      </section>
    </>
  );
};

export default AshtakavargaTable;
