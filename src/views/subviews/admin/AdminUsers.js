import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get(`/api/users/`).then((res) => {
      if (res.status === 200) {
        setUsers(res.data.users);
      }
    });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="AdminUsers pt-5">
      <div className="flex items-end justify-end mr-4">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {" "}
          Add User{" "}
        </button>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg mr-6">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-blue-500">
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
              {/* <th scope="col" class="px-6 py-3">
                Joined
              </th> */}
              <th scope="col" class="px-6 py-3 ">
                Last Login
              </th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user) => (
              <tr class="bg-white" key={user.id}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                  {user.first_name} {user.last_name}
                </th>
                <td class="px-6 py-4">{user.role}</td>
                <td class="px-6 py-4">Active</td>
                {/* <td class="px-6 py-4">January 5, 2020</td> */}
                <td class="px-6 py-4">{user.last_login}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
