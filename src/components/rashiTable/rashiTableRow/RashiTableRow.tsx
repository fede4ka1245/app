import React, { useCallback, useMemo, useState } from 'react';
import { RashiTableRow as IRashiTableRow } from '../../../models/types/RashiTableRow';
import { Grid, Typography } from '@mui/material';
import styles from '../RashiTable.module.scss';
import img from '../../../pages/horoscopes/natMap/img.png';
import arrowDown from '../assets/arrowDown.svg';
import arrowUp from '../assets/arrowUp.svg';
import ZodiacSign from '../../zodiacSign/ZodiacSign';
import DeepSkyInfo from '../deepSkyInfo/DeepSkyInfo';
import classNames from 'classnames';

interface RashiTableRowProps {
  rashiItem: IRashiTableRow,
  isDeepSkyActive?: boolean
}

const RashiTableRow = ({ rashiItem, isDeepSkyActive }: RashiTableRowProps) => {
  const [isDeepSkyInfoOpen, setIsDeepSkyInfoOpen] = useState(false);

  const isDeepSky = useMemo(() => {
    return !!rashiItem.deepSkyObject && isDeepSkyActive;
  }, [rashiItem, isDeepSkyActive]);

  const toggleIsDeepSkyInfoOpen = useCallback(() => {
    setIsDeepSkyInfoOpen(!isDeepSkyInfoOpen);
  }, [isDeepSkyInfoOpen]);

  return (
    <>
      <section className={classNames(styles.row, { [styles.isDeepSky]: isDeepSkyInfoOpen })}>
        <Grid display={'flex'} alignItems={'center'}>
          {rashiItem.planet.additionalInfo && <Grid pl={1} className={styles.planetAdditionalInfo}>
            {rashiItem.planet.additionalInfo}
          </Grid>}
          <Grid pl={1} className={styles.planet} fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
            {rashiItem.planet.name}
          </Grid>
          {rashiItem.planet.isRetragraded && <Grid pl={1} className={styles.planetSign} fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
            (R)
          </Grid>}
        </Grid>
        <Grid>
          {isDeepSky && isDeepSkyActive && <div onClick={toggleIsDeepSkyInfoOpen}>
            {!isDeepSkyInfoOpen && <img src={arrowDown} width={28} height={28}/>}
            {isDeepSkyInfoOpen && <img src={arrowUp} width={28} height={28}/>}
          </div>}
        </Grid>
        <Grid display={'flex'} alignItems={'center'}>
          <ZodiacSign zodiacSign={rashiItem.sign} />
        </Grid>
        <Grid display={'flex'} alignItems={'center'}>
          <Typography className={styles.degrees} fontWeight={'bold'} fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
            {rashiItem.degrees}° {rashiItem.minutes}&apos;
          </Typography>
        </Grid>
        <Grid display={'flex'} alignItems={'center'}>
          <Typography fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
            {rashiItem.naksantra.mainInfo} {rashiItem.naksantra.additionalInfo}
          </Typography>
        </Grid>
      </section>
      {isDeepSky && isDeepSkyInfoOpen && rashiItem.deepSkyObject && (
        <DeepSkyInfo planet={rashiItem.planet.name} deepSkyObject={rashiItem.deepSkyObject}/>
      )}
    </>
  );
};

export default RashiTableRow;
