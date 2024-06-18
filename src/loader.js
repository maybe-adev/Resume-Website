import React from 'react';
import { CircleLoader } from 'react-spinners';

const Preloader = ({ loading }) => {
  return (
    <div className={`preloader ${loading ? 'visible' : 'hidden'}`}>
      <CircleLoader  color="#330867" loading={true} size={50} speedMultiplier={1}/>
    </div>
  );
};

export default Preloader;

