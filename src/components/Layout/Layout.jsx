import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className=" container mx-auto">
            { children }
            </div>
            <Footer />
        </>
    )
}

export default Layout
