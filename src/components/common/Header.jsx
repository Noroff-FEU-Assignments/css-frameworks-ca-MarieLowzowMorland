import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Container from "react-bootstrap/Container";
import NavItem from 'react-bootstrap/NavItem';
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Button from "react-bootstrap/Button";

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
        <NavItem as="li">
            <NavLink exact={exact} to={path} activeClassName="active" className="nav-link">{name}</NavLink>
        </NavItem>
    );
}

function Header() {
    return (
        <header>
            <Navbar expand="md">
                <Container fluid>
                    <NavbarBrand href="/">The YAY Company</NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar-nav"/>
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav as="ul" className="me-auto">
                            <Link page={pages.HOME}/>
                            <Link page={pages.NEWS}/>
                            <Link page={pages.CONTACT}/>
                        </Nav>
                        <Form className="d-flex">
                            <FormGroup controlId="nav-search">
                                <FormLabel visuallyHidden>Search</FormLabel>
                                <FormControl type="text" placeholder="Search"/>
                            </FormGroup>
                            <Button type="submit">Go</Button>
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;