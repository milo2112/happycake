import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" variant="dark" bg="info" fixed="top" >
      <Container>
      <Link to="/" className="text-white ms-3 text-decoration-none"><Navbar.Brand href="#">Happy Cake 🍰</Navbar.Brand></Link>
          <Link to="/" className="text-white ms-3 text-decoration-none">Home 🏠</Link>
          <Link to="/Contact" className="text-white ms-3 text-decoration-none">Contact ✉️</Link>
      </Container>
    </Navbar>
  );
}

export default Header;