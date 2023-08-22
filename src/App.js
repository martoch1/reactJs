import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; // Main Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional: Minified Bootstrap CSS
// import { Button } from 'react-bootstrap'; // Import specific component
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Card } from 'react-bootstrap'; // Import Card component
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import peel1 from '../src/images/peel1.jpg';
import peel2 from '../src/images/peel2.jpg';

function App() {
  return (
    <div className="App">
       <Navbar expand="lg" className="bg-body-tertiary">
       <Container fluid>
         <Navbar.Brand href="#">React Checkpoint</Navbar.Brand>
         <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll">
           <Nav
             className="me-auto my-2 my-lg-0"
             style={{ maxHeight: '100px' }}
             navbarScroll
           >
             <Nav.Link href="#action1">Home</Nav.Link>
             <Nav.Link href="#action2">Contact</Nav.Link>
             <NavDropdown title="About" id="navbarScrollingDropdown">
               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action4">
                 Another action
               </NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action5">
                 Something else here
               </NavDropdown.Item>
             </NavDropdown>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
     <Card />
     <Row xs={1} md={2} className="g-4">
       {Array.from({ length: 2 }).map((_, idx) => (
         <Col key={idx}>
           <Card>
             {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
           <img src={peel1} alt="display"/>
             <Card.Body>
               <Card.Title>Card title</Card.Title>
               <Card.Text>
                 This is a longer card with supporting text below as a natural
                 lead-in to additional content. This content is a little bit
                 longer.
               </Card.Text>
             </Card.Body>
           </Card>
           <Card>
             {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
           <img src={peel2} alt="display"/>
             <Card.Body>
               <Card.Title>Card title</Card.Title>
               <Card.Text>
                 This is a longer card with supporting text below as a natural
                 lead-in to additional content. This content is a little bit
                 longer.
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
       ))}
     </Row>
    </div>
  );
}

export default App;
