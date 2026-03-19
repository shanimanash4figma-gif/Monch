"use client"

import svgPaths from "../imports/svg-qvhluw34ux"
import { GovTopBar } from "./GovTopBar"

export function OpeningScreen({ onStartChat }: { onStartChat: (message: string) => void }) {
  const handleQuickAction = (message: string) => {
    onStartChat(message)
  }

  return (
    <div className="min-h-screen bg-[#F0F7FF]" dir="rtl" style={{ fontFamily: "'Rubik', sans-serif" }}>
      {/* Top Navigation Bar */}
      <GovTopBar />
      
      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="max-w-[1264px] mx-auto">
          {/* Title */}
          <div className="mb-6">
            <h1 
              className="text-[#0c3058] text-[32px] text-right mb-3"
              style={{ fontWeight: 700, lineHeight: '1.25' }}
            >
              צרו קשר עם משרד הבינוי והשיכון
            </h1>
            <div className="bg-[#0068f5] h-[4px] w-[42px]" />
          </div>

          {/* White Card Container */}
          <div 
            className="bg-white rounded-[8px] border border-[#b5c7e2] p-6"
            style={{ boxShadow: '0px 4px 12px 0px rgba(6,77,173,0.15)' }}
          >
            {/* Header Bar */}
            <div className="bg-[#0c3058] rounded-t-[8px] -m-6 mb-6 px-6 py-3">
              <div className="flex items-center justify-between">
                <button
                  disabled
                  className="flex items-center gap-2 px-[17px] py-2 bg-[rgba(240,243,246,0.1)] border border-[#8596af] rounded-[8px] opacity-50"
                >
                  <span 
                    className="text-[#8596af] text-[16px] text-center"
                    style={{ fontWeight: 500, lineHeight: '20px' }}
                  >
                    שיחה חדשה
                  </span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p3b0e2580} stroke="#8596AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </button>
                <h2 
                  className="text-white text-[18px]"
                  style={{ fontWeight: 600, lineHeight: '24px' }}
                >
                  עוזר פניות הציבור - מכוון אותך למקום הנכון
                </h2>
              </div>
            </div>

            {/* Chat Bubble with AI Avatar */}
            <div className="flex items-start gap-3 mb-6">
              {/* AI Avatar Icon */}
              <div className="shrink-0 w-[48px] h-[48px] rounded-[8px] overflow-hidden flex items-center justify-center">
                <div className="w-[40px] h-[40px] rounded-full bg-[#0C3058] flex items-center justify-center relative">
                  <svg className="absolute" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#0C3058"/>
                    <path d={svgPaths.pd8105b0} fill="#0C3058" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(9.5, 9.5)"/>
                  </svg>
                </div>
              </div>

              {/* Message Bubble */}
              <div className="flex-1 bg-[#f1f5fb] rounded-tl-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tr-[0px] p-5">
                <p 
                  className="text-[#0c3058] mb-4 text-right"
                  style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
                >
                  שלום! אני עוזר פניות הציבור של משרד הבינוי והשיכון.
                </p>
                <p 
                  className="text-[#0c3058] mb-4 text-right"
                  style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
                >
                  כתבו <strong style={{ fontWeight: 700 }}>בקצרה</strong> את נושא הפנייה, ואכוון אתכם לדף ידע או לטופס פניות הציבור להגשת פנייה מאובטחת.
                </p>
                
                {/* Divider */}
                <div className="border-t border-[#e0e0e0] my-4" />
                
                {/* Warning */}
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d={svgPaths.pd812d00} fill="#A35200" />
                  </svg>
                  <p 
                    className="text-[#a35200] text-right"
                    style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 500 }}
                  >
                    נא לא להזין פרטים אישיים/מזהים.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 items-center justify-end mb-4">
              <button
                onClick={() => handleQuickAction("סיוע בשכר דירה")}
                className="flex items-center gap-2 px-4 py-3 border border-[#b5c7e2] rounded-full hover:bg-[#F0F7FF] transition-colors"
              >
                <p 
                  className="text-[#0c3058] text-center"
                  style={{ fontSize: '16px', lineHeight: '14px', fontWeight: 500 }}
                >
                  סיוע בשכר דירה
                </p>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p36b67cc0} fill="#0C3058" transform="scale(1.33)" />
                </svg>
              </button>

              <button
                onClick={() => handleQuickAction("בירור תנאי זכאות למחיר מטרה")}
                className="flex items-center gap-2 px-4 py-3 border border-[#b5c7e2] rounded-full hover:bg-[#F0F7FF] transition-colors"
              >
                <p 
                  className="text-[#0c3058] text-center"
                  style={{ fontSize: '16px', lineHeight: '14px', fontWeight: 500 }}
                >
                  בירור תנאי זכאות למחיר מטרה
                </p>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p36b67cc0} fill="#0C3058" transform="scale(1.33)" />
                </svg>
              </button>
            </div>

            {/* Input Area */}
            <div className="bg-white border border-[#b5c7e2] rounded-[8px] p-2 flex items-center justify-between">
              <button
                disabled
                className="flex items-center gap-2 px-4 py-3 bg-[#f0f3f6] rounded-[8px] opacity-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p3d87c9f0} fill="#8596AF" transform="scale(1.2)" />
                </svg>
                <span 
                  className="text-[#8596af] text-center"
                  style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 500 }}
                >
                  שליחה
                </span>
              </button>
              
              <p 
                className="text-[#5878a4] pr-2"
                style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
              >
                אני פונה בנושא...
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[#b5c7e2] my-4" />

            {/* Disclaimer */}
            <p 
              className="text-[#5878a4] text-right text-[14px]"
              style={{ lineHeight: '16px', fontWeight: 400 }}
            >
              התשובות מבוססות על בינה מלאכותית ועלולות לכלול אי-דיוקים. במקרה של סתירה או אי התאמה בין המידע שניתן על ידי העוזר לבין הוראות הדין הרלוונטיות, יגברו הוראות הדין.{' '}
              <span className="underline">לתנאי השימוש</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
