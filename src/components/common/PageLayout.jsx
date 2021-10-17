import Header from "./Header";
import Footer from "./Footer";

function PageLayout(props) {
    const { currentPage, children} = props;
    document.title = currentPage + " | The YAY Company";

    return (
        <div id={`page-${currentPage}`} className="page-layout">
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default PageLayout;