import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/navbar';
import Footer from './components/Footer/footer';
import Home from "./components/Pages/home";
import Contact from "./components/Pages/contact";
import { childRoute,parentRoute } from "./components/Header/Navlist";

const App = () => {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {childRoute}
          {parentRoute}
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
