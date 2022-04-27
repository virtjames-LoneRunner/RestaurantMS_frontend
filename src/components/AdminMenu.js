import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import hnjlogo from "../static/img/HNJplus.png";

export default function AdminMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div className="flex-col h-full w-1/5 bg-white shadow-md hidden md:flex">
      <div className="flex justify-center">
        <img src={hnjlogo} alt="Company Logo" className="p-4 h-28" />
      </div>
      <div className="flex flex-col text-left">
        <Link
          to="dashboard"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/dashboard")
              ? "bg-blue-500  text-white shadow-md"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="transactions"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/transactions")
              ? "bg-blue-500  text-white shadow-md"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          Transactions
        </Link>
        <Link
          to="menu-items"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/menu-items")
              ? "bg-blue-500  text-white shadow-md"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          Menu Items
        </Link>
        <Link
          to="inventory"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/inventory")
              ? "bg-blue-500  text-white shadow-md"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          Inventory
        </Link>
        <Link
          to="reports"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/reports")
              ? "bg-blue-500  text-white shadow-md"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          Reports
        </Link>
        <Link
          to="users"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/users")
              ? "bg-blue-500  text-white shadow-md"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          Users/Employees
        </Link>
        <Link
          to="settings"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/settings")
              ? "bg-blue-500  text-white shadow-md"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          Settings
        </Link>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            handleLogout();
          }}
          className="pl-5 lg:pl-10 py-2 hover:bg-blue-500 hover:text-white text-left"
        >
          Logout
        </button>
      </div>
      {/* <div className="mt-auto mb-2 mx-1">
        <div className="flex h-12 bg-blue-500  text-white shadow px-2 py-1">
          <div className="flex-none w-1/2 text-left">Name</div>
          <div className="flex-1">Options</div>
        </div>
      </div> */}
    </div>
  );
}
