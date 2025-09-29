import { Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';

function Mensajeprincipal() {
  return (
    <Row>
        <Col md={6}>
        <p>lorem dosaud poasidu asodiasudoiasudsoaiudoasiu</p>
        </Col>
        <Col md={6}>
        <img src={logo}></img>
        </Col>
    </Row>
  );
}

export default Mensajeprincipal;