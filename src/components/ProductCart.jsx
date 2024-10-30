import React from "react";
import Rating from "./Rating";

const ProductCart = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <div className="border border-black p-5 flex flex-col items-start  gap-5 ">
      <img src={image} className="h-40" alt="" />
      <p className="font-bold line-clamp-2">{title}</p>

      <Rating rate={rate} />

      <div className="flex justify-between items-end w-full ">
        <p>{price}</p>
        <button className="text-sm border border-black px-4 py-2">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
