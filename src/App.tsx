import OntologyPage from "./Ontology";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate as Redirect,
} from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/ontology", element: <OntologyPage /> },
  { path: "*", element: <Redirect to="/" replace /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
