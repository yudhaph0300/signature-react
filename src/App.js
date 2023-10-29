import "./app.css";
import "./components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FurnitureProvider } from "./data/FurnitureContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Furnitures from "./pages/Furnitures";

import Index from "./pages/admin/Index";
import Furniture from "./pages/admin/furniture/Furniture";
import Settings from "./pages/admin/Settings";
import AddFurniture from "./pages/admin/furniture/AddFurniture";
import EditFurniture from "./pages/admin/furniture/EditFurniture";

import FurnituresResult from "./pages/FurnituresResult";
import Readme from "./pages/Readme";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <FurnitureProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<Index />} />
          <Route path="/admin/furniture" element={<Furniture />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/furniture/add" element={<AddFurniture />} />
          <Route path="/admin/furniture/edit/:id" element={<EditFurniture />} />
        </Routes>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/furnitures" element={<Furnitures />} />
          <Route path="/readme" element={<Readme />} />
          <Route
            path="/furnitures/result/:search"
            element={<FurnituresResult />}
          />
        </Routes>
      </Router>
    </FurnitureProvider>
  );
}

export default App;
