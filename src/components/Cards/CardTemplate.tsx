import React, {FC, ReactNode} from 'react';
import {Button, Card} from "react-bootstrap";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";

interface CardTemplateProps {
  header: string;
  text?: string;
  img?: string;
  children: ReactNode;
  className?:string;
  headerClassName?:string;
  bodyClassName?:string;
  headerDiamondClassName?:string;
}

const CardTemplate: FC<CardTemplateProps> = ({header,
                                               text,
                                               img,
                                               children,
                                               className,
                                               headerClassName,
                                               bodyClassName,
                                               headerDiamondClassName}) => {
  return (
    <Card style={{width: '18rem'}} className={`rounded-card-10 pe-2 ps-2 m-2 me-0 ${className}`}>
      {
        img && <Card.Img variant="top" src={`${img}`}/>
      }
      <div className={`pt-3 ${headerClassName}`}>
          <TextWithDiamond
            diamondClassName={headerDiamondClassName}
          >
            <h5>{header}</h5>
          </TextWithDiamond>
          <hr/>
      </div>

      <Card.Body className={`overflow-scroll transparent-scrollbar ${bodyClassName}`}>
        {
          text && <Card.Text>{text}</Card.Text>
        }
        {children}
      </Card.Body>
    </Card>
  );
};

export default CardTemplate;