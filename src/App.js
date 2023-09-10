import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/header" element={<Header />} />
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
