import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";
import GptSearchPage from "./components/GptSearchPage";
import Setting from "./components/Setting";
import { getAuth } from "firebase/auth";
import { Toaster } from "react-hot-toast";

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
    {
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "/gptSearch",
      element: <GptSearchPage />,
    },
  ]);

  return (
    <div className="scroll-smooth">
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
