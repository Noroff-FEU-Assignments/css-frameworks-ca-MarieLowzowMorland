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
import useIsMd from "../common/useIsMd";
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

function FeaturedItems(props) {
    const isMd = useIsMd();

    return (
        <div className={props.className}>
            {isMd ?
                <FeaturedItemsTabs items={featuredItems} />
                : <FeaturedItemsAccordions items={featuredItems} />}
        </div>
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
        <Row>
            <Col xs={3}>
                <Image src={image} alt={altText} fluid/>
            </Col>
            <Col xs={9}>
                <div className="d-flex flex-column full-height">
                    <p className="flex-grow-1">{text}</p>
                    <ShareSocialMedia item={props.item} />
                </div>
            </Col>
        </Row>
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
        <p className={props.className + " social-media-share mt-4"}>Share 
            <a  href={fbShareLink} 
                rel="noopener" 
                className="mx-4 hoverable"
                aria-label="Share on facebook"
            >
                <FacebookIcon />
            </a>
            <a  href={twShareLink} 
                rel="noopener"
                className="hoverable"
                aria-label="Share on Twitter">
                <TwitterIcon />
            </a>
        </p>
    );
}

export default FeaturedItems;