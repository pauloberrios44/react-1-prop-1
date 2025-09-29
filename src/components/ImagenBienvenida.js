import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from '../images/Banner_02.webp';

function ImagenBienvenida() {
  return (
    <Row>
        <Col md={12}>
            <img src={logo} style={{ width: '100%' }} alt="Banner de bienvenida" />
        </Col>
    </Row>
  );
}

export default ImagenBienvenida;