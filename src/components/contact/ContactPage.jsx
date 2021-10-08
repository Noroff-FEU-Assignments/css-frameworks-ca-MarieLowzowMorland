import PageLayout from "../common/PageLayout";
import { pages } from "../common/Header";

function ContactPage() {
    return ( 
        <PageLayout currentPage={pages.CONTACT.name}>
            <h1>Contact</h1>
        </PageLayout>
    );
};

export default ContactPage;