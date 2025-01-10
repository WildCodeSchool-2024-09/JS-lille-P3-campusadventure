import { Outlet } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Provider } from "./services/Context";

function App() {
  return (
    <>
      <Provider>
        <HomePage />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
