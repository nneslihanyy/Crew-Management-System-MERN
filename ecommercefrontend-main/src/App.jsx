import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import AuthPage from "./pages/AuthPage";
import UserPage from "./pages/admin/AdminUserPage";
import CategoryPage from "./pages/admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/admin/Categories/CreateCategoryPage";

import "./App.css";
import EmployeePage from "./pages/admin/Employee/EmployeePage";
import CreateEmployeePage from "./pages/admin/Employee/CreateEmployeePage";
import UpdateEmployeePage from "./pages/admin/Employee/UpdateEmployeePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route
          path="categories/create"
          element={<CreateCategoryPage />}
        ></Route>
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="employees" element={<EmployeePage />} />
        <Route path="employees/create" element={<CreateEmployeePage/>} />
        <Route path="employees/update/:id" element={<UpdateEmployeePage/>} />
      </Route>
    </Routes>
  );
}

export default App;
