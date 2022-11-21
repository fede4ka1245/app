import React, { useMemo, useRef } from 'react';
import styles from './MapSector.module.scss';
import classNames from 'classnames';
import { useGetDeepSkyObjects, useGetIsDeepSkyActive } from '../../../store/selectors';
import { CurrentDeepSkyObject } from '../../../models/types/CurrentDeepSkyObject';
import DeepSkyObject from '../../deepSkyObject/DeepSkyObject';
import { Grid } from '@mui/material';

interface MapSectorProps {
  number: number,
  mainInfo: string,
  additionalInfo: string,
  index: number,
  aspects: number [] | undefined,
  targetAspectIndex?: number,
  setTargetAspectIndex: (targetAspectIndex: number | undefined) => any,
  selectedSector: number | undefined,
  setSelectedSector: (selectedSector: number | undefined) => any
}

const MapSector = ({ number, mainInfo, additionalInfo, index, aspects, targetAspectIndex, setTargetAspectIndex, selectedSector, setSelectedSector }: MapSectorProps) => {
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
    return deepSkyObjects.filter((object: CurrentDeepSkyObject) => Number(object.year?.siderealSign) === Number(index));
  }, [deepSkyObjects, index]);

  return (
    <div className={`sector sector-${(Number(number) + 5) % 12 + 1}`}>
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
    </div>
  );
};

export default MapSector;
