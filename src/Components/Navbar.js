import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import noonlogo from './images/noonlogo.svg';
import ae from './images/ae.svg'


function Navbars() {
  return (
    <Navbar  expand="lg" className='bgcolor'>
      <Container fluid>
        {/* <Navbar.Brand href="#"><img src={noonlogo} width="100px" /></Navbar.Brand> */}
       <Link to="/home"><Navbar.Brand ><img src={noonlogo} width="100px" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><img src={ae} width="25px" />  Deliver to</Nav.Link>
          
          </Nav>
          <Form className="d-flex onsearch" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 ss "
              aria-label="Search"
            />
            <Button variant="outline-success" className="search">العربية</Button>
           <Link to="/login"><Button variant="outline-success" className="search">Login</Button></Link> 
            <Button variant="outline-success" className="search">Cart</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;