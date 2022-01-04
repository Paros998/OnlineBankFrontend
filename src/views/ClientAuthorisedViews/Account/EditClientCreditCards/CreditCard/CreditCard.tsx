import React, { FC } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { Hammer, LockFill, Trash } from 'react-bootstrap-icons';

interface CreditCardProps {
  imgSrc: string;
}

const CreditCard: FC<CreditCardProps> = ({ imgSrc }) => {
  return (
    <Card bg="primary-light">
      <Card.Body>
        <div className="hstack gap-3">
          <Image width="100%" height="100%" src={imgSrc}/>

          <section className="vstack justify-content-between">
            <Col xs="auto">
              <Button variant="primary" className="rounded-circle text-white">
                <Trash/>
              </Button>
            </Col>

            <Col xs="auto">
              <Button variant="danger" className="rounded-circle text-white">
                <LockFill className='text-center align-self-center'/>
              </Button>
            </Col>

            <Col xs="auto">
              <Button variant="warning" className="rounded-circle text-white">
                <Hammer className='m-auto'/>
              </Button>
            </Col>
          </section>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CreditCard;
