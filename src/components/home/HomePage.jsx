import PageLayout from "../common/PageLayout";
import { pages } from "../common/Header";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import CarouselItem from 'react-bootstrap/CarouselItem';
import tvShopImage from'../../images/carousel/carousel-1.jpg';
import theGreenRay from'../../images/carousel/carousel-2.jpg';
import rustedTvFrame from'../../images/carousel/carousel-3.jpg';
import FeaturedItems from "./FeaturedItems";


function HomePage() {
    return ( 
        <PageLayout currentPage={pages.HOME.name}>
            <section className="d-flex flex-column-reverse">
                <Introduction />
                <BannerCarousel/>
            </section>
            <Container fluid>
                    <h2 className="visually-hidden">Featured Items</h2>
                    <FeaturedItems className="featured-items-box"/>
            </Container>
        </PageLayout>
    );
}

function Introduction() {
    return (
        <Container fluid>
            <h1>We do YAY things</h1>
            <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
        </Container>
    );
};

function BannerCarousel() {
    return (
        <Carousel controls={false}>
            <CarouselItem>
                <img
                    className="d-block w-100"
                    src={tvShopImage}
                    alt="Multiple shelfs with retro televisions"
                />
            </CarouselItem>
            <CarouselItem>
                <img
                    className="d-block w-100"
                    src={theGreenRay}
                    alt="The Green Ray, a fortune teller mind reading arcade machine"
                />
            </CarouselItem>
            <CarouselItem>
                <img
                    className="d-block w-100"
                    src={rustedTvFrame}
                    alt="Rusted old television frame"
                />
            </CarouselItem>
        </Carousel>
    );
}

export default HomePage;