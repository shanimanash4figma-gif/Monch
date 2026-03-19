"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import svgPaths from "../imports/svg-carxloqrkq"

interface OptionsResponseListProps {
  expandedOption: string
  setExpandedOption: (value: string) => void
  onShowContact: () => void
  onTopicSelect?: (topicId: string, topicTitle: string, topicData: any) => void
  selectedTopicIds?: string[]
  onNoAnswerClick?: () => void
}

interface TopicData {
  id: string
  title: string
  fullTitle: string
  infoPages: Array<{
    title: string
    url: string
  }>
}

const topicsData: TopicData[] = [
  {
    id: "eligibility",
    title: "דירה בהנחה - נושאי זכאות לתכנית | שאלות כלליות על כללי התכנית",
    fullTitle: "דירה בהנחה - נושאי זכאות לתכנית | שאלות כלליות על כללי התכנית לפני הגשת בקשה לזכאות",
    infoPages: [
      {
        title: "שאלות ותשובות – דירה בהנחה",
        url: "https://www.gov.il/he/pages/faq_dira"
      },
      {
        title: "המדריך המלא לתכנית",
        url: "https://www.gov.il/he/pages/mechir_lamishtaken_guide"
      }
    ]
  },
  {
    id: "registration",
    title: "דירה בהנחה | הרשמה להגרלות",
    fullTitle: "דירה בהנחה | הרשמה להגרלות",
    infoPages: [
      {
        title: "מדריך הרשמה להגרלות",
        url: "https://www.gov.il/he/pages/mechir_lamishtaken_guide"
      },
      {
        title: "לוח הגרלות עדכני",
        url: "https://www.gov.il/he/pages/lottery_schedule"
      },
      {
        title: "שאלות ותשובות - הגרלות",
        url: "https://www.gov.il/he/pages/faq_lottery"
      }
    ]
  },
  {
    id: "status",
    title: "דירה בהנחה | סטטוס בקשה",
    fullTitle: "דירה בהנחה | סטטוס בקשה",
    infoPages: [
      {
        title: "בדיקת סטטוס בקשה",
        url: "https://www.gov.il/he/pages/faq_dira"
      }
    ]
  },
  {
    id: "general",
    title: "פנייה כללית למשרד הבינוי והשיכון",
    fullTitle: "פנייה כללית למשרד הבינוי והשיכון",
    infoPages: [
      {
        title: "טופס פנייה כללי",
        url: "https://www.gov.il/he/pages/contact_moch"
      }
    ]
  }
]

export function OptionsResponseList({ expandedOption, setExpandedOption, onShowContact, onTopicSelect, selectedTopicIds, onNoAnswerClick }: OptionsResponseListProps) {
  const [activeTopic, setActiveTopic] = useState<TopicData>(topicsData[0])
  const [showContactForm, setShowContactForm] = useState(false)

  const handleTopicClick = (topic: TopicData) => {
    setActiveTopic(topic)
    setShowContactForm(false) // Reset contact form when changing topics
    if (onTopicSelect) {
      onTopicSelect(topic.id, topic.title, topic)
    }
  }

  const handleContactClick = () => {
    setShowContactForm(!showContactForm)
  }

  return (
    <div 
      className="flex-1 bg-[#F0F7FF] rounded-[20px] rounded-tr-[4px] p-5 border border-[#D6E9FF]"
    >
      {/* ResultsContainer */}
      
      {/* Option1Card - Main Result (always expanded) */}
      <div className="bg-white rounded-[8px] p-5 border border-[#E8EEF3]" style={{ boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.04)' }}>
        <div className="space-y-5">
          {/* Section 1 - ClassificationHeader */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Search className="w-4 h-4 text-[#4A4A4A] mt-1" strokeWidth={1.67} />
              <p 
                className="text-[#4A4A4A]"
                style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}
              >
                נראה שפנייתך בנושא:
              </p>
            </div>
            <p 
              className="text-[#000000]"
              style={{ fontSize: '16px', lineHeight: '26px', fontWeight: 600 }}
            >
              {activeTopic.fullTitle}
            </p>
          </div>

          <div className="border-t border-[#D6E9FF]" />

          {/* Section 2 - Info Pages (always visible if exist) */}
          {activeTopic.infoPages.length > 0 && (
            <>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[16px]">📚</span>
                  <p 
                    className="text-[#4A4A4A]"
                    style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}
                  >
                    מידע בנושא {activeTopic.title}:
                  </p>
                </div>
                
                {/* InfoLinksList */}
                <div className="space-y-2">
                  {activeTopic.infoPages.map((page, index) => (
                    <a
                      key={index}
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

              <div className="border-t border-[#E0E0E0]" />
            </>
          )}

          {/* Section 3 - NotFound Link (only for non-general topics) */}
          {activeTopic.id !== 'general' && (
            <>
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

              <div className="border-t border-[#E0E0E0]" />
            </>
          )}

          {/* AdditionalTopicsLabel + TopicButtonsGroup - Now inside bubble */}
          <div className="space-y-3">
            <p 
              className="text-[#4A4A4A] text-right"
              style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 600 }}
            >
              נושאים נוספים שאולי יתאימו
            </p>
            
            {/* TopicButtonsGroup - horizontal pills matching FAQ style */}
            <div className="flex gap-2 flex-wrap">
              {topicsData.slice(1, 3).map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleTopicClick(topic)}
                  disabled={selectedTopicIds?.includes(topic.id)}
                  className="bg-white border border-[#E0E0E0] rounded-full px-[17px] py-[11px] hover:bg-[#F1F5FB] hover:border-[#90CAF9] focus:outline-none active:ring-2 active:ring-[#0B5394] active:ring-offset-2 transition-all flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  <span 
                    className="text-[#132439] text-center font-medium whitespace-nowrap"
                    style={{ fontSize: '14px', lineHeight: '1' }}
                  >
                    {topic.title}
                  </span>
                  <div className="shrink-0 w-4 h-4 flex items-center">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p107a080} stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M14 14L11.1333 11.1333" stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* General contact link as clickable text */}
            <div className="text-right">
              <button
                onClick={() => handleTopicClick(topicsData[3])}
                className="text-[#0068F5] hover:underline focus:outline-none focus:ring-2 focus:ring-[#0B5394] focus:ring-offset-2 rounded-sm transition-colors"
                style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 500 }}
              >
                פנייה כללית למשרד הבינוי והשיכון
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}