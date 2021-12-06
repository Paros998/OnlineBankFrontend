import React from 'react';
import { Carousel, Image } from "react-bootstrap";
import chuckNorrisAd from "../../../../assets/images/BZ_WBK_Chuck_Norris_Outdoor_1.jpg";

const Advertisements = () => {
  return (
    <Carousel className='mt-5' variant='dark'>
      <Carousel.Item>
        <Image width='100%' height='100%' src={chuckNorrisAd}/>
      </Carousel.Item>
    </Carousel>
  );
};

export default Advertisements;
