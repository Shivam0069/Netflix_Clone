import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/browse",
      element: <ProtectedRoute />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="scroll-smooth">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
