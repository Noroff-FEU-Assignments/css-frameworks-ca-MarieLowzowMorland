import PageLayout from "../common/PageLayout";
import { pages } from "../common/Header";
import { useParams } from 'react-router-dom';
import useIsMd from "../common/useIsMd";
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import retroTvPresident from'../../images/news/news-1.jpg';
import theGreenRay from'../../images/news/news-2.jpg';
import oldTvShow from'../../images/news/news-3.jpg';
import kodak from'../../images/news/news-4.jpg';
import rustedTvFrame from'../../images/news/news-5.jpg';
import polaroid from'../../images/news/news-6.jpg';
import movieProjector from'../../images/news/news-7.jpg';
import vintageVinylRecordPlayer from'../../images/news/news-8.jpg';
import InputGroup from "react-bootstrap/InputGroup";

const newsItems = [
    {
        title: "Nunc porttitor vel",
        summary: "Nunc malesuada eget est fringilla dapibus.",
        image: retroTvPresident,
        altText:"Retro TV on bench, showing JFK speach"
    },
    {
        title: "Nunc porttitor vel",
        summary: "Nunc malesuada eget est fringilla dapibus.",
        image: theGreenRay,
        altText:"The Green Ray, a fortune teller mind reading arcade machine"
    },
    {
        title: "Nunc porttitor vel",
        summary: "Nunc malesuada eget est fringilla dapibus.",
        image: oldTvShow,
        altText:"Retro TV with old music show running"
    },
    {
        title: "Nunc porttitor vel",
        summary: "Nunc malesuada eget est fringilla dapibus.",
        image: kodak,
        altText: 'Old Kodak box camera "Brownie" flash B'
    },
    {
        title: "Nunc porttitor vel",
        summary: "Nunc malesuada eget est fringilla dapibus.",
        image: rustedTvFrame,
        altText:"Rusted old television frame"
    },
    {
        title: "Nunc porttitor vel",
        summary: "Nunc malesuada eget est fringilla dapibus.",
        image: polaroid,
        altText:"Old Pink Polaroid camera"
    },
    {
        title: "Nunc porttitor vel",
        summary: "Nunc malesuada eget est fringilla dapibus.",
        image: movieProjector,
        altText:"Old movie Projector with large film rolls attached"
    },
    {
        title: "Nunc porttitor vel",
        summary: "Nunc malesuada eget est fringilla dapibus.",
        image: vintageVinylRecordPlayer,
        altText:"Vintage Vinyl record player"
    }
];

function NewsPage() {
    const isMd = useIsMd();
    const { currentPage } = useParams();
    const active = Number.parseInt(currentPage) || 1;
    const numberOfItems = newsItems.length;
    const numberOfItemsPrPage = isMd ? 8 : 4;
    const startIndex = (active - 1) * numberOfItemsPrPage;
    const endIndex = active * numberOfItemsPrPage -1;

    // Since XD-file shows 4 pages for both screen options even though mobile screen shows fewer items at once
    // I rotated the list rather than stop when I'm out of elements...
    const itemsToShow = [];
    for(let i = startIndex; i <= endIndex; i++){
        itemsToShow.push(newsItems[i % numberOfItems]);
    }

    return (
        <PageLayout currentPage={pages.NEWS.name}>
            <Container fluid>
                <h1>News</h1>
                <NewsControl active={active} />
                <Row xs={1} md={4} className="g-4">
                    {itemsToShow.map((newsItem, i) => (
                        <Col key={"newsitem-"+i}>
                            <CardItem newsItem={newsItem}/>
                        </Col>
                    ))}
                </Row> 
                <NewsControl active={active} />
            </Container>
        </PageLayout>
    );
} 

function CardItem(props) {
    const { title, summary, image, altText } = props.newsItem;
    return (
        <Card>
            <CardImg variant="top" src={image} alt={altText} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{summary}</Card.Text>

                <InputGroup className="mb-2 full-width d-flex">
                    <Button variant="primary" className="flex-grow-1">More</Button>
                    <InputGroup.Text></InputGroup.Text>
                </InputGroup>
            </Card.Body>
        </Card>
    );
}

function NewsControl(props) {
    const { active } = props;
    const items = [1,2,3,4].map(number => {
        return (
            <PageItem key={number} active={number === active} href={pages.NEWS.goTo(number)}>
                {number}
            </PageItem>
        );
    });

    return (
        <Pagination>{items}</Pagination>
    );
}

export default NewsPage;
