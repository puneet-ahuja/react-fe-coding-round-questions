import Accordian from "./components/Accordian/Accordian";
import Home from "./components/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoApp from "./components/Todo/TodoApp";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import StarRating from "./components/StarRating/StarRating";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import LoadMoreProducts from "./components/LoadMoreProducts/LoadMoreProducts";
import RecursiveNaviationMenu from "./components/RecursiveNavigationMenu/RecursiveNavigationMenu";
import QRCodeGenerator from "./components/QRCodeGenerator/QRCodeGenerator";
import LightDarkSwitcher from "./components/LightDarkSwitcher/LightDarkSwitcher";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import TabsSwitcherContainer from "./components/TabsSwitcher/TabsSwitcherContainer";
import CustomModal from "./components/CustomModal/CustomModal";

// TODO : Need to understand why we are using createBrowserRouter?
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "accordian",
    element: <Accordian></Accordian>,
  },
  {
    path: "todo",
    element: <TodoApp></TodoApp>,
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
  {
    path: "recursive-navigation-menu",
    element: <RecursiveNaviationMenu></RecursiveNaviationMenu>,
  },
  // TODO: Can we use 2 names of path in a single route?
  {
    path: "tree-view",
    element: <RecursiveNaviationMenu></RecursiveNaviationMenu>,
  },
  {
    path: "qr-code-generator",
    element: <QRCodeGenerator></QRCodeGenerator>,
  },
  {
    path: "light-dark-switcher",
    element: <LightDarkSwitcher></LightDarkSwitcher>,
  },
  {
    path: "scroll-indicator",
    element: <ScrollIndicator></ScrollIndicator>,
  },
  {
    path: "tabs-switcher",
    element: <TabsSwitcherContainer></TabsSwitcherContainer>,
  },
  {
    path: "custom-modal",
    element: <CustomModal></CustomModal>,
  },


  



]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
