export default function App() {
    const titles = "Product Categories";
    const categories=["electronics","jewelery","men's clothing","women's clothing"];

    return (
        <div id="category-section" className="p-5">
            <h1 className="text-2xl text-gray-500 mb-3">{titles}</h1>
            <div className="flex flex-wrap">
                {categories.map((category) => (
                    <button
                        className="border border-black rounded px-3 py-1 me-3"
                        key={category}
                    >
                        {category}
                    </button>       
                ))}
            </div>
        </div>
    );
}