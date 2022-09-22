import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Virtual from "./pages/virtual";
import { childRoute,parentRoute, extraRoute } from "./components/Layout/Routes";

const App = () => {

  return (
    <Router>
        <Routes>
          <Route element={<Layout> <Outlet /> </Layout>} >
            <Route exact path="/" element={<Home />}></Route>
            {childRoute}
            {parentRoute}
            {extraRoute}
            <Route exact path="/contact" element={<Contact />}></Route>
          </Route>
          <Route exact path="/virtual" element={<Virtual />}></Route>

        </Routes>
    </Router>
  )
}

export default App
