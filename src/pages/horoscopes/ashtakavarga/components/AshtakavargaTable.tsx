import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import map from './map.svg';
import { AshtakavargaTable as AshtakavargaTableProps } from '../../../../models/types/AshtakavargaTable';
import { Typography } from '@mui/material';
import '../../../../components/map/NorthMap.scss';

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
            <div className={'info'}>
              <h3 className={'main-info'}>
                {mainInfo}
              </h3>
            </div>
            {isHighlighted && <div className={'highlighted'} style={{ background: 'rgba(255, 197, 197, 0.6)' }}/>}
          </div>
        ))}
      </section>
    </>
  );
};

export default AshtakavargaTable;
