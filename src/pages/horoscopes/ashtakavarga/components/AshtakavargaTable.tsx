import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import northMap from './northMap.svg';
import southMap from './southMap.svg';
import { AshtakavargaTable as AshtakavargaTableProps } from '../../../../models/types/AshtakavargaTable';
import { Typography, Grid } from '@mui/material';
import '../../../../components/map/NorthMap.scss';
import '../../../../components/map/SouthMap.scss';
import { MapTypeEnum } from '../../../../models/types/MapType';
import classNames from 'classnames';
import southMapMark from './southMapMark.svg';

const AshtakavargaTable = ({ table, tableName, mapType, firstHouse }: AshtakavargaTableProps) => {
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
              <Typography color={'#292E30'} fontWeight={'bold'} fontFamily={'Gilroy'}>
                {mainInfo}
              </Typography>
              {index === 0 && mapType === MapTypeEnum.North && <Typography pt={2} color={'#17BB6D'} fontWeight={'bold'} fontFamily={'Gilroy'}>
                {firstHouse}
              </Typography>}
            </div>
            {isHighlighted && <div className={'highlighted'} style={{ background: 'rgba(255, 197, 197, 0.6)' }}/>}
            {index + 1 === firstHouse && mapType === MapTypeEnum.South && (
              <Grid position={'absolute'} left={0} bottom={0} width={'30%'} height={'30%'}>
                <img src={southMapMark} width={'100%'} height={'100%'}/>
              </Grid>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default AshtakavargaTable;
