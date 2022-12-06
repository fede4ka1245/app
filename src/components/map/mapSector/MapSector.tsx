import React, { useMemo, useRef } from 'react';
import styles from './MapSector.module.scss';
import classNames from 'classnames';
import { useGetDeepSkyObjects, useGetIsDeepSkyActive, useGetIsEarthActive } from '../../../store/selectors';
import { CurrentDeepSkyObject } from '../../../models/types/CurrentDeepSkyObject';
import DeepSkyObject from '../../deepSkyObject/DeepSkyObject';
import { Grid } from '@mui/material';
import southMapMark from './southMapMark.svg';
import {
  currentDeepSkyObjectToMapDeepSkyObject
} from '../../../helpers/deepSky/currentDeepSkyObjectToMapDeepSkyObject';
import { useGetEarth } from '../../../hooks/useGetEarth';

interface MapSectorProps {
  number: number,
  mainInfo: string,
  additionalInfo: string,
  index: number,
  aspects: number [] | undefined,
  targetAspectIndex?: number,
  setTargetAspectIndex: (targetAspectIndex: number | undefined) => any,
  selectedSector: number | undefined,
  setSelectedSector: (selectedSector: number | undefined) => any,
  isNorthMap: boolean
}

const MapSector = ({ number, mainInfo, additionalInfo, index, aspects, targetAspectIndex, setTargetAspectIndex, selectedSector, setSelectedSector, isNorthMap }: MapSectorProps) => {
  const earth = useGetEarth();
  const isEarthActive = useGetIsEarthActive();

  const isSelected = useMemo(() => {
    return index === selectedSector;
  }, [index, selectedSector]);

  const isAspect = useMemo(() => {
    if (!aspects) {
      return false;
    }

    return aspects.includes(Number(index));
  }, [aspects, index]);

  const isTargetAspect = useMemo(() => {
    return index === targetAspectIndex;
  }, [targetAspectIndex]);

  const highlightedElementRef = useRef<HTMLDivElement>(null);

  const onHighlightedClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isSelected && targetAspectIndex) {
      setTargetAspectIndex(undefined);
      return;
    }

    if (!targetAspectIndex && !isSelected && !selectedSector) {
      setSelectedSector(index);
      return;
    }

    if (!targetAspectIndex && !isSelected && selectedSector) {
      setSelectedSector(undefined);
      return;
    }

    if (!targetAspectIndex && isSelected) {
      setTargetAspectIndex(index);
      setSelectedSector(undefined);
    }
  };

  const deepSkyObjects = useGetDeepSkyObjects();
  const isDeepSkyActive = useGetIsDeepSkyActive();

  const sectorDeepSkyObjects = useMemo(() => {
    const mapDeepSkyObjects = Array.from(deepSkyObjects
      .filter((object: CurrentDeepSkyObject) => Number(object.year?.siderealSign) === Number(index))
      .map((object: CurrentDeepSkyObject) => currentDeepSkyObjectToMapDeepSkyObject(object))
    );

    if (earth?.signDegrees.sign === Number(index) && isEarthActive) {
      mapDeepSkyObjects.push(earth);
    }

    return mapDeepSkyObjects;
  }, [deepSkyObjects, index, earth, isEarthActive]);

  const order = useMemo(() => {
    if (isNorthMap) {
      return number;
    }

    return index;
  }, [index, number, isNorthMap]);

  return (
    <div className={`sector sector-${order}`}>
      <div className={'info'}>
        {!isSelected && (
          <>
            <h3 className={'additional-info'}>
              {additionalInfo}
            </h3>
            <h3 className={'main-info'}>
              {mainInfo}
            </h3>
            {isDeepSkyActive && !!deepSkyObjects.length && <Grid display={'flex'}>
              {sectorDeepSkyObjects.map((deepSkyObject, index) => (
                <DeepSkyObject key={index} deepSkyObject={deepSkyObject} />
              ))}
            </Grid>}
          </>
        )}
      </div>
      <h3 className={'index'}>
        {index}
      </h3>
      <div
        onClick={onHighlightedClick}
        ref={highlightedElementRef}
        className={classNames('highlighted', {
          [styles.aspect]: isAspect,
          [styles.targetAspect]: isTargetAspect,
          [styles.selected]: isSelected
        })}
      />
      {isSelected && <h3 className={classNames(styles.aspectHint)}>
        <div className={'aspectsHint'}>
          Показать знаковые аспекты
        </div>
      </h3>}
      {!isNorthMap && Number(number) === 1 && (
        <img alt={'southMapMark'} src={southMapMark} className={styles.mark}/>
      )}
    </div>
  );
};

export default MapSector;
