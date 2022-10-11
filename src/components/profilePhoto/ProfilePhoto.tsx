import React, { useState } from 'react';
import styles from './ProfilePhoto.module.scss';
import edit from './images/edit.svg';
import plus from './images/plus.svg';
import { Camera, GalleryPhotos } from '@capacitor/camera';
import AvatarPicker from '../avatarPicker/AvatarPicker';
import { setAvatar } from '../../store/reducers/userReducer';
import { useAppDispatch } from '../../store/store';
import { useGetAvatar } from '../../store/selectors';

const ProfilePhoto = () => {
  const [isProfilePhotoEditorActive, setIsProfilePhotoEditorActive] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const avatar = useGetAvatar();
  const dispatch = useAppDispatch();

  const onChangePhotoClick = async () => {
    const { photos } : GalleryPhotos = await Camera.pickImages({
      limit: 1
    });

    setIsProfilePhotoEditorActive(true);
    setImagePath(photos[0].webPath);
  };

  const onSave = (imageBase64: string) => {
    setIsProfilePhotoEditorActive(false);
    dispatch(setAvatar(imageBase64));
  };

  return (
    <>
      <div className={styles.outline} onClick={onChangePhotoClick}>
        <div className={styles.outlineImage}>
          {avatar && <img src={avatar} width={'100%'} height={'100%'} style={{ opacity: 10 }}/>}
        </div>
        {avatar && <img src={edit} className={styles.imageEdit}/>}
        {!avatar && <img src={plus} className={styles.plus}/>}
      </div>
      {isProfilePhotoEditorActive &&
        <AvatarPicker
          imagePath={imagePath}
          cancel={() => setIsProfilePhotoEditorActive(false)}
          save={onSave}
        />
      }
    </>
  );
};

export default ProfilePhoto;
