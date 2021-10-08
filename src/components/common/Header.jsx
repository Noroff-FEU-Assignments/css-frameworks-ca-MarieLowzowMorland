import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

export const pages = {
    HOME: {
        name: "Home",
        path: "/",
        exact: true,
    },
    NEWS: {
        name: "News",
        path: "/News",
        exact: false,
    },
    CONTACT: {
        name: "Contact",
        path: "/Contact",
        exact: false,
    }
}

function Link(props) {
    const { name, path, exact} = props.page;

    return (
        <NavLink exact={exact} to={path} activeClassName="active">{name}</NavLink>
    );
}

function Header() {
    return (
        <header>
            <Navbar expand="lg">
                <Container fluid>
                    <NavbarBrand href="/">Logo</NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar-nav"/>
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link page={pages.HOME}/>
                            <Link page={pages.NEWS}/>
                            <Link page={pages.CONTACT}/>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;