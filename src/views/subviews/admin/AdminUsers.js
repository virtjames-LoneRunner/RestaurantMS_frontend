import React from "react";

export default function AdminUsers() {
    return (
        <div className="AdminUsers">
        <div className="flex items-end justify-end mr-4">
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Add User </button>    
        </div>    
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mr-6">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-white border-b-2 border-[#0062AF]">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Role
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Joined
                    </th>
                    <th scope="col" class="px-6 py-3 ">
                        Last Login
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr class="bg-white border-b-2 border-[#0062AF]">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                        Marc Nelson Ochavo
                    </th>
                    <td class="px-6 py-4">
                        Staff
                    </td>
                    <td class="px-6 py-4">
                        Active
                    </td>
                    <td class="px-6 py-4">
                        January 5, 2020
                    </td>
                    <td class="px-6 py-4">
                        January 5, 2020 8:00PM
                    </td>
                </tr> 
            </tbody>
        </table>
    </div>
        </div>
    );
}
