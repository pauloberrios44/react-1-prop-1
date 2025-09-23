import logo from './logo.svg';
import './App.css';
import react from 'react';
import Navbar from './components/Navbar';
import Mensajeprincipal from './components/Mensaje-principal';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Container>
        <Mensajeprincipal/>
        <Mensajeprincipal/>
        <Mensajeprincipal/>
      </Container>
    </div>
  );
}

export default App;
