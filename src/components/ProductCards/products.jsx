import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


// products explore the collection


const products = [
  {
    name: "Casual Shoes",
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png"
  },




  {
    name: "Casual Shoes",
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png"
  },
  {
    name: "Casual Shoes",
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png"
  },
  {
    name: "Casual Shoes",
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png"
  },
  {
    name: "Casual Shoes",
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImageWithoutBg.png"
  },
]

export function ProductCardPage() {
  const [limit, setlimit] = useState(5)

  useEffect(() => {
    function handlesize() {
      const width = window.innerWidth;

      if (width < 640) setlimit(4)
      else if (width < 1280) setlimit(4)
      else setlimit(5);

    }

    handlesize();
    window.addEventListener("resize", handlesize);
    return () => window.removeEventListener("resize", handlesize)


  }, [])

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
        {products.slice(0, limit).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}


// product card with price

function ProductCard() {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg w-full">

      {/* Image */}
      <img
        className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-t-lg"
        src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
        alt="product"
      />

      {/* Content */}
      <div className="p-4 text-sm">
        <p className="text-slate-600 font-medium">$ 29.00</p>

        <p className="text-slate-800 text-base font-semibold my-1">
          Chris Jordan
        </p>

        <p className="text-slate-500 text-xs sm:text-sm line-clamp-2">
          Looks amazing out of the box. I barely had to customize anything.
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button className="bg-slate-100 text-slate-600 py-2 text-xs sm:text-sm rounded">
           <Link to={'/cart'}> Add to cart</Link>
          </button>
          <button className="bg-slate-800 text-white py-2 text-xs sm:text-sm rounded">
           <Link to={'/order'}> Buy Now</Link>
                      </button>
        </div>
      </div>
    </div>
  );
}



//carsoual brands list 

export function Brands() {
  const companyLogos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"];
  return (
    <div className='my-20'>

      <>
        <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
            <div className="flex">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <img key={index} src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                  alt={company} className="w-full h-full object-cover mx-6" draggable={false} />
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
      </>
    </div>
  )
}


//new arrivals

const arrivalsList = [
  {
    id: 1,
    title: "White Crew-Neck T-Shirt",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Classic White T-Shirt",
    price: 39,
    image:
      "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Premium Cotton T-Shirt",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Modern Fit T-Shirt",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1667243038099-b257ab263bfd?q=80&w=687&auto=format&fit=crop",
  },
];

export function Arrivals() {
  return (
    <div className="my-10 px-3">
      {/* Title */}
      <h1 className="text-3xl font-medium text-slate-800 text-center mb-2">
        New Arrivals
      </h1>
      <p className="text-slate-600 mb-10 text-center">
        Explore the latest additions to our collection.
      </p>

      {/* Grid */}
      <section
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
          gap-5
          max-w-7xl
          mx-auto
        "
      >
        {arrivalsList.map((item) => (
          <ArrivalsComponent
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </section>
    </div>
  );
}

function ArrivalsComponent({ title, price, image }) {
  return (
    <a href="#" className="group">
      <img
        className="rounded-lg w-full h-72 object-cover object-top group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all duration-300"
        src={image}
        alt={title}
      />
      <p className="text-sm mt-2">{title}</p>
      <p className="text-xl">$ {price}.00</p>
    </a>
  );
}
