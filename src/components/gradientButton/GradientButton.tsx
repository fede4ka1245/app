import React, { useCallback } from 'react';
import MuiButton from '@mui/material/Button';
import { Typography } from '@mui/material';

export interface GradientButtonProps {
  children?: React.ReactNode,
  onClick?: (params?: any) => any,
}

const GradientButton = ({ children, onClick }: GradientButtonProps) => {
  const onGradientButtonClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <MuiButton onClick={onGradientButtonClick} fullWidth sx={{ height: '60px', background: '#F0F0F3', boxShadow: '-5px -5px 20px #FFFFFF, 5px 5px 20px rgba(174, 174, 192, 0.5)', borderRadius: '10px' }}>
      <Typography
        sx={{
          background: 'linear-gradient(268.23deg, #37366B 2.7%, #5C5B9F 44.59%, #59ABDA 99.71%), #C4C4C4',
          backgroundClip: 'text',
          color: 'transparent'
        }}
        fontFamily={'Gilroy'}
        textAlign={'center'}
        textTransform={'uppercase'}
        fontWeight={'bold'}
      >
        {children}
      </Typography>
    </MuiButton>
  );
};

export default GradientButton;
