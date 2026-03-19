"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Sparkles, ChevronDown, Home, Award, FileText, Hammer, Search, TriangleAlert } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import hoopoeImage from "figma:asset/9b46ada81960bce141ede854f8deb83daca89b61.png"
import aiAvatarImage from "figma:asset/dd540abb061da8d36232fa40c5e005dcbf6977dc.png"
import Building from "../imports/Building"
import Document from "../imports/Document"
import Coins from "../imports/Coins"
import ShowMoreButton from "../imports/Buttonהצגעודשירותים"
import Group from "../imports/Group"
import Background from "../imports/Background-2254-154"
import Frame17 from "../imports/Frame17"
import Frame17New from "../imports/Frame17-2344-35"
import Frame from "../imports/Frame"
import { TextShimmer } from "./TextShimmer"
import { GovTopBar } from "./GovTopBar"
import { OptionsResponseList } from "./OptionsResponseList"
import { TopicResponseBubble } from "./TopicResponseBubble"
import svgPaths from "../imports/svg-carxloqrkq"
import sendSvgPaths from "../imports/svg-ot18y0t72u"

export function PublicInquiryPage() {
  const [inputValue, setInputValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [activeTab, setActiveTab] = useState("projects")
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [currentResponse, setCurrentResponse] = useState<any>(null)
  const [additionalMessages, setAdditionalMessages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [loadingStep, setLoadingStep] = useState(0)
  const [showAllFaq, setShowAllFaq] = useState(false)
  const [activeInfoTab, setActiveInfoTab] = useState(0)
  const [faqSearchQuery, setFaqSearchQuery] = useState("")
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const [expandedOption, setExpandedOption] = useState("option-1")
  const [showContactBubble, setShowContactBubble] = useState(false)
  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>(["eligibility"])
  
  const responseRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const contactBubbleRef = useRef<HTMLDivElement>(null)

  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = '58px' // Reset to min height
      const scrollHeight = textarea.scrollHeight
      const maxHeight = 150
      textarea.style.height = Math.min(scrollHeight, maxHeight) + 'px'
    }
  }

  // Reset textarea height when clearing
  useEffect(() => {
    if (!inputValue && textareaRef.current) {
      textareaRef.current.style.height = '58px'
    }
  }, [inputValue])

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (chatContainerRef.current && (hasSubmitted || additionalMessages.length > 0)) {
      // Smooth scroll to bottom
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [hasSubmitted, currentResponse, additionalMessages, isLoading])

  // Check if chat is scrollable
  useEffect(() => {
    const checkScroll = () => {
      if (chatContainerRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = chatContainerRef.current
        const isScrollable = scrollHeight > clientHeight
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 10
        setShowScrollIndicator(isScrollable && !isAtBottom)
      }
    }

    const chatElement = chatContainerRef.current
    if (chatElement) {
      checkScroll()
      chatElement.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      
      return () => {
        chatElement.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [hasSubmitted, currentResponse, isLoading])

  const handleSubmit = () => {
    if (!inputValue.trim()) return
    console.log("Submitted:", inputValue)
    
    const submittedValue = inputValue
    setInputValue("") // Clear input immediately after submission
    setHasSubmitted(true)
    setIsLoading(true)
    setLoadingStep(0)
    setActiveInfoTab(0) // Reset info tab to first tab
    
    // Set initial response with just the submitted text so it appears in the user bubble
    setCurrentResponse({ submittedText: submittedValue })
    
    // Each step shows for 3 seconds
    setTimeout(() => setLoadingStep(1), 0)
    setTimeout(() => setLoadingStep(2), 3000)
    setTimeout(() => setLoadingStep(3), 6000)
    
    // Show response after loading
    setTimeout(() => {
      // Determine which response to show based on input
      const lowerInput = submittedValue.toLowerCase()
      
      // Check for "עזרה" keyword
      if (lowerInput.includes("עזרה")) {
        setCurrentResponse({
          helpResponse: true,
          submittedText: submittedValue,
          message: "❓ כדי שאוכל להפנות בצורה מדויקת, אשמח לתיאור בקצרה על מה מדובר: מה המטרה או נושא הפנייה?",
          examples: [
            "\"רוצה לבדוק זכאות לסיוע בשכר דירה\"",
            "\"רוצה לבדוק תנאי זכאות למחיר מטרה\"",
            "\"צריך מידע על התחדשות עירונית\""
          ]
        })
      } else if (lowerInput.includes("סיוע בשכר") || lowerInput.includes("הריון") || lowerInput.includes("לידה") || lowerInput.includes("בקשה") || lowerInput.includes("קריטריונים")) {
        setCurrentResponse({
          title: "סיוע בשכר דירה – בקשה לסיוע בשכר דירה",
          submittedText: submittedValue,
          intro: "רגע לפני פנייה, ריכזנו עבורכם עמודים עם מידע מקיף בנושא:",
          cards: [
            {
              icon: "📚",
              title: "שאלות ותשובות – סיוע בשכר דירה",
              link: "https://www.gov.il/he/departments/guides/rental_assistance_step_by_step?chapterIndex=1"
            },
            {
              icon: "📘",
              title: "המדריך המלא לתכנית",
              link: "https://www.gov.il/he/departments/guides/rental_assistance_step_by_step?chapterIndex=1"
            }
          ],
          contacts: [
            {
              icon: "",
              title: "הגשת פנייה מקוונת",
              description: "טופס פניות הציבור",
              link: "https://govforms.gov.il/mw/forms/ContactUs@moch.gov.il/?subjectLock=2"
            },
            {
              icon: "📞",
              title: "סיוע טלפוני בהרשמה",
              description: "רשימת חברות ההרשמה והסיוע הטלפוני",
              link: "https://www.gov.il/apps/moch/viewlist/list/chavarot-harshama-siyua"
            }
          ]
        })
      } else {
        // Default response for "דירה בהנחה"
        setCurrentResponse({
          title: "בירור תנאי זכאות למחיר מטרה",
          subtitle: "דירה בהנחה - נושאי זכאות לתכנית",
          submittedText: submittedValue,
          description: "שאלות כלליות על כללי התכנית לפני הגשת בקשה לזכאות",
          linksTitle: "רגע לפני הפנייה, מומלץ לעיין בעמודים הבאים הכוללים מידע מקיף בנושא:",
          links: [
            {
              title: "שאלות ותשובההת – דירה בהנחה",
              tabIcon: "📚",
              url: "https://www.gov.il/he/pages/faq_dira"
            },
            {
              title: "המדריך המלא לתכנית",
              tabIcon: "📘",
              url: "https://www.gov.il/he/pages/mechir_lamishtaken_guide"
            }
          ],
          contactTitle: "לא מצאת תשובה? ניתן לפנות אלינו דרכים הבאות:",
          contacts: [
            {
              icon: "",
              title: "הגשת פנייה מקוונת:",
              description: "טופס פניות הציבור",
              url: "https://govforms.gov.il/mw/forms/ContactUs@moch.gov.il?subjectLock=8888&subSubjectLock=88888"
            },
            {
              icon: "📞",
              title: "דרכי יצירת קשר נוספות:",
              description: "רשימת חברות ההרשמה וסיוע טלפוני",
              url: "https://www.gov.il/apps/moch/viewlist/list/chavarot-harshama-siyua"
            }
          ]
        })
      }
      
      setIsLoading(false)
    }, 9000)
  }

  const handleNewChat = () => {
    setInputValue("")
    setHasSubmitted(false)
    setCurrentResponse(null)
    setAdditionalMessages([])
    setIsLoading(false)
    setLoadingStep(0)
    setActiveInfoTab(0) // Reset info tab to first tab
    setShowContactBubble(false) // Reset contact bubble
    setSelectedTopicIds(["eligibility"])
  }

  const handleTopicSelect = (topicId: string, topicTitle: string, topicData: any) => {
    // Add to selected topics list
    setSelectedTopicIds(prev => [...prev, topicId])
    
    // Add user message and AI response to additional messages
    const userMessage = {
      type: 'user',
      text: topicTitle
    }
    
    const aiResponse = {
      type: 'ai',
      topicId,
      topicData,
      loading: true
    }
    
    setAdditionalMessages(prev => [...prev, userMessage, aiResponse])
    
    // Simulate loading
    setIsLoading(true)
    setLoadingStep(0)
    
    setTimeout(() => setLoadingStep(1), 0)
    setTimeout(() => setLoadingStep(2), 3000)
    setTimeout(() => setLoadingStep(3), 6000)
    
    setTimeout(() => {
      // Update the AI response to remove loading
      setAdditionalMessages(prev => 
        prev.map(msg => 
          msg.type === 'ai' && msg.topicId === topicId 
            ? { ...msg, loading: false }
            : msg
        )
      )
      setIsLoading(false)
    }, 9000)
  }

  const handleNoAnswerClick = () => {
    // Add user message
    const userMessage = {
      type: 'user',
      text: 'לא מצאתי תשובה'
    }
    
    // Add AI response with contact form
    const aiResponse = {
      type: 'contact',
      loading: true
    }
    
    setAdditionalMessages(prev => [...prev, userMessage, aiResponse])
    
    // Simulate loading
    setIsLoading(true)
    setLoadingStep(0)
    
    setTimeout(() => setLoadingStep(1), 0)
    setTimeout(() => setLoadingStep(2), 2000)
    
    setTimeout(() => {
      // Update the AI response to show contact info
      setAdditionalMessages(prev => 
        prev.map(msg => 
          msg.type === 'contact' && msg.loading
            ? { 
                type: 'contact',
                loading: false,
                message: 'ניתן להגיש פנייה מקוונת בנושא באמצעות:',
                contactUrl: 'https://govforms.gov.il/mw/forms/ContactUs@moch.gov.il?subjectLock=8888&subSubjectLock=88888',
                contactTitle: 'טופס פניות הציבור - שאלות כלליות על כללי התכנית לפני הגשת בקשה לזכאות'
              }
            : msg
        )
      )
      setIsLoading(false)
    }, 4000)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const loadingSteps = [
    "בוחן את הבקשה...",
    "מאתר מידע מתאים...",
    "מאתר גורמים רלוונטיים לפניה..."
  ]

  const faqItems = [
    {
      question: "איך אני יכול לקבל דירה בהנחה?",
      answer: "דירה בהנחה היא תכנית של משרד הבינוי והשיכון המאפשרת לזכאים לרכוש דירה במחיר מופחת. כדי להיות זכאי, יש למלא את הטופס באתר משרד הבינוי והשיכון ולעמוד בקריטריונים ש הכנסה ורכוש."
    },
    {
      question: "מהו מחיר למשן?",
      answer: "מחיר למשתכן היא תכנית דיור המספקת דירות במר מופחת לזוות צעירים ולמשפחות בקריטריונים. הדירות נמכרות במחיר מוך יותר ממחיר השוק הפתוח."
    },
    {
      question: "איך לבדוק זכאות למענקי רכישה?",
      answer: "ניתן לדוק זכאות למענקי רכש דרך אתר משרד הבינוי והשיכון. קיימים מענקים שונים כגון מענק רכישת דירה ראשונה, מענק לחיזוק מבנים ועוד. יש למלא טופס בדיקת זכאות באתר."
    },
    {
      question: "מה ההבדל בין דירה בהנחה למחיר למשתכן?",
      answer: "דירה בהנחה ומחיר למשתכן הן שתי תכניות שונות. דירה בהנחה מיועדת לאים שעומדים בקריטריונים מס של כנסה ורכוש, בעוד מחיר למשתכן מציעה דירות במחיר מופחת במיוחד לזוגות צעירים ומשפחות."
    },
    {
      question: "כיצד לבדוק סטטוס בקשה שהגשתי?",
      answer: "ניתן לבדוק את סטטוס הבקשה דרך אתר משרד הבינוי והשיכון באזור האישי. יש להיכנס עם פרטי ההזדהות ועקוב אחר התקדמות הבקשה במערכת."
    }
  ]

  const additionalFaqItems = [
    {
      question: "מהי תכנית מחיר למשתכן?",
      answer: "תכנית מחיר למשתכן היא תכנית ממשלתית המספקת דירות במחיר מופחת לזכאים. התכנית מיועדת לזוגות צעירים ומשפחות שעומדים בקריטריוני זכאות של הכנסה ורכוש."
    },
    {
      question: "איך בודקים זכאות למענקים?",
      answer: "ניתן לבדוק זכאות למענקים באתר משרד הבינוי והשיכון. יש למלא טופס בדיקת זכאות ולהזין את הפרטים הנדרשים. המערכת תבדוק אוטומטית את הכאות למענקים השונים."
    },
    {
      question: "מהם התנאים לקבלת מענק דירה ראשונה?",
      answer: "מענק דירה ראונה ניתן לזכאים שרוכשים דירה הראשונה. יש לעמוד בתנאי הכנסה ורכוש מסוימים, ויש להגיש בקשה דרך אתר מ��רד הבינוי והשיכון."
    },
    {
      question: "איך מגישים בקשה להשכרה ציבורית?",
      answer: "להגשת בקשה להשכרה ציבורית יש להיכנס לאתר משרד הבינוי והשיכון, למלא טופס בקשה מקוון ולצרף את כל המסמכים הנדרשים. הבקשה תיבחן על פי קריטריוני זכאות."
    },
    {
      question: "מהו מענק חיזוק מבנים?",
      answer: "מענק חיזוק מבנים הוא סיוע כלכלי לבעלי דירות לצורך חיזוק מבנים ישנים מפני רעידות אדמה. ניתן לקבל מידע נוסף ולהגיש בקשה דרך אתר משרד הבינוי והשיכון."
    }
  ]

  const tabs = [
    {
      id: "projects",
      label: "מחיר טרה",
      icon: Building,
      description: "פרויקטי בנייה ממשלתיים, מחיר למשתכן ודירו בהנחה"
    },
    {
      id: "landregistry",
      label: "רישום מקרקעין",
      icon: Document,
      description: "מידע על רישום מקרקעין, העברת זכויות, טאבו ומסמכים משפטיים"
    },
    {
      id: "housing",
      label: "סיוע בדיור",
      icon: Coins,
      description: "סיוע כלכליardiור, דמי שכירות, מענקים ותמיכות למשפחות זכאיות"
    }
  ]

  const tabContent: { [key: string]: { title: string; description: string } } = {
    landregistry: {
      title: "רישום מקרקעין",
      description: "מידע מקיף על רישום מקרקעין, העברת זכויות, טאבו ומסמכים משפטיים. משרד הבינוי והשיכון מעניק פתרונות רישום מקרקעין למשתתפים בפרויקטים ממשלתיים."
    },
    housing: {
      title: "סיוע בדיור",
      description: "מידע על סיוע כלכליardiור, דמי שכירות, מענקים ותמיכות למשפחות זכאיות. כל המידע על תנאי הזכאות, סכומי המענקים והדרך להגשת בקשה."
    },
    projects: {
      title: "פרויקטים ממשלתיים",
      description: "רשימה מעודכנת של פרויקט הבנייה הממשלתיים, תכנית מחיר למשתכן, דירות בהנחה ופרויקטים נוספים. כל המידע על מיקומים, מחירים, לוחת זמינו ודרכי הרשמה."
    }
  }

  // Filter FAQ items based on search query
  const allFaqItems = [...faqItems, ...(showAllFaq ? additionalFaqItems : [])]
  const filteredFaqItems = faqSearchQuery.trim() 
    ? allFaqItems.filter(item => 
        item.question.includes(faqSearchQuery) || item.answer.includes(faqSearchQuery)
      )
    : allFaqItems.slice(0, showAllFaq ? allFaqItems.length : faqItems.length)

  return (
    <>
      {/* Top Navigation Bar */}
      <GovTopBar />
      
      <div className="bg-[#EBF3FA]" dir="rtl" style={{ fontFamily: "'Rubik', sans-serif" }}>
        {/* Chat Section - Fixed viewport height */}
        <div className="py-4 md:py-6 px-3 md:px-4" style={{ height: 'calc(100vh - 64px)' }}>
          {/* Main Content Container - Centered White Box */}
          <div className="w-full max-w-[1200px] mx-auto h-full flex flex-col">
            {/* Combined Container: Chat + Contact Info */}
            <div className="flex-1 flex flex-col overflow-hidden">
            {/* Title - Gov.il Style */}
            <div className="flex flex-col gap-[6px] md:gap-[8px] items-start mb-4 md:mb-6">
              <div className="flex items-center gap-3">
                <h1 
                  className="text-[#073763] text-right text-2xl md:text-4xl"
                  style={{ lineHeight: '1.2', fontWeight: 700 }}
                >
                  צרו קשר עם משרד הבינוי והשיכון
                </h1>
              </div>
              <div className="bg-[#0068F5] h-[3px] md:h-[4px] w-[32px] md:w-[42px] rounded-full" />
            </div>

            {/* Chat Card - Integrated into white container */}
            <div className="w-full flex-1">
              <div 
                className="bg-white border border-[#E8EEF3] rounded-[12px] flex flex-col overflow-hidden h-full"
                style={{ 
                  boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.04), 0px 4px 12px 0px rgba(0,0,0,0.02)'
                }}
              >
                {/* Chat Header */}
                <div 
                  className="px-3 md:px-6 py-3 md:py-4 border-b border-[#E8EEF3]"
                  style={{
                    background: 'linear-gradient(135deg, #073763 0%, #0B5394 100%)'
                  }}
                >
                  <div className="flex items-center justify-between gap-2 md:gap-3">
                    <div className="flex-1 min-w-0">
                      <p 
                        className="text-white text-sm md:text-base truncate"
                        style={{ lineHeight: '24px', fontWeight: 600 }}
                      >
                        עוזר פניות הציבור - מכוון אותך למקום הנכון
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setHasSubmitted(false)
                        setCurrentResponse(null)
                        setInputValue("")
                        setIsLoading(false)
                        setLoadingStep(0)
                      }}
                      disabled={!hasSubmitted}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-white/10 border border-white/30 text-white rounded-[8px] hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#073763] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/10 text-sm md:text-base flex items-center gap-2"
                      style={{ lineHeight: '20px', fontWeight: 500 }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="hidden md:inline">שיחה חדשה</span>
                    </button>
                  </div>
                </div>

                {/* Scrollable Chat Area */}
                <div 
                  ref={chatContainerRef}
                  className="overflow-y-auto p-4 md:p-6 bg-white custom-scrollbar relative"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#E8EEF3 #FFFFFF',
                    flex: '1 1 0',
                    minHeight: 0
                  }}
                >
                  {/* Scroll Indicator removed */}
                  
                  {/* Helper Text with Sparkle Icon */}
                  <div className="flex gap-3 items-start mb-8">
                    {/* AI Avatar - Right Side - Hidden on mobile */}
                    <div 
                      className="hidden md:flex shrink-0 rounded-[8px] w-[48px] h-[48px] overflow-hidden items-center justify-center"
                    >
                      <div className="w-[40px] h-[40px]">
                        <Frame17 />
                      </div>
                    </div>
                    
                    {/* Text Bubble - Left Side */}
                    <div className="inline-block max-w-[78%] bg-[#F0F7FF] rounded-[20px] rounded-tr-[4px] px-4 py-3 md:px-5 md:py-4 border border-[#D6E9FF]">
                      <div className="text-right" style={{ fontFamily: "'Rubik', sans-serif" }}>
                        <p 
                          className="text-[#073763] mb-4"
                          style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
                          dir="rtl"
                        >
                          שלום! אני עוזר פניות הציבור של משרד הבינוי והשיכון.
                        </p>
                        <p 
                          className="text-[#073763] mb-5"
                          dir="rtl"
                          style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
                        >
                          כתבו <strong style={{ fontWeight: 700 }}>בקצרה</strong> את נושא הפנייה, ואכוון אתכם לדף ידע או לטופס פניות הציבור להגשת פנייה מאובטחת.
                        </p>
                        
                        {/* Divider */}
                        <div className="border-t border-[#D6E9FF] mb-4" />
                        
                        {/* Warning with icon - Aligned to the right */}
                        <div className="flex items-start gap-2" dir="rtl">
                          <TriangleAlert className="w-4 h-4 text-[#A35200] shrink-0 mt-0.5" strokeWidth={2} />
                          <p 
                            className="text-[#A35200] text-right flex-1"
                            style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 500 }}
                          >
                            נא לא להזין פרטים אישיים/מזהים.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages - Only show after submission */}
                  {hasSubmitted && (
                    <div className="space-y-8">
                      {/* User Message */}
                      <div className="flex gap-3 items-start justify-end">
                        {/* User Message Bubble - Width based on content, aligned to right */}
                        <div 
                          className="bg-[#0B5394] text-white rounded-[20px] rounded-tl-[4px] px-5 py-3 inline-block border border-[#073763]"
                          style={{ maxWidth: 'calc(100% - 48px - 12px)' }}
                          dir="rtl"
                        >
                          <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 500 }}>
                            {currentResponse?.submittedText || ""}
                          </p>
                        </div>
                      </div>

                      {/* AI Response or Loading */}
                      <div className="flex gap-3 items-start" ref={responseRef}>
                        {/* AI Avatar - Right Side - Hidden on mobile */}
                        <div className="hidden md:flex shrink-0 rounded-[8px] w-[48px] h-[48px] overflow-hidden items-center justify-center">
                          <div className="w-[40px] h-[40px]">
                            <Frame17 />
                          </div>
                        </div>
                        
                        {isLoading ? (
                          <div 
                            className="inline-block max-w-[78%] bg-[#f1f5fb] rounded-tl-[8px] rounded-tr-[0px] rounded-bl-[8px] rounded-br-[8px] px-4 py-3"
                          >
                            <div className="text-right" dir="rtl">
                              {loadingStep === 1 && (
                                <TextShimmer 
                                  duration={2}
                                >
                                  {loadingSteps[0]}
                                </TextShimmer>
                              )}
                              {loadingStep === 2 && (
                                <TextShimmer 
                                  duration={2}
                                >
                                  {loadingSteps[1]}
                                </TextShimmer>
                              )}
                              {loadingStep === 3 && (
                                <TextShimmer 
                                  duration={2}
                                >
                                  {loadingSteps[2]}
                                </TextShimmer>
                              )}
                            </div>
                          </div>
                        ) : currentResponse && (
                          <div className="inline-block max-w-[78%]">
                            {/* Check response type */}
                            {currentResponse.helpResponse ? (
                              // Help response format
                              <div className="inline-block max-w-[78%] bg-[#f1f5fb] rounded-tl-[8px] rounded-tr-[0px] rounded-bl-[8px] rounded-br-[8px] px-4 py-3">
                                <div className="text-right" dir="rtl">
                                  <p 
                                    className="text-[#1F2937] mb-4"
                                    style={{ fontSize: '16px', lineHeight: '150%', fontWeight: 400 }}
                                  >
                                    {currentResponse.message}
                                  </p>

                                  <p 
                                    className="text-[#4B5563] mb-2"
                                    style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 500 }}
                                  >
                                    דוגמאות לניסוח:
                                  </p>
                                  
                                  <ul className="space-y-2">
                                    {currentResponse.examples.map((example: string, index: number) => (
                                      <li 
                                        key={index}
                                        className="text-[#4B5563] pr-4"
                                        style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
                                      >
                                        • {example}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              // OptionsResponseList - New format
                              <OptionsResponseList 
                                expandedOption={expandedOption}
                                setExpandedOption={setExpandedOption}
                                onShowContact={() => setShowContactBubble(true)}
                                onTopicSelect={handleTopicSelect}
                                selectedTopicIds={selectedTopicIds}
                                onNoAnswerClick={handleNoAnswerClick}
                              />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Additional Messages - Topic selections */}
                      {additionalMessages.map((message, index) => (
                        <div key={`msg-${index}`}>
                          {message.type === 'user' ? (
                            /* User Message Bubble */
                            <div className="flex gap-3 items-start justify-end">
                              <div 
                                className="bg-[#0B5394] text-white rounded-[20px] rounded-tl-[4px] px-5 py-3 inline-block border border-[#073763]"
                                style={{ maxWidth: 'calc(100% - 48px - 12px)' }}
                                dir="rtl"
                              >
                                <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 500 }}>
                                  {message.text}
                                </p>
                              </div>
                            </div>
                          ) : message.type === 'contact' ? (
                            /* Contact Response Bubble */
                            <div className="flex gap-3 items-start">
                              <div className="hidden md:flex shrink-0 rounded-[8px] w-[48px] h-[48px] overflow-hidden items-center justify-center">
                                <div className="w-[40px] h-[40px]">
                                  <Frame17 />
                                </div>
                              </div>
                              
                              {message.loading ? (
                                <div className="flex-1 bg-[#f1f5fb] rounded-tl-[8px] rounded-tr-[4px] rounded-bl-[8px] rounded-br-[8px] p-5">
                                  <div className="text-right" dir="rtl">
                                    {loadingStep === 1 && (
                                      <TextShimmer duration={2}>
                                        {loadingSteps[0]}
                                      </TextShimmer>
                                    )}
                                    {loadingStep === 2 && (
                                      <TextShimmer duration={2}>
                                        {loadingSteps[1]}
                                      </TextShimmer>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <div className="flex-1 bg-[#f1f5fb] rounded-tl-[8px] rounded-tr-[4px] rounded-bl-[8px] rounded-br-[8px] p-5">
                                  <div className="text-right space-y-4" dir="rtl">
                                    <p 
                                      className="text-[#073763]"
                                      style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
                                    >
                                      {message.message}
                                    </p>
                                    
                                    <a
                                      href={message.contactUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block bg-white rounded-[8px] p-3 border border-[#E0E0E0] hover:bg-[#F0F7FF] transition-colors"
                                    >
                                      <div className="flex items-start gap-2">
                                        <span className="text-[16px]">📝</span>
                                        <div className="flex-1">
                                          <p 
                                            className="text-[#073763] mb-1"
                                            style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 500 }}
                                          >
                                            {message.contactTitle}
                                          </p>
                                          <p 
                                            className="text-[#6B7280] break-all"
                                            style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 400 }}
                                          >
                                            {message.contactUrl}
                                          </p>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : message.loading ? (
                            /* Loading State */
                            <div className="flex gap-3 items-start">
                              <div className="hidden md:flex shrink-0 rounded-[8px] w-[48px] h-[48px] overflow-hidden items-center justify-center">
                                <div className="w-[40px] h-[40px]">
                                  <Frame17 />
                                </div>
                              </div>
                              
                              <div className="flex-1 bg-[#f1f5fb] rounded-tl-[8px] rounded-tr-[4px] rounded-bl-[8px] rounded-br-[8px] p-5">
                                <div className="text-right" dir="rtl">
                                  {loadingStep === 1 && (
                                    <TextShimmer duration={2}>
                                      {loadingSteps[0]}
                                    </TextShimmer>
                                  )}
                                  {loadingStep === 2 && (
                                    <TextShimmer duration={2}>
                                      {loadingSteps[1]}
                                    </TextShimmer>
                                  )}
                                  {loadingStep === 3 && (
                                    <TextShimmer duration={2}>
                                      {loadingSteps[2]}
                                    </TextShimmer>
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* Topic Response Bubble */
                            <TopicResponseBubble
                              topicData={message.topicData}
                              topicId={message.topicId}
                              selectedTopicIds={selectedTopicIds}
                              onTopicSelect={handleTopicSelect}
                            />
                          )}
                        </div>
                      ))}

                      {/* Contact Bubble - Separate bubble that appears when clicking "לא מצאתי תשובה" */}
                      {showContactBubble && !isLoading && currentResponse && !currentResponse.helpResponse && (
                        <div className="flex gap-3 items-start animate-fadeInUp" ref={contactBubbleRef}>
                          {/* Spacer to align with other bubbles - Hidden on mobile */}
                          <div className="hidden md:block shrink-0 w-[48px]" />
                          
                          <div 
                            className="flex-1 bg-[#f1f5fb] rounded-tl-[8px] rounded-tr-[4px] rounded-bl-[8px] rounded-br-[8px] p-5"
                          >
                            <div className="text-right space-y-4" dir="rtl">
                              {/* Contact Method 1 */}
                              <div className="space-y-2">
                                <p 
                                  className="text-[#073763]"
                                  style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 600 }}
                                >
                                  הגשת פנייה מקוונת:
                                </p>
                                <a
                                  href="https://govforms.gov.il/mw/forms/ContactUs@moch.gov.il?subjectLock=8888&subSubjectLock=88888"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block bg-white rounded-[8px] p-3 border border-[#E0E0E0] hover:bg-[#F0F7FF] transition-colors"
                                >
                                  <div className="flex items-start gap-2">
                                    <span className="text-[16px]">📝</span>
                                    <div className="flex-1">
                                      <p 
                                        className="text-[#073763] mb-1"
                                        style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 500 }}
                                      >
                                        טופס פניות הציבור
                                      </p>
                                      <p 
                                        className="text-[#6B7280] break-all"
                                        style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 400 }}
                                      >
                                        https://govforms.gov.il/mw/forms/ContactUs@moch.gov.il?subjectLock=8888&subSubjectLock=88888
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>

                              {/* Contact Method 2 */}
                              <div className="space-y-2">
                                <p 
                                  className="text-[#073763]"
                                  style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 600 }}
                                >
                                  📞 דרכי יצירת קשר נוספות:
                                </p>
                                <a
                                  href="https://www.gov.il/apps/moch/viewlist/list/chavarot-harshama-siyua"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block bg-white rounded-[8px] p-3 border border-[#E0E0E0] hover:bg-[#F0F7FF] transition-colors"
                                >
                                  <div className="flex items-start gap-2">
                                    <span className="text-[16px]">📞</span>
                                    <div className="flex-1">
                                      <p 
                                        className="text-[#073763] mb-1"
                                        style={{ fontSize: '15px', lineHeight: '22px', fontWeight: 500 }}
                                      >
                                        רשימת חברות ההרשמה וסיוע טלפוני
                                      </p>
                                      <p 
                                        className="text-[#6B7280] break-all"
                                        style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 400 }}
                                      >
                                        https://www.gov.il/apps/moch/viewlist/list/chavarot-harshama-siyua
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-[#E5E7EB]" />

                {/* Fixed Bottom Section - Suggestions + Input */}
                <div className="p-4 md:p-6">
                  {/* FAQ Suggestion Buttons - Only show when no message submitted */}
                  {!hasSubmitted && (
                    <div className="flex md:flex-wrap gap-2 mb-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0">
                      <button
                        onClick={() => setInputValue("бирור תנאי זכאות למחיר מטרה")}
                        className="bg-white border border-[#E0E0E0] rounded-full px-[17px] py-[11px] hover:bg-[#F1F5FB] hover:border-[#90CAF9] focus:outline-none active:ring-2 active:ring-[#0B5394] active:ring-offset-2 transition-all flex items-center justify-center gap-2 flex-shrink-0"
                        style={{ fontFamily: "'Rubik', sans-serif" }}
                      >
                        <span 
                          className="text-[#132439] text-center font-medium whitespace-nowrap"
                          style={{ fontSize: '14px', lineHeight: '1' }}
                        >
                          בירור תנאי זכאות למחיר מטרה
                        </span>
                        <div className="shrink-0 w-4 h-4 flex items-center">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={svgPaths.p107a080} stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M14 14L11.1333 11.1333" stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => setInputValue("סיוע בשכר דירה")}
                        className="bg-white border border-[#E0E0E0] rounded-full px-[17px] py-[11px] hover:bg-[#F1F5FB] hover:border-[#90CAF9] focus:outline-none active:ring-2 active:ring-[#0B5394] active:ring-offset-2 transition-all flex items-center justify-center gap-2 flex-shrink-0"
                        style={{ fontFamily: "'Rubik', sans-serif" }}
                      >
                        <span 
                          className="text-[#132439] text-center font-medium whitespace-nowrap"
                          style={{ fontSize: '14px', lineHeight: '1' }}
                        >
                          סיוע בשכר דירה
                        </span>
                        <div className="shrink-0 w-4 h-4 flex items-center">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={svgPaths.p107a080} stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M14 14L11.1333 11.1333" stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                        </div>
                      </button>

                      <button
                        onClick={() => setInputValue("התחדשות עירונית")}
                        className="bg-white border border-[#E0E0E0] rounded-full px-[17px] py-[11px] hover:bg-[#F1F5FB] hover:border-[#90CAF9] focus:outline-none active:ring-2 active:ring-[#0B5394] active:ring-offset-2 transition-all flex items-center justify-center gap-2 flex-shrink-0"
                        style={{ fontFamily: "'Rubik', sans-serif" }}
                      >
                        <span 
                          className="text-[#132439] text-center font-medium whitespace-nowrap"
                          style={{ fontSize: '14px', lineHeight: '1' }}
                        >
                          התחדשות עירונית
                        </span>
                        <div className="shrink-0 w-4 h-4 flex items-center">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={svgPaths.p107a080} stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M14 14L11.1333 11.1333" stroke="#4A4A4A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  )}

                  {/* Input Field Container */}
                  <div className="relative">
                    {(!hasSubmitted || currentResponse?.helpResponse || isLoading) ? (
                      <div className="relative">
                        {/* Form Container - Figma Style */}
                        <div 
                          className="bg-white rounded-[8px] relative"
                          style={{ 
                            minHeight: '58px',
                            boxShadow: '0px 2px 12px -2px rgba(0,0,0,0.08)'
                          }}
                        >
                          {/* AI Icon - Right Side - REMOVED */}

                          {/* Textarea Area */}
                          <textarea
                            ref={textareaRef}
                            value={inputValue}
                            onChange={(e) => {
                              setInputValue(e.target.value)
                              adjustTextareaHeight()
                            }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder={isLoading ? "מעבד את הפנייה..." : "אני פונה בנושא..."}
                            disabled={isLoading}
                            className="w-full bg-transparent outline-none text-right text-[#073763] resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                            style={{ 
                              fontSize: '15px', 
                              lineHeight: '24px',
                              fontWeight: 400,
                              fontFamily: "'Rubik', sans-serif",
                              paddingRight: '20px',
                              paddingLeft: '56px',
                              paddingTop: '17px',
                              paddingBottom: '17px',
                              minHeight: '58px',
                              maxHeight: '150px',
                              height: '58px',
                              overflowY: 'auto'
                            }}
                            dir="rtl"
                            rows={1}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault()
                                handleSubmit()
                              }
                            }}
                          />
                          
                          {/* Send Button - Responsive width */}
                          <button
                            onClick={handleSubmit}
                            disabled={!inputValue.trim() || isLoading}
                            className={`absolute left-2 rounded-[8px] top-[6px] transition-colors flex flex-row-reverse items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-[46px] md:w-[118px] ${
                              inputValue.trim() && !isLoading
                                ? 'bg-[#0068F5] hover:bg-[#0056D6]' 
                                : 'bg-[#eef2f6] hover:bg-[#dde5ed]'
                            }`}
                            style={{ 
                              height: '46px',
                              fontFamily: "'Rubik', sans-serif"
                            }}
                            aria-label="שלח"
                          >
                            {isLoading ? (
                              <div className="w-5 h-5 border-2 border-[#4A4A4A] border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <>
                                <Send 
                                  className={`w-5 h-5 scale-x-[-1] ${inputValue.trim() ? 'text-white' : 'text-[#4A4A4A]'}`}
                                  strokeWidth={2.5}
                                />
                                <span 
                                  className={`hidden md:inline ${inputValue.trim() ? 'text-white' : 'text-[#4A4A4A]'}`}
                                  style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 500 }}
                                >
                                  שליחה
                                </span>
                              </>
                            )}
                          </button>

                          {/* Border */}
                          <div 
                            aria-hidden="true" 
                            className="absolute border border-[#E0E0E0] border-solid inset-0 pointer-events-none rounded-[8px]" 
                          />
                        </div>
                      </div>
                    ) : (
                      /* New Chat Button with dividers - Only show when NOT loading */
                      <div className="flex items-center justify-center gap-3 w-full">
                        {/* Left divider */}
                        <div className="flex-1 border-t border-[#E0E0E0]" />
                        
                        {/* Compact New Chat Button */}
                        <button
                          onClick={handleNewChat}
                          className="bg-white border-2 border-[#0B5394] text-[#0B5394] hover:bg-[#F0F7FF] rounded-full px-5 py-2.5 transition-colors flex items-center justify-center gap-2 flex-shrink-0"
                          style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 500 }}
                        >
                          <div className="w-[18px] h-[18px]" style={{ color: '#0B5394' }}>
                            <Frame />
                          </div>
                          שיחה חדשה
                        </button>
                        
                        {/* Right divider */}
                        <div className="flex-1 border-t border-[#E0E0E0]" />
                      </div>
                    )}
                  </div>

                  {/* Disclaimer Divider */}
                  <div className="border-t border-[#E5E7EB] mt-4 mb-3" />

                  {/* AI Disclaimer - Small footer text */}
                  <p 
                    className="text-[#6B7280] text-right px-2"
                    style={{ fontSize: '14px', lineHeight: '16px', fontWeight: 400 }}
                  >
                    חשוב לדעת: התשובות מבוססות על בינה מלאכותית  ועלולות לכלול אי-דיוקים. במקרה של סתירה או אי התאמה בין המידע שניתן על ידי העוזר לבין הוראות הדין הרלוונטיות, יגברו הוראות הדין.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Contact Information Section - Outside fixed height container */}
        {/* REMOVED - Contact info box */}
      </div>
    </>
  )
}