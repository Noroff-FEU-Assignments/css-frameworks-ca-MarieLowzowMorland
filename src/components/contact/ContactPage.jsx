import PageLayout from "../common/PageLayout";
import { pages } from "../common/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import { EnvelopeIcon, MapMarkerIcon, PhoneIcon } from "../common/Icons";

function ContactPage() {
    return ( 
        <PageLayout currentPage={pages.CONTACT.name}>
            <h1 className="visually-hidden">Contact</h1>
            <Row>
                <Col xs={12} md={{span:6,order:1}}>
                    <div className="px-075">
                        <h2 className="visually-hidden">Contact us</h2>
                        <Row xs={1} className="gx-0 gy-3">
                            <Col>
                                <EnvelopeIcon/>
                                <a href="mailto:hello@yay.com" className="ms-4">hello@yay.com</a>
                            </Col>
                            <Col>
                                <PhoneIcon/>
                                <p className="ms-4 d-inline-block">123 456 7890</p>
                            </Col>
                            <Col>
                                <MapMarkerIcon/>
                                <p className="ms-4 d-inline-block align-top">123 Some Street<br/>Somewhere<br/>Some City<br/>10000</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="px-075">
                        <h2>Submit your details</h2>
                    </div>
                    <Form  className="px-075">
                        <FormGroup className="mb-3" controlId="formName">
                            <FormLabel>Name</FormLabel>
                            <FormControl type="text"/>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formBasicEmail">
                            <FormLabel>Email</FormLabel>
                            <FormControl type="email"/>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formWebsite">
                            <FormLabel>Website</FormLabel>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>https://</InputGroup.Text>
                                <FormControl type="text" />
                            </InputGroup>
                        </FormGroup>
                        
                        <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <FormLabel>Message</FormLabel>
                            <FormControl as="textarea" rows={3} />
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formBasicCheckbox">
                            <FormCheck type="checkbox" label="Check Allow us to sell your personal details to whomever we want out" />
                        </FormGroup>
                        <Button variant="primary" type="submit" className="full-width">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </PageLayout>
    );
};

export default ContactPage;