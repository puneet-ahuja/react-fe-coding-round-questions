import Accordian from "./components/Accordian/Accordian";
import Home from "./components/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoApp from "./components/Todo/TodoApp";

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
    path: "todo",
    element: <TodoApp></TodoApp>,
  },
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
