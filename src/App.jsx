import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/navbar';
import Footer from './components/Footer/footer';
import Home from "./components/Pages/home";
import About from './components/Pages/about';
import Infra from './components/Pages/infra';

const App = () => {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/infrastructure" element={<Infra />}></Route>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
