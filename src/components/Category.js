import React from "react";

export default function Category({ handleClick, category }) {
  return (
    <button
      className="flex justify-center items-center bg-white h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 shadow-md rounded-md"
      onClick={handleClick}
      data-id={category.id}
      data-name={category.category}
      data-code={category.code}
    >
      <div
        className="flex flex-col"
        data-id={category.id}
        data-name={category.category}
        data-code={category.code}
      >
        <div
          data-id={category.id}
          data-name={category.category}
          data-code={category.code}
        >
          {category.category}
        </div>
        <div
          data-id={category.id}
          data-name={category.category}
          data-code={category.code}
          className="text-xs"
        >
          Number of Items
        </div>
      </div>
    </button>
  );
}
