import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap';
import React from 'react';
import Footer from './components/Footer';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';


function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h4>Pramod</h4></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="App">  
   <Container>  
  <Row>  
    <Col className="col-md-4 video"><ShakaPlayer autoPlay src="https://static.videezy.com/system/resources/previews/000/050/930/original/Grid_Box_Digital_03_4k.mp4"/><h4>Video 1</h4><p>Blue light animation is going on in this video. For example this is a short video.</p><button className="btn btn-primary" type="button"variant="primary" size="lg" variant1="primary">Button 1</button>{' '}</Col>  
    <Col className="col-md-4 video"><ShakaPlayer autoPlay src="https://static.videezy.com/system/resources/previews/000/054/342/original/Hitech_Background_3.mp4"/><h4>Video 2</h4><p>Blue light animation is going on in this video. For example this is a short video.</p><button className="btn btn-warning" type="button"variant="warning" size="lg" variant1="primary">Button 2</button>{' '}</Col>  
    <Col className="col-md-4 img"><img src="https://www.cameraegg.org/wp-content/uploads/2013/03/Canon-EOS-100D-Rebel-SL1-Sample-Image.jpg" alt="img1"/><h4>Image 1</h4><p>The object of this image is a parrot. For example I added this image.</p><button class="btn btn-danger" type="button" variant="danger" size="lg">Button 3</button>{' '}</Col>
  </Row>  
</Container>  
    </div>
     <Footer />
    </>

  );
}

export default App;
