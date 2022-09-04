import { styled } from '@mui/material';
import Slider from '@mui/material/Slider';

export default styled(Slider)(({ theme }) => ({
  height: 3,
  color: 'transparent',
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '1px solid currentColor'
  },
  '& .MuiSlider-track': {
    height: 3,
    background: 'linear-gradient(88.23deg, #37366B 0.29%, #5C5B9F 42.18%, #59ABDA 97.3%), #F0F0F3'
  },
  '& .MuiSlider-rail': {
    color: '#37366B',
    height: 10,
    '&::before': {
      content: '""', // "''" will also work.
      left: 'calc(0% - 10px)',
      height: 20,
      width: 20,
      backgroundColor: '#37366B',
      opacity: 1,
      position: 'absolute',
      top: 'calc(50% - 10px)',
      borderRadius: '50%'
    },
    '&::after': {
      content: '""', // "''" will also work.
      left: 'calc(100% - 10px)',
      height: 20,
      width: 20,
      backgroundColor: '#37366B',
      opacity: 1,
      position: 'absolute',
      top: 'calc(50% - 10px)',
      borderRadius: '50%'
    }
  }
}));
