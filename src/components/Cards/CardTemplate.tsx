import React, {FC, ReactNode} from 'react';
import {Button, Card} from "react-bootstrap";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";

interface CardTemplateProps {
  header: string;
  text?: string;
  img?: string;
  children: ReactNode;
  className?:string;
}

const CardTemplate: FC<CardTemplateProps> = ({header, text, img, children,className}) => {
  return (
    <Card style={{width: '18rem'}} className={className}>
      {
        img && <Card.Img variant="top" src={`${img}`}/>
      }
      <Card.Header>
        <Card.Title>
          <TextWithDiamond
            headerFontSize='fs-5'
          >
            <h5>{header}</h5>
          </TextWithDiamond>
        </Card.Title>
      </Card.Header>

      <Card.Body>
        {
          text && <Card.Text>{text}</Card.Text>
        }
        {children}
      </Card.Body>
    </Card>
  );
};

export default CardTemplate;