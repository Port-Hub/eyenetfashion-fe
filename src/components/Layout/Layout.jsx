import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Particle from "./Particle.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {/* <Particle /> */}
            <div>
            { children }
            </div>
            <Footer />
        </>
    )
}

export default Layout
