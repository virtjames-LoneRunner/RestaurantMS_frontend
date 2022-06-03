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
    <div className="flex-col h-full w-1/5 bg-white border-r hidden md:flex">
      <div className="flex justify-center">
        <img src={hnjlogo} alt="Company Logo" className="p-4 h-28" />
      </div>
      <div className="flex flex-col text-left">
        <Link
          to="dashboard"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/dashboard")
              ? "bg-gray-200 text-gray-800"
              : "hover:bg-gray-200 text-gray-800"
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="transactions"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/transactions")
              ? "bg-gray-200 text-gray-800"
              : "hover:bg-gray-200 text-gray-800"
          }`}
        >
          Transactions
        </Link>
        <Link
          to="menu-items"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/menu-items")
              ? "bg-gray-200 text-gray-800"
              : "hover:bg-gray-200 text-gray-800"
          }`}
        >
          Menu Items
        </Link>
        <Link
          to="inventory"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/inventory")
              ? "bg-gray-200 text-gray-800"
              : "hover:bg-gray-200 text-gray-800"
          }`}
        >
          Inventory
        </Link>
        <Link
          to="reports"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/reports")
              ? "bg-gray-200 text-gray-800"
              : "hover:bg-gray-200 text-gray-800"
          }`}
        >
          Reports
        </Link>
        <Link
          to="users"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/users")
              ? "bg-gray-200 text-gray-800"
              : "hover:bg-gray-200 text-gray-800"
          }`}
        >
          Users/Employees
        </Link>
        <Link
          to="settings"
          className={`pl-5 lg:pl-10 py-2 ${
            location.pathname.includes("/admin/settings")
              ? "bg-gray-200 text-gray-800"
              : "hover:bg-gray-200 text-gray-800"
          }`}
        >
          Settings
        </Link>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to log out?")) {
              handleLogout();
            }
          }}
          className="pl-5 lg:pl-10 py-2 hover:bg-gray-200 text-gray-800 text-left"
        >
          Logout
        </button>
      </div>
      {/* <div className="mt-auto mb-2 mx-1">
        <div className="flex h-12 bg-gray-200 text-gray-800 shadow px-2 py-1">
          <div className="flex-none w-1/2 text-left">Name</div>
          <div className="flex-1">Options</div>
        </div>
      </div> */}
    </div>
  );
}
