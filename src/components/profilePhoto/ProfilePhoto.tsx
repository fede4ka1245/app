import React, { useEffect, useState } from 'react';
import styles from './ProfilePhoto.module.scss';
import edit from './images/edit.svg';
import plus from './images/plus.svg';
import { Camera, GalleryPhotos } from '@capacitor/camera';
import AvatarPicker from '../avatarPicker/AvatarPicker';
import { LocalStorageKey } from '../../helpers/LocalStorageKey';

const ProfilePhoto = () => {
  const [isProfilePhotoEditorActive, setIsProfilePhotoEditorActive] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const [avatarImageSource, setAvatarImageSource] = useState<string>('');

  useEffect(() => {
    const image = localStorage.getItem(LocalStorageKey.avatar);

    if (!image) {
      return;
    }

    setAvatarImageSource(image);
  }, []);

  const onChangePhotoClick = async () => {
    const { photos } : GalleryPhotos = await Camera.pickImages({
      limit: 1
    });

    console.log(photos);

    setImagePath(photos[0].webPath);
    setIsProfilePhotoEditorActive(true);
  };

  const onSave = (imageBase64: string) => {
    localStorage.setItem(LocalStorageKey.avatar, imageBase64);
    setAvatarImageSource(imageBase64);
    setIsProfilePhotoEditorActive(false);
  };

  return (
    <>
      <div className={styles.outline} onClick={onChangePhotoClick}>
        <div className={styles.outlineImage}>
          {avatarImageSource && <img src={avatarImageSource} width={'100%'} height={'100%'} style={{ opacity: 10 }}/>}
        </div>
        {avatarImageSource && <img src={edit} className={styles.imageEdit}/>}
        {!avatarImageSource && <img src={plus} className={styles.plus}/>}
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
