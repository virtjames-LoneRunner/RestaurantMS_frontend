import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminMenu from "../components/AdminMenu";
import Header from "../components/Header";
import AdminDashboard from "./subviews/admin/AdminDashboard";
import AdminInventory from "./subviews/admin/AdminInventory";
import AdminItems from "./subviews/admin/AdminItems";

export default function Admin() {
  return (
    <div>
      <Header role="admin" />
      <div className="flex h-screen pt-10">
        <AdminMenu />
        <div className="pt-5 pl-5 h-full w-full bg-blue-100">
          <Routes>
            <Route path="" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<AdminDashboard />}></Route>
            <Route path="menu-items" element={<AdminItems />}></Route>
            <Route path="inventory" element={<AdminInventory />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
