import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import northMap from './northMap.svg';
import southMap from './southMap.svg';
import { AshtakavargaTable as AshtakavargaTableProps } from '../../../../models/types/AshtakavargaTable';
import { Typography } from '@mui/material';
import '../../../../components/map/NorthMap.scss';
import '../../../../components/map/SouthMap.scss';
import { MapTypeEnum } from '../../../../models/types/MapType';
import classNames from 'classnames';

const AshtakavargaTable = ({ table, tableName, mapType }: AshtakavargaTableProps) => {
  return (
    <>
      <Typography fontFamily={'Playfair Display'} fontSize={'18px'} fontWeight={700} color={'white'} pb={2}>
        {tableName}
      </Typography>
      <section className={classNames({ 'astro-processor-north-map': mapType === MapTypeEnum.North, 'astro-processor-south-map': mapType === MapTypeEnum.South })}>
        <AspectRatio ratio={1}>
          {mapType === MapTypeEnum.North && <img src={northMap} className={'image'}/>}
          {mapType === MapTypeEnum.South && <img src={southMap} className={'image'}/>}
        </AspectRatio>
        {table?.map(({ mainInfo, isHighlighted }, index) => (
          <div key={index} className={`sector sector-${index + 1}`}>
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
