import React from 'react';
import { CurrentDeepSkyObject } from '../../models/types/CurrentDeepSkyObject';
import star from './assets/star.png';
import galaxy from './assets/galaxy.png';
import stars from './assets/stars.png';
import nebula from './assets/nebula.png';
import closeStar from './assets/closeStar.png';
import { DeepSkyToolTip } from './DeepSkyToolTip';

interface DeepSkyObjectProps {
  deepSkyObject?: CurrentDeepSkyObject
}

const DeepSkyObject = ({ deepSkyObject }: DeepSkyObjectProps) => {
  return (
    <div style={{ zIndex: 20, pointerEvents: 'auto' }}>
      <DeepSkyToolTip title={<>{deepSkyObject?.stellarObjectType}</>}>
        <div>
          {deepSkyObject?.stellarObjectType === 1 && <img src={star} width={26} height={26} />}
          {deepSkyObject?.stellarObjectType === 2 && <img src={closeStar} width={26} height={26} />}
          {deepSkyObject?.stellarObjectType === 3 && <img src={galaxy} width={26} height={26} />}
          {deepSkyObject?.stellarObjectType === 4 && <img src={nebula} width={26} height={26} />}
          {deepSkyObject?.stellarObjectType === 5 && <img src={stars} width={26} height={26} />}
        </div>
      </DeepSkyToolTip>
    </div>
  );
};

export default DeepSkyObject;
