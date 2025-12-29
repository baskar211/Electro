import React from 'react'
import Cards from './Cards';

export default function Prodcut() {
    return (
        <div>
            <Example />
            <Brands />
            <div>
                <Cards />
            </div>
            <App />
           <h2 className="text-center md:text-left font-bold capitalize md:pl-[11.5rem]">
  Trending Products
</h2>

<div
  className="
    max-w-7xl mx-auto
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    gap-6
    my-10
    px-4
  "
>
  <Example2 />
  <Example2 />
  <Example2 />
  <Example2 />
  <Example2 />
</div>


        </div>
    )
}

function LayoutEvenColumnsFour() {
    return (
        <>
            {/*<!-- Component: Four columns even layout --> */}
            <section>
                <div className="container px-6 m-auto">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-4 lg:col-span-3">Column 1/4</div>
                        <div className="col-span-4 lg:col-span-3">Column 2/4</div>
                        <div className="col-span-4 lg:col-span-3">Column 3/4</div>
                        <div className="col-span-4 lg:col-span-3">Column 4/4</div>
                    </div>
                </div>
            </section>
            {/*<!-- End Four columns even layout --> */}
        </>
    )
}
function Example() {
  return (
    <div className="my-10 px-3">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Title */}
      <h1 className="text-3xl font-medium text-slate-800 text-center mb-2 font-poppins">
        New Arrivals
      </h1>
      <p className="text-slate-600 mb-10 font-poppins text-center">
        Explore the latest additions to our collection.
      </p>

      {/* Responsive Grid */}
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
        {/* Card */}
        <a href="#" className="group">
          <img
            className="rounded-lg w-full h-72 object-cover object-top group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all duration-300"
            src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop"
            alt="image"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 29.00</p>
        </a>

        <a href="#" className="group">
          <img
            className="rounded-lg w-full h-72 object-cover object-right group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all duration-300"
            src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=600&auto=format&fit=crop"
            alt="image"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 39.00</p>
        </a>

        <a href="#" className="group">
          <img
            className="rounded-lg w-full h-72 object-cover object-right group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all duration-300"
            src="https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop"
            alt="image"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 29.00</p>
        </a>

        <a href="#" className="group">
          <img
            className="rounded-lg w-full h-72 object-cover object-right group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all duration-300"
            src="https://images.unsplash.com/photo-1667243038099-b257ab263bfd?q=80&w=687&auto=format&fit=crop"
            alt="image"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 49.00</p>
        </a>

       

        
      </section>
    </div>
  );
}



function Brands() {
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

const App = () => {
    const [stopScroll, setStopScroll] = React.useState(false);
    const cardData = [
        {
            title: "Unlock Your Creative Flow",
            image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Design Your Digital Future",
            image: "https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Build with Passion, Ship with Pride",
            image: "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Think Big, Code Smart",
            image: "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60",
        },
    ];

    return (
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

            <div className="my-10 overflow-hidden w-full relative max-w-6xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    <p className="text-white text-lg font-semibold text-center">{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
};

function Card() {
    return (
        <div>
            {/* Slider */}
            <div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
  "slidesQty": {
    "xs": 1,
    "lg": 3
  },
  "isDraggable": true
}' className="relative ">
                <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
                    <div className="relative min-h-72 -mx-1">
                        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center h-full bg-gray-100 p-6">
                                    <span className="self-center text-sm text-gray-800 transition duration-700">First slide</span>
                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center h-full bg-gray-200 p-6">
                                    <span className="self-center text-sm text-gray-800 transition duration-700">Second slide</span>
                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center h-full bg-gray-300 p-6">
                                    <span className="self-center text-sm text-gray-800 transition duration-700">Third slide</span>
                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center h-full bg-gray-100 p-6">
                                    <span className="self-center text-sm text-gray-800 transition duration-700">Fourth slide</span>
                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center h-full bg-gray-200 p-6">
                                    <span className="self-center text-sm text-gray-800 transition duration-700">Fifth slide</span>
                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center h-full bg-gray-300 p-6">
                                    <span className="self-center text-sm text-gray-800  transition duration-700">Sixth slide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg">
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>

                <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
            </div>
            {/* End Slider */}
            {/* End Slider */}
        </div>
    )
}

function Example2() {
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
            Add to cart
          </button>
          <button className="bg-slate-800 text-white py-2 text-xs sm:text-sm rounded">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}





