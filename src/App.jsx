import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import { childRoute,parentRoute } from "./components/Layout/Routes";

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {childRoute}
          {parentRoute}
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
