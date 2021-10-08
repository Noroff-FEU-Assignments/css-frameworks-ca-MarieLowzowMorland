import Header from "./Header";
import Footer from "./Footer";

function PageLayout(props) {
    const { currentPage, children} = props;
    document.title = currentPage + " | The YAY Company";

    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default PageLayout;