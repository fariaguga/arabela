import React from "react";
import MyProvider from "./context/MyProvider"
import Routes from "./routes/Routes";


function App() {
  return (
    <MyProvider>
      <Routes />
    </MyProvider>
  );
}

export default App;