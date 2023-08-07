import "./App.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      {/* We want to render navbar outside of routes because we want it to be visible at all time */}
      <Nav />
      <Routes>
        {/* Route path="/url ending" element={<the component/page (or element) we're reaching/>} */}
        {/* Main route path is just a forward slash because that means its the main/homepage */}
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        {/* Instead of creating multiple routes for every individual currency type, we can be more efficient by making a dynamic route, using URL parameter */}
        {/* Syntax: Route path="/url ending/:parameter name" in this case the parameter name is symbol because crypto currency names can be referred to as symbol*/}
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
