import React from 'react'
import CategoryButton from './CategoryButton';

const CategorySection = () => {
    const title = "Product Categories";
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section id='category-section' className='p-5'>
      <p className="text-2xl text-gray-500 mb-2">{title}</p>
      <div className='flex overflow-scroll category-button'>
        <CategoryButton category={"all"} current={true} />
        {categories.map((category) => (
          <CategoryButton key={category} category={category} current={false} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection