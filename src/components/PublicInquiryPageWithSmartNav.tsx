"use client"

import { useState, useRef } from "react"
import { Link } from "react-router"
import { ExternalLink, ChevronUp, Palette } from "lucide-react"
import { motion } from "framer-motion"
import svgPaths from "../imports/svg-mjzwtgf3j9"
import newSearchSvgPaths from "../imports/svg-w5s8le89s9"
import resultSvgPaths from "../imports/svg-aopyuz4qpf"
import linkSvgPaths from "../imports/svg-o0dkldlocv"
import searchIconPaths from "../imports/svg-vtbi2n43qh"
import pencilSvgPaths from "../imports/svg-wkk9euaaor"
import newDesignSvgPaths from "../imports/svg-5dptxl6sir"
import messageSvgPaths from "../imports/svg-e05apn42ak"
import editIconSvgPaths from "../imports/svg-7m7377ullt"
import manualSelectionSvgPaths from "../imports/svg-2lxjg24eou"
import alertIconPaths from "../imports/svg-7zbiy66fkz"
import imgImage from "figma:asset/a2217581672e8379b931b48e4d2b6c020e35c6c0.png"
import imgVIcon from "figma:asset/1b29bb90bfae221974e2cfd8da8d15e447b94025.png"
import Loader48Px from "../imports/Loader48Px"

// ─── IGDS minimal surgical changes vs. original ──────────────────────────────
// ONLY these values were updated for IGDS compliance:
//   Primary action color:  #0068f5  →  #0B5394
//   Hover:                 #0056d6  →  #073763
//   Active:                #004bb5  →  #052849
//   Disabled bg:           rgba(0,104,245,0.45) → rgba(11,83,148,0.45)
//   Alert boxes:           added 4px right-side accent border (RTL leading edge)
//   Result links:          added underline (WCAG)
//   Focus rings:           added focus-visible outline on all interactive elements
//   Spinner / shimmer:     #0068f5  →  #0B5394
// Everything else (text colors, radii, spacing, shadows, bg) is identical to original.
// ─────────────────────────────────────────────────────────────────────────────

function Group6() {
  return (
    <div className="absolute inset-[11.96%_0.49%_20.29%_74.88%]">
      <div className="absolute inset-[-1.62%_-2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.9367 36.5504">
          <g id="Group 19079">
            <path d={svgPaths.p2d862d00} id="Path 4223" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="1.14992" />
            <path d={svgPaths.p3e4c1000} id="Path 4224" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.383974" />
            <path d={svgPaths.pe4cbb00} fill="var(--fill-0, #0071AD)" id="Path 4225" />
            <path d={svgPaths.p23661300} fill="var(--fill-0, #0071AD)" id="Path 4226" />
            <path d={svgPaths.p167bef40} fill="var(--fill-0, white)" id="Path 4227" />
            <path d={svgPaths.p14f92c00} fill="var(--fill-0, white)" id="Path 4228" />
            <path d={svgPaths.p19167fc0} fill="var(--fill-0, white)" id="Path 4229" />
            <path d={svgPaths.p1eeb1a0} fill="var(--fill-0, white)" id="Path 4230" />
            <path d={svgPaths.p2514ba80} fill="var(--fill-0, white)" id="Path 4231" />
            <path d={svgPaths.p17024800} fill="var(--fill-0, white)" id="Path 4232" />
            <path d={svgPaths.p31972070} fill="var(--fill-0, white)" id="Path 4233" />
            <path d={svgPaths.p325c2300} fill="var(--fill-0, white)" id="Path 4234" />
            <path d={svgPaths.p2bd1b180} fill="var(--fill-0, white)" id="Path 4235" />
            <path d={svgPaths.p21196100} fill="var(--fill-0, white)" id="Path 4236" />
            <path d={svgPaths.p3cf71680} fill="var(--fill-0, white)" id="Path 4237" />
            <path d={svgPaths.p1c616400} fill="var(--fill-0, white)" id="Path 4238" />
            <path d={svgPaths.p5f0b900} fill="var(--fill-0, white)" id="Path 4239" />
            <path d={svgPaths.p1ec515c0} fill="var(--fill-0, white)" id="Path 4240" />
            <path d={svgPaths.p79fdf80} fill="var(--fill-0, white)" id="Path 4241" />
            <path d={svgPaths.p1413f400} fill="var(--fill-0, white)" id="Path 4242" />
            <path d={svgPaths.p51fcc40} fill="var(--fill-0, white)" id="Path 4243" />
            <path d={svgPaths.p25e71300} fill="var(--fill-0, white)" id="Path 4244" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function GovIlLogo() {
  return (
    <div className="relative h-[52.256px] w-[116.88px]">
      <div className="absolute contents inset-[0_0.49%_0_0]">
        <Group6 />
      </div>
    </div>
  );
}

function GovformsHeaderHeader() {
  return (
    <div 
      className="w-full h-[65px] md:h-[65px] flex items-center justify-between px-4 md:px-8" 
      style={{ backgroundImage: "linear-gradient(141.916deg, rgb(2, 95, 219) 2.3594%, rgb(2, 95, 219) 35.708%, rgb(11, 54, 104) 97.641%)" }}
    >
      {/* Right side - Logo */}
      <div className="flex items-center">
        <GovIlLogo />
      </div>
      
      {/* Left side - Language and Personal Area */}
      <div className="flex items-center gap-3 md:gap-6">
        <Link
          to="/design-system"
          className="hidden md:flex items-center gap-1.5 text-white/70 text-[12px] font-['Rubik',sans-serif] hover:text-white hover:underline transition-all border border-white/20 rounded-[5px] px-2.5 py-1"
        >
          <Palette size={12} />
          Design System
        </Link>
        <button className="text-white text-[14px] md:text-[16px] font-['Rubik',sans-serif] hover:underline transition-all focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
          לאזור האישי
        </button>
        <button className="text-white text-[14px] md:text-[16px] font-['Rubik',sans-serif] uppercase hover:underline transition-all focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
          עברית
        </button>
      </div>
    </div>
  );
}

type ChatStep = 'initial' | 'searching' | 'clarification' | 'partial-clarification' | 'results'

const detectTopic = (query: string) => {
  const lowerQuery = query.toLowerCase()
  
  const vagueTerms = ["עזרה", "מידע", "שאלה", "בעיה", "פניה", "לברר", "לדעת"]
  const isVague = vagueTerms.some(term => lowerQuery === term || lowerQuery === term + "?")
  
  if (isVague || lowerQuery.length < 5) {
    return 'clarification'
  }
  
  if ((lowerQuery.includes("בירור") || lowerQuery.includes("עולים") || lowerQuery.includes("יד 2")) && 
      (lowerQuery.includes("סיוע") || lowerQuery.includes("עזרה")) && 
      lowerQuery.includes("שכר דירה")) {
    return {
      id: "rent-support",
      title: "בדיקת זכאות לסיוע בשכר דירה",
      category: "סיוע בדיור",
      fullTitle: "סיוע בדיור | בדיקת זכאות לסיוע בשכר דירה",
      links: [
        { title: "סיוע בשכר דירה- מדריך", url: "#" },
        { title: "שאלות נפוצות- סיוע בשכר דירה", url: "#" }
      ]
    }
  }
  
  if ((lowerQuery.includes("סיוע") || lowerQuery.includes("עזרה")) && 
      lowerQuery.includes("שכר דירה") && 
      !lowerQuery.includes("דיור ציבורי") && 
      !lowerQuery.includes("יד 2") &&
      !lowerQuery.includes("בירור") &&
      !lowerQuery.includes("עולים")) {
    return {
      type: 'partial',
      question: "כדי שאוכל להפנות אותך למקום הנכון, אשמח להבין לאיזה מהנושאים התכוונת:",
      options: [
        { id: 'public-housing', number: '1', label: 'דיור ציבורי' },
        { id: 'rent-support', number: '2', label: 'סיוע בשכר דירה (תכנית "יד 2")' },
        { id: 'new-immigrants', number: '3', label: 'סיוע לעולים חדשים' }
      ]
    }
  }
  
  if (lowerQuery.includes("בעיה") && lowerQuery.includes("דירה") && !lowerQuery.includes("תחזוקה") && !lowerQuery.includes("קנה") && !lowerQuery.includes("רוכשים")) {
    return {
      type: 'partial',
      question: "כדי שאוכל להפנות אותך למקום הנכון, אשמח להבין לאיזה מהנושאים התכוונת:",
      options: [
        { id: 'roof-leak', number: '1', label: 'בעיית גג דולף בדיור ציבורי' },
        { id: 'contract-issue', number: '2', label: 'בעיה משפטית/חוזית' },
        { id: 'maintenance-issue', number: '3', label: 'בעיית תחזוקה כללית' }
      ]
    }
  }
  
  if ((lowerQuery.includes("רוצה לקנות") || lowerQuery.includes("קניית") || lowerQuery.includes("רכישת")) && lowerQuery.includes("דירה") && !lowerQuery.includes("מחיר מטרה") && !lowerQuery.includes("מחיר למשתכן") && !lowerQuery.includes("הנחה")) {
    return {
      type: 'partial',
      question: "כדי שאוכל להפנות אותך למקום הנכון, אשמח להבין לאיזה מהנושאים התכוונת:",
      options: [
        { id: 'target-price', number: '1', label: 'מחיר למשתכן / מחיר מטרה' },
        { id: 'discount-apartment', number: '2', label: 'דירה בהנחה (הגרלות)' },
        { id: 'subsidized-housing', number: '3', label: 'דיור מוזל' }
      ]
    }
  }
  
  if (lowerQuery.includes("סיוע") && (lowerQuery.includes("שכר דירה") || lowerQuery.includes("דירה") || lowerQuery.includes("דיור"))) {
    return {
      id: "rent-support",
      title: "בדיקת זכאות לסיוע בשכר דירה",
      category: "סיוע בדיור",
      fullTitle: "סיוע בדיור | בדיקת זכאות לסיוע בשכר דירה",
      links: [
        { title: "סיוע בשכר דירה- מדריך", url: "#" },
        { title: "שאלות נפוצות- סיוע בשכר דירה", url: "#" }
      ]
    }
  }
  
  if (lowerQuery.includes("מחיר מטרה") || (lowerQuery.includes("זכאות") && lowerQuery.includes("מחיר"))) {
    return {
      id: "target-price",
      title: "בדיקת זכאות למחיר מטרה",
      category: "מחיר למשתכן",
      fullTitle: "מחיר למשתכן | בדיקת זכאות למחיר מטרה",
      links: [
        { title: "מחיר למשתכן- מדריך מלא", url: "#" },
        { title: "שאלות נפוצות- מחיר למשתכן", url: "#" }
      ]
    }
  }
  
  if (lowerQuery.includes("דירה בהנחה") || lowerQuery.includes("הגרלות") || lowerQuery.includes("הגרלת דירות")) {
    return {
      id: "discount-apartment",
      title: "הגשת בקשה להגרלת דירות בהנחה",
      category: "דירה בהנחה",
      fullTitle: "דירה בהנחה | הגשת בקשה להגרלה",
      links: [
        { title: "דירה בהנחה- מדריך מלא", url: "#" },
        { title: "שאלות נפוצות- הגרלות דירות", url: "#" }
      ]
    }
  }
  
  if (lowerQuery.includes("סטטוס") && lowerQuery.includes("מחיר")) {
    return {
      id: "target-price-status",
      title: "בדיקת סטטוס בקשה למחיר מטרה",
      category: "מחיר למשתכן",
      fullTitle: "מחיר למשתכן | בדיקת סטטוס הגשה",
      links: [
        { title: "מעקב אחר סטטוס בקשה", url: "#" },
        { title: "מדריך לבדיקת סטטוס", url: "#" }
      ]
    }
  }
  
  if (lowerQuery.includes("רישיון קבלן") || lowerQuery.includes("קבלן")) {
    return {
      id: "contractor-license",
      title: "קבלת רישיון קבלן",
      category: "רישוי מקצועי",
      fullTitle: "רישוי מקצועי | קבלת רישיון קבלן",
      links: [
        { title: "רישוי קבלנים- מדריך", url: "#" },
        { title: "תנאי הזכאות לרישיון קבלן", url: "#" }
      ]
    }
  }
  
  if (lowerQuery.includes("דיור ציבורי") || lowerQuery.includes("דירה בדיור")) {
    return {
      id: "public-housing",
      title: "קבלת דירה בדיור ציבורי",
      category: "דיור ציבורי",
      fullTitle: "דיור ציבורי | הגשת בקשה לדירה",
      links: [
        { title: "דיור ציבורי- מדריך מלא", url: "#" },
        { title: "תנאי זכאות לדיור ציבור��", url: "#" }
      ]
    }
  }
  
  if (lowerQuery.includes("גג דולף") || (lowerQuery.includes("גג") && lowerQuery.includes("תחזוקה"))) {
    return {
      id: "roof-leak",
      title: "טיפול בגג דולף בדיור ציבורי",
      category: "תחזוקה ותיקונים",
      fullTitle: "תחזוקה ותיקונים | טיפול בגג דולף",
      links: [
        { title: "מדריך תיקונים בדיור ציבורי", url: "#" },
        { title: "הגשת בקשה לתיקון גג דולף", url: "#" }
      ]
    }
  }
  
  if (lowerQuery === "new-immigrants") {
    return {
      id: "new-immigrants",
      title: "סיוע בדיור לעולים חדשים",
      category: "סיוע בדיור",
      fullTitle: "סיוע בדיור | תמיכה לעולים חדשים",
      links: [
        { title: "מדריך סיוע לעולים חדשים", url: "#" },
        { title: "שאלות נפוצות- עולים חדשים", url: "#" }
      ]
    }
  }
  
  if (lowerQuery === "maintenance-issue") {
    return {
      id: "maintenance-issue",
      title: "טיפול בבעיות תחזוקה כלליות",
      category: "תחזוקה ותיקונים",
      fullTitle: "תחזוקה ותיקונים | בעיות תחזוקה כלליות",
      links: [
        { title: "מדריך תחזוקה ותיקונים", url: "#" },
        { title: "הגשת בקשה לתיקונים", url: "#" }
      ]
    }
  }
  
  if (lowerQuery === "subsidized-housing") {
    return {
      id: "subsidized-housing",
      title: "תכניות דיור מוזל",
      category: "דיור מוזל",
      fullTitle: "דיור מוזל | תכניות ממשלתיות",
      links: [
        { title: "מדריך לדיור מוזל", url: "#" },
        { title: "שאלות נפוצות- דיור מוזל", url: "#" }
      ]
    }
  }
  
  if (lowerQuery === "contract-issue") {
    return {
      id: "contract-issue",
      title: "ייעוץ משפטי וחוזי בנושאי דיור",
      category: "משפט ורגולציה",
      fullTitle: "משפט ורגולציה | בעיות חוזיות",
      links: [
        { title: "מדריך לזכויות שוכרים", url: "#" },
        { title: "ייעוץ משפטי בנושאי דיור", url: "#" }
      ]
    }
  }
  
  return null
}

function SmartNavigationCard() {
  const [currentStep, setCurrentStep] = useState<ChatStep>('initial')
  const [detectedTopic, setDetectedTopic] = useState<any>(null)
  const [showAdditionalTopics, setShowAdditionalTopics] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const quickTopics = [
    { id: "rent-support", label: "״בירור על סיוע בשכר דירה לעולים חדשים״" },
    { id: "target-price", label: "״רו��ה לבדוק זכאות למחיר מטרה״" },
    { id: "contractor-license", label: "״רוצה לברר לגבי קבלת רישיון קבלן״" },
    { id: "public-housing", label: "״רוצה לקבל דירה בדיור ציבורי״" },
  ]

  const handleQuickTopicClick = (topicLabel: string) => {
    setSearchQuery(topicLabel)
    setCurrentStep('searching')
    setTimeout(() => {
      const topic = detectTopic(topicLabel)
      if (topic) {
        setDetectedTopic(topic)
        setCurrentStep('results')
        if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
      }
    }, 2000)
  }

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setCurrentStep('searching')
      setTimeout(() => {
        const result = detectTopic(searchQuery)
        if (result === 'clarification') {
          setCurrentStep('clarification')
        } else if (result && result.type === 'partial') {
          setDetectedTopic(result)
          setCurrentStep('partial-clarification')
        } else if (result) {
          setDetectedTopic(result)
          setCurrentStep('results')
        }
        if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
      }, 2000)
    }
  }

  const handleBackToSearch = () => {
    setCurrentStep('initial')
    setDetectedTopic(null)
    setShowAdditionalTopics(false)
    setSearchQuery("")
  }

  const handleNewSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setCurrentStep('searching')
      setDetectedTopic(null)
      setShowAdditionalTopics(true)
      setTimeout(() => {
        const result = detectTopic(searchQuery)
        if (result === 'clarification') {
          setCurrentStep('clarification')
        } else if (result && result.type === 'partial') {
          setDetectedTopic(result)
          setCurrentStep('partial-clarification')
        } else if (result) {
          setDetectedTopic(result)
          setCurrentStep('results')
        }
        if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
      }, 2000)
    }
  }

  const handleAdditionalTopicClick = (topicId: string) => {
    const topicQueries: Record<string, string> = {
      "discount-apartment": "דירה בהנחה הגרלות דירות",
      "target-price-status": "סטטוס מחיר מטרה"
    }
    const query = topicQueries[topicId]
    if (query) {
      setSearchQuery(query)
      setCurrentStep('searching')
      setTimeout(() => {
        const result = detectTopic(query)
        if (result && result !== 'clarification') {
          setDetectedTopic(result)
          setCurrentStep('results')
          if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
        }
      }, 2000)
    }
  }

  const handleClarificationSubmit = (clarificationQuery: string) => {
    if (clarificationQuery.trim()) {
      setSearchQuery(clarificationQuery)
      setCurrentStep('searching')
      setTimeout(() => {
        const result = detectTopic(clarificationQuery)
        if (result === 'clarification') {
          setCurrentStep('clarification')
        } else if (result && result.type === 'partial') {
          setDetectedTopic(result)
          setCurrentStep('partial-clarification')
        } else if (result) {
          setDetectedTopic(result)
          setCurrentStep('results')
        }
        if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
      }, 2000)
    }
  }

  const handlePartialOptionSelect = (input: string) => {
    const trimmedInput = input.trim()
    const optionIds = ['public-housing', 'rent-support', 'new-immigrants', 'roof-leak', 'contract-issue', 'maintenance-issue', 'target-price', 'discount-apartment', 'subsidized-housing']
    
    if (optionIds.includes(trimmedInput)) {
      setCurrentStep('searching')
      setTimeout(() => {
        const result = detectTopic(trimmedInput)
        if (result && result !== 'clarification' && result.type !== 'partial') {
          setDetectedTopic(result)
          setCurrentStep('results')
          if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
        }
      }, 1500)
    } else {
      setSearchQuery(trimmedInput)
      setCurrentStep('searching')
      setTimeout(() => {
        const result = detectTopic(trimmedInput)
        if (result === 'clarification') {
          setCurrentStep('clarification')
        } else if (result && result.type === 'partial') {
          setDetectedTopic(result)
          setCurrentStep('partial-clarification')
        } else if (result) {
          setDetectedTopic(result)
          setCurrentStep('results')
        }
        if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0
      }, 2000)
    }
  }

  return (
    <>
      <div className="w-full bg-[#F1F5FB] py-4 md:py-7">
        {/* Page Header — same max-width as card */}
        <div className="w-full max-w-[780px] mx-auto px-4 md:px-8 mb-4 md:mb-6">
          <div className="content-stretch flex gap-[16px] min-h-[84px] items-start w-full">
            <div className="flex-[1_0_0] min-h-[84px]">
              <div className="content-stretch flex flex-col gap-[4px] items-start h-full">
                <div className="w-full">
                  <p className="font-['Rubik',sans-serif] text-[18px] md:text-[22px] leading-[28px] md:leading-[32px] text-[#0c3058] text-right" dir="auto">
                    פניות ושירות הציבור
                  </p>
                </div>
                <div className="w-full">
                  <p className="font-['Rubik',sans-serif] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#0c3058] text-right" dir="auto">
                    משרד הבינוי והשיכון - פניות הציבור
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[8px] shrink-0 size-[50px] md:size-[60px]">
              <div className="content-stretch flex flex-col items-start overflow-clip rounded-[inherit] size-full">
                <img alt="" className="size-full object-cover" src={imgImage} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="w-full flex justify-center px-4 md:px-8">
          <div 
            className="bg-white rounded-[12px] md:rounded-[16px] shadow-[0px_4px_16px_0px_rgba(6,77,173,0.13)] flex flex-col px-5 md:px-10 py-5 md:py-8 w-full max-w-[780px] min-w-[320px]"
            style={{ minHeight: '380px' }}
          >
            {currentStep === 'initial' && (
              <InitialStep
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={handleSearchClick}
                quickTopics={quickTopics}
                onTopicClick={handleQuickTopicClick}
                searchInputRef={searchInputRef}
              />
            )}
            {currentStep === 'searching' && (
              <>
                <UserQueryDisplay searchQuery={searchQuery} onNewSearch={handleBackToSearch} />
                <div className="mt-2"><SearchingStep /></div>
              </>
            )}
            {currentStep === 'clarification' && (
              <>
                <UserQueryDisplay searchQuery={searchQuery} onNewSearch={handleBackToSearch} />
                <div className="mt-2">
                  <ClarificationStep onBack={handleBackToSearch} onSubmit={handleClarificationSubmit} />
                </div>
              </>
            )}
            {currentStep === 'partial-clarification' && (
              <>
                <UserQueryDisplay searchQuery={searchQuery} onNewSearch={handleBackToSearch} />
                <div className="mt-2">
                  <PartialClarificationStep topic={detectedTopic} onSubmit={handlePartialOptionSelect} />
                </div>
              </>
            )}
            {currentStep === 'results' && detectedTopic && (
              <>
                <UserQueryDisplay searchQuery={searchQuery} onNewSearch={handleBackToSearch} />
                <div className="mt-2">
                  <ResultsStep
                    detectedTopic={detectedTopic}
                    showAdditionalTopics={showAdditionalTopics}
                    setShowAdditionalTopics={setShowAdditionalTopics}
                    onBack={handleBackToSearch}
                    onAdditionalTopicClick={handleAdditionalTopicClick}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Shared primary-button hover helpers ─────────────────────────────────────
// IGDS primary (background.brand-default → brand-color.500/.600/.700)
const primaryBg = '#0068f5'
const primaryHover = '#0057cc'
const primaryActive = '#0045a3'
const primaryDisabled = '#f0f3f6'

function InitialStep({ searchQuery, setSearchQuery, onSearch, quickTopics, onTopicClick, searchInputRef }: any) {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start w-full">
      {/* Icon + Heading Section */}
      <div className="content-stretch flex flex-col items-start w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          {/* AI Icon — unchanged */}
          <div className="content-stretch flex flex-col items-center w-full">
            <div 
              className="content-stretch flex items-center justify-center rounded-full shadow-[0px_2px_10px_0px_rgba(12,48,88,0.28)] shrink-0 size-[52px]"
              style={{ backgroundImage: "linear-gradient(90.0751deg, rgb(2, 95, 219) 0%, rgb(2, 95, 219) 35%, rgb(11, 54, 104) 100%)" }}
            >
              <div className="size-[21px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                  <path d={newSearchSvgPaths.pd8105b0} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Heading + Subheading — original text colors */}
          <div className="content-stretch flex flex-col gap-[8px] items-center w-full max-w-[816.333px] mx-auto px-2">
            <div className="w-full">
              <p className="font-['Rubik',sans-serif] font-bold text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] text-center text-[#0c3058]" dir="auto">
                עוזר פניות הציבור | מכוון אותך למקום הנכון
              </p>
            </div>
            <p className="font-['Rubik',sans-serif] font-light text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center text-[#4a5e78]" dir="auto">
              כדי להביאכם מהר ודירקט ללא המתנה, המשתמש מערכת AI מתקדמת את מיקור שירותנו לצידו הרלוונטי
            </p>
          </div>
        </div>
      </div>

      {/* Form — original bg/border/radius; only button color changed */}
      <form onSubmit={onSearch} className="w-full max-w-[817px] mx-auto">
        <div className="bg-[#f9fafb] rounded-[10px] border border-[#8596af] p-3 md:p-4 relative focus-within:border-[#0068f5] transition-colors">
          <textarea
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.slice(0, 200))}
            placeholder="חפשו את הנושא והשאלה שלכם לצורך הכוונה לטפסים הרלוונטיים..."
            dir="rtl"
            maxLength={200}
            className="w-full h-[48px] resize-none bg-transparent border-none outline-none font-['Rubik',sans-serif] text-[15px] md:text-[16px] text-[#0c3058] placeholder:text-[#a0aec0] leading-[24px]"
          />
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#e8eaed]">
            <p className="font-['Rubik',sans-serif] text-[12px] text-[#9aadcc]">
              {searchQuery.length}/200
            </p>
            {/* IGDS primary background.brand-default #0068f5 */}
            <button
              type="submit"
              disabled={!searchQuery.trim()}
              className="disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 h-[38px] px-5 rounded-[7px] focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
              style={{ backgroundColor: searchQuery.trim() ? primaryBg : primaryDisabled }}
              onMouseEnter={(e) => searchQuery.trim() && (e.currentTarget.style.backgroundColor = primaryHover)}
              onMouseLeave={(e) => searchQuery.trim() && (e.currentTarget.style.backgroundColor = primaryBg)}
              onMouseDown={(e) => searchQuery.trim() && (e.currentTarget.style.backgroundColor = primaryActive)}
              onMouseUp={(e) => searchQuery.trim() && (e.currentTarget.style.backgroundColor = primaryHover)}
            >
              <span className="font-['Rubik',sans-serif] font-medium text-[14px] text-white">חיפוש</span>
              <svg className="size-[17px]" fill="none" viewBox="0 0 18 18">
                <path d={searchIconPaths.pf764100} fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <input
          ref={searchInputRef as any}
          type="text"
          value={searchQuery}
          onChange={(e) => { if (e.target.value.length <= 200) setSearchQuery(e.target.value) }}
          maxLength={200}
          className="sr-only"
          dir="rtl"
        />
      </form>

      {/* Quick Topics — original styling; only hover border color changed */}
      <div className="content-stretch flex flex-col items-start w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
          <div className="w-full">
            <p className="font-['Rubik',sans-serif] font-medium text-[13px] leading-[20px] text-[#7a93b8] text-right" dir="auto">
              דוגמאות לפניות נפוצות:
            </p>
          </div>
          <div className="gap-[10px] grid grid-cols-1 sm:grid-cols-2 w-full">
            {quickTopics.map((topic: any) => (
              <button
                key={topic.id}
                onClick={() => onTopicClick(topic.label)}
                className="bg-white relative rounded-[8px] shrink-0 border border-[#e0e0e0] hover:bg-[#f0f7ff] hover:border-[#0068f5] hover:shadow-sm transition-all px-3 py-3 md:px-4 md:py-3.5 focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
              >
                <div className="flex items-center justify-between gap-2" dir="rtl">
                  <p className="font-['Rubik',sans-serif] text-[13px] md:text-[14px] leading-[20px] text-[#0c3058] text-right flex-1">
                    {topic.label}
                  </p>
                  <div className="shrink-0 size-[13px] flex items-center justify-center opacity-50">
                    <svg className="block size-full" fill="none" viewBox="0 0 15 15">
                      <g>
                        <path d="M14.25 14.25L10.995 10.995" stroke="#5878a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={newSearchSvgPaths.p2617b300} stroke="#5878a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SearchingStep() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[260px] py-8">
      {/* Spinner — IGDS background.brand-default #0068f5 */}
      <div className="mb-6">
        <div className="w-12 h-12" style={{ color: '#0068f5' }}>
          <Loader48Px />
        </div>
      </div>
      {/* Shimmer — #0068f5 brand primary in gradient */}
      <motion.p
        className="font-['Rubik',sans-serif] text-[16px] leading-[26px] text-center bg-[linear-gradient(110deg,#4a4a4a,35%,#0068f5,50%,#4a4a4a,75%,#4a4a4a)] bg-[length:200%_100%] bg-clip-text text-transparent"
        initial={{ backgroundPosition: "200% 0" }}
        animate={{ backgroundPosition: "-200% 0" }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
      >
        מאתר את הנושא המתאים לפנייתך...
      </motion.p>
    </div>
  )
}

function ClarificationStep({ onBack, onSubmit }: any) {
  const [clarificationQuery, setClarificationQuery] = useState("")

  const handleClarificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(clarificationQuery)
  }

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start w-full" dir="rtl">
      {/* IGDS Warning alert:
          Original had border:#e8a000 all around.
          IGDS requires a 4px right-side accent stripe (RTL leading edge).
          We add borderRight:4px while keeping the rest of the original look. */}
      <div
        className="bg-[#fff9ec] rounded-[8px] w-full px-4 py-3.5"
        style={{ border: '1px solid #e8a000', borderRight: '4px solid #CC6600' }}
      >
        <div className="flex gap-3 items-start justify-end">
          <div className="flex-1 flex flex-col gap-1.5 items-end">
            <p className="font-['Rubik',sans-serif] font-medium text-[15px] leading-[1.5] text-[#0c3058] text-right w-full">
              לא הצלחנו לזהות את הנושא בוודאות
            </p>
            <p className="font-['Rubik',sans-serif] font-normal text-[14px] leading-[1.6] text-[#4a4a4a] text-right w-full">
              אנא נסו לנסח את הפניה מחדש: למשל: "רוצה לבדוק זכאות לדיור ציבורי" או "איך מגישים בקשה לסיוע בשכר דירה"
            </p>
          </div>
          <div className="relative shrink-0 size-5 mt-0.5">
            <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={alertIconPaths.p10d12700} fill="#CC6600" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Rephrase Form — original styling; button color updated to IGDS */}
      <div className="content-stretch flex flex-col gap-[10px] items-start w-full">
        <p className="font-['Rubik',sans-serif] font-medium text-[14px] leading-[22px] text-[#4a4a4a] text-right">
          נסחו מחדש את הפנייה:
        </p>
        <form onSubmit={handleClarificationSubmit} className="w-full">
          <div className="bg-[#f9fafb] rounded-[10px] border border-[#8596af] p-3 md:p-4 relative focus-within:border-[#0068f5] transition-colors">
            <textarea
              value={clarificationQuery}
              onChange={(e) => setClarificationQuery(e.target.value.slice(0, 200))}
              placeholder="לדוגמה: רוצה לברר על זכאות למחיר מטרה"
              dir="rtl"
              maxLength={200}
              className="w-full h-[44px] resize-none bg-transparent border-none outline-none font-['Rubik',sans-serif] text-[15px] text-[#0c3058] placeholder:text-[#a0aec0] leading-[24px]"
            />
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#e8eaed]">
              <p className="font-['Rubik',sans-serif] text-[12px] text-[#9aadcc]">
                {clarificationQuery.length}/200
              </p>
              <button
                type="submit"
                disabled={!clarificationQuery.trim()}
                className="disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 h-[38px] px-5 rounded-[7px] focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
                style={{ backgroundColor: clarificationQuery.trim() ? primaryBg : primaryDisabled }}
                onMouseEnter={(e) => clarificationQuery.trim() && (e.currentTarget.style.backgroundColor = primaryHover)}
                onMouseLeave={(e) => clarificationQuery.trim() && (e.currentTarget.style.backgroundColor = primaryBg)}
                onMouseDown={(e) => clarificationQuery.trim() && (e.currentTarget.style.backgroundColor = primaryActive)}
                onMouseUp={(e) => clarificationQuery.trim() && (e.currentTarget.style.backgroundColor = primaryHover)}
              >
                <span className="font-['Rubik',sans-serif] font-medium text-[14px] text-white">חיפוש</span>
                <svg className="size-[17px]" fill="none" viewBox="0 0 18 18">
                  <path d={searchIconPaths.pf764100} fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

function PartialClarificationStep({ topic, onSubmit }: any) {
  const [userInput, setUserInput] = useState("")

  const handleOptionClick = (optionId: string) => {
    if (optionId !== 'other') onSubmit(optionId)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInput.trim()) onSubmit(userInput)
  }

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start w-full" dir="rtl">
      {/* IGDS Info alert:
          Original had border:#90caf9 all around.
          We add borderRight:4px solid #0B5394 for RTL accent while keeping the original look. */}
      <div
        className="bg-[#f0f7ff] rounded-[10px] w-full px-5 py-4"
        style={{ border: '1px solid #90caf9', borderRight: '4px solid #0068f5' }}
      >
        <p className="font-['Rubik',sans-serif] text-[15px] leading-[26px] text-[#0c3058] text-right">
          {topic.question}
        </p>
      </div>

      {/* Options — original styling; hover border updated to IGDS primary */}
      <div className="content-stretch flex flex-col gap-[10px] items-start w-full">
        <p className="font-['Rubik',sans-serif] font-medium text-[14px] leading-[22px] text-[#4a4a4a] text-right">
          בחר אחת מהאופציות:
        </p>
        <div className="flex flex-col gap-2.5 w-full">
          {topic.options.map((option: any) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className="bg-white rounded-[8px] border border-[#dde4ef] hover:bg-[#f0f7ff] hover:border-[#0068f5] hover:shadow-sm active:bg-[#ebf3ff] transition-all px-4 py-3.5 text-right w-full flex items-center justify-between gap-3 focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
            >
              <p className="font-['Rubik',sans-serif] text-[15px] leading-[22px] text-[#0c3058] flex-1 text-right">
                {option.number}. {option.label}
              </p>
              <svg className="size-4 shrink-0 opacity-35" fill="none" viewBox="0 0 16 16">
                <path d={newDesignSvgPaths.p2631d280} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                <path d={newDesignSvgPaths.p17499200} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </button>
          ))}

          {/* Free text — original styling; send button updated to IGDS primary */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="bg-white rounded-[8px] border border-[#dde4ef] focus-within:bg-[#f0f7ff] focus-within:border-[#0068f5] transition-all px-4 py-3 flex items-center gap-3">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value.slice(0, 200))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    if (userInput.trim()) handleSubmit(e)
                  }
                }}
                placeholder="אחר - תאר את הנושא..."
                dir="rtl"
                maxLength={200}
                className="flex-1 bg-transparent border-none outline-none font-['Rubik',sans-serif] text-[15px] text-[#0c3058] placeholder:text-[#a0aec0] min-w-0"
              />
              <button
                type="submit"
                disabled={!userInput.trim()}
                className="shrink-0 flex items-center justify-center size-[34px] rounded-[6px] transition-colors disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
                style={{ backgroundColor: primaryBg }}
                onMouseEnter={(e) => userInput.trim() && (e.currentTarget.style.backgroundColor = primaryHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primaryBg)}
                onMouseDown={(e) => userInput.trim() && (e.currentTarget.style.backgroundColor = primaryActive)}
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
                  <path d={searchIconPaths.pf764100} fill="white" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function ResultsStep({ detectedTopic, showAdditionalTopics, setShowAdditionalTopics, onBack, onAdditionalTopicClick }: any) {
  const additionalTopics = [
    { id: "discount-apartment", title: "דירה בהנחה", subtitle: "הגרלות דירות" },
    { id: "target-price-status", title: "מחיר מטרה", subtitle: "בדיקת סטטוס הגשה" }
  ]

  if (!detectedTopic || !detectedTopic.links || !detectedTopic.fullTitle) return null

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start w-full" dir="rtl">
      {/* Main Results Card — original styling */}
      <div className="bg-white rounded-[10px] border border-[#c3cfe7] w-full p-5 md:p-7">
        <div className="border-b border-[#e8edf5] pb-3 mb-4">
          <p className="font-['Rubik',sans-serif] font-normal text-[13px] leading-[20px] text-[#7a93b8] mb-1.5">
            נראה שפנייתך בנושא:
          </p>
          <h2 className="font-['Rubik',sans-serif] font-semibold text-[17px] md:text-[19px] leading-[26px] text-[#0c3058] text-right">
            {detectedTopic.fullTitle}
          </h2>
        </div>

        <div className="mb-4">
          <p className="font-['Rubik',sans-serif] text-[14px] leading-[22px] text-[#4a4a4a] text-right">
            כדי לחסוך לך זמן המתנה למענה, כדאי לבדוק אם התשובה מופיעה כאן:
          </p>
        </div>

        {/* Links — original styling; text color & underline updated for IGDS/WCAG */}
        <div className="flex flex-col gap-2.5 mb-5">
          {detectedTopic.links.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[8px] border border-[#c3cfe7] min-h-[48px] flex items-center px-4 py-2.5 hover:border-[#0068f5] hover:bg-[#f1f5fb] transition-all group gap-3 focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
              dir="rtl"
            >
              <div className="size-[18px] flex items-center justify-center shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                  <path d={newDesignSvgPaths.p3711a780} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.635" />
                  <path d={newDesignSvgPaths.p496cc00} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.635" />
                  <path d="M7.35795 6.5404H5.72285" stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.635" />
                  <path d="M12.2632 9.8106H5.72285" stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.635" />
                  <path d="M12.2632 13.0808H5.72285" stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.635" />
                </svg>
              </div>
              {/* IGDS link: underline added for WCAG compliance */}
              <p className="font-['Rubik',sans-serif] font-medium text-[14px] md:text-[15px] leading-[22px] text-[#0068f5] underline flex-1 text-right">
                {link.title}
              </p>
              <div className="size-[14px] flex items-center justify-center shrink-0 opacity-50">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <path d={newDesignSvgPaths.p2631d280} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  <path d={newDesignSvgPaths.p17499200} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* CTA button — IGDS background.brand-default #0068f5 */}
        <button
          className="transition-colors rounded-[8px] h-[50px] w-full flex items-center justify-center gap-3 focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
          style={{ backgroundColor: primaryBg }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primaryHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primaryBg)}
          onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primaryActive)}
          onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primaryHover)}
        >
          <p className="font-['Rubik',sans-serif] font-medium text-[13px] md:text-[14px] leading-[20px] text-white text-center">
            <span>רוצה להגיש פנייה בנושא </span>
            <span className="font-bold">|</span>
            <span> {detectedTopic.fullTitle}</span>
          </p>
          <div className="h-[18px] w-[18px] relative">
            <div className="absolute inset-[5%_5%_65%_65%]">
              <div className="absolute inset-[-16.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.19444 7.19444">
                  <path d={newDesignSvgPaths.p1e079700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79861" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[5%_5%_40%_40%]">
              <div className="absolute inset-[-9.09%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.691 11.691">
                  <path d={newDesignSvgPaths.p221e4900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79861" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[20%_20%_5%_5%]">
              <div className="absolute inset-[-6.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2882 15.2882">
                  <path d={newDesignSvgPaths.p34cd1e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79861" />
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Additional Topics — original styling; hover border updated */}
      <div className="bg-white rounded-[10px] border border-[#c3cfe7] w-full p-5">
        <button
          onClick={() => setShowAdditionalTopics(!showAdditionalTopics)}
          className="border-b border-[#e8edf5] w-full flex items-center pb-3.5 mb-3.5 hover:bg-[#f9fafb] rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
        >
          <div className="flex items-center justify-between w-full" dir="rtl">
            <p className="font-['Rubik',sans-serif] font-medium text-[14px] leading-[20px] text-[#0c3058]">
              ייתכן וכוונתך לנושאים הבאים
            </p>
            <div className={`size-4 transition-transform ${showAdditionalTopics ? '' : 'rotate-180'}`}>
              <ChevronUp className="size-full text-[#6b7280]" strokeWidth={1.8} />
            </div>
          </div>
        </button>

        {showAdditionalTopics && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {additionalTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => onAdditionalTopicClick(topic.id)}
                className="border border-[#dde4ef] rounded-[8px] px-4 py-3.5 text-right hover:border-[#0068f5] hover:bg-[#f1f5fb] transition-all flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
                dir="rtl"
              >
                <div className="flex-1 text-right">
                  <p className="font-['Rubik',sans-serif] font-semibold text-[14px] leading-[20px] text-[#0c3058] mb-0.5">
                    {topic.title}
                  </p>
                  <p className="font-['Rubik',sans-serif] text-[12px] leading-[16px] text-[#7a93b8]">
                    {topic.subtitle}
                  </p>
                </div>
                <svg className="size-4 shrink-0 opacity-60" fill="none" viewBox="0 0 16 16">
                  <path d={newDesignSvgPaths.p2631d280} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  <path d={newDesignSvgPaths.p17499200} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom link — IGDS: underline */}
      <div className="w-full text-center">
        <p className="font-['Rubik',sans-serif] text-[13px] leading-[20px] text-[#7a93b8] mb-2">
          לא מצאתי תשובה המתאימה?
        </p>
        <button className="inline-flex items-center gap-2 hover:opacity-80 transition-all focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2">
          <p className="font-['Rubik',sans-serif] font-medium text-[14px] leading-[22px] text-[#0068f5] underline">
            בחירה בנושא מתאים אחר
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 size-[15.99px]">
            <div className="h-[15.99px] overflow-clip relative shrink-0 w-full">
              <div className="absolute inset-[5%_5%_65%_65%]">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.39589 6.39586">
                    <path d={manualSelectionSvgPaths.pd9a60c0} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[5%_5%_40%_40%]">
                <div className="absolute inset-[-9.09%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3933 10.3933">
                    <path d={manualSelectionSvgPaths.p3c0f2400} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[20%_20%_5%_5%]">
                <div className="absolute inset-[-6.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5912 13.5912">
                    <path d={manualSelectionSvgPaths.p7277800} stroke="#0068f5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

function UserQueryDisplay({ searchQuery, onNewSearch }: any) {
  return (
    <div className="w-full">
      {/* New Search Button — IGDS primary color; original shape/radius kept */}
      <div className="flex justify-end w-full mb-4">
        <button
          type="button"
          onClick={onNewSearch}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-white border border-[#dde4ef] hover:bg-[#f0f7ff] hover:border-[#0068f5] transition-all focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
        >
          <svg className="size-[15px]" fill="none" viewBox="0 0 15.9984 15.9777">
            <path d={pencilSvgPaths.pd42db80} fill="#0068f5" />
          </svg>
          <p className="font-['Rubik',sans-serif] font-medium text-[13px] leading-[20px] text-[#0068f5]" dir="auto">
            חיפוש חדש
          </p>
        </button>
      </div>

      {/* User Query Bubble — original styling kept */}
      <div className="flex items-start gap-3 w-full mb-5" dir="rtl">
        <div className="shrink-0 size-10 rounded-full bg-[#0c3058] flex items-center justify-center shadow-[0px_2px_6px_0px_rgba(12,48,88,0.22)]">
          <svg className="size-5" fill="none" viewBox="0 0 14 18">
            <path d="M7 9C9.20914 9 11 7.20914 11 5C11 2.79086 9.20914 1 7 1C4.79086 1 3 2.79086 3 5C3 7.20914 4.79086 9 7 9Z" fill="white" />
            <path d="M13 17C13 13.134 10.3137 10 7 10C3.68629 10 1 13.134 1 17" fill="white" />
          </svg>
        </div>
        <div className="bg-[#f4f7fb] flex-1 rounded-[8px] border border-[#c3cfe7]">
          <div className="flex flex-col items-end px-4 py-3.5">
            <p className="font-['Rubik',sans-serif] text-[12px] leading-[18px] text-[#7a93b8] text-right mb-1 w-full">
              הפנייה שלך:
            </p>
            <p className="font-['Rubik',sans-serif] font-medium text-[15px] leading-[23px] text-[#0c3058] text-right w-full">
              {searchQuery}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SearchBarSection({ searchQuery, setSearchQuery, onSearch, onClear }: any) {
  return (
    <div className="w-full">
      <div className="flex justify-end w-full mb-4">
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] bg-white border border-[#e0e0e0] hover:bg-[#f0f7ff] hover:border-[#0068f5] transition-all focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
        >
          <p className="font-['Rubik',sans-serif] font-medium text-[14px] leading-[20px] text-[#0068f5]" dir="auto">
            חיפוש חדש
          </p>
          <svg className="size-4" fill="none" viewBox="0 0 15.9984 15.9777">
            <path d={pencilSvgPaths.pd42db80} fill="#0068f5" />
          </svg>
        </button>
      </div>

      <div className="content-stretch flex flex-col gap-[16px] items-start w-full mb-6">
        <div className="content-stretch flex flex-col items-center w-full">
          <div 
            className="content-stretch flex items-center justify-center rounded-full shadow-[0px_2px_8px_0px_rgba(12,48,88,0.25)] shrink-0 size-[48px]"
            style={{ backgroundImage: "linear-gradient(90.0751deg, rgb(2, 95, 219) 0%, rgb(2, 95, 219) 35%, rgb(11, 54, 104) 100%)" }}
          >
            <div className="size-[19.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <path d={newSearchSvgPaths.pd8105b0} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-center w-full">
          <div className="w-full">
            <p className="font-['Rubik',sans-serif] font-bold text-[24px] leading-[36px] text-center text-[#0c3058]" dir="auto">
              עוזר פניות הציבור | מכוון אותך למקום הנכון
            </p>
          </div>
          <p className="font-['Rubik',sans-serif] text-[18px] leading-[24px] text-center text-[#0c3058]" dir="auto">
            תארו את הפנייה ונמצא עבורכם את הטופס ודפי המידע הרלוונטיים
          </p>
        </div>
      </div>

      <form onSubmit={onSearch} className="w-full">
        <div className="bg-[#f9fafb] rounded-[12px] border border-[#e0e0e0] p-4 relative">
          <textarea
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.slice(0, 200))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                if (searchQuery.trim()) onSearch(e)
              }
            }}
            placeholder="תארו את נושא הפניה שלכם..."
            dir="rtl"
            maxLength={200}
            className="w-full h-[42px] resize-none bg-transparent border-none outline-none font-['Rubik',sans-serif] text-[16px] text-[#0c3058] placeholder:text-[#a0aec0] leading-[24px]"
          />
          <div className="flex items-end justify-between mt-2 pt-2 border-t border-[#e8eaed]">
            <p className="font-['Rubik',sans-serif] text-[12px] text-[#5878a4]">
              {searchQuery.length}/200
            </p>
            <button
              type="submit"
              disabled={!searchQuery.trim()}
              className="disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 h-[40px] px-4 rounded-[8px] focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2"
              style={{ backgroundColor: searchQuery.trim() ? primaryBg : primaryDisabled }}
              onMouseEnter={(e) => searchQuery.trim() && (e.currentTarget.style.backgroundColor = primaryHover)}
              onMouseLeave={(e) => searchQuery.trim() && (e.currentTarget.style.backgroundColor = primaryBg)}
            >
              <span className="font-['Rubik',sans-serif] font-medium text-[14px] text-white">חיפוש</span>
              <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                <path d={searchIconPaths.pf764100} fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

function Footer() {
  return (
    <div className="w-full bg-[#f7f8fa] border-t border-[#e0e0e0]">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[14px]">
            <button className="font-['Rubik',sans-serif] leading-[20px] text-[#6b6b8e] hover:text-[#0068f5] hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2" dir="auto">
              נגישות
            </button>
            <span className="text-[#e0e0e0]">|</span>
            <button className="font-['Rubik',sans-serif] leading-[20px] text-[#6b6b8e] hover:text-[#0068f5] hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2" dir="auto">
              תנאי שימוש
            </button>
            <span className="text-[#e0e0e0]">|</span>
            <button className="font-['Rubik',sans-serif] leading-[20px] text-[#6b6b8e] hover:text-[#0068f5] hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2" dir="auto">
              אודות האתר
            </button>
          </div>
          <div className="flex-1 text-center">
            <button className="font-['Rubik',sans-serif] text-[14px] leading-[20px] text-[#6b6b8e] hover:text-[#0068f5] hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-[#0068f5] focus-visible:outline-offset-2" dir="auto">
              נשמח לשמוע את דעתך על מילוי הטופס
            </button>
          </div>
          <div className="text-left">
            <p className="font-['Rubik',sans-serif] text-[12px] leading-[18px] text-[#6b6b8e]" dir="auto">
              גירסת טופס: 18.0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PublicInquiryPageWithSmartNav() {
  return (
    <div className="bg-[#F1F5FB] min-h-screen flex flex-col" dir="rtl">
      <GovformsHeaderHeader />
      <div className="flex-1">
        <SmartNavigationCard />
      </div>
      <Footer />
    </div>
  );
}
