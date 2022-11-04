import React from 'react';
import map from './assets/map.svg';
import AspectRatio from '@mui/joy/AspectRatio';
import './Map.scss';
import { MapSection } from '../../models/types/MapSection';
import classNames from 'classnames';

interface MapProps {
  mapSections?: Array<MapSection>,
  isTransit?: boolean,
  mapTransitSections?: Array<MapSection>
}

const Map = ({ mapSections, isTransit, mapTransitSections }: MapProps) => {
  return (
    <section className={classNames('astro-processor-map', { transit: isTransit })}>
      <div className={'blur'}/>
      <AspectRatio ratio={1}>
        <img src={map} className={'image'}/>
      </AspectRatio>
      {mapSections?.map(({ mainInfo, additionalInfo, index, number }) => (
        <div key={index} className={`sector sector-${(Number(number) + 5) % 12 + 1}`}>
          <div className={'info'}>
            <h3 className={'additional-info'}>
              {additionalInfo}
            </h3>
            <h3 className={'main-info'}>
              {mainInfo}
            </h3>
          </div>
          <h3 className={'index'}>
            {index}
          </h3>
        </div>
      ))}
      {isTransit && mapTransitSections?.map(({ mainInfo, index, number }) => (
        <div key={index} className={`transited-sector transited-sector-${(Number(number) + 5) % 12 + 1}`}>
          <h3>
            {mainInfo}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default Map;
