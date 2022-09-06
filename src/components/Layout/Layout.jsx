import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Layout = ({ children }) => {
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
