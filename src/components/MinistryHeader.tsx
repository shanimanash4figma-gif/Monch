import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import imgMinistryIcon from "figma:asset/e4c71b1ec7f99aa3b2903671662999f900822c95.png";
import svgPaths from "../imports/svg-btl1q0t0iq";

export function MinistryHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const navigationLinks = [
    { label: "שירותים ומידע", href: "#" },
    { label: "פרסומים", href: "#" },
    { label: "חדשות", href: "#" },
    { label: "מדיניות ונהלים", href: "#" },
    { label: "אתר ההרשמה להגרלות", href: "#" },
    { label: "קבלת קהל", href: "#" },
    { label: "יצירת קשר לפי נושא", href: "#" },
  ];

  return (
    <div className="bg-[#ffffff] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)] w-full">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[260px]">
        {/* Main Header Section */}
        <div className="relative py-4 md:py-6 lg:py-7">
          <div className="flex items-center justify-between lg:justify-start gap-4" dir="rtl">
            {/* Ministry Logo and Title */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-0">
              {/* Logo */}
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[70px] lg:h-[70px] flex-shrink-0 relative">
                <div className="absolute inset-0 rounded-full border border-[#8596af] border-solid" />
                <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[42px] h-[42px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]">
                  <img 
                    src={imgMinistryIcon} 
                    alt="משרד הבינוי והשיכון" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h1 
                className="text-[#0c3058] font-['Rubik',_sans-serif] text-[22px] md:text-[26px] lg:text-[30px] lg:ml-[-80px]" 
                dir="rtl"
              >
                משרד הבינוי והשיכון
              </h1>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#0c3058] p-2"
              aria-label="תפריט"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation and Search Section - Desktop */}
        <div className="hidden lg:flex items-center justify-between pb-6 gap-4" dir="rtl">
          {/* Navigation Menu */}
          <nav className="flex gap-2">
            {navigationLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="bg-[#ffffff] hover:bg-[#f1f5fb] px-4 py-2 rounded-[6px] text-[#0c3058] text-[16px] font-['Rubik',_sans-serif] whitespace-nowrap transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Search Box */}
          <div className="relative flex items-center bg-white border border-[#0068f5] rounded-[20px] h-[32px] w-[220px]">
            <div className="absolute right-3 top-1/2 translate-y-[-50%]">
              <svg className="w-[19px] h-[19px]" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p27b9c880} fill="#0c3058" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="חיפוש באתר משרד הבינוי…"
              className="w-full h-full bg-transparent border-none outline-none text-[16px] text-[#0c3058] text-right pr-12 pl-3 font-['Rubik',_sans-serif]"
              dir="rtl"
            />
          </div>
        </div>
        
        {/* Navigation Menu - Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#8596af] py-4">
            <nav className="flex flex-col space-y-2 mb-4" dir="rtl">
              {navigationLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-[#0c3058] py-3 px-2 hover:bg-[#f1f5fb] rounded transition-colors font-['Rubik',_sans-serif]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* Mobile Search */}
            <div className="flex items-center bg-[#f1f5fb] rounded-full px-4 py-2 gap-2" dir="rtl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="חיפוש באתר משרד הבינוי..."
                className="bg-transparent border-none outline-none text-sm w-full font-['Rubik',_sans-serif]"
                dir="rtl"
              />
              <Search className="w-5 h-5 text-[#5878a4]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}