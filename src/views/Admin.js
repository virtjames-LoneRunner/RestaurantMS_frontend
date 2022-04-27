import axios from "axios";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminMenu from "../components/AdminMenu";
import Header from "../components/Header";
import AdminDashboard from "./subviews/admin/AdminDashboard";
import AdminInventory from "./subviews/admin/AdminInventory";
import AdminItems from "./subviews/admin/AdminItems";
import AdminUsers from "./subviews/admin/AdminUsers";

export default function Admin() {
  axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  const auth = localStorage.getItem("auth");
  return (
    <div>
      <Header role="admin" auth={auth} />

      <div className="flex h-screen pt-10">
        <AdminMenu />
        <div className="pt-5 pl-5 h-full w-full bg-blue-100 overflow-y-auto">
          <Routes>
            <Route path="" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<AdminDashboard />}></Route>
            <Route path="menu-items" element={<AdminItems />}></Route>
            <Route path="inventory" element={<AdminInventory />}></Route>
            <Route path="users" element={<AdminUsers />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
