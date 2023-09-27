import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hi",
    element: <div>Hi</div>,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
