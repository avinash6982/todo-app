import { Navbar, Container, Nav } from "react-bootstrap";

import classes from "./styles.module.css";

const NavbarComponent = ({
    onSignout
}) => {

    return (
        <Navbar sticky="top" className={classes.navigationBar} collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">Todo app</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link onClick={() => onSignout()} href="">
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent