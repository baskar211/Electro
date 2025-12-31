import React from 'react';
import { Navbar } from '../Layout/layout';
export default function Homepage() {
    return (
        <>
            <section className="lg:mt-[4rem]">
                <Navbar />

                {/* Banner Section */}
                {/* Slider */}
                {/* Slider */}
                <div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "isInfiniteLoop": true,
  "slidesQty": 1,
  "isAutoPlay": true
}' className="relative">
                    <div className="hs-carousel relative overflow-x-hidden w-full min-h-[31rem] md:min-h-[40rem]  bg-white rounded-lg">
                        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                            <div className="hs-carousel-slide">
                                <Slide />
                            </div>
                            <div className="hs-carousel-slide">
                                <Slide />
                            </div>
                            <div className="hs-carousel-slide">
                                <Slide />
                            </div>
                        </div>
                    </div>

                    <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-ful text-gray-800 hover:bg-gray-100/10 focus:outline-hidden focus:bg-gray-100/10 rounded-s-lg">
                        <span className="text-2xl" aria-hidden="true">
                            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"></path>
                            </svg>
                        </span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-100/10 focus:outline-hidden focus:bg-gray-100/10 rounded-e-lg">
                        <span className="sr-only">Next</span>
                        <span className="text-2xl" aria-hidden="true">
                            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </span>
                    </button>


                </div>
                {/* End Slider */}
            </section>
        </>
    );
}

function Slide() {
    return (
        <section className="px-3 py-5 bg-neutral-100 lg:py-10">
            <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">

                {/* Text Content */}
                <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-center">
                    <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-600">
                        25% OFF
                    </p>

                    <p className="text-3xl md:text-5xl lg:text-7xl font-bold">
                        SUMMER SALE
                    </p>

                    <p className="mt-2 text-sm md:text-lg text-gray-600">
                        For limited time only!
                    </p>

                    <button className="text-base md:text-xl bg-black text-white py-2 px-6 mt-8 hover:bg-zinc-800 transition">
                        Shop Now
                    </button>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                    <img
                        className="h-64 w-64 md:h-80 md:w-80 lg:w-[500px] lg:h-[500px] object-cover"
                        src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1887&q=80"
                        alt="Summer Sale"
                    />
                </div>

            </div>
        </section>
    )
}