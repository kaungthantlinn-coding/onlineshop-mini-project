import React from "react";
const Rating = ({ rate }) => {
  const currentRate = rate.toFixed(0);
  let length = 5;
  const Numbers = Array.from({ length }, (_, i) => i + 1);
  
  return <div className="flex gap-2 mt-auto">
    {Numbers.map((number) => (
      <span key={number} className={number <= currentRate ? "text-yellow-500" : "text-gray-500"}>★</span>
    ))}
  </div>;
};

export default Rating;
