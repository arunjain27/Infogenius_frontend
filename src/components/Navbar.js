import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav } from 'react-bootstrap';  
import { Link } from 'react-router-dom';
function App() {  
  return (  
    <>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
        <Container>  
          <Navbar.Brand as={Link} to="/">InfoGeniushub</Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse>  
            <Nav className="me-auto">  
              <Nav.Link as={Link} to="/">Home</Nav.Link>  
              <Nav.Link as={Link} to="/about" >About</Nav.Link>  
              <Nav.Link as={Link} to="/contact" >Contact Us</Nav.Link>  
            </Nav>  
            <Nav>  
              <Nav.Link as={Link} to="/signin" >Sign In</Nav.Link>  
              <Nav.Link as={Link} to="/signup" >Sign Up</Nav.Link>
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  
  );  
}  
export default App;  