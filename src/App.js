// eslint-disable-next-line no-unused-expressions
import "./styles/utilities.css";
import "./styles/general.css";
import "./styles/mobile.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import Partners from "./pages/Partners";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/getting_started" element={<GettingStarted />} />
      <Route exact path="/partners" element={<Partners />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
