import Nav from "./nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div id="content">
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
