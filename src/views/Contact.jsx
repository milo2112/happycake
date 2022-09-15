/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import { Container } from "react-bootstrap";
import Contact from "../components/Contact";

 
export default () => {
  // const cake = require('./cake.png')
  return (
    <Container className="text-center">
      <h1 className="pt-5" style={{marginTop: '50px'}}>
        Cuéntanos, ¿en qué te podemos ayudar? 😊
      </h1>
      <Contact />
    
      
    </Container>
    
    
  );
};