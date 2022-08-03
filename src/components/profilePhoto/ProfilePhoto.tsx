import React from 'react';
import { Grid } from '@mui/material';
import styles from './ProfilePhoto.module.scss';
import edit from './images/edit.svg';

const ProfilePhoto = () => {
  return (
    <Grid item>
      <div className={styles.outline}>
        <div className={styles.outlineImage} />
        <img src={edit} className={styles.imageEdit}/>
      </div>
    </Grid>
  );
};

export default ProfilePhoto;
