import React from 'react';
import { Accordion, Col, ColProps, Row } from 'react-bootstrap';
import EditClientData from './EditClientData/EditClientData';
import EditClientCredentials from './EditClientCredentials/EditClientCredentials';

const colProps: ColProps = { xs: 12 };

const EditClientAccordions = () => (
  <Accordion flush>
    <Row>
      <Col {...colProps}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Edycja danych osobowych
          </Accordion.Header>

          <Accordion.Body className='ps-1 pe-1'>
            <EditClientData/>
          </Accordion.Body>
        </Accordion.Item>
      </Col>
    </Row>

    <Row>
      <Col {...colProps}>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Edycja danych logowania
          </Accordion.Header>

          <Accordion.Body className='ps-1 pe-1'>
            <EditClientCredentials/>
          </Accordion.Body>
        </Accordion.Item>
      </Col>
    </Row>
  </Accordion>
);

export default EditClientAccordions;
