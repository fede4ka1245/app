import React, { useMemo } from 'react';
import { CurrentDeepSkyObject } from '../../models/types/CurrentDeepSkyObject';
import star from './assets/star.png';
import galaxy from './assets/galaxy.png';
import stars from './assets/stars.png';
import nebula from './assets/nebula.png';
import closeStar from './assets/closeStar.png';
import { DeepSkyToolTip } from './DeepSkyToolTip';
import { ClickAwayListener } from '@mui/material';
import { Grid } from '@mui/joy';
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

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div style={{ zIndex: 20, pointerEvents: 'auto' }}>
        <DeepSkyToolTip
          sx={{ zIndex: 100 }}
          placement={'top'}
          open={open}
          title={
            <Grid display={'flex'} flexWrap={'nowrap'} justifyContent={'center'}>
              <p className={classNames(styles.text, styles.toolTip)}>
                <label className={styles.objectType}>
                  {objectType}
                </label>
                {`/ ${deepSkyObject?.year?.siderealSigndegree}° ${deepSkyObject?.year?.siderealMinutes}' /`}
              </p>
            </Grid>
          }
          PopperProps={{
            disablePortal: true
          }}
          onClose={handleTooltipClose}
          disableFocusListener
          disableHoverListener
          disableTouchListener
        >
          <div onClick={handleTooltipOpen}>
            {deepSkyObject?.stellarObjectType === 1 && <img src={star} width={26} height={26} />}
            {deepSkyObject?.stellarObjectType === 2 && <img src={closeStar} width={26} height={26} />}
            {deepSkyObject?.stellarObjectType === 3 && <img src={galaxy} width={26} height={26} />}
            {deepSkyObject?.stellarObjectType === 4 && <img src={nebula} width={26} height={26} />}
            {deepSkyObject?.stellarObjectType === 5 && <img src={stars} width={26} height={26} />}
          </div>
          
        </DeepSkyToolTip>
      </div>
    </ClickAwayListener>
  );
};

export default DeepSkyObject;
