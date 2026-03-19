"use client"

import { useState } from "react"
import { PromptInput, PromptInputTextarea } from "./ui/prompt-input"
import { Send, ExternalLink, RotateCcw, ChevronDown, Search } from "lucide-react"
import { TextShimmer } from "./ui/text-shimmer"
import { ColorOrb } from "./ui/color-orb"
import svgPaths from "../imports/svg-edzn5fl6q1"

type Message = {
  role: 'user' | 'assistant'
  content: string
  options?: { label: string; value: string }[]
  linkPreview?: {
    title: string
    url: string
  }
  relatedTopics?: { label: string; query: string }[]
}

export function AIAssistant() {
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTopicsExpanded, setIsTopicsExpanded] = useState(false)
  const [expandedRelatedTopics, setExpandedRelatedTopics] = useState<Set<number>>(new Set())

  const toggleRelatedTopics = (index: number) => {
    setExpandedRelatedTopics(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const handleSubmit = () => {
    if (!inputValue.trim()) return
    
    const userMessage = inputValue.trim()
    setIsLoading(true)
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setInputValue("")
    
    // Simulate AI response
    setTimeout(() => {
      // Check if message is about public housing and leaking roof
      if (userMessage.includes("דיור ציבורי") && (userMessage.includes("דולף") || userMessage.includes("גג"))) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'האם פנית לחברה המטפלת בדירה שלך ("חברה מאכלסת")?',
          options: [
            { label: 'כן, פניתי', value: 'yes' },
            { label: 'לא', value: 'no' }
          ],
          relatedTopics: [
            { label: 'דירה בהנחה – שאלות כלליות על התכנית', query: 'דירה בהנחה - שאלות כלליות' },
            { label: 'דירה בהנחה – הגשת בקשה לזכאות', query: 'דירה בהנחה - בקשה לזכאות' }
          ]
        }])
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'קיבלתי את פנייתך. אנחנו בוחנים את השאלה ונחזור אליך בהקדם.',
          relatedTopics: [
            { label: 'דירה בהנחה – שאלות כלליות על התכנית', query: 'דירה בהנחה - שאלות כלליות' },
            { label: 'דירה בהנחה – הגשת בקשה לזכאות', query: 'דירה בהנחה - בקשה לזכאות' }
          ]
        }])
        console.log('Added message with relatedTopics')
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleOptionClick = (option: string) => {
    setMessages(prev => [...prev, {
      role: 'user',
      content: option === 'yes' ? 'כן, פניתי' : 'לא'
    }])
    
    setTimeout(() => {
      if (option === 'yes') {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'מעולה. אני ממליץ לפנות למחלקת תחזוקה של החברה המאכלסת ולבקש טיפול דחוף. אם הבעיה לא נפתרת, ניתן לפנות גם למשרד הבינוי והשיכון.',
          relatedTopics: [
            { label: 'דירה בהנחה – שאלות כלליות על התכנית', query: 'דירה בהנחה - שאלות כלליות' },
            { label: 'דירה בהנחה – הגשת בקשה לזכאות', query: 'דירה בהנחה - בקשה לזכאות' }
          ]
        }])
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'הגורם שאחראי על הטיפול בדירתך הוא החברה המאכלסת. ליצירת קשר עם החברה המאכלסת.',
          linkPreview: {
            title: 'המדריך לקבלת סיוע בדיורציבורי',
            url: 'https://www.gov.il/he/pages/public_housing_guide_step_by_step'
          },
          relatedTopics: [
            { label: 'דירה בהנחה – שאלות כלליות על התכנית', query: 'דירה בהנחה - שאלות כלליות' },
            { label: 'דירה בהנחה – הגשת בקשה לזכאות', query: 'דירה בהנחה - בקשה לזכאות' }
          ]
        }])
      }
    }, 800)
  }

  const handleRelatedTopicClick = (query: string) => {
    setInputValue(query)
  }

  const handleNewChat = () => {
    setMessages([])
    setInputValue("")
  }

  const renderMessageContent = (content: string) => {
    const linkText = "ליצירת קשר עם החברה המאכלסת"
    const linkIndex = content.indexOf(linkText)
    
    if (linkIndex === -1) {
      return <span>{content}</span>
    }
    
    return (
      <span>
        {content.substring(0, linkIndex)}
        <a 
          href="#" 
          className="text-[#0B5394] underline hover:text-[#073763] inline-flex items-center gap-1"
          onClick={(e) => {
            e.preventDefault()
            window.open('https://www.gov.il/he/service/contact_housing_company', '_blank')
          }}
        >
          {linkText}
          <ExternalLink className="w-3 h-3 inline" />
        </a>
        {content.substring(linkIndex + linkText.length)}
      </span>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 md:px-8" dir="rtl">
      {/* White Container - Centered */}
      <div className="w-full max-w-[1200px] bg-white rounded-3xl shadow-lg p-12 border border-[#E0E0E0]">
        {/* Title - Now Inside */}
        <h1 className="bg-gradient-to-br from-[#0B5394] to-[#073763] bg-clip-text text-transparent mb-8 font-['Rubik',_sans-serif] text-5xl font-bold text-center">
          צרו קשר עם משרד הבינוי והשיכון
        </h1>
        
        {/* AI Avatar with Speech Bubble */}
        <div className="flex items-start justify-start gap-4 my-[40px] mx-[0px]" dir="rtl">
          {/* AI Avatar Circle */}
          <ColorOrb 
            dimension="48px"
            className="shrink-0"
            spinDuration={15}
            tones={{
              base: "#073763",
              accent1: "#0B5394",
              accent2: "#094580",
              accent3: "#06325A"
            }}
          >
            {/* Stars Icon */}
            <div className="relative w-5 h-5">
              <svg className="absolute inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
                <path d={svgPaths.p1e2cb780} fill="white" />
              </svg>
              <svg className="absolute" style={{top: '9.62%', right: '4%', width: '26%', height: '25%'}} fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
                <path d={svgPaths.pdb485c0} fill="white" />
              </svg>
            </div>
          </ColorOrb>
          
          {/* Speech Bubble */}
          <div className="bg-white border border-[#E0E0E0] rounded-2xl px-6 py-4 shadow-sm max-w-md relative" dir="rtl">
            {/* Arrow pointing to avatar */}
            <div className="absolute -right-2 top-6 w-4 h-4 bg-white border-l border-b border-[#E0E0E0] rotate-45" />
            
            <p className="text-[#073763] font-['Rubik',_sans-serif] mb-2 text-right text-[17px]">
              נעים מאוד, אני עוזר ה-AI של משרד הבינוי והשיכון
            </p>
            <p className="text-[#4A4A4A] font-['Rubik',_sans-serif] text-right text-[17px]">
              תארו את נושא הפנייה ואדאג להפנות אתכם למקום הנכון
            </p>
          </div>
        </div>
        
        {/* New Chat Button - Shows only when there are messages */}
        {messages.length > 0 && (
          <div className="max-w-3xl mx-auto mb-6 flex justify-center">
            <button
              onClick={handleNewChat}
              className="px-6 py-2.5 rounded-full bg-white border-2 border-[#0B5394] text-[#0B5394] hover:bg-[#0B5394] hover:text-white transition-all font-['Rubik',_sans-serif] flex items-center gap-2 shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>התחל צ'אט חדש</span>
            </button>
          </div>
        )}
        
        {/* Conversation Messages */}
        {messages.length > 0 && (
          <div className="max-w-3xl mx-auto mb-6 space-y-5">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${message.role === 'user' ? 'bg-[#0B5394] text-white' : 'bg-[#F0F7FF] text-[#073763]'} rounded-2xl px-6 py-4`}>
                  <p className="font-['Rubik',_sans-serif] text-right text-[16px]">
                    {message.role === 'assistant' ? renderMessageContent(message.content) : message.content}
                  </p>
                  
                  {/* Link Preview for assistant message */}
                  {message.role === 'assistant' && message.linkPreview && (
                    <div className="mt-4">
                      <p className="text-[#4A4A4A] font-['Rubik',_sans-serif] text-right text-[14px] mb-3">
                        למידע נוסף:
                      </p>
                      <a 
                        href={message.linkPreview.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white border border-[#0B5394] rounded-xl p-4 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-3" dir="rtl">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#0B5394] to-[#073763] rounded-lg flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="flex-1 text-right">
                            <p className="font-['Rubik',_sans-serif] text-[#073763] mb-1">{message.linkPreview.title}</p>
                            <p className="font-['Rubik',_sans-serif] text-[#0B5394] text-[13px]">gov.il</p>
                          </div>
                          <svg className="w-5 h-5 text-[#0B5394] rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  )}
                  
                  {/* Options for assistant message */}
                  {message.role === 'assistant' && message.options && (
                    <div className="mt-4 flex gap-3 justify-end">
                      {message.options.map((option, optIndex) => (
                        <button
                          key={optIndex}
                          onClick={() => handleOptionClick(option.value)}
                          className="px-5 py-2.5 rounded-xl bg-white border-2 border-[#0B5394] text-[#073763] hover:bg-[#0B5394] hover:text-white transition-all font-['Rubik',_sans-serif]"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Related Topics for assistant message */}
                  {message.role === 'assistant' && message.relatedTopics && message.relatedTopics.length > 0 && (
                    <div className="mt-4">
                      <button
                        onClick={() => {
                          console.log('Toggling related topics for index:', index)
                          toggleRelatedTopics(index)
                        }}
                        className="px-5 py-2.5 rounded-xl bg-white border-2 border-[#0B5394] text-[#073763] hover:bg-[#0B5394] hover:text-white transition-all font-['Rubik',_sans-serif] flex items-center gap-2"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedRelatedTopics.has(index) ? 'rotate-180' : ''}`} />
                        <span>נושאים קשורים</span>
                      </button>
                      
                      {expandedRelatedTopics.has(index) && (
                        <div className="mt-3 space-y-2">
                          {message.relatedTopics.map((topic, topicIndex) => (
                            <button
                              key={topicIndex}
                              onClick={() => handleRelatedTopicClick(topic.query)}
                              className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#E0E0E0] text-[#073763] hover:bg-[#0B5394] hover:text-white hover:border-[#0B5394] transition-all font-['Rubik',_sans-serif] flex items-center gap-2 text-right"
                            >
                              <span>💡</span>
                              <span>{topic.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Debug Info */}
                  {message.role === 'assistant' && console.log('Message has relatedTopics:', message.relatedTopics)}
                </div>
              </div>
            ))}
            
            {/* Loading State */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] bg-[#F0F7FF] text-[#073763] rounded-2xl px-6 py-4">
                  <div className="flex items-center gap-3" dir="rtl">
                    <Search className="w-5 h-5 text-[#0B5394] animate-pulse" />
                    <TextShimmer 
                      duration={1.5}
                      className="font-['Rubik',_sans-serif] text-[16px] [--base-color:#0B5394] [--base-gradient-color:#E0E0E0]"
                    >
                      מאתר מקורות רלוונטיים...
                    </TextShimmer>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Input Container */}
        <div className="max-w-3xl mx-auto bg-[#F0F7FF] rounded-2xl p-6 flex items-center gap-3 border border-[#E0E0E0]">
          {/* Text Input */}
          <div className="flex-1">
            <PromptInput
              value={inputValue}
              onValueChange={setInputValue}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              className="bg-transparent border-none p-0 shadow-none"
            >
              <PromptInputTextarea
                placeholder="אני פונה בנושא..."
                className="font-['Rubik',_sans-serif] text-[#073763] placeholder:text-[#4A4A4A] min-h-[40px] text-[18px] md:text-[18px]"
                dir="rtl"
              />
            </PromptInput>
          </div>
          
          {/* Generate Button */}
          <button
            onClick={handleSubmit}
            disabled={!inputValue.trim() || isLoading}
            className="px-8 py-3 rounded-full bg-gradient-to-l from-[#0B5394] to-[#073763] hover:from-[#094580] hover:to-[#06325A] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all shadow-lg whitespace-nowrap"
          >
            <Send className="w-5 h-5 text-white rotate-180" />
          </button>
        </div>
        
        {/* Popular Topics Chips */}
        <div className="max-w-3xl mx-auto mt-6" dir="rtl">
          {/* Chips removed */}

          {/* Second Row - Conditional */}
          {isTopicsExpanded && (
            <div className="grid grid-cols-3 gap-3 mt-3">
              <button
                onClick={() => setInputValue("זכאות לדירה בשכירות")}
                className="px-4 py-3 rounded-2xl bg-[#F0F7FF] border border-[#E0E0E0] text-[#073763] hover:bg-[#0B5394] hover:text-white hover:border-[#0B5394] transition-all font-['Rubik',_sans-serif] flex items-center justify-center gap-2"
              >
                <span>🔑</span>
                <span>זכאות לדירה בשכירות</span>
              </button>
              
              <button
                onClick={() => setInputValue("הרשמה לדיורציבורי")}
                className="px-4 py-3 rounded-2xl bg-[#F0F7FF] border border-[#E0E0E0] text-[#073763] hover:bg-[#0B5394] hover:text-white hover:border-[#0B5394] transition-all font-['Rubik',_sans-serif] flex items-center justify-center gap-2"
              >
                <span>📝</span>
                <span>הרשמה לדיורציבורי</span>
              </button>
              
              <button
                onClick={() => setInputValue("אישור חסר דירה")}
                className="px-4 py-3 rounded-2xl bg-[#F0F7FF] border border-[#E0E0E0] text-[#073763] hover:bg-[#0B5394] hover:text-white hover:border-[#0B5394] transition-all font-['Rubik',_sans-serif] flex items-center justify-center gap-2"
              >
                <span>📄</span>
                <span>אישור חסר דירה</span>
              </button>
            </div>
          )}

          {/* Expand/Collapse Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsTopicsExpanded(!isTopicsExpanded)}
              className="px-6 py-2 rounded-full bg-white border border-[#E0E0E0] text-[#073763] hover:bg-[#F0F7FF] transition-all font-['Rubik',_sans-serif] flex items-center gap-2"
            >

              <ChevronDown className={`w-4 h-4 transition-transform ${isTopicsExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}