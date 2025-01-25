import React from "react";
import Rating from "./Rating";

const ProductCard = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {


  return (
    <div className="border border-black p-5 flex flex-col items-start gap-3">
      <img className="h-40" src={image} alt={title} />
      <h2 className="text-lg font-bold mt-2 line-clamp-2">{title}</h2>  
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full ">
        <p className="text-lg font-bold mt-2">${price}</p>
        <button className="border border-black px-3 py-1">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
