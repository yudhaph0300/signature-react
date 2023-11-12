import "./app.css";
import "./components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/furnitures" element={<Furnitures />} />
          <Route path="/readme" element={<Readme />} />
          <Route
            path="/furnitures/result/:search"
            element={<FurnituresResult />}
          />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/admin" element={<PrivateRouteAdmin />}>
            <Route path="/admin" element={<Index />} />
            <Route path="/admin/furniture" element={<Furniture />} />
            <Route path="/admin/furniture/add" element={<AddFurniture />} />
            <Route
              path="/admin/furniture/edit-furniture"
              element={<EditFurniture />}
            />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
