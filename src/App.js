import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FurnitureProvider } from "./data/FurnitureContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Furnitures from "./pages/Furnitures";

import Index from "./pages/admin/Index";
import Furniture from "./pages/admin/Furniture";
import Settings from "./pages/admin/Settings";

function App() {
  return (
    <Router>
      <FurnitureProvider>
        <Routes>
          <Route path="/admin" element={<Index />} />
          <Route path="/admin/furniture" element={<Furniture />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/furnitures" element={<Furnitures />} />
        </Routes>
      </FurnitureProvider>
    </Router>
  );
}

export default App;
