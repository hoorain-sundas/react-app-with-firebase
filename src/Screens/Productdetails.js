import React from 'react'
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from '@mui/system';
import Navbar from '../Components/Navbar';

const Productdetails = () => {
    const location = useLocation();
    console.log(location);
  return (
    <>
    <Navbar />
      <div className="text-center shadow rounded mt-5 p-5">
         <Container>
            <Row>
               <Col md={6}>
                  <div className="text-center d-block shadow rounded p-2">
                     <img src={location.state.image} width="300px" />
                  </div>
               </Col>
               <Col md={6}>
                  <div className="text-center d-block p-5">
                     <h5>{location.state.title}</h5>
                     {/* <br></br> */}
                     <p>{location.state.rating.rate}</p>
                     <br></br>
                     <hr></hr>
                     <h6>{location.state.category}</h6>
                     <br></br>
                     <p>{location.state.description}</p>
                     <br></br>
                     <h6>Price: {location.state.price}</h6>
                  </div>  
               </Col>  
           </Row>
         </Container>
      </div>
         
    </>
  )
}

export default Productdetails;
