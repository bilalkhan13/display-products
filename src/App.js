// import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from "./pages/NotFound404";
import DisplayProduct from "./pages/DisplayProduct";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import { useState } from "react";


function App() {
  const [headerControl, setHeaderControl] = useState({ showHeader: true });
  const updateHeader = (statuses) => {
    setHeaderControl(statuses);
  };

  return (
    <>
      {
        headerControl.showHeader && <Header headerControl={headerControl} />

      }
      <Routes>
        <Route path="/home" element={<Homepage updateHeader={updateHeader} />} />
        <Route path="/product" element={<DisplayProduct />} />
        <Route path="/add-product" element={<AddProduct updateHeader={updateHeader} />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/" element={<Login updateHeader={updateHeader} />} />
      </Routes>

    </>
  );
}

export default App;
