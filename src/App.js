import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Body from "./components/Body";
import About from "./components/About";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Main />
    },
    {
      path: '/about',
      element: <About />
    }
  ])
  return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
  );
}

export default App;
