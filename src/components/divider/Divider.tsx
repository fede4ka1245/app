import React from 'react';

const Divider = ({ color }: { color: string }) => {
  return (
    <div style={{ width: '100%', height: '1px', background: color || 'white' }}/>
  );
};

export default Divider;
