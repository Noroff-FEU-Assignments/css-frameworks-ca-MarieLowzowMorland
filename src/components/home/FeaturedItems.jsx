import AccordionItem from "react-bootstrap/esm/AccordionItem";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import retroTvTab from'../../images/tab/tab-1.jpg';
import retroPictureWallTab from'../../images/tab/tab-2.jpg';
import rustedWallTab from'../../images/tab/tab-3.jpg';
import { FacebookIcon, TwitterIcon } from "../common/Icons";

const featuredItems = [
    {
        title: "First",
        image: retroTvTab,
        altText: "Retro TV with long legs",
        text: "Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.",
        fbShareLink: "#fb",
        twShareLink: "#i"
    },
    {
        title: "Second",
        image: retroPictureWallTab,
        altText: "Wall with mulitple small framed pictures that looks old",
        text: "Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.",
        fbShareLink: "#fb",
        twShareLink: "#i"
    },
    {
        title: "Third",
        image: rustedWallTab,
        altText: "Closeup on a rusty wall with a small broken glass window",
        text: "Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.",
        fbShareLink: "#fb",
        twShareLink: "#i"
    }
]

function FeaturedItems() {
    return ( 
        <>
            <div className="d-none d-md-block"><FeaturedItemsTabs items={featuredItems}/></div>
            <div className="d-md-none"><FeaturedItemsAccordions items={featuredItems}/></div>
        </>
    );
};

function FeaturedItemsTabs(props) {
    const items = props.items;

    return ( 
        <Tabs
            defaultActiveKey={items[0].title}
            transition={false}
        >
            {items.map(item => { 
                const { title } = item;

                return ( 
                    <Tab key={title} eventKey={title} title={title}>
                        <FeaturedItemTabContent item={item} />
                    </Tab>
                );
            })}
        </Tabs>
    );
};

function FeaturedItemTabContent(props) {
    const { text, image, altText } = props.item;

    return ( 
        <Container className="m-3">
            <Row>
                <Col xs={3}>
                    <Image src={image} alt={altText} fluid/>
                </Col>
                <Col xs={9}>
                    <p>{text}</p>
                    <ShareSocialMedia item={props.item} />
                </Col>
            </Row>
        </Container>
    );
};

function FeaturedItemsAccordions(props) {
    const items = props.items;

    return ( 
        <Accordion defaultActiveKey={items[0].title}>
            {items.map(item => { 
                const { title } = item;

                return ( 
                <AccordionItem key={title} eventKey={title}>
                    <AccordionHeader>{title}</AccordionHeader>
                    <AccordionBody>
                        <FeaturedItemAccordionContent item={item} />
                    </AccordionBody>
                </AccordionItem>);
            })}
        </Accordion> 
    );
};

function FeaturedItemAccordionContent(props) {
    const { text, image, altText } = props.item;

    return ( 
        <Container className="flex-column" fluid>
            <p>{text}</p>
            <Image src={image} alt={altText} className="full-width" fluid/>
            <ShareSocialMedia className="text-center" item={props.item} />
        </Container>
    );
};


function ShareSocialMedia(props) {
    const { fbShareLink, twShareLink } = props.item;

    return (
        <p className={props.className}>Share: 
            <a  href={fbShareLink} 
                rel="noopener" 
                className="mx-3"
                aria-label="Share on facebook"
            >
                <FacebookIcon />
            </a>
            <a  href={twShareLink} 
                rel="noopener"
                aria-label="Share on Twitter">
                <TwitterIcon />
            </a>
        </p>
    );
}

export default FeaturedItems;