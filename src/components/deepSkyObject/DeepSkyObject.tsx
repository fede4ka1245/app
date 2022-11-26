import React, { useMemo, useRef } from 'react';
import { CurrentDeepSkyObject } from '../../models/types/CurrentDeepSkyObject';
import star from './assets/star.png';
import galaxy from './assets/galaxy.png';
import stars from './assets/stars.png';
import nebula from './assets/nebula.png';
import { ClickAwayListener, Popper } from '@mui/material';
import styles from './DeepSkyObject.module.scss';
import classNames from 'classnames';

interface DeepSkyObjectProps {
  deepSkyObject?: CurrentDeepSkyObject
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
    if (deepSkyObject?.stellarObjectType === 1) {
      return 'Звезда';
    } else if (deepSkyObject?.stellarObjectType === 2) {
      return 'Звезда близкая к эклиптике';
    } else if (deepSkyObject?.stellarObjectType === 3) {
      return 'Галактика';
    } else if (deepSkyObject?.stellarObjectType === 4) {
      return 'Туманность';
    } else if (deepSkyObject?.stellarObjectType === 5) {
      return 'Звёздное скопление';
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
              {`/ ${deepSkyObject?.year?.siderealSigndegree}° ${deepSkyObject?.year?.siderealMinutes}' /`}
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
      </div>
    </>
  );
};

export default DeepSkyObject;
