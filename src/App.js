import logo from './logo.svg';
import './App.css';
import react from 'react';
import Navbar from './components/Navbar';
import Mensajeprincipal from './components/Mensaje-principal';
import ImagenBienvenida from './components/ImagenBienvenida';
import CarouselPrincipal from './components/CarouselPrincipal';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ImagenBienvenida/>
      <CarouselPrincipal/>
      <Container>
        <Mensajeprincipal/>
      </Container>
    </div>
  );
}

export default App;
