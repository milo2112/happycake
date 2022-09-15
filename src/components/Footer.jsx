import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
  return (
    <Navbar expand="lg" variant="dark" bg="info" fixed="bottom">
      <Container>
        <Navbar.Brand href="#" style={{marginLeft: '590px'}}>Copyrights ®</Navbar.Brand>
      </Container>
    </Navbar>
    
  );
}

export default Footer;