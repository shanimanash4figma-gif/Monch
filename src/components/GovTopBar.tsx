"use client"

import { Search, Globe, Phone, User, ChevronDown } from "lucide-react"
import Frame1261158121 from "../imports/Frame1261158121"
import MobileTopBar from "../imports/Background-2257-602"

export function GovTopBar() {
  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden w-full h-[64px]">
        <MobileTopBar />
      </div>

      {/* Desktop Version */}
      <div 
        className="hidden md:flex w-full h-[64px] items-center justify-between px-6"
        dir="rtl"
        style={{
          background: "linear-gradient(93deg, #025FDB 0%, #025FDB 35%, #0B3668 100%)",
          fontFamily: "'Rubik', sans-serif"
        }}
      >
        {/* Right Side: Logo + Search Bar */}
        <div className="flex items-center gap-4">
          {/* Gov.il Logo */}
          <div className="h-[53.65px] w-[152px]">
            <Frame1261158121 />
          </div>
          
          {/* Search Button */}
          <button 
            className="bg-white/95 hover:bg-white border border-[rgba(7,55,99,0.3)] rounded-full h-[40px] px-4 flex items-center gap-2 transition-colors"
          >
            <Search className="w-4 h-4 text-[#073763]" />
            <span 
              className="text-[#073763] whitespace-nowrap"
              style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
            >
              חפשו שירות או מידע
            </span>
          </button>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="flex items-center gap-6">
          <button className="text-white hover:bg-white/10 px-3 py-2 rounded-md flex items-center gap-1 transition-colors">
            <span style={{ fontSize: '16px', lineHeight: '22px', fontWeight: 400 }}>
              שירותים
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <a 
            href="#" 
            className="text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
            style={{ fontSize: '16px', lineHeight: '22px', fontWeight: 400 }}
          >
            משרדים וגופי ממשל
          </a>
          
          <button className="text-white hover:bg-white/10 px-3 py-2 rounded-md flex items-center gap-1 transition-colors">
            <span style={{ fontSize: '16px', lineHeight: '22px', fontWeight: 400 }}>
              מידע
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <a 
            href="#" 
            className="text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
            style={{ fontSize: '16px', lineHeight: '22px', fontWeight: 400 }}
          >
            קבלת קהל
          </a>
        </nav>

        {/* Left Side: Language + Phone + Personal Area */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <button className="text-white hover:bg-white/10 px-3 py-2 rounded-md flex items-center gap-2 transition-colors">
            <Globe className="w-4 h-4" />
            <span style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
              עברית
            </span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {/* Phone Number */}
          <a 
            href="tel:1299" 
            className="text-white hover:bg-white/10 px-3 py-2 rounded-md flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span style={{ fontSize: '16px', lineHeight: '21px', fontWeight: 400 }}>
              1299
            </span>
          </a>

          {/* Personal Area */}
          <a 
            href="#" 
            className="text-white border border-white hover:bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <User className="w-4 h-4" />
            <span style={{ fontSize: '16px', lineHeight: '20px', fontWeight: 400 }}>
              לאזור האישי
            </span>
          </a>
        </div>
      </div>
    </>
  )
}