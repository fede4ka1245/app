import React from 'react';
import { Grid } from '@mui/material';
import styles from './YogasTable.module.scss';

const YogasTableRow = ({ row }: any) => {
  return (
    <Grid container display={'flex'} className={styles.row} alignItems={'center'}>
      <Grid item flex={1} pl={2} fontFamily={'Gilroy'} fontSize={'18px'} fontWeight={'700'} color={'white'}>
        {row?.planets?.join(' - ')}
      </Grid>
      <Grid item pr={2} fontFamily={'Gilroy'} fontSize={'18px'} fontWeight={'700'} color={'white'}>
        {row?.connection?.connection}
      </Grid>
      <Grid item pr={2} fontFamily={'Gilroy'} fontSize={'18px'} fontWeight={'700'} color={'white'}>
        <Grid container className={styles.badge}>
          <Grid item>
            {row?.badge?.number}
          </Grid>
          <Grid item pl={'4px'} pr={'4px'}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3">
                <path d="M9.88986 2.61091L3.22285 9.27792M9.88986 2.61091L9.88986 6.5M9.88986 2.61091L6.00077 2.61091" stroke="#292E30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.11251 10.3891L8.77952 3.72207M2.11251 10.3891L6.0016 10.3891M2.11251 10.3891L2.11251 6.49999" stroke="#292E30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
          </Grid>
          <Grid item>
            {row?.badge?.name}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default YogasTableRow;
