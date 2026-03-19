"use client"

import { useState } from "react"
import Frame17 from "../imports/Frame17"

interface TopicResponseBubbleProps {
  topicData: any
  topicId: string
  selectedTopicIds: string[]
  onTopicSelect: (topicId: string, topicTitle: string, topicData: any) => void
}

const allTopics = [
  {
    id: 'registration',
    title: 'דירה בהנחה | הרשמה להגרלות',
    infoPages: [
      { title: 'מדריך הרשמה להגרלות', url: 'https://www.gov.il/he/pages/mechir_lamishtaken_guide' },
      { title: 'לוח הגרלות עדכני', url: 'https://www.gov.il/he/pages/lottery_schedule' },
      { title: 'שאלות ותשובות - הגרלות', url: 'https://www.gov.il/he/pages/faq_lottery' }
    ]
  },
  {
    id: 'status',
    title: 'דירה בהנחה | סטטוס בקשה',
    infoPages: [
      { title: 'בדיקת סטטוס בקשה', url: 'https://www.gov.il/he/pages/faq_dira' }
    ]
  },
  {
    id: 'general',
    title: 'פנייה כללית למשרד הבינוי והשיכון',
    infoPages: [
      { title: 'טופס פנייה כללי', url: 'https://www.gov.il/he/pages/contact_moch' }
    ]
  }
]

export function TopicResponseBubble({ topicData, topicId, selectedTopicIds, onTopicSelect }: TopicResponseBubbleProps) {
  const [showContact, setShowContact] = useState(false)
  
  const remainingTopics = allTopics.filter(topic => !selectedTopicIds.includes(topic.id))

  return (
    <div className="flex gap-3 items-start">
      {/* AI Avatar - Right Side - Hidden on mobile */}
      <div className="hidden md:flex shrink-0 rounded-[8px] w-[48px] h-[48px] overflow-hidden items-center justify-center">
        <div className="w-[40px] h-[40px]">
          <Frame17 />
        </div>
      </div>
      
      <div 
        className="flex-1 bg-[#F0F7FF] rounded-[20px] rounded-tr-[4px] p-5 border border-[#D6E9FF]"
      >
        <div className="space-y-5" dir="rtl">
          {/* Info Pages */}
          {topicData?.infoPages && topicData.infoPages.length > 0 && (
            <>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[16px]">📚</span>
                  <p 
                    className="text-[#4A4A4A]"
                    style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}
                  >
                    מידע בנושא {topicData.title || topicData.fullTitle}:
                  </p>
                </div>
                
                <div className="space-y-2">
                  {topicData.infoPages.map((page: any, pageIndex: number) => (
                    <a
                      key={pageIndex}
                      href={page.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-[16px]">📚</span>
                        <p 
                          className="text-[#0068F5] hover:underline"
                          style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 500 }}
                        >
                          {page.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#D6E9FF]" />
            </>
          )}
          
          {/* Contact Button */}
          {topicId !== 'general' && (
            <div className="space-y-2">
              <div className="text-right">
                <p style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 400 }}>
                  <span className="text-[#000000]">לא מצאתי תשובה - </span>
                  <a
                    href="https://govforms.gov.il/mw/forms/ContactUs@moch.gov.il?subjectLock=8888&subSubjectLock=88888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0068F5] hover:underline"
                    style={{ fontWeight: 500 }}
                  >
                    להגשת פנייה
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Remaining Topics */}
          {!showContact && remainingTopics.length > 0 && (
            <>
              <div className="border-t border-[#E0E0E0]" />
              
              <div className="space-y-3">
                <p 
                  className="text-[#4A4A4A] text-right"
                  style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 600 }}
                >
                  נושאים נוספים:
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {remainingTopics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => {
                        const topicData = {
                          id: topic.id,
                          title: topic.title,
                          fullTitle: topic.title,
                          infoPages: topic.infoPages
                        }
                        onTopicSelect(topic.id, topic.title, topicData)
                      }}
                      className="bg-white border border-[#E0E0E0] rounded-[8px] px-4 py-3 hover:bg-[#F1F5FB] hover:border-[#90CAF9] focus:outline-none active:ring-2 active:ring-[#0B5394] active:ring-offset-2 transition-all text-right"
                    >
                      <p 
                        className="text-[#073763]"
                        style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 500 }}
                      >
                        {topic.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}