import React, { useMemo, useRef } from 'react';
import styles from './MapSector.module.scss';
import classNames from 'classnames';
import {
  useGetDeepSkyObjects,
  useGetIsDeepSkyActive,
  useGetIsEarthActive
} from '../../../store/selectors';
import { CurrentDeepSkyObject } from '../../../models/types/CurrentDeepSkyObject';
import DeepSkyObject from '../../deepSkyObject/DeepSkyObject';
import { Grid } from '@mui/material';
import southMapMark from './southMapMark.svg';
import {
  currentDeepSkyObjectToMapDeepSkyObject
} from '../../../helpers/deepSky/currentDeepSkyObjectToMapDeepSkyObject';
import { useGetEarth } from '../../../hooks/useGetEarth';
import { MapSection } from '../../../models/types/MapSection';
import { useGetIsHelpersElementsActive } from '../../../hooks/useGetIsHelpersElementsActive';

interface MapSectorProps {
  aspects: number [] | undefined,
  targetAspectIndex?: number,
  setTargetAspectIndex: (targetAspectIndex: number | undefined) => any,
  selectedSector: number | undefined,
  setSelectedSector: (selectedSector: number | undefined) => any,
  isNorthMap: boolean,
  mapSection: Omit<Omit<MapSection, 'isDeepSkyActive'>, 'deepSkyObject'>
}

const MapSector = ({ aspects, targetAspectIndex, mapSection, setTargetAspectIndex, selectedSector, setSelectedSector, isNorthMap }: MapSectorProps) => {
  const earth = useGetEarth();
  const isEarthActive = useGetIsEarthActive();

  const { signId, specialLagna, arudhs, primaryData, house, mandyGulika, upagraha, transsaturns, grahaDrishti } = mapSection;

  const isSelected = useMemo(() => {
    return signId === selectedSector;
  }, [signId, selectedSector]);

  const isAspect = useMemo(() => {
    if (!aspects) {
      return false;
    }

    return aspects.includes(Number(signId));
  }, [aspects, signId]);

  const isTargetAspect = useMemo(() => {
    return signId === targetAspectIndex;
  }, [targetAspectIndex, signId]);

  const highlightedElementRef = useRef<HTMLDivElement>(null);

  const onHighlightedClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isSelected && targetAspectIndex) {
      setTargetAspectIndex(undefined);
      return;
    }

    if (!targetAspectIndex && !isSelected && !selectedSector) {
      setSelectedSector(signId);
      return;
    }

    if (!targetAspectIndex && !isSelected && selectedSector) {
      setSelectedSector(undefined);
      return;
    }

    if (!targetAspectIndex && isSelected) {
      setTargetAspectIndex(signId);
      setSelectedSector(undefined);
    }
  };

  const deepSkyObjects = useGetDeepSkyObjects();
  const isDeepSkyActive = useGetIsDeepSkyActive();

  const sectorDeepSkyObjects = useMemo(() => {
    const mapDeepSkyObjects = Array.from(deepSkyObjects
      .filter((object: CurrentDeepSkyObject) => Number(object.year?.siderealSign) === Number(signId))
      .map((object: CurrentDeepSkyObject) => currentDeepSkyObjectToMapDeepSkyObject(object))
    );

    if (earth?.signDegrees.sign === Number(signId) && isEarthActive) {
      mapDeepSkyObjects.push(earth);
    }

    return mapDeepSkyObjects;
  }, [deepSkyObjects, signId, earth, isEarthActive]);

  const order = useMemo(() => {
    if (isNorthMap) {
      return house;
    }

    return signId;
  }, [signId, house, isNorthMap]);

  const {
    isTranssaturnsActive,
    isArudhsActive,
    isAspectsActive,
    isMandyAndGulikaActive,
    isSpecialLagnaActive,
    isUpagrahsActive
  } = useGetIsHelpersElementsActive();

  return (
    <div className={`sector sector-${order}`}>
      <div className={'info'}>
        {!isSelected && (
          <Grid display={'flex'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
            {isArudhsActive && <h3 className={'arudhs'}>
              {arudhs.join(' ')}
            </h3>}
            {isSpecialLagnaActive && <h3 className={'additional-info'}>
              {specialLagna.join(' ')}
            </h3>}
            {isMandyAndGulikaActive && <h3 className={'gulika'}>
              {mandyGulika.join(' ')}
            </h3>}
            {isUpagrahsActive && <h3 className={'additional-info'}>
              {upagraha.join(' ')}
            </h3>}
            {isTranssaturnsActive && <h3 className={'transsaturns'}>
              {transsaturns.join(' ')}
            </h3>}
            {isAspectsActive && <h3 className={'graha'}>
              {grahaDrishti.join(' ')}
            </h3>}
            <h3 className={'main-info'}>
              {primaryData.join(' ')}
            </h3>
            {isDeepSkyActive && !!deepSkyObjects.length && <Grid display={'flex'}>
              {sectorDeepSkyObjects.map((deepSkyObject, index) => (
                <DeepSkyObject key={index} deepSkyObject={deepSkyObject} />
              ))}
            </Grid>}
          </Grid>
        )}
      </div>
      <h3 className={'index'}>
        {signId}
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
      {!isNorthMap && Number(house) === 1 && (
        <img alt={'southMapMark'} src={southMapMark} className={styles.mark}/>
      )}
    </div>
  );
};

export default MapSector;
