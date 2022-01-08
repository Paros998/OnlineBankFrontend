import React, { FC } from 'react';
import { Carousel, Image } from "react-bootstrap";
import ad1 from "../../assets/images/BZ_WBK_Chuck_Norris_Outdoor_1.jpg";
import ad2 from '../../assets/images/ad-2.jpg';
import ad3 from '../../assets/images/ad-3.jpg';

interface AdvertisementsProps {
  wrapperClassName?: string;
}

const imageHeight = '100%';

const Advertisements: FC<AdvertisementsProps> = ({ wrapperClassName }) => {
  return (
    <Carousel className={wrapperClassName} variant='dark'>
      <Carousel.Item>
        <Image width='100%' height={imageHeight} src={ad1}/>
      </Carousel.Item>

      <Carousel.Item>
        <Image width='100%' height={imageHeight}  src={ad2}/>
      </Carousel.Item>

      <Carousel.Item>
        <Image width='100%' height={imageHeight}  src={ad3}/>
      </Carousel.Item>
    </Carousel>
  );
};

export default Advertisements;
