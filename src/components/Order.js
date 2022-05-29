import axios from "axios";

export default function Order({
  masterStatus,
  updateCount,
  setUpdateCount,
  transactions,
  transaction,
  index,
  setTransactions,
  handleDone,
  handleUndo,
}) {
  return (
    <div
      key={transaction.id}
      className="bg-white pb-2 h-72 flex flex-col justify-between drop-shadow-lg"
    >
      <div>
        <div
          className={`py-2 px-4 ${
            transaction.status === "Not Started"
              ? "bg-red-500"
              : transaction.status === "Started"
              ? "bg-orange-500"
              : "bg-green-500"
          } text-white`}
        >
          <div className={`flex justify-between`}>
            <p>Table: {transaction.table_number}</p>
            {/* <p>{transaction.transaction_id}</p> */}
            <p className="uppercase">{transaction.transaction_type}</p>
          </div>
        </div>
        <div className="px-4 py-4">
          {transaction?.orderitems_set?.map((orderitem, i) => (
            <div
              key={orderitem.id}
              className={`flex justify-between items-center space-y-1`}
            >
              <span className="relative pr-2 text-left">
                <div className="flex">
                  <p className="text-xs sm:text-sm lg:text-lg mr-2 font-bold">
                    {orderitem.pcs}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-lg">
                    {orderitem.item}
                  </p>
                </div>
                {/* <div
                  className={`${
                    orderitem.status === "Not Started"
                      ? "bg-red-500"
                      : orderitem.status === "Started"
                      ? "bg-orange-500"
                      : "bg-green-500"
                  } p-1 absolute top-0 right-0 h-1 w-1 rounded-full`}
                ></div> */}
              </span>
              <button
                className={`${
                  orderitem.status === "Not Started"
                    ? "bg-gray-400 text-white"
                    : orderitem.status === "Started"
                    ? "bg-orange-500 text-white"
                    : "bg-green-500 text-white"
                } px-2 py-1 rounded-md text-xs md:text-base`}
                onClick={async () => {
                  let transaction = transactions[index];
                  transaction.orderitems_set[i].status =
                    orderitem.status === "Not Started" ||
                    orderitem.status === "Done"
                      ? "Started"
                      : orderitem.status === "Started"
                      ? "Done"
                      : "Done";

                  if (masterStatus === "Not Done") {
                    transaction.status =
                      transaction.orderitems_set[i].status === "Done" ||
                      transaction.orderitems_set[i].status === "Started"
                        ? "Started"
                        : transaction.status;
                  }

                  if (masterStatus === "Done") {
                    setUpdateCount(updateCount + 1);
                  }
                  await axios.patch(`/api/orders/`, {
                    data: {
                      order_id: orderitem.id,
                      order_status: orderitem.status,
                    },
                  });
                  setTransactions([...transactions]);
                }}
              >
                {orderitem.status === "Not Started"
                  ? "Start"
                  : orderitem.status === "Started"
                  ? "Started"
                  : "Done"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="px-2 flex flex-col space-y-1">
        <button
          className={`${
            masterStatus === "Done" ? "bg-orange-400" : "bg-green-500"
          } disabled:bg-gray-400 text-white px-2 py-4 w-full`}
          value={`{ "transaction_id": ${transaction.id}, "masterStatus": "${masterStatus}" }`}
          disabled={
            transaction.status == "Not Started" || masterStatus == "Done"
              ? true
              : false
          }
          onClick={handleDone}
        >
          {masterStatus === "Done" ? "Undo Done" : "Order Done"}
        </button>
        <button
          className={`${
            masterStatus === "Done" || transaction.status == "Not Started"
              ? "hidden"
              : ""
          } bg-red-500 disabled:bg-gray-400 text-white px-2 py-1 w-full`}
          value={`{ "transaction_id": ${transaction.id}, "masterStatus": "Not Started" }`}
          disabled={transaction.status == "Not Started" ? true : false}
          onClick={handleUndo}
        >
          Undo
        </button>
      </div>
    </div>
  );
}
