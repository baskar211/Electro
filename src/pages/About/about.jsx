import { Banner, Navbar } from "../Layout/layout";
import React from 'react'
export default function About() {
    return (
        <div>
            <Navbar />
            <AboutPage />
            <FAQs />

        </div>
    )
}

function AboutPage() {
    return (
        <div className="my-10">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">About our apps</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                A visual collection of our most recent works - each piece crafted with intention, emotion and style.
            </p>
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
                        <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
                        <p className="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any project.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Plug-and-Play Integration</h3>
                        <p className="text-sm text-slate-500">Simple setup with support for React, Next.js and Tailwind css.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Clear & Comprehensive</h3>
                        <p className="text-sm text-slate-500">Get started fast with usage examples, live previews and code.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Fully Customizable</h3>
                        <p className="text-sm text-slate-500">Easily adapt styles, colors and layout to match your brand or product.</p>
                    </div>
                </div>
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Accessibility First</h3>
                        <p className="text-sm text-slate-500">Built with WCAG standards in mind to ensure inclusive user experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FAQs = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "How to use this component?",
            answer: "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
        },
        {
            question: "Are there any other components available?",
            answer: "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
        },
        {
            question: "Are components responsive?",
            answer: "Yes, all components are responsive and can be used on different screen sizes.",
        },
        {
            question: "Can I customize the components?",
            answer: "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
        },
    ];
    return (
        <div className="pt-20">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
                <img
                    className="max-w-sm w-full rounded-xl h-auto"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                    alt=""
                />
                <div>
                    <p className="text-indigo-600 text-sm font-medium">FAQ's</p>
                    <h1 className="text-3xl font-semibold">Looking for answer?</h1>
                    <p className="text-sm text-slate-500 mt-2 pb-4">
                        Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};