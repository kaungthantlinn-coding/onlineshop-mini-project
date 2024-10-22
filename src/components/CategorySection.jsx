import React from "react";
import CategoryBtn from "./CategoryBtn";


const CategorySection = () => {
    const titles = "Product Categories";
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section id="category-section" className="p-5">
      <h1 className="text-2xl text-gray-500 mb-2">{titles}</h1>
      <div className="flex overflow-scroll category-button">
        

        <CategoryBtn categoryName="all"  current={true} />
        {categories.map((category) => (
           <CategoryBtn key={category} categoryName={category}  current={false}/>  // pass category as a prop to CategoryBtn component
        ))} 
      </div>
    </section>
  );
};

export default CategorySection;
