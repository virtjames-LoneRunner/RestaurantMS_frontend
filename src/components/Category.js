import React from "react";

export default function Category({ handleClick, category }) {
  return (
    <button
      className="flex justify-center items-center bg-white h-28 w-28 md:h-40 md:w-40 shadow-md rounded-md"
      onClick={handleClick}
      data-id={category.id}
      data-name={category.category}
    >
      <div
        className="flex flex-col"
        data-id={category.id}
        data-name={category.category}
      >
        <div data-id={category.id} data-name={category.category}>
          {category.category}
        </div>
        <div
          data-id={category.id}
          data-name={category.category}
          className="text-xs"
        >
          Number of Items
        </div>
      </div>
    </button>
  );
}
