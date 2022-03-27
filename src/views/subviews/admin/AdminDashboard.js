import React from "react";

export default function AdminDashboard() {
  return (
    <div className="h-full pt-16">
      <p className="text-left text-lg font-semibold">Hello User!</p>
      <div className="flex space-x-2">
        <div className="w-32 bg-white rounded h-16 shadow">Data Card</div>
        <div className="w-32 bg-white rounded h-16 shadow">Data Card</div>
      </div>
    </div>
  );
}
