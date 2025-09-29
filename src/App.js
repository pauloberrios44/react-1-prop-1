import logo from './logo.svg';
import './App.css';
import react from 'react';
import Navbar from './components/Navbar';
import Mensajeprincipal from './components/Mensaje-principal';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Container>
        <Mensajeprincipal/>
      </Container>
    </div>
  );
}

export default App;
