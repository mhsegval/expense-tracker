import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../logo.png";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Expense Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
