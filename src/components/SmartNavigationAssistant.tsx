"use client"

import { useState, useRef, useEffect } from "react"
import { Sparkles, Search } from "lucide-react"
import { GovTopBar } from "./GovTopBar"
import { MinistryHeader } from "./MinistryHeader"
import Background from "../imports/Background-2254-154"

export function SmartNavigationAssistant() {
  const [inputValue, setInputValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const quickTopics = [
    { id: "eligibility-rent", label: "מה התנאים לדירה בהנחה?" },
    { id: "rent-support", label: "האם אני זכאי לסיוע בשכר דירה?" },
    { id: "request-status", label: "מה הסטטוס של הבקשה שלי?" },
    { id: "urban-renewal", label: "מה זכויותיי בפרויקט תמ״א 38?" },
    { id: "building-permit", label: "איך מוצאים היתר בנייה?" },
    { id: "public-housing", label: "רוצה לקבל דירה בדיור ציבורי" },
  ]

  const handleQuickTopicClick = (topicLabel: string) => {
    setInputValue(topicLabel)
    // Here you would trigger the search/navigation logic
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      // Handle search logic here
      console.log("Searching for:", inputValue)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#EBF3FA' }} dir="rtl">
      {/* Top Navigation */}
      <GovTopBar />
      <MinistryHeader />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-[900px]">
          {/* Central Hero Card */}
          <div 
            className="bg-white rounded-[16px] p-8 md:p-10 lg:p-14"
            style={{
              boxShadow: '0 4px 24px rgba(7, 55, 99, 0.1), 0 2px 8px rgba(7, 55, 99, 0.06)'
            }}
          >
            {/* Icon Badge - Top Right */}
            <div className="flex justify-end mb-6">
              <div 
                className="w-[56px] h-[56px] rounded-[12px] flex items-center justify-center"
                style={{ backgroundColor: '#E3F2FD' }}
              >
                <Sparkles className="w-[28px] h-[28px]" style={{ color: '#0B5394' }} />
              </div>
            </div>

            {/* Headlines */}
            <div className="text-center mb-8 md:mb-10">
              <h1 
                className="mb-3 md:mb-4"
                style={{
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: 'clamp(24px, 5vw, 32px)',
                  lineHeight: '1.25',
                  fontWeight: 700,
                  color: '#073763'
                }}
              >
                ניתוב חכם לנושא הפנייה
              </h1>
              <p 
                className="max-w-[600px] mx-auto"
                style={{
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 400,
                  color: '#4A4A4A'
                }}
              >
                תארו את הפנייה ונמצא עבורכם את הטופס ודפי המידע הרלוונטיים
              </p>
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="לדוגמה: אני רוצה לבדוק זכאות לסיוע בשכר דירה..."
                  className="w-full px-6 py-5 pr-14 text-right rounded-[12px] border-2 transition-all outline-none"
                  style={{
                    fontFamily: "'Rubik', sans-serif",
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: 400,
                    color: '#073763',
                    borderColor: isFocused ? '#0B5394' : '#E0E0E0',
                    backgroundColor: '#FFFFFF'
                  }}
                  dir="rtl"
                />
                
                {/* Sparkle Icon - Inside Right */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Sparkles 
                    className="w-[20px] h-[20px]" 
                    style={{ color: '#0B5394' }}
                  />
                </div>

                {/* Search Icon - Inside Left */}
                <button
                  type="submit"
                  className="absolute left-5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-[#F0F7FF] transition-colors"
                  disabled={!inputValue.trim()}
                  style={{
                    opacity: inputValue.trim() ? 1 : 0.4
                  }}
                >
                  <Search 
                    className="w-[20px] h-[20px]" 
                    style={{ color: '#0B5394' }}
                  />
                </button>
              </div>
            </form>

            {/* Quick Action Chips Section */}
            <div className="mb-6">
              <p 
                className="text-right mb-4"
                style={{
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 500,
                  color: '#4A4A4A'
                }}
              >
                לחצו אחת מהדוגמאות או הקלידו פניה משלכם:
              </p>

              {/* Chips Grid - 2 rows of 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleQuickTopicClick(topic.label)}
                    className="bg-white border-2 rounded-[8px] px-4 py-3 hover:bg-[#F0F7FF] hover:border-[#90CAF9] active:ring-2 active:ring-[#0B5394] active:ring-offset-2 transition-all text-right focus:outline-none flex items-center gap-3"
                    style={{
                      borderColor: '#E0E0E0',
                      fontFamily: "'Rubik', sans-serif",
                      fontSize: '15px',
                      lineHeight: '22px',
                      fontWeight: 400,
                      color: '#073763'
                    }}
                  >
                    <Search className="w-[18px] h-[18px] flex-shrink-0" style={{ color: '#4A4A4A' }} />
                    <span className="flex-1 text-right">{topic.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Link */}
            <div className="text-center pt-6 border-t" style={{ borderColor: '#E0E0E0' }}>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => {
                    // Navigate to manual selection
                    console.log("Navigate to manual selection")
                  }}
                  className="text-[#0068F5] hover:underline focus:outline-none transition-colors"
                  style={{
                    fontFamily: "'Rubik', sans-serif",
                    fontSize: '15px',
                    lineHeight: '22px',
                    fontWeight: 500
                  }}
                >
                  להגשת פנייה בלילת דרך הטופס הרגיל
                </button>
                <span 
                  style={{
                    fontFamily: "'Rubik', sans-serif",
                    fontSize: '15px',
                    lineHeight: '22px',
                    fontWeight: 400,
                    color: '#4A4A4A'
                  }}
                >
                  ←
                </span>
                <span 
                  style={{
                    fontFamily: "'Rubik', sans-serif",
                    fontSize: '15px',
                    lineHeight: '22px',
                    fontWeight: 400,
                    color: '#4A4A4A'
                  }}
                >
                  מעדיפים לבחור נושא ידנית?
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}