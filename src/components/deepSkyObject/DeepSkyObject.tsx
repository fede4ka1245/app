import React, { useMemo, useRef } from 'react';
import star from './assets/star.png';
import galaxy from './assets/galaxy.png';
import stars from './assets/stars.png';
import nebula from './assets/nebula.png';
import earth from './assets/earth.png';
import { ClickAwayListener, Popper } from '@mui/material';
import styles from './DeepSkyObject.module.scss';
import classNames from 'classnames';
import { StellarObjectType } from '../../models/enums/StellarObjectType';
import { MapDeepSkyObject } from '../../models/types/MapDeepSkyObject';

interface DeepSkyObjectProps {
  deepSkyObject?: MapDeepSkyObject
}

const DeepSkyObject = ({ deepSkyObject }: DeepSkyObjectProps) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const objectType = useMemo(() => {
    if (deepSkyObject?.stellarObjectType === StellarObjectType.Star) {
      return 'Звезда';
    } else if (deepSkyObject?.stellarObjectType === StellarObjectType.CloseStar) {
      return 'Звезда близкая к эклиптике';
    } else if (deepSkyObject?.stellarObjectType === StellarObjectType.Galaxy) {
      return 'Галактика';
    } else if (deepSkyObject?.stellarObjectType === StellarObjectType.Nebula) {
      return 'Туманность';
    } else if (deepSkyObject?.stellarObjectType === StellarObjectType.Stars) {
      return 'Звёздное скопление';
    } else if (deepSkyObject?.stellarObjectType === StellarObjectType.Earth) {
      return 'Земля';
    }
  }, [deepSkyObject]);

  const anchorElement = useRef<HTMLDivElement>(null);

  return (
    <>
      <Popper
        open={open}
        anchorEl={anchorElement.current}
        disablePortal={true}
        placement={'top'}
        sx={{ zIndex: 100 }}
      >
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <p className={classNames(styles.text, styles.toolTip)}>
            <label className={styles.objectType}>
              {objectType}
            </label>
            <label className={styles.text}>
              {`/ ${deepSkyObject?.signDegrees?.degrees}° ${deepSkyObject?.signDegrees?.minutes}' /`}
            </label>
          </p>
        </ClickAwayListener>
      </Popper>
      <div onClick={handleTooltipOpen} ref={anchorElement} style={{ zIndex: 20, pointerEvents: 'all' }}>
        {(deepSkyObject?.stellarObjectType === 1 || deepSkyObject?.stellarObjectType === 2) && (
          <img src={star} className={styles.image} width={26} height={26} />
        )}
        {deepSkyObject?.stellarObjectType === 3 && <img src={galaxy} className={styles.image} width={26} height={26} />}
        {deepSkyObject?.stellarObjectType === 4 && <img src={nebula} className={styles.image} width={26} height={26} />}
        {deepSkyObject?.stellarObjectType === 5 && <img src={stars} className={styles.image} width={26} height={26} />}
        {deepSkyObject?.stellarObjectType === 6 && <img src={earth} className={styles.image} width={26} height={26} />}
      </div>
    </>
  );
};

export default DeepSkyObject;
