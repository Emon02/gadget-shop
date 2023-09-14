import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import AppContext from "./utils/context";

function App() {
  return (
    <>
      <RouterProvider router={routes}>
        <AppContext></AppContext>
      </RouterProvider>
    </>
  );
}

export default App;
