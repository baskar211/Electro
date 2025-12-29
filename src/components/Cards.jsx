import React from 'react'

export default function Cards() {
  return (
    <div>
      <ProductCardPage/>
      <Promotional/>
    </div>
  )
}


function ProductCardPage() {
  return (
    <div className=" bg-gray-50 px-4 py-8 my-10">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <p className="text-gray-500">Explore our latest collection</p>
      </div>

      {/* Responsive Grid */}
      <div
        className="
          max-w-7xl mx-auto
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-4
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}



const products = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: "Casual Shoes",
  category: "Sports",
  price: 100,
  offerPrice: 80,
  rating: 4,
  image:
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png",
}));

const ProductCard = ({ product }) => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="border border-gray-500/20 rounded-md px-3 py-2 bg-white w-full">
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition max-w-32"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="text-gray-500/60 text-sm">
        <p>{product.category}</p>
        <p className="text-gray-700 font-medium text-lg truncate">
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <span key={i} className="text-indigo-500">
                {product.rating > i ? "★" : "☆"}
              </span>
            ))}
          <p>({product.rating})</p>
        </div>

        {/* Price & Cart */}
        <div className="flex items-end justify-between mt-3">
          <p className="text-lg font-medium text-indigo-500">
            ${product.offerPrice}
            <span className="text-gray-500/60 text-sm line-through ml-1">
              ${product.price}
            </span>
          </p>

          {count === 0 ? (
            <button
              className="bg-indigo-100 border border-indigo-300 w-20 h-8 rounded text-indigo-600 font-medium"
              onClick={() => setCount(1)}
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 w-20 h-8 bg-indigo-500/25 rounded">
              <button onClick={() => setCount(Math.max(count - 1, 0))}>
                -
              </button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



function Promotional() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      `}</style>

      {/* Full Width Banner */}
      <section className="w-full h-32 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/banners/image-2.png')] bg-cover bg-center bg-no-repeat">
        
        {/* Content */}
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between text-white">
          
          <div>
            <h1 className="text-lg md:text-xl font-semibold">
              Trending Products
            </h1>
            <p className="text-xs md:text-sm text-white/90">
              Discover latest collections & offers
            </p>
          </div>

          <button className="px-6 py-2 text-sm bg-white text-black rounded-full hover:scale-105 transition">
            Explore
          </button>

        </div>
      </section>
    </>
  );
}




