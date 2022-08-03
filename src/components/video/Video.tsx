import React from 'react';
import start from '../../pages/astrlogicalProcessor/images/start.svg';

const Video = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '250px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundImage: 'url(video.png)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px'
    }}
    >
      <img src={start}/>
    </div>
  );
};

export default Video;
