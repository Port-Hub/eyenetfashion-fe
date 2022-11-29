import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Virtual from "./pages/virtual";
import { childRoute,parentRoute, extraRoute } from "./components/Layout/Routes";
import Pagenotfound from "./pages/pagenotfound";

const App: (arg: any) => JSX.Element = () => {
  return (
    <Router>
        <Routes>
          <Route element={ <Layout> <Outlet /> </Layout> as JSX.Element } >
            <Route path="/" element={ <Home /> as JSX.Element } />
            {childRoute}
            {parentRoute}
            {extraRoute}
            <Route path="/contact" element={ <Contact /> as JSX.Element } />
          </Route>
          <Route path="/virtual" element={ <Virtual /> as JSX.Element } />
          <Route path="*" element={ <Pagenotfound /> as JSX.Element } />
        </Routes>
    </Router>
  )
}

export default App
