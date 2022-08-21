import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/navbar';
import Footer from './components/Footer/footer';
import About from './components/Pages/about';
import Infra from './components/Pages/infra';

const App = () => {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/about" component={<About />}></Route>
          <Route exact path="/infra" component={<Infra />}></Route>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
