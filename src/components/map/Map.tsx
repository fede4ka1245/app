import React from 'react';
import map from './assets/map.svg';
import AspectRatio from '@mui/joy/AspectRatio';
import './Map.scss';
import { MapSection } from '../../models/types/MapSection';

interface MapProps {
  mapSections?: Array<MapSection>
}

const Map = ({ mapSections }: MapProps) => {
  return (
    <section className={'astro-processor-map'}>
      <AspectRatio ratio={1}>
        <img src={map} className={'image'}/>
      </AspectRatio>
      {mapSections?.map(({ mainInfo, additionalInfo, index, number }) => (
        <div key={index} className={`sector sector-${(Number(number) + 6) % 12}`}>
          <h3 className={'additional-info'}>
            {additionalInfo}
          </h3>
          <h3 className={'main-info'}>
            {mainInfo}
          </h3>
          <h3 className={'index'}>
            {index}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default Map;
