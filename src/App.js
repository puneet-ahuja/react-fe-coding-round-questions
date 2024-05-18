import Accordian from "./components/Accordian/Accordian";
import Home from "./components/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import StarRating from "./components/StarRating/StarRating";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import LoadMoreProducts from "./components/LoadMoreProducts/LoadMoreProducts";

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
  {
    path: "star-rating",
    element: <StarRating noOfStars={10}></StarRating>,
  },
  {
    path: "image-carousel",
    element: <ImageCarousel></ImageCarousel>,
  },
  {
    path: "load-more-products",
    element: <LoadMoreProducts></LoadMoreProducts>,
  },

  
  
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
