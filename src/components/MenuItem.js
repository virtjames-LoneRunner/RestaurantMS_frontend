import React from "react";

export default function MenuItem({ menuItem, handleAddOrder }) {
  return (
    <div
      className="bg-white h-36 w-36 shadow-md rounded-md"
      onClick={handleAddOrder}
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
    </div>
  );
}
