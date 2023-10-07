import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Auth from "./components/auth";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
