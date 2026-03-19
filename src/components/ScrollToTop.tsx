import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-5ya5aiw3yu";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[rgba(12,48,88,0.8)] hover:bg-[rgba(12,48,88,0.95)] text-white rounded-[50px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-[50px] h-[50px] transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="חזרה לראש הדף"
        >
          <div className="relative w-[20px] h-[20px]">
            <svg className="block w-full h-full" fill="none" viewBox="0 0 20 20">
              <path 
                d={svgPaths.p19aeb100} 
                stroke="white" 
                strokeLinecap="round" 
                strokeWidth="2" 
              />
              <path 
                d={svgPaths.p218a3040} 
                stroke="white" 
                strokeLinecap="round" 
                strokeWidth="2" 
              />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}
