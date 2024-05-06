import Accordian from "./components/Accordian/Accordian";
import Home from "./components/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";

// TODO : Need to understand why we are using createBrowserRouter?
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "accordian",
    element: <Accordian></Accordian>,
  },

  {
    path: "random-color-generator",
    element: <RandomColorGenerator></RandomColorGenerator>,
  },
  
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
