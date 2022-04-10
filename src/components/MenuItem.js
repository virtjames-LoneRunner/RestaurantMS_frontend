import React from "react";

export default function MenuItem({
  disabled = false,
  menuItem,
  handleAddOrder,
}) {
  return (
    <button
      className="bg-white h-40 w-40 shadow-md rounded-md disabled:opacity-75"
      onClick={handleAddOrder}
      disabled={disabled}
      data-id={menuItem.id}
      data-item={menuItem.menu_item}
      data-unit_price={menuItem.unit_price}
      data-unit={menuItem.unit}
    >
      <div
        className="bg-blue-200 h-full relative rounded-md"
        data-id={menuItem.id}
        data-item={menuItem.menu_item}
        data-unit_price={menuItem.unit_price}
        data-unit={menuItem.unit}
      >
        <div
          className="absolute top-2 right-1 bg-yellow-300 px-2 rounded shadow-md text-xs"
          data-id={menuItem.id}
          data-item={menuItem.menu_item}
          data-unit_price={menuItem.unit_price}
          data-unit={menuItem.unit}
        >
          P {menuItem.unit_price.toFixed(2)}/{menuItem.unit}
        </div>
        {disabled ? (
          <div
            className="absolute top-7 right-1 bg-red-500 px-2 rounded shadow-md text-xs text-white"
            data-id={menuItem.id}
            data-item={menuItem.menu_item}
            data-unit_price={menuItem.unit_price}
            data-unit={menuItem.unit}
          >
            Not Available
          </div>
        ) : null}
        <div
          className="absolute bottom-0 bg-white w-full rounded-b-md"
          data-id={menuItem.id}
          data-item={menuItem.menu_item}
          data-unit_price={menuItem.unit_price}
          data-unit={menuItem.unit}
        >
          {menuItem.menu_item}
        </div>
      </div>
    </button>
  );
}
