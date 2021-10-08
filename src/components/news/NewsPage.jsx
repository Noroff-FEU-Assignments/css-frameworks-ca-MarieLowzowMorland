import PageLayout from "../common/PageLayout";
import { pages } from "../common/Header";

function NewsPage() {
    return (
        <PageLayout currentPage={pages.NEWS.name}>
            <h1>News</h1>
        </PageLayout>
    );
}

export default NewsPage;
