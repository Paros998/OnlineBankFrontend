import React, { FC } from 'react';
import { Carousel, Image } from "react-bootstrap";
import chuckNorrisAd from "../../assets/images/BZ_WBK_Chuck_Norris_Outdoor_1.jpg";

interface AdvertisementsProps {
  wrapperClassName?: string;
}

const Advertisements: FC<AdvertisementsProps> = ({ wrapperClassName }) => {
  return (
    <Carousel className={wrapperClassName} variant='dark'>
      <Carousel.Item>
        <Image width='100%' height='100%' src={chuckNorrisAd}/>
      </Carousel.Item>
    </Carousel>
  );
};

export default Advertisements;
