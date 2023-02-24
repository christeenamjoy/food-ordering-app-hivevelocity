import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./navigation/RouterConfig";

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
