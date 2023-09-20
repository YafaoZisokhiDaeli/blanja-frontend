import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Pages/Home";
import Detail from "../../Pages/DetailProduct";
import Login from "../../Pages/auth/Login";
import Register from "../../Pages/auth/Register";
import RegisterSeller from "../../Pages/auth/RegisterSeller";
import ProductList from "../../Pages/Products/ProductList";
import Checkout from "../../Pages/Checkout";
import Profil from "../../Pages/Profil";
import Page404 from "../../Pages/Page404/Page404";
import RequireAuth from "../../components/base/RequireAuth";
import MyProducts from "../../Pages/MyProducts";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const Role = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  console.log(user)
  if (user.role !== "seller") {
    Swal.fire("anda bukan seller ?", "silahkan daftar seller dulu", "question")
    return <Navigate to="/profil" replace />
  }
  return children
}
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerSeller" element={<RegisterSeller />} />
        <Route path="/myProducts" element={<MyProducts />} />
        <Route
          path="/productList"
          element={
            <RequireAuth>
              <Role>
                <ProductList />
              </Role>
            </RequireAuth>
          }
        />
        <Route
          path="/Checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/profil"
          element={
            <RequireAuth>
              <Profil />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
