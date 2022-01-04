import React, {FC} from 'react';
import {Spinner} from "react-bootstrap";

interface CenteredSpinnerTemplateProps{
  variant?:string;
  isPending?:unknown;
}

const CenteredSpinnerTemplate:FC<CenteredSpinnerTemplateProps> = ({variant,isPending}) => {
  if(isPending) {
    return (
      <div className='d-flex h-100 w-100 justify-content-center align-items-center '>
        <Spinner variant={`${variant ? variant : 'primary'}`} animation='border'
                 style={{width: '16rem', height: '16rem'}}/>
      </div>
    );
  }
  return null;
};

export default CenteredSpinnerTemplate;