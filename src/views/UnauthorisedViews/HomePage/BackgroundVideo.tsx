import React from 'react';


type BgVdProps = {
  src:string,
  autoPlay:boolean,
  loop:boolean,
  colorClass:string
}

const BackgroundVideo = (prop: BgVdProps) => {
  return (
    <>
      <video
        className='position-fixed mw-100 min-vh-100 bg-video all-sides-0 '
        src={prop.src}
        autoPlay={prop.autoPlay}
        loop={prop.loop}
      />

      <div className={`position-fixed all-sides-0 vh-100 opacity-50 bg-video ${prop.colorClass}`}/>
    </>
  );
};

export default BackgroundVideo;
