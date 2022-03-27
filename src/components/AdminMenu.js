import React from "react";
import { Link, useLocation } from "react-router-dom";
import hnjlogo from "../static/img/HNJplus.png";

export default function AdminMenu() {
  const location = useLocation();
  return (
    <div className="flex flex-col h-full w-1/5 bg-white shadow-md">
      <div className="flex justify-center">
        <img src={hnjlogo} alt="Company Logo" className="p-4 h-28" />
      </div>
      <div className="flex flex-col text-left">
        <Link
          to="dashboard"
          className={`pl-10 py-2 ${
            location.pathname.includes("/admin/dashboard")
              ? "bg-blue-200 shadow-md"
              : "hover:bg-blue-200"
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="earnings"
          className={`pl-10 py-2 ${
            location.pathname.includes("/admin/earnings")
              ? "bg-blue-200 shadow-md"
              : "hover:bg-blue-200"
          }`}
        >
          Earnings
        </Link>
        <Link
          to="menu-items"
          className={`pl-10 py-2 ${
            location.pathname.includes("/admin/menu-items")
              ? "bg-blue-200 shadow-md"
              : "hover:bg-blue-200"
          }`}
        >
          Menu Items
        </Link>
        <Link
          to="inventory"
          className={`pl-10 py-2 ${
            location.pathname.includes("/admin/inventory")
              ? "bg-blue-200 shadow-md"
              : "hover:bg-blue-200"
          }`}
        >
          Inventory
        </Link>
        <Link
          to="reports"
          className={`pl-10 py-2 ${
            location.pathname.includes("/admin/reports")
              ? "bg-blue-200 shadow-md"
              : "hover:bg-blue-200"
          }`}
        >
          Reports
        </Link>
        <Link
          to="users"
          className={`pl-10 py-2 ${
            location.pathname.includes("/admin/users")
              ? "bg-blue-200 shadow-md"
              : "hover:bg-blue-200"
          }`}
        >
          Users/Employees
        </Link>
        <Link
          to="settings"
          className={`pl-10 py-2 ${
            location.pathname.includes("/admin/settings")
              ? "bg-blue-200 shadow-md"
              : "hover:bg-blue-200"
          }`}
        >
          Settings
        </Link>
      </div>
      <div className="mt-auto mb-2 mx-1">
        <div className="flex h-12 bg-blue-200 shadow px-2 py-1">
          <div className="flex-none w-1/2 text-left">Name</div>
          <div className="flex-1">Options</div>
        </div>
      </div>
    </div>
  );
}
