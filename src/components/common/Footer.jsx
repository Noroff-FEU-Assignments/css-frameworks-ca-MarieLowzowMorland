import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VimeoIcon, YouTubeIcon } from "./Icons";

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col xs={12} md={4} className="text-center text-md-start">
                        <a  href="https://vimeo.com/" 
                            rel="noopener" 
                            className="me-4"
                            aria-label="Go to our Vimeo page"
                        >
                            <VimeoIcon />
                        </a>
                        <a  href="https://www.youtube.com/"
                            rel="noopener" 
                            className="me-4"
                            aria-label="Go to our Youtube channel"
                        >
                            <YouTubeIcon />
                        </a>
                    </Col>
                    <Col xs={6} md={4} className="text-start text-md-center">
                        <a href="mailto:hello@yay.com">hello@yay.com</a>
                    </Col>
                    <Col xs={6} md={4} className="text-end">
                        <p>Copyright 2020</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;