import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import Button from '../button/Button';
import { ButtonType } from '../button/ButtonProps';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
// @ts-ignore
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { useHideNavbar } from '../../hooks/useHideNavbar';

interface AvatarPickerProps {
  imagePath: string,
  cancel: () => any;
  save: (imageBase64: string) => any;
}

const AvatarPicker = ({ imagePath, cancel, save }: AvatarPickerProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const onInit = () => {
    setTimeout(() => {
      if (imgRef.current) {
        (imgRef.current as any)?.cropper.setCropBoxData({
          left: window.innerWidth / 2 - 150,
          top: window.innerHeight / 2 - 300,
          width: 300,
          height: 300
        });
      }
    }, 100);
  };

  useEffect(() => {
    disablePageScroll();

    return () => {
      enablePageScroll();
    };
  }, []);

  useHideNavbar();

  const onSave = () => {
    if (imgRef.current) {
      const cropper = (imgRef.current as any)?.cropper;

      cropper.getCroppedCanvas({
        width: 300,
        height: 300,
        fillColor: 'black',
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'high'
      }).toBlob((blob: Blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onload = function () {
          save(reader.result as string);
        };
      });
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 10, background: 'black', width: '100%', height: '100%' }}>
      <Cropper
        src={imagePath}
        style={{ height: '100%', width: '100%', background: 'black' }}
        initialAspectRatio={1}
        guides={false}
        ref={imgRef}
        cropBoxResizable={false}
        minCropBoxHeight={300}
        minCropBoxWidth={300}
        cropBoxMovable={false}
        onInitialized={onInit}
        dragMode={'move'}
        background={false}
      />
      <Grid container direction={'column'} rowSpacing={2} position={'absolute'} bottom={2} width={'100%'} p={'15px'} zIndex={2}>
        <Grid item>
          <Button text={'Сохранить'} onClick={onSave}/>
        </Grid>
        <Grid item>
          <Button text={'Отменить'} type={ButtonType.outline} onClick={cancel}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default AvatarPicker;
