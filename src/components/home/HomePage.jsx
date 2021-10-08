import PageLayout from "../common/PageLayout";
import { pages } from "../common/Header";

function HomePage() {
    return ( 
        <PageLayout currentPage={pages.HOME.name}>
            <h1>Home</h1>
        </PageLayout>
    );
}

export default HomePage;