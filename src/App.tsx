import React from "react";
import "./App.css";
import RoutesApplication from "./routes";
import Global from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Global />
      <RoutesApplication />
    </div>
  );
}

export default App;
