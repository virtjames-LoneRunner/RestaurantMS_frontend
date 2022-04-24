import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [transactions, setTransactions] = useState([]);
  const getTransactions = () => {
    axios.get(`/api/transactions`).then((res) => {
      if (res.status === 200) {
        setTransactions(res.data);
      }
    });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="h-full pb-8 overflow-y-auto">
      <p className="text-left text-lg font-semibold">
        Welcome To The Dashboard
      </p>
      <div class="mt-4 w-full pr-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div class="flex items-center">
            <div class="flex-shrink-0 text-left">
              <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-800">
                0
              </span>
              <h3 class="text-base font-normal text-gray-500">
                New products this week
              </h3>
            </div>
            <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
              14.6%
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div class="flex items-center">
            <div class="flex-shrink-0 text-left">
              <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-800">
                {transactions.length}
              </span>
              <h3 class="text-base font-normal text-gray-500">
                Transactions this week
              </h3>
            </div>
            <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
              32.9%
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div class="flex items-center">
            <div class="flex-shrink-0 text-left">
              <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-800">
                0
              </span>
              <h3 class="text-base font-normal text-gray-500">
                New Customers this week
              </h3>
            </div>
            <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
              -2.7%
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 pr-5">
        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-shrink-0 text-left">
              <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-800">
                ₱5,385
              </span>
              <h3 class="text-base font-normal text-gray-500">
                Sales this week
              </h3>
            </div>
            <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
              2.5%
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div id="main-chart"></div>
        </div>
        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 text-left">
          <div class="mb-2 flex items-center justify-between">
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Latest Transactions
              </h3>
              <span class="text-base font-normal text-gray-500">
                This is a list of latest transactions
              </span>
            </div>
            <div class="flex-shrink-0">
              <a
                href="/admin/transactions"
                class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
              >
                View all
              </a>
            </div>
          </div>
          <div class="flex flex-col mt-5">
            <div class="overflow-x-auto rounded-lg">
              <div class="align-middle inline-block min-w-full">
                <div class="shadow overflow-hidden sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Transaction ID
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      {transactions?.map((transaction) => (
                        <tr key={transaction.id}>
                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-800">
                            {transaction.transaction_id}
                            {/* <span class="font-semibold">Bonnie Green</span> */}
                          </td>
                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            {transaction.transaction_type}
                          </td>
                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                            ₱{transaction.total_amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
