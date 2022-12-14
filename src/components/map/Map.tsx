import React, { useMemo, useState, useCallback } from 'react';
import northMap from './assets/northMap.svg';
import southMap from './assets/southMap.svg';
import deepSkyNorthMap from './assets/deepSkyNorthMap.png';
import deepSkySouthMap from './assets/deepSkySouthMap.png';
import AspectRatio from '@mui/joy/AspectRatio';
import { MapSection } from '../../models/types/MapSection';
import classNames from 'classnames';
import MapSector from './mapSector/MapSector';
import './SouthMap.scss';
import './NorthMap.scss';
import { useGetMapType } from '../../store/selectors';
import { MapTypeEnum } from '../../models/types/MapType';
import './Map.scss';

interface MapProps {
  mapSections?: Array<MapSection>,
  isTransit?: boolean,
  mapTransitSections?: Array<MapSection>,
  isDeepSky?: boolean
}

const getAspects = (targetAspectIndex: number) => {
  const aspects = [
    [5, 8, 11],
    [4, 7, 10],
    [6, 9, 12],
    [2, 8, 11],
    [1, 7, 10],
    [3, 9, 12],
    [2, 5, 11],
    [1, 4, 10],
    [3, 6, 12],
    [2, 5, 8],
    [1, 4, 7],
    [3, 6, 9]
  ];

  return aspects[targetAspectIndex - 1];
};

const Map = ({ mapSections, isTransit, mapTransitSections, isDeepSky }: MapProps) => {
  const [targetAspectIndex, setTargetAspectIndex] = useState<number>();
  const [selectedSector, setSelectedSector] = useState<number | undefined>(undefined);
  const aspects = useMemo<number [] | undefined>(() => {
    if (!targetAspectIndex) {
      return;
    }

    return getAspects(targetAspectIndex);
  }, [targetAspectIndex]);
  const MapType = useGetMapType();

  const isNorthType = useMemo(() => {
    return MapType === MapTypeEnum.North;
  }, [MapType]);

  const formattedMapSections = useMemo(() => {
    if (!mapSections) {
      return;
    }

    if (MapType === MapTypeEnum.North) {
      return Array.from(mapSections)?.sort((a, b) => Number(a?.house) - Number(b?.house));
    }

    return Array.from(mapSections)?.sort((a, b) => Number(a?.signId) - Number(b?.signId));
  }, [mapSections, MapType]);

  const formattedMapTransitSections = useMemo(() => {
    if (!mapTransitSections) {
      return;
    }

    if (MapType === MapTypeEnum.North) {
      return Array.from(mapTransitSections)?.sort((a, b) => Number(a?.house) - Number(b?.house));
    }

    return Array.from(mapTransitSections)?.sort((a, b) => Number(a?.signId) - Number(b?.signId));
  }, [mapTransitSections, MapType]);

  const getOrder = useCallback((signId: number, house: number) => {
    if (isNorthType) {
      return signId;
    }

    return house;
  }, [isNorthType]);

  return (
    <section
      className={classNames('map', {
        'transit-north': isTransit && isNorthType,
        'transit-south': isTransit && !isNorthType,
        'astro-processor-north-map': isNorthType,
        'astro-processor-south-map': !isNorthType,
        'deep-sky': isDeepSky
      })}
    >
      <div className={'blur'}/>
      <AspectRatio ratio={1}>
        { !isNorthType && !isDeepSky && <img src={southMap} className={'image'}/> }
        { isNorthType && !isDeepSky && <img src={northMap} className={'image'}/> }
        { !isNorthType && isDeepSky && <img src={deepSkySouthMap} className={'image'}/> }
        { isNorthType && isDeepSky && <img src={deepSkyNorthMap} className={'image'}/> }
      </AspectRatio>
      {formattedMapSections?.map((mapSection, index) => (
        <MapSector
          key={index}
          mapSection={mapSection}
          aspects={aspects}
          targetAspectIndex={targetAspectIndex}
          setTargetAspectIndex={setTargetAspectIndex}
          selectedSector={selectedSector}
          setSelectedSector={setSelectedSector}
          isNorthMap={isNorthType}
        />
      ))}
      {isTransit && formattedMapTransitSections?.map(({ primaryData, signId, house }) => (
        <div key={signId} className={`transited-sector transited-sector-${getOrder(signId, house)}`}>
          <h3>
            {primaryData.join(' ')}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default Map;
