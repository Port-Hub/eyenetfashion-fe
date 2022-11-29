import Navbar from "./Navbar.jsx";
import Footer from "./Footer.js";

const Layout: ({ children }: { children : any }) => JSX.Element = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    )
}

export default Layout
