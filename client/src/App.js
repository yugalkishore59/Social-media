import "./App.scss";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Auth from "./components/auth";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/auth",
//     element: <Auth />,
//   },
// ]);

function App() {
  return (
    // <>
    //   <Navbar />
    //   <RouterProvider router={router} />
    // </>
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
