import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="Header" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>CRUD App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
