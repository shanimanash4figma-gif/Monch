import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft, Search, ChevronUp, ChevronDown, Copy, Check,
  AlertTriangle, Palette, Monitor, Smartphone,
} from "lucide-react";
import newSearchSvgPaths from "../imports/svg-w5s8le89s9";
import newDesignSvgPaths from "../imports/svg-5dptxl6sir";
import searchIconPaths from "../imports/svg-vtbi2n43qh";
import alertIconPaths from "../imports/svg-7zbiy66fkz";
import svgPaths from "../imports/svg-mjzwtgf3j9";
import pencilSvgPaths from "../imports/svg-wkk9euaaor";
import manualSelectionSvgPaths from "../imports/svg-2lxjg24eou";
import messageSvgPaths from "../imports/svg-e05apn42ak";
import resultSvgPaths from "../imports/svg-aopyuz4qpf";
import imgImage from "figma:asset/a2217581672e8379b931b48e4d2b6c020e35c6c0.png";
import imgVIcon from "figma:asset/1b29bb90bfae221974e2cfd8da8d15e447b94025.png";
import Loader48Px from "../imports/Loader48Px";

const P = "#0068f5", PH = "#0057cc", PA = "#0045a3", PD = "#f0f3f6", PDT = "#8596af";
const GRAD = "linear-gradient(141.916deg,#025FDB 2.36%,#025FDB 35.71%,#0B3668 97.64%)";
const AI_GRAD = "linear-gradient(90.07deg,#025FDB 0%,#025FDB 35%,#0B3668 100%)";

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED GOV LOGO SVG
// ═══════════════════════════════════════════════════════════════════════════════
function GovLogo({ w, h }: { w: number; h: number }) {
  return (
    <div style={{ width: w, height: h, position: "relative" }}>
      <svg className="block size-full" fill="none" viewBox="0 0 120 53">
        <g opacity="0.95">
          <path d={svgPaths.p2d862d00} stroke="white" strokeMiterlimit="10" strokeWidth="2.2" />
          <path d={svgPaths.pe4cbb00} fill="#0071AD" />
          <path d={svgPaths.p23661300} fill="#0071AD" />
          {[svgPaths.p167bef40, svgPaths.p14f92c00, svgPaths.p19167fc0, svgPaths.p1eeb1a0,
            svgPaths.p2514ba80, svgPaths.p17024800, svgPaths.p31972070, svgPaths.p325c2300,
            svgPaths.p2bd1b180, svgPaths.p21196100, svgPaths.p3cf71680, svgPaths.p1c616400].map((d, i) => (
            <path key={i} d={d} fill="white" />
          ))}
        </g>
      </svg>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── MOBILE FRAME HELPERS ────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
function MobHeader() {
  return (
    <div className="w-full h-[40px] flex items-center justify-between px-3 shrink-0" style={{ backgroundImage: GRAD }}>
      <GovLogo w={52} h={24} />
      <div className="flex gap-3">
        <span className="text-white/80 text-[9px] font-['Rubik',sans-serif]">לאזור האישי</span>
        <span className="text-white/80 text-[9px] font-['Rubik',sans-serif]">עברית</span>
      </div>
    </div>
  );
}
function MobPageHeader() {
  return (
    <div className="mx-3 mt-3 mb-3">
      <div className="bg-[#EAF0F8] rounded-[8px] px-3 py-2 flex items-center justify-between" dir="rtl">
        <div className="flex items-center gap-2">
          <div className="size-[28px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundImage: GRAD }}>
            <svg className="size-[12px]" fill="none" viewBox="0 0 21 21">
              <path d={newSearchSvgPaths.pd8105b0} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <p className="text-[8px] text-[#7a93b8] font-['Rubik',sans-serif]">משרד הבינוי והשיכון</p>
            <p className="text-[10px] font-medium text-[#0c3058] font-['Rubik',sans-serif]">פניות הציבור</p>
          </div>
        </div>
        <div className="size-[34px] rounded-[6px] overflow-hidden shrink-0">
          <img alt="" className="size-full object-cover" src={imgImage} />
        </div>
      </div>
    </div>
  );
}
function MobCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-3 mb-4">
      <div className="bg-white rounded-[10px] px-4 py-4" style={{ boxShadow: "0px 4px 16px rgba(6,77,173,0.13)" }}>
        {children}
      </div>
    </div>
  );
}
function MobUserQuery({ text }: { text: string }) {
  return (
    <div className="flex items-start justify-between gap-2 p-2 bg-[#f1f5fb] rounded-[7px] border border-[#e8edf5] mb-3" dir="rtl">
      <div className="flex items-start gap-1.5">
        <div className="size-[20px] rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: P }}>
          <img src={imgVIcon} alt="" className="size-[11px] object-contain" />
        </div>
        <div>
          <p className="text-[8px] text-[#7a93b8] font-['Rubik',sans-serif] mb-0.5">הפנייה שלך</p>
          <p className="text-[10px] text-[#0c3058] font-['Rubik',sans-serif]">{text}</p>
        </div>
      </div>
      <button className="shrink-0 flex items-center gap-0.5 text-[8px] text-[#7a93b8] px-1.5 py-0.5 rounded">
        <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M8.5 1.5L10.5 3.5L4 10H2V8L8.5 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
        <span className="font-['Rubik',sans-serif]">ערוך</span>
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── DESKTOP FRAME HELPERS ───────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
function DeskHeader() {
  return (
    <div className="w-full h-[65px] flex items-center justify-between px-8 shrink-0" style={{ backgroundImage: GRAD }}>
      <GovLogo w={100} h={46} />
      <div className="flex gap-6 items-center">
        <span className="text-white text-[14px] font-['Rubik',sans-serif]">לאזור האישי</span>
        <span className="text-white text-[14px] font-['Rubik',sans-serif]">עברית</span>
      </div>
    </div>
  );
}
function DeskPageHeader() {
  return (
    <div className="mx-8 mt-4 mb-4">
      <div className="bg-[#EAF0F8] rounded-[10px] px-5 py-3.5 flex items-center justify-between" dir="rtl">
        <div className="flex items-center gap-3">
          <div className="size-[42px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundImage: GRAD }}>
            <svg className="size-[18px]" fill="none" viewBox="0 0 21 21">
              <path d={newSearchSvgPaths.pd8105b0} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] text-[#7a93b8] font-['Rubik',sans-serif]">משרד הבינוי והשיכון</p>
            <p className="text-[15px] font-medium text-[#0c3058] font-['Rubik',sans-serif]">משרד הבינוי והשיכון - פניות הציבור</p>
          </div>
        </div>
        <div className="size-[52px] rounded-[8px] overflow-hidden shrink-0">
          <img alt="" className="size-full object-cover" src={imgImage} />
        </div>
      </div>
    </div>
  );
}
function DeskCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-8 mb-6">
      <div className="bg-white rounded-[16px] px-10 py-8" style={{ boxShadow: "0px 4px 16px rgba(6,77,173,0.13)" }}>
        {children}
      </div>
    </div>
  );
}
function DeskUserQuery({ text }: { text: string }) {
  return (
    <div className="flex items-start justify-between gap-3 p-3 bg-[#f1f5fb] rounded-[8px] border border-[#e8edf5] mb-4" dir="rtl">
      <div className="flex items-start gap-2.5">
        <div className="size-[30px] rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: P }}>
          <img src={imgVIcon} alt="" className="size-[16px] object-contain" />
        </div>
        <div>
          <p className="text-[11px] text-[#7a93b8] font-['Rubik',sans-serif] mb-0.5">הפנייה שלך</p>
          <p className="text-[14px] text-[#0c3058] font-['Rubik',sans-serif]">{text}</p>
        </div>
      </div>
      <button className="shrink-0 flex items-center gap-1 text-[12px] text-[#7a93b8] px-2 py-1 rounded hover:bg-white">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M8.5 1.5L10.5 3.5L4 10H2V8L8.5 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
        <span className="font-['Rubik',sans-serif]">ערוך</span>
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── SCREEN 1: INITIAL ──────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
function S1Mobile() {
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <MobHeader />
      <MobPageHeader />
      <MobCard>
        <div className="flex justify-center mb-2.5">
          <div className="size-[38px] rounded-full flex items-center justify-center"
            style={{ backgroundImage: AI_GRAD, boxShadow: "0px 2px 8px rgba(12,48,88,0.28)" }}>
            <svg className="size-[14px]" fill="none" viewBox="0 0 21 21">
              <path d={newSearchSvgPaths.pd8105b0} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <p className="text-center text-[11px] font-bold text-[#0c3058] leading-tight mb-1 font-['Rubik',sans-serif]">עוזר פניות הציבור | מכוון אותך למקום הנכון</p>
        <p className="text-center text-[9px] text-[#4a5e78] leading-snug mb-3 font-['Rubik',sans-serif]">כדי להביאכם מהר ודירקט ללא המתנה, המשתמש מערכת AI מתקדמת</p>
        <div className="bg-[#f9fafb] rounded-[8px] border border-[#d1d9e6] p-2 mb-2.5">
          <p className="text-[9px] text-[#a0aec0] h-[28px] font-['Rubik',sans-serif]">חפשו את הנושא והשאלה שלכם...</p>
          <div className="flex items-center justify-between pt-1.5 border-t border-[#e8eaed]">
            <span className="text-[8px] text-[#9aadcc] font-['Rubik',sans-serif]">0/200</span>
            <button className="h-[20px] px-2 rounded-[5px] text-white text-[8px] font-['Rubik',sans-serif] flex items-center gap-1" style={{ backgroundColor: PD }}>
              <span>חיפוש</span>
              <svg className="size-[8px]" fill="none" viewBox="0 0 18 18"><path d={searchIconPaths.pf764100} fill="white" /></svg>
            </button>
          </div>
        </div>
        <p className="text-[8px] text-[#7a93b8] mb-1.5 font-['Rubik',sans-serif]">דוגמאות לפניות נפוצות:</p>
        <div className="grid grid-cols-2 gap-1.5">
          {["רוצה לבדוק זכאות לדיור ציבורי", "מידע על גג דולף בדיור ציבורי", "סיוע בשכר דירה", "בקשה למחיר מטרה"].map((t, i) => (
            <button key={i} className={`rounded-[6px] border px-1.5 py-1.5 text-right ${i === 0 ? "bg-[#f0f7ff] border-[#0068f5]" : "bg-white border-[#e0e0e0]"}`}>
              <p className="text-[8px] text-[#0c3058] leading-tight font-['Rubik',sans-serif]">{t}</p>
            </button>
          ))}
        </div>
      </MobCard>
    </div>
  );
}
function S1Desktop() {
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <DeskHeader />
      <DeskPageHeader />
      <DeskCard>
        <div className="flex justify-center mb-5">
          <div className="size-[52px] rounded-full flex items-center justify-center"
            style={{ backgroundImage: AI_GRAD, boxShadow: "0px 2px 10px rgba(12,48,88,0.28)" }}>
            <svg className="size-[21px]" fill="none" viewBox="0 0 21 21">
              <path d={newSearchSvgPaths.pd8105b0} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <p className="text-center text-[20px] font-bold text-[#0c3058] leading-tight mb-2 font-['Rubik',sans-serif]">עוזר פניות הציבור | מכוון אותך למקום הנכון</p>
        <p className="text-center text-[14px] font-light text-[#4a5e78] leading-snug mb-6 font-['Rubik',sans-serif]">כדי להביאכם מהר ודירקט ללא המתנה, המשתמש מערכת AI מתקדמת</p>
        <div className="bg-[#f9fafb] rounded-[10px] border border-[#d1d9e6] p-4 mb-5">
          <p className="text-[15px] text-[#a0aec0] h-[48px] font-['Rubik',sans-serif]">חפשו את הנושא והשאלה שלכם לצורך הכוונה לטפסים הרלוונטיים...</p>
          <div className="flex items-center justify-between pt-2 border-t border-[#e8eaed]">
            <span className="text-[13px] text-[#9aadcc] font-['Rubik',sans-serif]">0/200</span>
            <button className="h-[38px] px-5 rounded-[7px] text-white text-[14px] font-['Rubik',sans-serif] font-medium flex items-center gap-2" style={{ backgroundColor: PD }}>
              <span>חיפוש</span>
              <svg className="size-[16px]" fill="none" viewBox="0 0 18 18"><path d={searchIconPaths.pf764100} fill="white" /></svg>
            </button>
          </div>
        </div>
        <p className="text-[13px] text-[#7a93b8] mb-2.5 font-['Rubik',sans-serif]">דוגמאות לפניות נפוצות:</p>
        <div className="grid grid-cols-2 gap-2.5">
          {["רוצה לבדוק זכאות לדיור ציבורי", "מידע על גג דולף בדיור ציבורי", "סיוע בשכר דירה", "בקשה למחיר מטרה"].map((t, i) => (
            <button key={i} className={`rounded-[8px] border px-4 py-3 text-right ${i === 0 ? "bg-[#f0f7ff] border-[#0068f5] shadow-sm" : "bg-white border-[#e0e0e0]"}`}>
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] text-[#0c3058] font-['Rubik',sans-serif]">{t}</p>
                <svg className="size-[12px] opacity-40 shrink-0" fill="none" viewBox="0 0 15 15">
                  <path d="M14.25 14.25L10.995 10.995" stroke="#5878a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={newSearchSvgPaths.p2617b300} stroke="#5878a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </DeskCard>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── SCREEN 2: SEARCHING ────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
function S2Mobile() {
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <MobHeader /><MobPageHeader />
      <MobCard>
        <MobUserQuery text="רוצה לבדוק זכאות לדיור ציבורי" />
        <div className="flex flex-col items-center justify-center py-5">
          <div className="w-9 h-9 mb-3" style={{ color: P }}><Loader48Px /></div>
          <p className="text-[10px] text-center font-['Rubik',sans-serif] bg-[linear-gradient(110deg,#4a4a4a,35%,#0068f5,50%,#4a4a4a,75%,#4a4a4a)] bg-[length:200%_100%] bg-clip-text text-transparent"
            style={{ animation: "shimmer-ds 2.5s linear infinite" }}>מאתר את הנושא המתאים לפנייתך...</p>
        </div>
      </MobCard>
      <style>{`@keyframes shimmer-ds{from{background-position:200% 0}to{background-position:-200% 0}}`}</style>
    </div>
  );
}
function S2Desktop() {
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <DeskHeader /><DeskPageHeader />
      <DeskCard>
        <DeskUserQuery text="רוצה לבדוק זכאות לדיור ציבורי" />
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-12 h-12 mb-5" style={{ color: P }}><Loader48Px /></div>
          <p className="text-[16px] text-center font-['Rubik',sans-serif] bg-[linear-gradient(110deg,#4a4a4a,35%,#0068f5,50%,#4a4a4a,75%,#4a4a4a)] bg-[length:200%_100%] bg-clip-text text-transparent"
            style={{ animation: "shimmer-ds 2.5s linear infinite" }}>מאתר את הנושא המתאים לפנייתך...</p>
        </div>
      </DeskCard>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── SCREEN 3: CLARIFICATION ────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
function S3Mobile() {
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <MobHeader /><MobPageHeader />
      <MobCard>
        <MobUserQuery text="עזרה" />
        <div className="bg-[#fff9ec] rounded-[7px] px-2.5 py-2 mb-3" style={{ border: "1px solid #e8a000", borderRight: "3px solid #CC6600" }}>
          <div className="flex gap-2 items-start">
            <div className="flex-1">
              <p className="text-[9px] font-medium text-[#0c3058] mb-0.5 font-['Rubik',sans-serif]">לא הצלחנו לזהות את הנושא בוודאות</p>
              <p className="text-[8px] text-[#4a4a4a] font-['Rubik',sans-serif] leading-snug">אנא נסו לנסח את הפניה מחדש: למשל: "רוצה לבדוק זכאות לדיור ציבורי"</p>
            </div>
            <svg className="size-[12px] shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={alertIconPaths.p10d12700} fill="#CC6600" fillRule="evenodd" />
            </svg>
          </div>
        </div>
        <p className="text-[9px] font-medium text-[#4a4a4a] mb-1 font-['Rubik',sans-serif]">נסחו מחדש את הפנייה:</p>
        <div className="bg-[#f9fafb] rounded-[8px] border border-[#d1d9e6] p-2">
          <p className="text-[9px] text-[#a0aec0] h-[26px] font-['Rubik',sans-serif]">לדוגמה: רוצה לברר על זכאות למחיר מטרה</p>
          <div className="flex items-center justify-between pt-1.5 border-t border-[#e8eaed]">
            <span className="text-[8px] text-[#9aadcc] font-['Rubik',sans-serif]">0/200</span>
            <button className="h-[20px] px-2 rounded-[5px] text-white text-[8px] font-['Rubik',sans-serif]" style={{ backgroundColor: PD }}>חיפוש</button>
          </div>
        </div>
      </MobCard>
    </div>
  );
}
function S3Desktop() {
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <DeskHeader /><DeskPageHeader />
      <DeskCard>
        <DeskUserQuery text="עזרה" />
        <div className="bg-[#fff9ec] rounded-[8px] px-4 py-3.5 mb-5" style={{ border: "1px solid #e8a000", borderRight: "4px solid #CC6600" }}>
          <div className="flex gap-3 items-start">
            <div className="flex-1">
              <p className="text-[15px] font-medium text-[#0c3058] mb-1 font-['Rubik',sans-serif]">לא הצלחנו לזהות את הנושא בוודאות</p>
              <p className="text-[13px] text-[#4a4a4a] font-['Rubik',sans-serif] leading-relaxed">אנא נסו לנסח את הפניה מחדש: למשל: "רוצה לבדוק זכאות לדיור ציבורי"</p>
            </div>
            <svg className="size-[20px] shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={alertIconPaths.p10d12700} fill="#CC6600" fillRule="evenodd" />
            </svg>
          </div>
        </div>
        <p className="text-[14px] font-medium text-[#4a4a4a] mb-2 font-['Rubik',sans-serif]">נסחו מחדש את הפנייה:</p>
        <div className="bg-[#f9fafb] rounded-[10px] border border-[#d1d9e6] p-4">
          <p className="text-[15px] text-[#a0aec0] h-[44px] font-['Rubik',sans-serif]">לדוגמה: רוצה לברר על זכאות למחיר מטרה</p>
          <div className="flex items-center justify-between pt-2 border-t border-[#e8eaed]">
            <span className="text-[13px] text-[#9aadcc] font-['Rubik',sans-serif]">0/200</span>
            <button className="h-[38px] px-5 rounded-[7px] text-white text-[14px] font-['Rubik',sans-serif] font-medium flex items-center gap-2" style={{ backgroundColor: PD }}>
              <span>חיפוש</span>
              <svg className="size-[16px]" fill="none" viewBox="0 0 18 18"><path d={searchIconPaths.pf764100} fill="white" /></svg>
            </button>
          </div>
        </div>
      </DeskCard>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── SCREEN 4: PARTIAL CLARIFICATION ───────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
const partialOptions = [
  { num: "1", label: "דיור ציבורי" },
  { num: "2", label: 'סיוע בשכר דירה (יד 2)' },
  { num: "3", label: "סיוע לעולים חדשים" },
];
function S4Mobile() {
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <MobHeader /><MobPageHeader />
      <MobCard>
        <MobUserQuery text="רוצה עזרה עם שכר דירה" />
        <div className="bg-[#f0f7ff] rounded-[7px] px-2.5 py-2 mb-3" style={{ border: "1px solid #90caf9", borderRight: "3px solid #0068f5" }}>
          <p className="text-[9px] text-[#0c3058] font-['Rubik',sans-serif] leading-snug">כדי שאוכל להפנות אותך למקום הנכון, אשמח להבין לאיזה מהנושאים התכוונת:</p>
        </div>
        <p className="text-[8px] font-medium text-[#4a4a4a] mb-1.5 font-['Rubik',sans-serif]">בחר אחת מהאופציות:</p>
        <div className="flex flex-col gap-1.5 mb-1.5">
          {partialOptions.map((o, i) => (
            <button key={o.num} className={`rounded-[6px] border px-2.5 py-2 text-right flex items-center justify-between ${i === 1 ? "bg-[#f0f7ff] border-[#0068f5]" : "bg-white border-[#dde4ef]"}`}>
              <p className="text-[9px] text-[#0c3058] font-['Rubik',sans-serif]">{o.num}. {o.label}</p>
              <svg className="size-2.5 opacity-40 shrink-0" fill="none" viewBox="0 0 16 16">
                <path d={newDesignSvgPaths.p2631d280} stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                <path d={newDesignSvgPaths.p17499200} stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </button>
          ))}
          <div className="bg-white rounded-[6px] border border-[#dde4ef] px-2.5 py-2 flex items-center gap-1.5">
            <p className="flex-1 text-[9px] text-[#a0aec0] font-['Rubik',sans-serif]">אחר - תאר את הנושא...</p>
            <button className="size-[18px] rounded-[4px] flex items-center justify-center shrink-0" style={{ backgroundColor: P }}>
              <svg className="size-[9px]" fill="none" viewBox="0 0 18 18"><path d={searchIconPaths.pf764100} fill="white" /></svg>
            </button>
          </div>
        </div>
      </MobCard>
    </div>
  );
}
function S4Desktop() {
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <DeskHeader /><DeskPageHeader />
      <DeskCard>
        <DeskUserQuery text="רוצה עזרה עם שכר דירה" />
        <div className="bg-[#f0f7ff] rounded-[10px] px-5 py-4 mb-5" style={{ border: "1px solid #90caf9", borderRight: "4px solid #0068f5" }}>
          <p className="text-[15px] text-[#0c3058] font-['Rubik',sans-serif]">כדי שאוכל להפנות אותך למקום הנכון, אשמח להבין לאיזה מהנושאים התכוונת:</p>
        </div>
        <p className="text-[14px] font-medium text-[#4a4a4a] mb-2.5 font-['Rubik',sans-serif]">בחר אחת מהאופציות:</p>
        <div className="flex flex-col gap-2.5 mb-2.5">
          {partialOptions.map((o, i) => (
            <button key={o.num} className={`rounded-[8px] border px-4 py-3.5 text-right flex items-center justify-between gap-3 ${i === 1 ? "bg-[#f0f7ff] border-[#0068f5] shadow-sm" : "bg-white border-[#dde4ef]"}`}>
              <p className="text-[15px] text-[#0c3058] font-['Rubik',sans-serif]">{o.num}. {o.label}</p>
              <svg className="size-4 opacity-35 shrink-0" fill="none" viewBox="0 0 16 16">
                <path d={newDesignSvgPaths.p2631d280} stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                <path d={newDesignSvgPaths.p17499200} stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </button>
          ))}
          <div className="bg-white rounded-[8px] border border-[#dde4ef] px-4 py-3 flex items-center gap-3">
            <p className="flex-1 text-[15px] text-[#a0aec0] font-['Rubik',sans-serif]">אחר - תאר את הנושא...</p>
            <button className="size-[34px] rounded-[6px] flex items-center justify-center shrink-0" style={{ backgroundColor: P }}>
              <svg className="size-[16px]" fill="none" viewBox="0 0 18 18"><path d={searchIconPaths.pf764100} fill="white" /></svg>
            </button>
          </div>
        </div>
      </DeskCard>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── SCREEN 5: RESULTS ──────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
const resultLinks = ["מדריך דיור ציבורי", "שאלות נפוצות - דיור ציבורי"];
function S5Mobile() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <MobHeader /><MobPageHeader />
      <MobCard>
        <MobUserQuery text="רוצה לבדוק זכאות לדיור ציבורי" />
        <div className="bg-white rounded-[8px] border border-[#c3cfe7] p-3 mb-2">
          <div className="border-b border-[#e8edf5] pb-2 mb-2">
            <p className="text-[8px] text-[#7a93b8] mb-0.5 font-['Rubik',sans-serif]">נראה שפנייתך בנושא:</p>
            <p className="text-[11px] font-semibold text-[#0c3058] font-['Rubik',sans-serif]">דיור ציבורי | בקשת שירות</p>
          </div>
          <p className="text-[8px] text-[#4a4a4a] mb-2 font-['Rubik',sans-serif]">כדי לחסוך לך זמן המתנה, כדאי לבדוק:</p>
          <div className="flex flex-col gap-1.5 mb-2">
            {resultLinks.map((l, i) => (
              <a key={i} href="#" className={`rounded-[6px] border flex items-center px-2.5 py-1.5 gap-2 ${i === 1 ? "border-[#0068f5] bg-[#f1f5fb]" : "border-[#c3cfe7]"}`}>
                <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path d={newDesignSvgPaths.p3711a780} stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  <path d={newDesignSvgPaths.p496cc00} stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  <path d="M7.35795 6.5404H5.72285" stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  <path d="M12.2632 9.8106H5.72285" stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
                <p className="text-[9px] font-medium text-[#0068f5] underline font-['Rubik',sans-serif]">{l}</p>
              </a>
            ))}
          </div>
          <button className="w-full h-[28px] rounded-[7px] text-white text-[9px] font-['Rubik',sans-serif] flex items-center justify-center" style={{ backgroundColor: P }}>
            רוצה להגיש פנייה בנושא | דיור ציבורי
          </button>
        </div>
        <div className="bg-white rounded-[8px] border border-[#c3cfe7] p-2.5">
          <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between pb-2 border-b border-[#e8edf5]">
            <p className="text-[9px] font-medium text-[#0c3058] font-['Rubik',sans-serif]">ייתכן וכוונ��ך לנושאים הבאים</p>
            {open ? <ChevronUp size={11} className="text-[#6b7280]" /> : <ChevronDown size={11} className="text-[#6b7280]" />}
          </button>
          {open && (
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              {[{ t: "דירה בהנחה", s: "הגרלות" }, { t: "מחיר מטרה", s: "סטטוס הגשה" }].map((tp) => (
                <button key={tp.t} className="border border-[#dde4ef] rounded-[6px] px-2 py-1.5 text-right">
                  <p className="text-[8px] font-semibold text-[#0c3058] font-['Rubik',sans-serif]">{tp.t}</p>
                  <p className="text-[7px] text-[#7a93b8] font-['Rubik',sans-serif]">{tp.s}</p>
                </button>
              ))}
            </div>
          )}
        </div>
        <p className="text-center text-[8px] text-[#7a93b8] mt-2 font-['Rubik',sans-serif]">לא מצאתי תשובה המתאימה? <span className="text-[#0068f5] underline">חזרה לחיפוש</span></p>
      </MobCard>
    </div>
  );
}
function S5Desktop() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F1F5FB]" dir="rtl">
      <DeskHeader /><DeskPageHeader />
      <DeskCard>
        <DeskUserQuery text="רוצה לבדוק זכאות לדיור ציבורי" />
        <div className="bg-white rounded-[10px] border border-[#c3cfe7] p-7 mb-4">
          <div className="border-b border-[#e8edf5] pb-3 mb-4">
            <p className="text-[13px] text-[#7a93b8] mb-1.5 font-['Rubik',sans-serif]">נראה שפנייתך בנושא:</p>
            <p className="text-[19px] font-semibold text-[#0c3058] font-['Rubik',sans-serif]">דיור ציבורי | בקשת שירות</p>
          </div>
          <p className="text-[14px] text-[#4a4a4a] mb-4 font-['Rubik',sans-serif]">כדי לחסוך לך זמן המתנה למענה, כדאי לבדוק אם התשובה מופיעה כאן:</p>
          <div className="flex flex-col gap-2.5 mb-5">
            {resultLinks.map((l, i) => (
              <a key={i} href="#" className={`rounded-[8px] border min-h-[48px] flex items-center px-4 py-2.5 gap-3 ${i === 1 ? "border-[#0068f5] bg-[#f1f5fb]" : "border-[#c3cfe7]"}`}>
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path d={newDesignSvgPaths.p3711a780} stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.635" />
                  <path d={newDesignSvgPaths.p496cc00} stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.635" />
                  <path d="M7.35795 6.5404H5.72285" stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.635" />
                  <path d="M12.2632 9.8106H5.72285" stroke={P} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.635" />
                </svg>
                <p className="text-[14px] font-medium text-[#0068f5] underline font-['Rubik',sans-serif]">{l}</p>
              </a>
            ))}
          </div>
          <button className="w-full h-[50px] rounded-[8px] text-white text-[14px] font-['Rubik',sans-serif] font-medium flex items-center justify-center" style={{ backgroundColor: P }}>
            רוצה להגיש פנייה בנושא | דיור ציבורי
          </button>
        </div>
        <div className="bg-white rounded-[10px] border border-[#c3cfe7] p-5 mb-4">
          <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between pb-3.5 border-b border-[#e8edf5]">
            <p className="text-[14px] font-medium text-[#0c3058] font-['Rubik',sans-serif]">ייתכן וכוונתך לנושאים הבאים</p>
            {open ? <ChevronUp size={16} className="text-[#6b7280]" /> : <ChevronDown size={16} className="text-[#6b7280]" />}
          </button>
          {open && (
            <div className="grid grid-cols-2 gap-2.5 mt-3.5">
              {[{ t: "דירה בהנחה", s: "הגרלות דירות" }, { t: "מחיר מטרה", s: "בדיקת סטטוס" }].map((tp) => (
                <button key={tp.t} className="border border-[#dde4ef] rounded-[8px] px-4 py-3.5 text-right">
                  <p className="text-[14px] font-semibold text-[#0c3058] mb-0.5 font-['Rubik',sans-serif]">{tp.t}</p>
                  <p className="text-[12px] text-[#7a93b8] font-['Rubik',sans-serif]">{tp.s}</p>
                </button>
              ))}
            </div>
          )}
        </div>
        <p className="text-center text-[13px] text-[#7a93b8] font-['Rubik',sans-serif]">לא מצאתי תשובה המתאימה? <span className="text-[#0068f5] underline">חזרה לחיפוש</span></p>
      </DeskCard>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── FRAME WRAPPER + VIEWER ─────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
function MobileDeviceFrame({ children, stateKey }: { children: React.ReactNode; stateKey: string }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col rounded-[16px] overflow-hidden border border-[#c3cfe7] shadow-[0px_8px_28px_rgba(6,77,173,0.14)] w-full max-w-[420px]">
        <div className="bg-[#f1f4f8] h-[28px] flex items-center px-3 gap-2 border-b border-[#dde4ef] shrink-0">
          <div className="flex gap-1.5">
            {["#eb4a4b", "#dda82f", "#7ad94a"].map(c => <div key={c} className="size-[8px] rounded-full opacity-60" style={{ backgroundColor: c }} />)}
          </div>
          <div className="flex-1 bg-white rounded-[4px] h-[16px] flex items-center justify-center border border-[#e8edf5]">
            <span className="text-[8px] text-[#7a93b8] font-mono">gov.il</span>
          </div>
        </div>
        <div className="bg-[#0c3058] px-3 py-0.5 flex items-center justify-between shrink-0">
          <span className="text-[8px] text-white/40 font-mono">MOBILE · 375px</span>
          <span className="text-[8px] text-[#90caf9] font-mono">{stateKey}</span>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: 520 }}>{children}</div>
      </div>
    </div>
  );
}

function DesktopDeviceFrame({ children, stateKey }: { children: React.ReactNode; stateKey: string }) {
  return (
    <div className="flex flex-col rounded-[12px] overflow-hidden border border-[#c3cfe7] shadow-[0px_8px_28px_rgba(6,77,173,0.14)] w-full">
      <div className="bg-[#f1f4f8] h-[32px] flex items-center px-4 gap-3 border-b border-[#dde4ef] shrink-0">
        <div className="flex gap-1.5">
          {["#eb4a4b", "#dda82f", "#7ad94a"].map(c => <div key={c} className="size-[10px] rounded-full opacity-60" style={{ backgroundColor: c }} />)}
        </div>
        <div className="flex-1 bg-white rounded-[5px] h-[20px] flex items-center justify-center gap-1 border border-[#e8edf5]">
          <span className="text-[9px] text-[#9aadcc]">🔒</span>
          <span className="text-[9px] text-[#7a93b8] font-mono">https://www.gov.il/he/service/פניות-ציבור</span>
        </div>
      </div>
      <div className="bg-[#0c3058] px-4 py-0.5 flex items-center justify-between shrink-0">
        <span className="text-[8px] text-white/40 font-mono">DESKTOP · 1280px</span>
        <span className="text-[8px] text-[#90caf9] font-mono">{stateKey}</span>
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: 560 }}>{children}</div>
    </div>
  );
}

function FrameViewer({ mobileEl, desktopEl, stateKey }: { mobileEl: React.ReactNode; desktopEl: React.ReactNode; stateKey: string }) {
  const [view, setView] = useState<"mobile" | "desktop">("desktop");
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Tab switcher */}
      <div className="flex gap-1 bg-[#f1f5fb] rounded-[8px] p-1 w-fit border border-[#e8edf5]">
        <button onClick={() => setView("mobile")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[12px] font-['Rubik',sans-serif] transition-all ${view === "mobile" ? "bg-white shadow-sm text-[#0068f5] font-medium" : "text-[#7a93b8] hover:text-[#0c3058]"}`}>
          <Smartphone size={12} />Mobile
        </button>
        <button onClick={() => setView("desktop")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[12px] font-['Rubik',sans-serif] transition-all ${view === "desktop" ? "bg-white shadow-sm text-[#0068f5] font-medium" : "text-[#7a93b8] hover:text-[#0c3058]"}`}>
          <Monitor size={12} />Desktop
        </button>
      </div>
      {/* Frame */}
      {view === "mobile"
        ? <MobileDeviceFrame stateKey={stateKey}>{mobileEl}</MobileDeviceFrame>
        : <DesktopDeviceFrame stateKey={stateKey}>{desktopEl}</DesktopDeviceFrame>
      }
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── COMPONENT SPEC SYSTEM ──────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
type TokenType = "color" | "size" | "radius" | "shadow" | "font" | "border" | "code" | "state";
interface SpecToken { label: string; value: string; type: TokenType; mob?: string; desk?: string; }
interface ComponentSpec {
  num: number; name: string;
  tag: "Layout" | "Typography" | "Interactive" | "Feedback" | "Icon" | "Media";
  tokens: SpecToken[]; states?: string[]; note?: string;
}
const TAG_COLORS: Record<ComponentSpec["tag"], string> = {
  Layout: "#4a5e78", Typography: "#7a93b8", Interactive: "#0068f5",
  Feedback: "#CC6600", Icon: "#0c3058", Media: "#0B7A3E",
};

function TokenRow({ t }: { t: SpecToken }) {
  const [cp, setCp] = useState(false);
  const isColor = t.type === "color" && /^(#|rgb|rgba|linear)/.test(t.value);
  // Has separate mobile/desktop values
  if (t.mob && t.desk) {
    return (
      <div className="py-1.5 border-b border-[#f8fafc] last:border-0">
        <span className="text-[10px] text-[#7a93b8] block mb-1 font-['Rubik',sans-serif]">{t.label}</span>
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-[#FFF9EC] rounded px-2 py-1">
            <p className="text-[8px] text-[#CC6600] font-mono mb-0.5">📱 Mobile</p>
            <code className="text-[10px] font-mono text-[#0c3058]">{t.mob}</code>
          </div>
          <div className="bg-[#F0F7FF] rounded px-2 py-1">
            <p className="text-[8px] text-[#0068f5] font-mono mb-0.5">🖥 Desktop</p>
            <code className="text-[10px] font-mono text-[#0c3058]">{t.desk}</code>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2 py-1.5 border-b border-[#f8fafc] last:border-0">
      <span className="text-[10px] text-[#7a93b8] w-[88px] shrink-0 font-['Rubik',sans-serif]">{t.label}</span>
      <div className="flex items-center gap-1.5 flex-1 min-w-0">
        {isColor && <span className="size-3 rounded-sm shrink-0 border border-[#e0e0e0]" style={{ backgroundColor: t.value }} />}
        <code className="text-[10px] font-mono text-[#0c3058] break-all leading-tight">{t.value}</code>
        {t.type !== "state" && (
          <button onClick={() => { navigator.clipboard.writeText(t.value); setCp(true); setTimeout(() => setCp(false), 1400); }}
            className="shrink-0 text-[#b0c4d8] hover:text-[#0068f5]">
            {cp ? <Check size={9} className="text-[#7ad94a]" /> : <Copy size={9} />}
          </button>
        )}
      </div>
    </div>
  );
}

function SpecCard({ spec }: { spec: ComponentSpec }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border border-[#e8edf5] rounded-[8px] overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-3 py-2.5 bg-[#f9fafb] hover:bg-[#f1f5fb] transition-colors">
        <span className="size-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ backgroundColor: P }}>{spec.num}</span>
        <span className="flex-1 text-[12px] font-medium text-[#0c3058] text-right font-['Rubik',sans-serif]">{spec.name}</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded-full text-white" style={{ backgroundColor: TAG_COLORS[spec.tag] }}>{spec.tag}</span>
        {open ? <ChevronUp size={11} className="text-[#7a93b8] shrink-0" /> : <ChevronDown size={11} className="text-[#7a93b8] shrink-0" />}
      </button>
      {open && (
        <div className="px-3 py-2 bg-white">
          {spec.tokens.map((t, i) => <TokenRow key={i} t={t} />)}
          {spec.states && (
            <div className="mt-2 pt-2 border-t border-[#f1f5fb]">
              <p className="text-[10px] font-medium text-[#7a93b8] mb-1 font-['Rubik',sans-serif]">States</p>
              <div className="flex flex-wrap gap-1">
                {spec.states.map(s => <span key={s} className="text-[10px] bg-[#f1f5fb] text-[#0c3058] px-2 py-0.5 rounded font-mono">{s}</span>)}
              </div>
            </div>
          )}
          {spec.note && <p className="mt-2 pt-2 border-t border-[#f1f5fb] text-[10px] text-[#7a93b8] font-['Rubik',sans-serif] leading-relaxed">{spec.note}</p>}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── RESPONSIVE BREAKPOINTS TABLE ───────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
interface BPRow { property: string; mobile: string; desktop: string; breakpoint?: string; }
function BreakpointsTable({ rows }: { rows: BPRow[] }) {
  return (
    <div className="bg-white rounded-[10px] border border-[#e8edf5] overflow-hidden mt-4">
      <div className="bg-[#f0f7ff] px-4 py-2.5 border-b border-[#e8edf5] flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#0c3058] font-['Rubik',sans-serif]">Responsive Breakpoints</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1"><Smartphone size={11} className="text-[#CC6600]" /><span className="text-[10px] font-mono text-[#CC6600]">&lt; 768px (default)</span></div>
          <div className="flex items-center gap-1"><Monitor size={11} className="text-[#0068f5]" /><span className="text-[10px] font-mono text-[#0068f5]">md: ≥ 768px</span></div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-right min-w-[400px]">
          <thead>
            <tr className="bg-[#f9fafb] border-b border-[#e8edf5]">
              <th className="px-4 py-2 text-[10px] font-semibold text-[#7a93b8] text-right font-['Rubik',sans-serif] w-[36%]">Property</th>
              <th className="px-4 py-2 text-[10px] font-semibold text-[#CC6600] text-right font-['Rubik',sans-serif] w-[28%]">📱 Mobile</th>
              <th className="px-4 py-2 text-[10px] font-semibold text-[#0068f5] text-right font-['Rubik',sans-serif] w-[28%]">🖥 Desktop (md:)</th>
              <th className="px-4 py-2 text-[10px] font-semibold text-[#7a93b8] text-right font-['Rubik',sans-serif] w-[8%]">BP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f8fafc]">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-[#fafbfd] transition-colors">
                <td className="px-4 py-2 text-[11px] font-medium text-[#0c3058] font-['Rubik',sans-serif]">{r.property}</td>
                <td className="px-4 py-2"><code className="text-[10px] font-mono text-[#CC6600] bg-[#fff9ec] px-1.5 py-0.5 rounded">{r.mobile}</code></td>
                <td className="px-4 py-2"><code className="text-[10px] font-mono text-[#0068f5] bg-[#f0f7ff] px-1.5 py-0.5 rounded">{r.desktop}</code></td>
                <td className="px-4 py-2 text-center"><code className="text-[9px] font-mono text-[#7a93b8]">{r.breakpoint ?? "md:"}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── SCREEN SPEC DATA ───────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

// Shared BP rows that appear on most screens
const sharedCardBP: BPRow[] = [
  { property: "Card border-radius", mobile: "12px", desktop: "16px" },
  { property: "Card padding H", mobile: "px-5 (20px)", desktop: "px-10 (40px)" },
  { property: "Card padding V", mobile: "py-5 (20px)", desktop: "py-8 (32px)" },
  { property: "Card outer margin H", mobile: "px-4 (16px)", desktop: "px-8 (32px)" },
  { property: "Gov Header height", mobile: "65px", desktop: "65px", breakpoint: "—" },
  { property: "Page Header image", mobile: "50×50px", desktop: "60×60px" },
];

const s1BP: BPRow[] = [
  ...sharedCardBP,
  { property: "Screen title font", mobile: "20px / 700", desktop: "24px / 700" },
  { property: "Subtitle font", mobile: "14px / 300", desktop: "16px / 300" },
  { property: "Textarea font", mobile: "15px", desktop: "16px" },
  { property: "Search button H", mobile: "38px (same)", desktop: "38px (same)", breakpoint: "—" },
  { property: "Quick topics grid", mobile: "grid-cols-1", desktop: "grid-cols-2", breakpoint: "sm:" },
  { property: "Textarea H", mobile: "48px", desktop: "48px", breakpoint: "—" },
  { property: "AI icon size", mobile: "52px (same)", desktop: "52px (same)", breakpoint: "—" },
];
const s2BP: BPRow[] = [
  ...sharedCardBP,
  { property: "Spinner size", mobile: "48px (same)", desktop: "48px (same)", breakpoint: "—" },
  { property: "Shimmer text font", mobile: "16px (same)", desktop: "16px (same)", breakpoint: "—" },
  { property: "UserQueryDisplay padding", mobile: "p-3", desktop: "p-3 (same)", breakpoint: "—" },
];
const s3BP: BPRow[] = [
  ...sharedCardBP,
  { property: "Alert title font", mobile: "15px / 500", desktop: "15px / 500", breakpoint: "—" },
  { property: "Alert body font", mobile: "14px / 400", desktop: "14px / 400", breakpoint: "—" },
  { property: "Alert RTL accent", mobile: "border-right: 4px", desktop: "border-right: 4px", breakpoint: "—" },
  { property: "Textarea font", mobile: "15px", desktop: "16px" },
];
const s4BP: BPRow[] = [
  ...sharedCardBP,
  { property: "Option button padding", mobile: "px-3 py-3", desktop: "px-4 py-3.5" },
  { property: "Option text font", mobile: "15px", desktop: "15px (same)", breakpoint: "—" },
  { property: "Free text input font", mobile: "15px", desktop: "15px (same)", breakpoint: "—" },
  { property: "Send icon button", mobile: "34×34px", desktop: "34×34px", breakpoint: "—" },
];
const s5BP: BPRow[] = [
  ...sharedCardBP,
  { property: "Result topic title", mobile: "17px / 600", desktop: "19px / 600" },
  { property: "Result link min-H", mobile: "48px (same)", desktop: "48px (same)", breakpoint: "—" },
  { property: "Result link font", mobile: "14px / 500", desktop: "15px / 500" },
  { property: "CTA button height", mobile: "50px (same)", desktop: "50px (same)", breakpoint: "—" },
  { property: "CTA font", mobile: "13px / 500", desktop: "14px / 500" },
  { property: "Additional topic title", mobile: "14px / 600", desktop: "14px / 600", breakpoint: "—" },
];

const screen1Specs: ComponentSpec[] = [
  {
    num: 1, name: "Gov Header", tag: "Layout",
    tokens: [
      { label: "Height", value: "65px", type: "size" },
      { label: "Background", value: GRAD, type: "color" },
      { label: "Padding H", value: "px-4", type: "size", mob: "px-4 (16px)", desk: "px-8 (32px)" },
      { label: "Logo size", mob: "~90px wide", desk: "116.88×52.256px", value: "", type: "size" },
      { label: "Nav font", mob: "14px", desk: "16px", value: "", type: "font" },
    ],
    note: "sticky top-0 z-50",
  },
  {
    num: 2, name: "Page Header", tag: "Layout",
    tokens: [
      { label: "BG", value: "#EAF0F8", type: "color" },
      { label: "Radius", value: "8px", type: "radius" },
      { label: "Avatar gradient", value: GRAD, type: "color" },
      { label: "Avatar size", mob: "42px", desk: "42px (same)", value: "", type: "size" },
      { label: "Title font", mob: "14px / 500", desk: "16px / 500", value: "", type: "font" },
      { label: "Building image", mob: "50×50px", desk: "60×60px", value: "", type: "size" },
    ],
  },
  {
    num: 3, name: "AI Icon", tag: "Icon",
    tokens: [
      { label: "Size", value: "52×52px", type: "size" },
      { label: "Radius", value: "50% rounded-full", type: "radius" },
      { label: "Background", value: AI_GRAD, type: "color" },
      { label: "Shadow", value: "0px 2px 10px rgba(12,48,88,0.28)", type: "shadow" },
      { label: "Icon", value: "SVG 21×21px fill+stroke white", type: "code" },
    ],
    states: ["Static — no interaction"],
  },
  {
    num: 4, name: "Screen Title", tag: "Typography",
    tokens: [
      { label: "Font", value: "Rubik / 700 Bold", type: "font" },
      { label: "Size", mob: "20px / lh 30px", desk: "24px / lh 36px", value: "", type: "size" },
      { label: "Color", value: "#0c3058", type: "color" },
      { label: "Align", value: "text-center", type: "code" },
    ],
  },
  {
    num: 5, name: "Subtitle", tag: "Typography",
    tokens: [
      { label: "Font", value: "Rubik / 300 Light", type: "font" },
      { label: "Size", mob: "14px / lh 22px", desk: "16px / lh 25px", value: "", type: "size" },
      { label: "Color", value: "#4a5e78", type: "color" },
      { label: "Align", value: "text-center", type: "code" },
    ],
  },
  {
    num: 6, name: "Search Textarea", tag: "Interactive",
    tokens: [
      { label: "BG", value: "#f9fafb", type: "color" },
      { label: "Border default", value: "1px solid #8596af (border.subtle-default)", type: "border" },
      { label: "Border focus", value: "1px solid #0068f5 (border.focused)", type: "border" },
      { label: "Radius", value: "10px", type: "radius" },
      { label: "Padding", mob: "p-3", desk: "p-4", value: "", type: "size" },
      { label: "Textarea H", value: "h-[48px] resize-none", type: "size" },
      { label: "Font", mob: "15px / #0c3058", desk: "16px / #0c3058", value: "", type: "font" },
      { label: "Placeholder", value: "#a0aec0", type: "color" },
      { label: "Max length", value: "200 chars", type: "code" },
    ],
    states: ["Default", "Focus (border #0068f5)", "Filled"],
    note: "Divider border-t #e8eaed מפריד textarea מכפתורים.",
  },
  {
    num: 7, name: "Search Button (Primary)", tag: "Interactive",
    tokens: [
      { label: "Height", value: "38px", type: "size" },
      { label: "Padding H", value: "px-5 (20px)", type: "size" },
      { label: "Radius", value: "7px", type: "radius" },
      { label: "BG Default", value: "#0068f5", type: "color" },
      { label: "BG Hover", value: "#0057cc", type: "color" },
      { label: "BG Pressed", value: "#0045a3", type: "color" },
      { label: "BG Disabled", value: "#f0f3f6", type: "color" },
      { label: "Text", value: "Rubik Medium 14px / white", type: "font" },
      { label: "Focus ring", value: "outline 2px #0068f5, offset 2px", type: "border" },
    ],
    states: ["Disabled (empty field)", "Default", "Hover", "Active (pressed)"],
    note: "Hover/Active: JS inline style onMouseEnter/Leave/Down/Up (not Tailwind).",
  },
  {
    num: 8, name: "Char Counter", tag: "Typography",
    tokens: [
      { label: "Font", value: "Rubik 12px / Regular", type: "font" },
      { label: "Color", value: "#9aadcc", type: "color" },
      { label: "Format", value: "{length}/200", type: "code" },
    ],
  },
  {
    num: 9, name: "Quick Topic Chip", tag: "Interactive",
    tokens: [
      { label: "BG Default", value: "#FFFFFF", type: "color" },
      { label: "BG Hover", value: "#F0F7FF", type: "color" },
      { label: "Border Default", value: "1px solid #e0e0e0", type: "border" },
      { label: "Border Hover", value: "1px solid #0068f5", type: "border" },
      { label: "Radius", value: "8px", type: "radius" },
      { label: "Padding", mob: "px-3 py-3", desk: "px-4 py-3.5", value: "", type: "size" },
      { label: "Text font", mob: "13px", desk: "14px", value: "", type: "font" },
      { label: "Text color", value: "#0c3058", type: "color" },
      { label: "Grid", mob: "grid-cols-1 (< 640px)", desk: "grid-cols-2 (≥ 640px sm:)", value: "", type: "code" },
    ],
    states: ["Default", "Hover (+shadow-sm, border #0068f5)", "Focus ring"],
  },
];

const screen2Specs: ComponentSpec[] = [
  {
    num: 1, name: "UserQueryDisplay", tag: "Feedback",
    tokens: [
      { label: "BG", value: "#f1f5fb", type: "color" },
      { label: "Border", value: "1px solid #e8edf5", type: "border" },
      { label: "Radius", value: "8px", type: "radius" },
      { label: "Padding", value: "p-3", type: "size" },
      { label: "Avatar size", value: "30px / rounded-full / bg #0068f5", type: "size" },
      { label: "Avatar icon", value: "imgVIcon (Figma asset) 18×18px", type: "code" },
      { label: "Label", value: "Rubik 11px / #7a93b8 — \"הפנייה שלך\"", type: "font" },
      { label: "Query text", value: "Rubik 14px / #0c3058", type: "font" },
    ],
    note: "מוצג בכל step חוץ מ-initial. לחיצת ערוך → handleBackToSearch().",
  },
  {
    num: 2, name: "Edit Button (ערוך)", tag: "Interactive",
    tokens: [
      { label: "Color Default", value: "#7a93b8", type: "color" },
      { label: "Color Hover", value: "#0068f5", type: "color" },
      { label: "BG Hover", value: "#FFFFFF", type: "color" },
      { label: "Font", value: "Rubik 12px", type: "font" },
      { label: "Radius", value: "5px", type: "radius" },
      { label: "Padding", value: "px-2 py-1", type: "size" },
    ],
    states: ["Default", "Hover"],
  },
  {
    num: 3, name: "Loader Spinner", tag: "Icon",
    tokens: [
      { label: "Component", value: "imports/Loader48Px.tsx", type: "code" },
      { label: "Size", value: "48×48px", type: "size" },
      { label: "Animation", value: "animate-spin (Tailwind)", type: "code" },
      { label: "Color", value: "#0068f5 (CSS color on container)", type: "color" },
    ],
    note: "מוצג ל-800ms לפני מעבר למסך הבא.",
  },
  {
    num: 4, name: "Shimmer Text", tag: "Typography",
    tokens: [
      { label: "Font", mob: "16px", desk: "16px (same)", value: "", type: "font" },
      { label: "Align", value: "text-center", type: "code" },
      { label: "Gradient", value: "110deg, #4a4a4a 35%, #0068f5 50%, #4a4a4a", type: "color" },
      { label: "BG size", value: "200% 100%", type: "size" },
      { label: "Animation", value: "backgroundPosition 200%→-200%, 2.5s linear ∞", type: "code" },
      { label: "Library", value: "motion/react — motion.p animate", type: "code" },
    ],
  },
];

const screen3Specs: ComponentSpec[] = [
  { num: 1, name: "UserQueryDisplay", tag: "Feedback", tokens: [{ label: "→ See", value: "Screen 2 · Spec #1", type: "code" }] },
  {
    num: 2, name: "Warning Alert", tag: "Feedback",
    tokens: [
      { label: "BG", value: "#fff9ec", type: "color" },
      { label: "Border", value: "1px solid #e8a000", type: "border" },
      { label: "RTL Accent R", value: "border-right: 4px solid #CC6600", type: "border" },
      { label: "Radius", value: "8px", type: "radius" },
      { label: "Padding", mob: "px-3 py-3", desk: "px-4 py-3.5", value: "", type: "size" },
      { label: "Title font", value: "Rubik Medium 500 / 15px / #0c3058", type: "font" },
      { label: "Body font", value: "Rubik Regular / 14px / #4a4a4a", type: "font" },
      { label: "Icon", value: "alertIconPaths SVG 20×20px / fill #CC6600", type: "code" },
    ],
    note: "RTL leading edge = border-right (לא border-left).",
  },
  {
    num: 3, name: "Rephrase Textarea", tag: "Interactive",
    tokens: [
      { label: "→ Same as", value: "Screen 1 · Search Textarea (Spec #6)", type: "code" },
      { label: "Textarea H", value: "h-[44px]", type: "size" },
      { label: "Placeholder", value: "\"לדוגמה: רוצה לברר על זכאות למחיר מטרה\"", type: "code" },
    ],
    states: ["Default", "Focus", "Filled"],
    note: "onSubmit → handleClarificationSubmit() → detectTopic(clarificationQuery).",
  },
];

const screen4Specs: ComponentSpec[] = [
  { num: 1, name: "UserQueryDisplay", tag: "Feedback", tokens: [{ label: "→ See", value: "Screen 2 · Spec #1", type: "code" }] },
  {
    num: 2, name: "Info Alert", tag: "Feedback",
    tokens: [
      { label: "BG", value: "#f0f7ff", type: "color" },
      { label: "Border", value: "1px solid #90caf9", type: "border" },
      { label: "RTL Accent R", value: "border-right: 4px solid #0068f5 (border.brand-default)", type: "border" },
      { label: "Radius", value: "10px", type: "radius" },
      { label: "Padding", mob: "px-3 py-2.5", desk: "px-5 py-4", value: "", type: "size" },
      { label: "Text font", value: "Rubik Regular / 15px / #0c3058", type: "font" },
    ],
    note: "Identical structure to Warning Alert — only colors differ.",
  },
  {
    num: 3, name: "Option Button", tag: "Interactive",
    tokens: [
      { label: "BG Default", value: "#FFFFFF", type: "color" },
      { label: "BG Hover", value: "#F0F7FF", type: "color" },
      { label: "BG Active", value: "#e3eeff", type: "color" },
      { label: "Border Default", value: "1px solid #dde4ef", type: "border" },
      { label: "Border Hover", value: "1px solid #0068f5", type: "border" },
      { label: "Radius", value: "8px", type: "radius" },
      { label: "Padding", mob: "px-3 py-2.5", desk: "px-4 py-3.5", value: "", type: "size" },
      { label: "Text font", value: "Rubik Regular / 15px / #0c3058", type: "font" },
      { label: "Chevron icon", value: "newDesignSvgPaths.p2631d280 + p17499200 / stroke #0068f5", type: "code" },
    ],
    states: ["Default", "Hover (+shadow-sm)", "Active", "Focus ring 2px #0068f5"],
    note: "onClick → handleOptionClick(option.id). id !== 'other' → onSubmit(optionId) → results.",
  },
  {
    num: 4, name: "Free Text Input + Send", tag: "Interactive",
    tokens: [
      { label: "Container BG", value: "#FFFFFF → #F0F7FF (focus-within)", type: "color" },
      { label: "Container border", value: "#dde4ef → #0068f5 (focus-within)", type: "border" },
      { label: "Radius", value: "8px", type: "radius" },
      { label: "Input font", value: "Rubik 15px / #0c3058", type: "font" },
      { label: "Send btn size", value: "34×34px", type: "size" },
      { label: "Send btn radius", value: "6px", type: "radius" },
      { label: "Send btn BG", value: "#0068f5", type: "color" },
      { label: "Disabled opacity", value: "0.4", type: "code" },
    ],
    states: ["Default", "Focus (bg + border change)", "Filled", "Disabled (opacity 0.4)"],
    note: "Enter (no shift) = גם מגיש. onSubmit(userInput) → חוזר לזרימה הראשית.",
  },
];

const screen5Specs: ComponentSpec[] = [
  { num: 1, name: "UserQueryDisplay", tag: "Feedback", tokens: [{ label: "→ See", value: "Screen 2 · Spec #1", type: "code" }] },
  {
    num: 2, name: "Results Card Container", tag: "Layout",
    tokens: [
      { label: "BG", value: "#FFFFFF", type: "color" },
      { label: "Border", value: "1px solid #c3cfe7", type: "border" },
      { label: "Radius", value: "10px", type: "radius" },
      { label: "Padding", mob: "p-5 (20px)", desk: "p-7 (28px)", value: "", type: "size" },
    ],
  },
  {
    num: 3, name: "Topic Label + Title", tag: "Typography",
    tokens: [
      { label: "Label font", value: "Rubik 13px / #7a93b8", type: "font" },
      { label: "Title font", mob: "17px / SemiBold 600", desk: "19px / SemiBold 600", value: "", type: "font" },
      { label: "Title color", value: "#0c3058", type: "color" },
      { label: "Divider", value: "border-b #e8edf5 / pb-3 mb-4", type: "border" },
    ],
  },
  {
    num: 4, name: "Result Link Item", tag: "Interactive",
    tokens: [
      { label: "BG Hover", value: "#f1f5fb", type: "color" },
      { label: "Border Default", value: "1px solid #c3cfe7", type: "border" },
      { label: "Border Hover", value: "1px solid #0068f5", type: "border" },
      { label: "Radius", value: "8px", type: "radius" },
      { label: "Min height", value: "48px (WCAG touch target)", type: "size" },
      { label: "Padding", value: "px-4 py-2.5", type: "size" },
      { label: "Text font", mob: "14px / Medium 500", desk: "15px / Medium 500", value: "", type: "font" },
      { label: "Text color", value: "#0068f5 (text.link-default)", type: "color" },
      { label: "Text decoration", value: "underline — WCAG 2.1 AA required", type: "code" },
      { label: "Focus ring", value: "outline 2px #0068f5, offset 2px", type: "border" },
    ],
    states: ["Default", "Hover (border + bg)", "Focus"],
    note: "target='_blank' rel='noopener noreferrer'. Underline חובה לנגישות.",
  },
  {
    num: 5, name: "CTA Button Full Width", tag: "Interactive",
    tokens: [
      { label: "Height", value: "50px", type: "size" },
      { label: "Width", value: "100%", type: "size" },
      { label: "Radius", value: "8px", type: "radius" },
      { label: "BG Default", value: "#0068f5", type: "color" },
      { label: "BG Hover", value: "#0057cc", type: "color" },
      { label: "BG Pressed", value: "#0045a3", type: "color" },
      { label: "Text font", mob: "13px / Medium", desk: "14px / Medium", value: "", type: "font" },
      { label: "Text color", value: "#FFFFFF", type: "color" },
    ],
    states: ["Default", "Hover", "Active (pressed)"],
  },
  {
    num: 6, name: "Additional Topics Accordion", tag: "Interactive",
    tokens: [
      { label: "Container BG", value: "#FFFFFF", type: "color" },
      { label: "Container border", value: "1px solid #c3cfe7", type: "border" },
      { label: "Radius", value: "10px", type: "radius" },
      { label: "Header font", value: "Rubik Medium / 14px / #0c3058", type: "font" },
      { label: "Chevron", value: "ChevronUp/Down 16px / #6b7280", type: "code" },
      { label: "Divider", value: "border-b #e8edf5 / pb-3.5 mb-3.5", type: "border" },
    ],
    states: ["Collapsed (default)", "Expanded"],
    note: "showAdditionalTopics — useState boolean. אייטמים: grid-cols-1 sm:grid-cols-2.",
  },
  {
    num: 7, name: "Additional Topic Card", tag: "Interactive",
    tokens: [
      { label: "Border Default", value: "1px solid #dde4ef", type: "border" },
      { label: "Border Hover", value: "1px solid #0068f5", type: "border" },
      { label: "BG Hover", value: "#f1f5fb", type: "color" },
      { label: "Radius", value: "8px", type: "radius" },
      { label: "Title font", value: "Rubik SemiBold / 14px / #0c3058", type: "font" },
      { label: "Subtitle font", value: "Rubik Regular / 12px / #7a93b8", type: "font" },
    ],
    states: ["Default", "Hover"],
  },
  {
    num: 8, name: "Bottom Link", tag: "Interactive",
    tokens: [
      { label: "Text font", value: "Rubik 13px / #7a93b8", type: "font" },
      { label: "Link color", value: "#0068f5 (text.link-default)", type: "color" },
      { label: "Align", value: "text-center w-full", type: "code" },
    ],
    note: "handleBackToSearch() → currentStep = 'initial', searchQuery = ''",
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── ICON TILE ──────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
interface IconDef {
  name: string; nameEn: string; size: string; usedIn: string;
  importVar: string; file: string; importCode: string;
  bg: string; render: React.ReactNode;
}
function IconTile({ name, nameEn, size, usedIn, importVar, file, importCode, bg, render }: IconDef) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="bg-white rounded-[10px] border border-[#e8edf5] p-3 flex flex-col items-center gap-2.5 hover:border-[#c3cfe7] transition-colors">
      {/* Preview area */}
      <div className="size-14 flex items-center justify-center rounded-[8px] border border-[#e8edf5]"
        style={{ background: bg }}>
        {render}
      </div>
      {/* Name */}
      <div className="text-center w-full">
        <p className="text-[12px] font-semibold text-[#0c3058] font-['Rubik',sans-serif] leading-tight">{name}</p>
        <p className="text-[10px] text-[#7a93b8] font-['Rubik',sans-serif]">{nameEn}</p>
      </div>
      {/* Import var */}
      <code className="text-[9px] font-mono text-[#0B5394] bg-[#f0f7ff] px-2 py-0.5 rounded-[4px] w-full text-center truncate">{importVar}</code>
      {/* Meta rows */}
      <div className="w-full space-y-0.5">
        <div className="flex justify-between items-center">
          <span className="text-[9px] text-[#9aadcc] font-['Rubik',sans-serif]">קובץ</span>
          <code className="text-[9px] font-mono text-[#4a5e78] truncate max-w-[100px]">{file}</code>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[9px] text-[#9aadcc] font-['Rubik',sans-serif]">גודל</span>
          <code className="text-[9px] font-mono text-[#4a5e78]">{size}</code>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[9px] text-[#9aadcc] font-['Rubik',sans-serif]">שימוש</span>
          <span className="text-[9px] text-[#0B5394] font-['Rubik',sans-serif]">{usedIn}</span>
        </div>
      </div>
      {/* Copy import */}
      <button onClick={() => { navigator.clipboard.writeText(importCode); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
        className="w-full flex items-center justify-center gap-1 px-2 py-1.5 rounded-[6px] bg-[#f1f5fb] border border-[#e8edf5] hover:bg-[#e8f0fb] hover:border-[#c3cfe7] transition-colors">
        {copied
          ? <><Check size={9} className="text-[#7ad94a]" /><span className="text-[9px] text-[#7ad94a] font-['Rubik',sans-serif]">Copied!</span></>
          : <><Copy size={9} className="text-[#7a93b8]" /><span className="text-[9px] text-[#7a93b8] font-['Rubik',sans-serif]">Copy import</span></>
        }
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── COMPONENT SHOWCASE ─────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
type BtnState = "default" | "hover" | "active" | "disabled" | "focus";

function StateLabel({ state, active, onClick }: { state: BtnState; active: boolean; onClick: () => void }) {
  const labels: Record<BtnState, string> = {
    default: "Default", hover: "Hover", active: "Active", disabled: "Disabled", focus: "Focus"
  };
  const colors: Record<BtnState, string> = {
    default: "#4a5e78", hover: "#0B5394", active: "#073763", disabled: "#CC6600", focus: "#7ad94a"
  };
  return (
    <button onClick={onClick}
      className="px-2.5 py-1 rounded-[5px] text-[10px] font-['Rubik',sans-serif] border transition-all"
      style={{
        backgroundColor: active ? colors[state] : "transparent",
        borderColor: active ? colors[state] : "#e8edf5",
        color: active ? "white" : colors[state],
      }}>
      {labels[state]}
    </button>
  );
}

function CompBlock({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[12px] border border-[#e8edf5] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#e8edf5] bg-[#f9fafb]">
        <p className="text-[13px] font-semibold text-[#0c3058] font-['Rubik',sans-serif]">{title}</p>
        {note && <code className="text-[10px] font-mono text-[#7a93b8] bg-white px-2 py-0.5 rounded border border-[#e8edf5]">{note}</code>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function TokenGrid({ tokens }: { tokens: { label: string; value: string; color?: string }[] }) {
  return (
    <div className="mt-4 pt-4 border-t border-[#f1f5fb] grid grid-cols-2 sm:grid-cols-3 gap-2">
      {tokens.map(t => (
        <div key={t.label} className="flex items-center gap-2 bg-[#f9fafb] rounded-[6px] px-2.5 py-1.5">
          {t.color && <span className="size-3 rounded-sm border border-[#e0e0e0] shrink-0" style={{ background: t.color }} />}
          <div className="min-w-0">
            <p className="text-[9px] text-[#9aadcc] font-['Rubik',sans-serif] truncate">{t.label}</p>
            <code className="text-[10px] font-mono text-[#4a5e78] truncate block">{t.value}</code>
          </div>
        </div>
      ))}
    </div>
  );
}

function ComponentShowcase() {
  /* ── Primary Button ── */
  const [btnState, setBtnState] = useState<BtnState>("default");
  const primaryStyles: Record<BtnState, React.CSSProperties> = {
    default:  { backgroundColor: "#0068f5", color: "white", cursor: "pointer" },
    hover:    { backgroundColor: "#0057cc", color: "white", cursor: "pointer" },
    active:   { backgroundColor: "#0045a3", color: "white", cursor: "pointer" },
    disabled: { backgroundColor: "#f0f3f6", color: "#8596af", cursor: "not-allowed" },
    focus:    { backgroundColor: "#0068f5", color: "white", outline: "2px solid #0068f5", outlineOffset: "2px", cursor: "pointer" },
  };

  /* ── Secondary Button ── */
  const [secState, setSecState] = useState<BtnState>("default");
  const secStyles: Record<BtnState, React.CSSProperties> = {
    default:  { backgroundColor: "#FFFFFF", border: "2px solid #0068f5", color: "#0068f5" },
    hover:    { backgroundColor: "#f0f7ff", border: "2px solid #0045a3", color: "#0045a3" },
    active:   { backgroundColor: "#ebf3ff", border: "2px solid #0045a3", color: "#0045a3" },
    disabled: { backgroundColor: "#f0f3f6", border: "2px solid #8596af", color: "#8596af", cursor: "not-allowed" },
    focus:    { backgroundColor: "#FFFFFF", border: "2px solid #0068f5", color: "#0068f5", outline: "2px solid #0068f5", outlineOffset: "2px" },
  };

  /* ── Link Button ── */
  const [linkState, setLinkState] = useState<BtnState>("default");
  const linkStyles: Record<BtnState, React.CSSProperties> = {
    default:  { color: "#0068f5", textDecoration: "underline", textDecorationColor: "#0068f5" },
    hover:    { color: "#0045a3", textDecoration: "underline", textDecorationColor: "#0045a3" },
    active:   { color: "#0045a3", textDecoration: "underline", textDecorationColor: "#0045a3" },
    disabled: { color: "#8596af", textDecoration: "none", cursor: "not-allowed" },
    focus:    { color: "#0068f5", textDecoration: "underline", textDecorationColor: "#0068f5", outline: "2px solid #0068f5", outlineOffset: "2px", borderRadius: 4 },
  };

  /* ── Quick Topic Chip ── */
  const [chipState, setChipState] = useState<BtnState>("default");
  const chipStyles: Record<BtnState, React.CSSProperties> = {
    default:  { backgroundColor: "#FFFFFF", border: "1px solid #e0e0e0", boxShadow: "none" },
    hover:    { backgroundColor: "#F0F7FF", border: "1px solid #0068f5", boxShadow: "0 1px 3px rgba(0,104,245,0.12)" },
    active:   { backgroundColor: "#ebf3ff", border: "1px solid #0045a3" },
    disabled: { backgroundColor: "#f0f3f6", border: "1px solid #8596af", opacity: 0.6 },
    focus:    { backgroundColor: "#FFFFFF", border: "1px solid #0068f5", outline: "2px solid #0068f5", outlineOffset: "2px" },
  };

  /* ── Input ── */
  const [inputState, setInputState] = useState<BtnState>("default");
  const inputStyles: Record<BtnState, React.CSSProperties> = {
    default:  { backgroundColor: "#FFFFFF", border: "1px solid #8596af", boxShadow: "none" },
    hover:    { backgroundColor: "#FFFFFF", border: "1px solid #455163" },
    active:   { backgroundColor: "#FFFFFF", border: "1px solid #0068f5", boxShadow: "0 0 0 3px rgba(0,104,245,0.12)" },
    focus:    { backgroundColor: "#FFFFFF", border: "1px solid #0068f5", boxShadow: "0 0 0 3px rgba(0,104,245,0.12)", outline: "none" },
    disabled: { backgroundColor: "#f0f3f6", border: "1px solid #8596af", opacity: 1 },
  };

  /* ── Option Button ── */
  const [optState, setOptState] = useState<BtnState>("default");
  const optStyles: Record<BtnState, React.CSSProperties> = {
    default:  { backgroundColor: "#FFFFFF", border: "1px solid #dde4ef" },
    hover:    { backgroundColor: "#f0f7ff", border: "1px solid #b0c4d8", boxShadow: "0 1px 3px rgba(11,83,148,0.08)" },
    active:   { backgroundColor: "#e0eefb", border: "1px solid #0B5394" },
    disabled: { backgroundColor: "#f9fafb", border: "1px solid #e8edf5", opacity: 0.5 },
    focus:    { backgroundColor: "#FFFFFF", border: "1px solid #0B5394", outline: "2px solid #0B5394", outlineOffset: "2px" },
  };

  /* ── Edit Button ── */
  const [editState, setEditState] = useState<BtnState>("default");
  const editStyles: Record<BtnState, React.CSSProperties> = {
    default:  { backgroundColor: "transparent", color: "#7a93b8" },
    hover:    { backgroundColor: "#FFFFFF", color: "#0068f5", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
    active:   { backgroundColor: "#f0f7ff", color: "#0045a3" },
    disabled: { backgroundColor: "transparent", color: "#8596af", cursor: "not-allowed" },
    focus:    { backgroundColor: "transparent", color: "#0068f5", outline: "2px solid #0068f5", outlineOffset: "2px" },
  };

  /* ── Textarea ── */
  const [taState, setTaState] = useState<BtnState>("default");
  const taStyles: Record<BtnState, React.CSSProperties> = {
    default:  { backgroundColor: "#f9fafb", border: "1px solid #d1d9e6" },
    hover:    { backgroundColor: "#f9fafb", border: "1px solid #b0c4d8" },
    active:   { backgroundColor: "#FFFFFF", border: "1px solid #0B5394", boxShadow: "0 0 0 3px rgba(11,83,148,0.12)" },
    focus:    { backgroundColor: "#FFFFFF", border: "1px solid #0B5394", boxShadow: "0 0 0 3px rgba(11,83,148,0.12)" },
    disabled: { backgroundColor: "#f1f5fb", border: "1px solid #e8edf5", opacity: 0.6 },
  };

  return (
    <div className="space-y-5" dir="rtl">

      {/* ── 0. Button Overview — כל 3 הוורינטים ── */}
      <CompBlock title="סקירת כפתורים — Button Variants (IGDS)" note="variant: primary | secondary | link">
        <div className="flex items-center justify-center gap-4 flex-wrap bg-[#f1f5fb] rounded-[10px] p-8 mb-4">
          {/* Primary */}
          <button style={{
            backgroundColor: "#0068f5", border: "none", color: "white",
            height: 48, borderRadius: 8, padding: "0 24px",
            fontFamily: "Rubik,sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer",
          }}>כפתור ראשי</button>
          {/* Secondary */}
          <button style={{
            backgroundColor: "#FFFFFF", border: "2px solid #0068f5", color: "#0068f5",
            height: 48, borderRadius: 8, padding: "0 22px",
            fontFamily: "Rubik,sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer",
          }}>כפתור ראשי</button>
          {/* Link */}
          <button style={{
            background: "none", border: "none", color: "#0068f5",
            textDecoration: "underline", textDecorationColor: "#0068f5",
            fontFamily: "Rubik,sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer",
          }}>כפתור ראשי</button>
        </div>
        {/* Disabled row */}
        <div className="bg-[#f9fafb] rounded-[8px] border border-[#e8edf5] p-4 mb-3">
          <p className="text-[10px] font-semibold text-[#7a93b8] uppercase tracking-wider mb-3 font-['Rubik',sans-serif]">
            Disabled State · BG <code className="font-mono">#f0f3f6</code> · Text <code className="font-mono">#8596af</code> (grey-color.200 / grey-color.600)
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col items-center gap-1.5">
              <button disabled style={{
                backgroundColor: "#f0f3f6", border: "none", color: "#8596af",
                height: 48, borderRadius: 8, padding: "0 24px",
                fontFamily: "Rubik,sans-serif", fontSize: 16, fontWeight: 500, cursor: "not-allowed",
              }}>לִמְחוֹק</button>
              <code className="text-[9px] font-mono text-[#7a93b8]">primary disabled</code>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <button disabled style={{
                backgroundColor: "#f0f3f6", border: "2px solid #8596af", color: "#8596af",
                height: 48, borderRadius: 8, padding: "0 22px",
                fontFamily: "Rubik,sans-serif", fontSize: 16, fontWeight: 500, cursor: "not-allowed",
              }}>לִמְחוֹק</button>
              <code className="text-[9px] font-mono text-[#7a93b8]">secondary disabled</code>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <button disabled style={{
                background: "none", border: "none", color: "#8596af",
                textDecoration: "none",
                fontFamily: "Rubik,sans-serif", fontSize: 16, fontWeight: 500, cursor: "not-allowed",
              }}>לִמְחוֹק</button>
              <code className="text-[9px] font-mono text-[#7a93b8]">link disabled</code>
            </div>
          </div>
        </div>

        {/* Size comparison */}
        <div className="bg-[#f9fafb] rounded-[8px] border border-[#e8edf5] p-4">
          <p className="text-[10px] font-semibold text-[#7a93b8] uppercase tracking-wider mb-3 font-['Rubik',sans-serif]">Medium (default) · גדלים</p>
          <div className="flex items-end gap-4 flex-wrap">
            {[
              { label: "Small", h: 36, px: "16px", fs: 14 },
              { label: "Medium", h: 48, px: "24px", fs: 16 },
              { label: "Large", h: 56, px: "32px", fs: 18 },
            ].map(({ label, h, px, fs }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <button style={{
                  backgroundColor: "#0068f5", border: "none", color: "white",
                  height: h, borderRadius: 8, padding: `0 ${px}`,
                  fontFamily: "Rubik,sans-serif", fontSize: fs, fontWeight: 500, cursor: "pointer",
                }}>{label}</button>
                <code className="text-[9px] font-mono text-[#7a93b8]">{h}px</code>
              </div>
            ))}
          </div>
        </div>
      </CompBlock>

      {/* ── 1. Primary Button ── */}
      <CompBlock title='variant="primary"' note="IGDS · כפתור ראשי">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          {(["default","hover","active","disabled","focus"] as BtnState[]).map(s =>
            <StateLabel key={s} state={s} active={btnState === s} onClick={() => setBtnState(s)} />
          )}
        </div>
        <div className="flex items-center justify-center bg-[#f1f5fb] rounded-[10px] p-8 mb-1">
          <button
            style={{
              ...primaryStyles[btnState],
              height: 48, borderRadius: 8, padding: "0 24px",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              border: "none", fontFamily: "Rubik,sans-serif", fontSize: 16, fontWeight: 500,
              transition: "background-color 0.15s",
            }}
            disabled={btnState === "disabled"}
          >
            כפתור ראשי
          </button>
        </div>
        <TokenGrid tokens={[
          { label: "BG Default", value: "#0068f5", color: "#0068f5" },
          { label: "BG Hover", value: "#0057cc", color: "#0057cc" },
          { label: "BG Pressed", value: "#0045a3", color: "#0045a3" },
          { label: "BG Disabled", value: "#f0f3f6", color: "#f0f3f6" },
          { label: "Text Default", value: "white" },
          { label: "Text Disabled", value: "#8596af", color: "#8596af" },
          { label: "Token", value: "brand-color .500/.600/.700" },
          { label: "Height (M)", value: "48px" },
          { label: "Height (S)", value: "36px" },
          { label: "Height (L)", value: "56px" },
          { label: "Radius", value: "8px" },
          { label: "Padding (M)", value: "0 24px" },
          { label: "Font", value: "Rubik 16px / 500" },
          { label: "Focus ring", value: "2px #0068f5 +2px" },
        ]} />
      </CompBlock>

      {/* ── 2. Secondary Button ── */}
      <CompBlock title='variant="secondary"' note="IGDS · כפתור משני">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          {(["default","hover","active","disabled","focus"] as BtnState[]).map(s =>
            <StateLabel key={s} state={s} active={secState === s} onClick={() => setSecState(s)} />
          )}
        </div>
        <div className="flex items-center justify-center bg-[#f1f5fb] rounded-[10px] p-8">
          <button
            style={{
              ...secStyles[secState],
              height: 48, borderRadius: 8, padding: "0 22px",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontFamily: "Rubik,sans-serif", fontSize: 16, fontWeight: 500,
              cursor: secState === "disabled" ? "not-allowed" : "pointer",
              transition: "all 0.15s",
            }}
            disabled={secState === "disabled"}
          >
            כפתור ראשי
          </button>
        </div>
        <TokenGrid tokens={[
          { label: "BG Default", value: "#FFFFFF", color: "#FFFFFF" },
          { label: "BG Hover", value: "#f0f7ff", color: "#f0f7ff" },
          { label: "BG Pressed", value: "#ebf3ff", color: "#ebf3ff" },
          { label: "BG Disabled", value: "#f0f3f6", color: "#f0f3f6" },
          { label: "Border Default", value: "2px solid #0068f5" },
          { label: "Border Hover", value: "2px solid #0045a3" },
          { label: "Border Pressed", value: "2px solid #0045a3" },
          { label: "Border Disabled", value: "2px solid #8596af", color: "#8596af" },
          { label: "Text Default", value: "#0068f5", color: "#0068f5" },
          { label: "Text Hover", value: "#0045a3", color: "#0045a3" },
          { label: "Text Disabled", value: "#8596af", color: "#8596af" },
          { label: "Token", value: "brand-color .500/.700, secondary-button-pressed" },
          { label: "Height (M)", value: "48px" },
          { label: "Radius", value: "8px" },
          { label: "Padding (M)", value: "0 22px (2px border)" },
          { label: "Font", value: "Rubik 16px / 500" },
        ]} />
      </CompBlock>

      {/* ── 2.5 Link Button ── */}
      <CompBlock title='variant="link"' note="IGDS · כפתור לינק">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          {(["default","hover","active","disabled","focus"] as BtnState[]).map(s =>
            <StateLabel key={s} state={s} active={linkState === s} onClick={() => setLinkState(s)} />
          )}
        </div>
        <div className="flex items-center justify-center bg-[#f1f5fb] rounded-[10px] p-8">
          <button
            style={{
              ...linkStyles[linkState],
              background: "none", border: "none",
              fontFamily: "Rubik,sans-serif", fontSize: 16, fontWeight: 500,
              cursor: linkState === "disabled" ? "not-allowed" : "pointer",
              padding: "4px 2px",
              transition: "color 0.15s",
            }}
            disabled={linkState === "disabled"}
          >
            כפתור ראשי
          </button>
        </div>
        <TokenGrid tokens={[
          { label: "BG", value: "transparent" },
          { label: "Border", value: "none" },
          { label: "Text Default", value: "#0068f5", color: "#0068f5" },
          { label: "Text Hover", value: "#0045a3", color: "#0045a3" },
          { label: "Text Active", value: "#0045a3", color: "#0045a3" },
          { label: "Text Disabled", value: "#8596af", color: "#8596af" },
          { label: "Token", value: "text.link-default (brand-color.500)" },
          { label: "Underline", value: "תמיד · צבע זהה לטקסט" },
          { label: "Underline Disabled", value: "ללא (none)" },
          { label: "Height", value: "auto (inline)" },
          { label: "Font", value: "Rubik 16px / 500" },
          { label: "Focus ring", value: "2px #0068f5 +2px" },
        ]} />
      </CompBlock>

      {/* ── 3. Quick Topic Chip ── */}
      <CompBlock title="Quick Topic Chip — כפתור נושא מהיר" note="button.chip">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          {(["default","hover","active","focus"] as BtnState[]).map(s =>
            <StateLabel key={s} state={s} active={chipState === s} onClick={() => setChipState(s)} />
          )}
        </div>
        <div className="flex items-center justify-center bg-[#f1f5fb] rounded-[10px] p-8">
          <button
            style={{ ...chipStyles[chipState], borderRadius: 8, padding: "12px 16px", fontFamily: "Rubik,sans-serif", minWidth: 200, textAlign: "right" as const, cursor: "pointer" }}
          >
            <span style={{ fontSize: 14, color: "#0c3058" }}>🏠 דיור ציבורי — בדיקת זכאות</span>
          </button>
        </div>
        <TokenGrid tokens={[
          { label: "BG Default", value: "#FFFFFF", color: "#FFFFFF" },
          { label: "BG Hover", value: "#F0F7FF", color: "#F0F7FF" },
          { label: "Border Default", value: "1px solid #e0e0e0" },
          { label: "Border Hover", value: "1px solid #0B5394" },
          { label: "Radius", value: "8px" },
          { label: "Padding", value: "px-4 py-3 (mob px-3)" },
          { label: "Font", value: "14px / 400" },
          { label: "Text color", value: "#0c3058", color: "#0c3058" },
          { label: "Grid", value: "1col mob / 2col desk" },
        ]} />
      </CompBlock>

      {/* ── 4. Search Input ── */}
      <CompBlock title="שדה חיפוש — Search Input" note="input[type=text]">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          {(["default","hover","focus","disabled"] as BtnState[]).map(s =>
            <StateLabel key={s} state={s} active={inputState === s} onClick={() => setInputState(s)} />
          )}
        </div>
        <div className="flex items-center justify-center bg-[#f1f5fb] rounded-[10px] p-8">
          <div style={{ ...inputStyles[inputState], borderRadius: 8, display: "flex", alignItems: "center", gap: 8, padding: "0 12px", width: 300, minHeight: 48, transition: "all 0.15s" }}>
            <svg style={{ width: 15, height: 15, opacity: 0.5, flexShrink: 0 }} fill="none" viewBox="0 0 15 15">
              <circle cx="6.75" cy="6.75" r="5.5" stroke="#5878a4" strokeWidth="1.5" />
              <path d="M14.25 14.25L10.995 10.995" stroke="#5878a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span style={{ fontFamily: "Rubik,sans-serif", fontSize: 14, color: inputState === "focus" ? "#0c3058" : "#a0aec0", flex: 1 }}>
              {inputState === "focus" ? "גג דולף בדירה שכורה" : "כתוב את שאלתך..."}
            </span>
          </div>
        </div>
        <TokenGrid tokens={[
          { label: "BG", value: "#f9fafb", color: "#f9fafb" },
          { label: "Border Default", value: "1px solid #d1d9e6" },
          { label: "Border Focus", value: "1px solid #0B5394" },
          { label: "Shadow Focus", value: "0 0 0 3px rgba(11,83,148,.12)" },
          { label: "Placeholder", value: "#a0aec0", color: "#a0aec0" },
          { label: "Min height", value: "48px" },
          { label: "Radius", value: "8px" },
          { label: "Font", value: "Rubik 14px / 400" },
        ]} />
      </CompBlock>

      {/* ── 5. Textarea ── */}
      <CompBlock title="תיבת טקסט — Textarea" note="textarea (S3,S4)">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          {(["default","hover","focus","disabled"] as BtnState[]).map(s =>
            <StateLabel key={s} state={s} active={taState === s} onClick={() => setTaState(s)} />
          )}
        </div>
        <div className="flex items-center justify-center bg-[#f1f5fb] rounded-[10px] p-8">
          <div style={{ ...taStyles[taState], borderRadius: 8, padding: "12px", width: 300, minHeight: 80, transition: "all 0.15s", display: "flex", flexDirection: "column" as const, justifyContent: "flex-start" }}>
            <span style={{ fontFamily: "Rubik,sans-serif", fontSize: 14, color: taState === "focus" || taState === "active" ? "#0c3058" : "#a0aec0", textAlign: "right" as const, direction: "rtl" }}>
              {taState === "focus" ? "הגג שלי דולף מאז החורף..." : "תאר את הבעיה שלך בפירוט..."}
            </span>
          </div>
        </div>
        <TokenGrid tokens={[
          { label: "BG", value: "#f9fafb", color: "#f9fafb" },
          { label: "Border Default", value: "1px solid #d1d9e6" },
          { label: "Border Focus", value: "1px solid #0B5394" },
          { label: "Shadow Focus", value: "0 0 0 3px rgba(11,83,148,.12)" },
          { label: "Radius", value: "8px" },
          { label: "Max chars", value: "200 (counter #9aadcc)" },
          { label: "Resize", value: "none" },
        ]} />
      </CompBlock>

      {/* ── 6. Option Button (partial clarification) ── */}
      <CompBlock title="כפתור אפשרות — Option Button (S4)" note="button.option">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          {(["default","hover","active","focus"] as BtnState[]).map(s =>
            <StateLabel key={s} state={s} active={optState === s} onClick={() => setOptState(s)} />
          )}
        </div>
        <div className="flex items-center justify-center bg-[#f1f5fb] rounded-[10px] p-8">
          <button
            style={{ ...optStyles[optState], borderRadius: 8, padding: "12px 16px", fontFamily: "Rubik,sans-serif", width: 300, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, cursor: "pointer", transition: "all 0.15s" }}
          >
            <span style={{ fontSize: 15, color: "#0c3058", textAlign: "right" as const, flex: 1 }}>1. דיור ציבורי</span>
            <svg style={{ width: 16, height: 16, opacity: 0.35, flexShrink: 0 }} fill="none" viewBox="0 0 16 16">
              <circle cx="5.94" cy="5.94" r="5.14" stroke="#0B5394" strokeWidth="1.6" />
              <line x1="9.57" y1="9.57" x2="12.36" y2="12.36" stroke="#0B5394" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <TokenGrid tokens={[
          { label: "BG Default", value: "#FFFFFF", color: "#FFFFFF" },
          { label: "BG Hover", value: "#f0f7ff", color: "#f0f7ff" },
          { label: "Border Default", value: "1px solid #dde4ef" },
          { label: "Border Hover", value: "1px solid #b0c4d8" },
          { label: "Radius", value: "8px" },
          { label: "Font", value: "15px / 400 / #0c3058" },
          { label: "Shadow Hover", value: "0 1px 3px rgba(11,83,148,.08)" },
        ]} />
      </CompBlock>

      {/* ── 7. Edit Button ── */}
      <CompBlock title="כפתור עריכה — Edit Button (ערוך)" note="button.edit-query">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          {(["default","hover","active","focus"] as BtnState[]).map(s =>
            <StateLabel key={s} state={s} active={editState === s} onClick={() => setEditState(s)} />
          )}
        </div>
        <div className="flex items-center justify-center bg-[#f0f7ff] rounded-[10px] p-8">
          <button
            style={{ ...editStyles[editState], borderRadius: 5, padding: "4px 8px", fontFamily: "Rubik,sans-serif", display: "flex", alignItems: "center", gap: 4, border: "none", cursor: "pointer", transition: "all 0.15s" }}
          >
            <span style={{ fontSize: 12, fontWeight: 400 }}>ערוך</span>
            <svg style={{ width: 12, height: 12 }} fill="none" viewBox="0 0 16 16">
              <path d={pencilSvgPaths.pd42db80} fill={(editStyles[editState] as any).color || "#7a93b8"} />
            </svg>
          </button>
        </div>
        <TokenGrid tokens={[
          { label: "Color Default", value: "#7a93b8", color: "#7a93b8" },
          { label: "Color Hover", value: "#0B5394", color: "#0B5394" },
          { label: "BG Hover", value: "#FFFFFF", color: "#FFFFFF" },
          { label: "Font", value: "Rubik 12px / 400" },
          { label: "Radius", value: "5px" },
          { label: "Padding", value: "px-2 py-1" },
        ]} />
      </CompBlock>

      {/* ── 8. Warning Alert ── */}
      <CompBlock title="Warning Alert — התראת אזהרה (S3)" note="div.alert-warning · RTL">
        <div className="bg-[#fff9ec] rounded-[8px] border border-[#e8a000] px-4 py-3.5 flex items-start justify-between gap-3" style={{ borderRight: "4px solid #CC6600" }}>
          <div className="flex-1" dir="rtl">
            <p style={{ fontFamily: "Rubik,sans-serif", fontSize: 15, fontWeight: 500, color: "#0c3058", marginBottom: 4 }}>לא הצלחנו לזהות את הנושא בוודאות</p>
            <p style={{ fontFamily: "Rubik,sans-serif", fontSize: 14, color: "#4a4a4a" }}>כדי לחסוך לך זמן המתנה — תאר את הבעיה בכמה מילים</p>
          </div>
          <div style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }}>
            <svg className="size-full" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={alertIconPaths.p10d12700} fill="#CC6600" fillRule="evenodd" />
            </svg>
          </div>
        </div>
        <TokenGrid tokens={[
          { label: "BG", value: "#fff9ec", color: "#fff9ec" },
          { label: "Border", value: "1px solid #e8a000" },
          { label: "RTL Accent R", value: "border-right 4px #CC6600" },
          { label: "Accent color", value: "#CC6600", color: "#CC6600" },
          { label: "Radius", value: "8px" },
          { label: "Title", value: "15px / 500 / #0c3058" },
          { label: "Body", value: "14px / 400 / #4a4a4a" },
        ]} />
      </CompBlock>

    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── CONTAINER SPEC CARD ────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
function ContainerSpecCard() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const copy = (key: string, val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1400);
  };

  const layers = [
    {
      id: "page",
      label: "Page Wrapper",
      desc: "מעטפת הדף המלאה",
      color: "#e8f0fb",
      border: "#c3cfe7",
      textColor: "#4a5e78",
      css: "width: 100%;\nmin-height: 100vh;\nbackground: #F1F5FB;",
      tw: "w-full min-h-screen bg-[#F1F5FB]",
    },
    {
      id: "centering",
      label: "Centering Shell",
      desc: "ממרכז את התוכן אופקית",
      color: "#ddeeff",
      border: "#90caf9",
      textColor: "#073763",
      css: "width: 100%;\npadding-inline: 16px;   /* mobile */\npadding-inline: 32px;   /* md: desktop */",
      tw: "w-full px-4 md:px-8",
    },
    {
      id: "widget",
      label: "Widget Container ✦",
      desc: "הקונטיינר המרכזי של הצ'אט",
      color: "#c8e6ff",
      border: "#0B5394",
      textColor: "#0c3058",
      css: "width: 100%;\nmax-width: 780px;\nmin-width: 320px;\nmargin-inline: auto;",
      tw: "w-full max-w-[780px] min-w-[320px] mx-auto",
    },
    {
      id: "card",
      label: "Card (inner)",
      desc: "הכרטיס הלבן עם ה-shadow",
      color: "#f0f7ff",
      border: "#c3cfe7",
      textColor: "#0c3058",
      css: "width: 100%;\nborder-radius: 12px;   /* mobile */\nborder-radius: 16px;   /* md: */\npadding: 20px;         /* mobile: px-5 py-5 */\npadding: 40px 32px;    /* md: px-10 py-8 */\nbox-shadow: 0px 4px 16px rgba(6,77,173,0.13);",
      tw: "w-full rounded-[12px] md:rounded-[16px]\npx-5 md:px-10 py-5 md:py-8\nbg-white shadow-[0px_4px_16px_rgba(6,77,173,0.13)]",
    },
  ];

  const keyValues = [
    { key: "width", mob: "100%", desk: "100%", note: "תמיד מלא ברוחב הקונטיינר" },
    { key: "max-width", mob: "—", desk: "780px", note: "על Widget Container בלבד" },
    { key: "min-width", mob: "320px", desk: "320px", note: "מניעת squeeze בטלפונים קטנים" },
    { key: "margin-inline", mob: "—", desk: "auto", note: "מרכוז אוטומטי עם max-width" },
    { key: "padding-inline", mob: "16px (px-4)", desk: "32px (px-8)", note: "על Centering Shell" },
    { key: "card padding H", mob: "20px (px-5)", desk: "40px (px-10)", note: "פנים הכרטיס" },
    { key: "card padding V", mob: "20px (py-5)", desk: "32px (py-8)", note: "פנים הכרטיס" },
    { key: "card border-radius", mob: "12px", desk: "16px", note: "md: breakpoint" },
  ];

  return (
    <div className="bg-white rounded-[12px] border border-[#c3cfe7] overflow-hidden mb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#f0f7ff] border-b border-[#c3cfe7]">
        <div className="flex items-center gap-3">
          <div className="size-2.5 rounded-full bg-[#0B5394]" />
          <p className="text-[15px] font-semibold text-[#0c3058] font-['Rubik',sans-serif]">Widget Container — הגדרת מיכל הצ'אט</p>
        </div>
        <code className="text-[11px] font-mono text-[#7a93b8] bg-white px-2.5 py-1 rounded-[5px] border border-[#e8edf5]">layout · responsive</code>
      </div>

      <div className="p-6 flex flex-col gap-6">

        {/* Visual nesting diagram */}
        <div>
          <p className="text-[11px] font-semibold text-[#7a93b8] uppercase tracking-wider mb-3 font-['Rubik',sans-serif]">Nesting Diagram</p>
          <div className="flex flex-col gap-0 relative" dir="ltr">
            {layers.map((layer, i) => (
              <div key={layer.id}
                style={{ backgroundColor: layer.color, border: `1.5px dashed ${layer.border}`, marginInline: `${i * 16}px`, borderRadius: 8, padding: "10px 14px", marginBottom: i < layers.length - 1 ? 4 : 0 }}>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono opacity-50" style={{ color: layer.textColor }}>{i + 1}.</span>
                    <span className="text-[12px] font-semibold font-['Rubik',sans-serif]" style={{ color: layer.textColor }}>{layer.label}</span>
                    <span className="text-[10px] text-[#7a93b8] font-['Rubik',sans-serif]">{layer.desc}</span>
                  </div>
                  <code className="text-[10px] font-mono text-[#0B5394] bg-white/70 px-2 py-0.5 rounded">{layer.tw.split('\n')[0]}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS + Tailwind per layer */}
        <div>
          <p className="text-[11px] font-semibold text-[#7a93b8] uppercase tracking-wider mb-3 font-['Rubik',sans-serif]">CSS & Tailwind per Layer</p>
          <div className="grid md:grid-cols-2 gap-3">
            {layers.map(layer => (
              <div key={layer.id} className="rounded-[8px] border border-[#e8edf5] overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#e8edf5]"
                  style={{ backgroundColor: layer.color }}>
                  <span className="text-[11px] font-semibold font-['Rubik',sans-serif]" style={{ color: layer.textColor }}>{layer.label}</span>
                </div>
                {/* CSS */}
                <div className="px-3 py-2 border-b border-[#f1f5fb] bg-[#fafafa]">
                  <p className="text-[9px] text-[#9aadcc] font-mono mb-1">CSS</p>
                  <pre className="text-[10px] font-mono text-[#4a5e78] whitespace-pre-wrap leading-relaxed">{layer.css}</pre>
                </div>
                {/* Tailwind */}
                <div className="px-3 py-2 bg-white">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[9px] text-[#9aadcc] font-mono mb-1">Tailwind</p>
                      <pre className="text-[10px] font-mono text-[#0B5394] whitespace-pre-wrap leading-relaxed">{layer.tw}</pre>
                    </div>
                    <button onClick={() => copy(layer.id, layer.tw)}
                      className="shrink-0 mt-1 text-[#b0c4d8] hover:text-[#0B5394] transition-colors">
                      {copiedKey === layer.id ? <Check size={12} className="text-[#7ad94a]" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive values table */}
        <div>
          <p className="text-[11px] font-semibold text-[#7a93b8] uppercase tracking-wider mb-3 font-['Rubik',sans-serif]">ערכים לפי Breakpoint</p>
          <div className="rounded-[8px] border border-[#e8edf5] overflow-hidden">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-[#f9fafb] border-b border-[#e8edf5]">
                  <th className="px-4 py-2.5 text-[10px] font-semibold text-[#7a93b8] text-right font-['Rubik',sans-serif]">Property</th>
                  <th className="px-4 py-2.5 text-[10px] font-semibold text-[#CC6600] text-right font-['Rubik',sans-serif]">
                    <div className="flex items-center gap-1"><Smartphone size={10} />Mobile &lt;768px</div>
                  </th>
                  <th className="px-4 py-2.5 text-[10px] font-semibold text-[#0B5394] text-right font-['Rubik',sans-serif]">
                    <div className="flex items-center gap-1"><Monitor size={10} />Desktop md: ≥768px</div>
                  </th>
                  <th className="px-4 py-2.5 text-[10px] font-semibold text-[#9aadcc] text-right font-['Rubik',sans-serif]">הערה</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f8fafc]">
                {keyValues.map((r, i) => (
                  <tr key={i} className="hover:bg-[#fafbfd]">
                    <td className="px-4 py-2.5"><code className="text-[11px] font-mono text-[#4a5e78]">{r.key}</code></td>
                    <td className="px-4 py-2.5"><code className="text-[10px] font-mono text-[#CC6600] bg-[#fff9ec] px-1.5 py-0.5 rounded">{r.mob}</code></td>
                    <td className="px-4 py-2.5"><code className="text-[10px] font-mono text-[#0B5394] bg-[#f0f7ff] px-1.5 py-0.5 rounded">{r.desk}</code></td>
                    <td className="px-4 py-2.5 text-[10px] text-[#7a93b8] font-['Rubik',sans-serif]">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Full Tailwind snippet */}
        <div>
          <p className="text-[11px] font-semibold text-[#7a93b8] uppercase tracking-wider mb-2 font-['Rubik',sans-serif]">קוד מלא — Widget Container div</p>
          <div className="relative bg-[#0c1a2e] rounded-[8px] p-4">
            <button onClick={() => copy("snippet", `<div dir="rtl" className="w-full min-h-screen bg-[#F1F5FB]">\n  {/* Centering shell */}\n  <div className="w-full px-4 md:px-8">\n    {/* Widget container */}\n    <div className="w-full max-w-[780px] min-w-[320px] mx-auto">\n      {/* Card */}\n      <div className="w-full rounded-[12px] md:rounded-[16px] px-5 md:px-10 py-5 md:py-8 bg-white shadow-[0px_4px_16px_rgba(6,77,173,0.13)]">\n        {/* content */}\n      </div>\n    </div>\n  </div>\n</div>`)}
              className="absolute top-3 left-3 text-[#4a5e78] hover:text-white transition-colors flex items-center gap-1">
              {copiedKey === "snippet" ? <Check size={12} className="text-[#7ad94a]" /> : <Copy size={12} />}
            </button>
            <pre className="text-[11px] font-mono text-[#90caf9] leading-relaxed overflow-x-auto" dir="ltr">{`<div dir="rtl" className="w-full min-h-screen bg-[#F1F5FB]">
  {/* Centering shell */}
  <div className="w-full px-4 md:px-8">
    {/* Widget container */}
    <div className="w-full max-w-[780px] min-w-[320px] mx-auto">
      {/* Card */}
      <div className="w-full rounded-[12px] md:rounded-[16px]
           px-5 md:px-10  py-5 md:py-8
           bg-white shadow-[0px_4px_16px_rgba(6,77,173,0.13)]">
        {/* content */}
      </div>
    </div>
  </div>
</div>`}</pre>
          </div>
        </div>

      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── SCREEN DEFINITIONS ────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
const SCREENS = [
  { tag: "Screen 1", tagColor: "#0B5394", stateKey: "initial", title: "מסך פתיחה", subtitle: "Initial State",
    trigger: "currentStep === 'initial' (page load)", description: "המסך הראשוני בטעינת הדף. כפתור החיפוש מושבת כל עוד שדה הטקסט ריק. Quick Topics מאפשרים בחירה מהירה.",
    MobFrame: S1Mobile, DeskFrame: S1Desktop, specs: screen1Specs, bp: s1BP },
  { tag: "Screen 2", tagColor: "#073763", stateKey: "searching", title: "מסך טעינה", subtitle: "Searching State",
    trigger: "לאחר submit → currentStep = 'searching', setTimeout(800ms) → detectTopic()", description: "מוצג ל-800ms לא��ר הגשת שאלה. Spinner אנימציה + Shimmer text. לאחר ה-timeout עובר אוטומטית למסך הבא.",
    MobFrame: S2Mobile, DeskFrame: S2Desktop, specs: screen2Specs, bp: s2BP },
  { tag: "Screen 3", tagColor: "#CC6600", stateKey: "clarification", title: "הבהרה — לא זוהה נושא", subtitle: "Clarification State",
    trigger: "detectTopic() → isVague || query.length < 5", description: "כשהשאלה קצרה מ-5 תווים או מילה כללית. Warning Alert עם RTL accent stripe. Textarea לניסוח מחדש.",
    MobFrame: S3Mobile, DeskFrame: S3Desktop, specs: screen3Specs, bp: s3BP },
  { tag: "Screen 4", tagColor: "#4a5e78", stateKey: "partial-clarification", title: "הבהרה חלקית", subtitle: "Partial Clarification",
    trigger: "detectTopic() → { type: 'partial', options: [...] }", description: "נושא זוהה חלקית — 3 אפשרויות ממוספרות + שדה חופשי. לחיצה על אפשרות עוברת ישירות לתוצאות.",
    MobFrame: S4Mobile, DeskFrame: S4Desktop, specs: screen4Specs, bp: s4BP },
  { tag: "Screen 5", tagColor: "#0B7A3E", stateKey: "results", title: "תוצאות — נושא זוהה", subtitle: "Results State",
    trigger: "detectTopic() → { id, title, links, fullTitle }", description: "נושא זוהה בוודאות. כרטיס תוצאות עם קישורים ישירים, CTA להגשת פנייה, ואקורדיון נושאים נוספים.",
    MobFrame: S5Mobile, DeskFrame: S5Desktop, specs: screen5Specs, bp: s5BP },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── COLORS + TYPOGRAPHY DATA ───────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
const colors = [
  { group: "Primary Brand", tokens: [
    { name: "Primary (Default)", token: "background.brand-default", hex: "#0068f5", usage: "כפתורים, לינקים, border focus (brand-color.500)" },
    { name: "Hover", token: "background.brand-hover", hex: "#0057cc", usage: "Hover כפתור primary (brand-color.600)" },
    { name: "Pressed/Active", token: "background.brand-pressed", hex: "#0045a3", usage: "Pressed · border hover secondary (brand-color.700)" },
    { name: "Disabled BG", token: "background.disabled-default", hex: "#f0f3f6", usage: "רקע כפתור/input מושבת (grey-color.200)" },
    { name: "Disabled Text", token: "text.disabled", hex: "#8596af", usage: "טקסט/אייקון מושבת (grey-color.600)" },
    { name: "Header Gradient #1", token: "—", hex: "#025FDB", usage: "gradient header (start)" },
    { name: "Header Gradient #2", token: "—", hex: "#0B3668", usage: "gradient header (end)" },
  ]},
  { group: "Text", tokens: [
    { name: "Primary Dark", token: "text.subtle-primary", hex: "#0c3058", usage: "כותרות וטקסט ראשי (text-color.900)" },
    { name: "Body Dark", token: "—", hex: "#0c3058", usage: "גוף ראשי" },
    { name: "Secondary", token: "--gov-text-secondary", hex: "#4A4A4A", usage: "גוף משני" },
    { name: "Muted Blue", token: "—", hex: "#4a5e78", usage: "subtitle" },
    { name: "Light Blue", token: "—", hex: "#7a93b8", usage: "label, hint" },
    { name: "Placeholder", token: "—", hex: "#a0aec0", usage: "input placeholder" },
    { name: "Char Counter", token: "—", hex: "#9aadcc", usage: "מונה תווים" },
  ]},
  { group: "Backgrounds", tokens: [
    { name: "Screen BG", token: "--gov-bg-screen", hex: "#F1F5FB", usage: "רקע עמוד" },
    { name: "Card White", token: "--gov-bg-neutral", hex: "#FFFFFF", usage: "כרטיסים" },
    { name: "Input BG", token: "—", hex: "#f9fafb", usage: "שדות קלט" },
    { name: "Hover BG", token: "--gov-bg-hover", hex: "#F0F7FF", usage: "hover state" },
    { name: "Info Alert BG", token: "—", hex: "#f0f7ff", usage: "alert מידע" },
    { name: "Warning Alert BG", token: "—", hex: "#fff9ec", usage: "alert אזהרה" },
  ]},
  { group: "Borders & Accents", tokens: [
    { name: "Border Default", token: "--gov-border-default", hex: "#90CAF9", usage: "כרטיסים כלליים" },
    { name: "Border Card", token: "—", hex: "#c3cfe7", usage: "כרטיסי תוצאות" },
    { name: "Border Input", token: "—", hex: "#d1d9e6", usage: "שדות קלט" },
    { name: "Border Option", token: "—", hex: "#dde4ef", usage: "כפתורי אפשרויות" },
    { name: "Warning Accent RTL", token: "—", hex: "#CC6600", usage: "border-right alert אזהרה" },
  ]},
  { group: "Status", tokens: [
    { name: "Success", token: "--gov-success", hex: "#7ad94a", usage: "הצלחה" },
    { name: "Warning", token: "--gov-warning", hex: "#dda82f", usage: "אזהרה" },
    { name: "Error", token: "--gov-error", hex: "#eb4a4b", usage: "שגיאה" },
  ]},
];

const typographyScale = [
  { label: "Title", mob: "20px / 700", desk: "24px / 700", color: "#0c3058", cls: "text-[18px] font-bold text-[#0c3058]", sample: "עוזר פניות הציבור | מכוון אותך למקום הנכון" },
  { label: "Subtitle", mob: "14px / 300", desk: "16px / 300", color: "#4a5e78", cls: "text-[14px] font-light text-[#4a5e78]", sample: "כדי להביאכם מהר ודירקט ללא המתנה" },
  { label: "Result Title", mob: "17px / 600", desk: "19px / 600", color: "#0c3058", cls: "text-[17px] font-semibold text-[#0c3058]", sample: "סיוע בדיור | בדיקת זכאות לסיוע בשכר דירה" },
  { label: "Option / Body", mob: "15px / 400 (same)", desk: "15px / 400 (same)", color: "#0c3058", cls: "text-[15px] font-normal text-[#0c3058]", sample: "1. דיור ציבורי" },
  { label: "Alert Title", mob: "15px / 500 (same)", desk: "15px / 500 (same)", color: "#0c3058", cls: "text-[15px] font-medium text-[#0c3058]", sample: "לא הצלחנו לזהות את הנושא בוודאות" },
  { label: "Body Small", mob: "14px / 400 (same)", desk: "14px / 400 (same)", color: "#4A4A4A", cls: "text-[14px] font-normal text-[#4A4A4A]", sample: "כדי לחסוך לך זמן המתנה למענה" },
  { label: "Label Minor", mob: "13px / 500 (same)", desk: "13px / 500 (same)", color: "#7a93b8", cls: "text-[13px] font-medium text-[#7a93b8]", sample: "דוגמאות לפניות נפוצות:" },
  { label: "Char Counter", mob: "12px / 400 (same)", desk: "12px / 400 (same)", color: "#9aadcc", cls: "text-[12px] font-normal text-[#9aadcc]", sample: "0/200" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── SHARED SMALL HELPERS ───────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
function ColorSwatch({ hex, name, token, usage }: { hex: string; name: string; token: string; usage: string }) {
  const [cp, setCp] = useState(false);
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-[#f8fafc] last:border-0">
      <button className="shrink-0 size-9 rounded-[6px] border border-[#e0e0e0] shadow-sm hover:scale-110 transition-transform"
        style={{ backgroundColor: hex }} onClick={() => { navigator.clipboard.writeText(hex); setCp(true); setTimeout(() => setCp(false), 1500); }} />
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-medium text-[#0c3058] font-['Rubik',sans-serif]">{name}</p>
        <p className="text-[10px] text-[#7a93b8] truncate font-['Rubik',sans-serif]">{usage}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <code className="text-[10px] font-mono text-[#4a5e78] bg-[#f1f5fb] px-1.5 py-0.5 rounded">{hex}</code>
        {cp && <Check size={10} className="text-[#7ad94a]" />}
      </div>
    </div>
  );
}
function SectionTitle({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-6 pb-3 border-b-2 border-[#0B5394]/20">
      <h2 className="font-['Rubik',sans-serif] text-[22px] font-semibold text-[#0c3058]">{children}</h2>
      {note && <span className="text-[13px] text-[#7a93b8] font-['Rubik',sans-serif]">{note}</span>}
    </div>
  );
}
function Tag({ label, color }: { label: string; color: string }) {
  return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium text-white" style={{ backgroundColor: color }}>{label}</span>;
}

const NAV_SECTIONS = [
  { id: "colors", label: "🎨 צבעים" },
  { id: "typography", label: "Aa טיפוגרפיה" },
  { id: "icons", label: "✦ אייקונים" },
  { id: "components", label: "⬜ קומפוננטות" },
  { id: "screens", label: "🖥 מסכים + Frames" },
  { id: "notes", label: "⚙️ הנחיות Dev" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ─── MAIN PAGE ──────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════
export function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState("colors");
  const scrollTo = (id: string) => { setActiveSection(id); document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <div className="min-h-screen bg-[#F1F5FB]" dir="rtl">

      {/* Top Bar */}
      <div className="w-full h-[52px] flex items-center justify-between px-6 sticky top-0 z-50 shrink-0" style={{ backgroundImage: GRAD }}>
        <Link to="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <ArrowLeft size={15} /><span className="text-[13px] font-['Rubik',sans-serif]">חזרה לאפליקציה</span>
        </Link>
        <div className="flex items-center gap-2">
          <Palette size={14} className="text-white/70" />
          <p className="text-white text-[13px] font-['Rubik',sans-serif] font-medium">Design System · Dev Delivery</p>
        </div>
        <div className="flex items-center gap-2">
          <Tag label="v1.0" color="rgba(255,255,255,0.2)" />
          <span className="text-[10px] text-white/40 font-['Rubik',sans-serif]">IGDS · RTL</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-[#e8edf5]">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {[["IGDS", "#0B5394"], ["RTL Hebrew", "#073763"], ["React + TS", "#4a5e78"], ["Tailwind v4", "#7a93b8"]].map(([l, c]) => <Tag key={l} label={l} color={c} />)}
            </div>
            <h1 className="font-['Rubik',sans-serif] text-[26px] font-bold text-[#0c3058] mb-1.5">עוזר פניות הציבור — Handoff לפיתוח</h1>
            <p className="font-['Rubik',sans-serif] text-[14px] text-[#4a5e78] max-w-[560px] leading-relaxed">
              כל מסך מוצג בשתי גרסאות — <strong>Mobile (375px)</strong> ו-<strong>Desktop (1280px)</strong> — עם מפרט מלא של כל רכיב, breakpoints ו-design tokens.
            </p>
          </div>
          <div className="bg-[#f1f5fb] rounded-[12px] p-4 min-w-[200px] border border-[#e8edf5]">
            {[["Font", "Rubik (Google)"], ["Direction", "dir=\"rtl\""], ["Breakpoint", "md: = 768px"], ["sm:", "640px (chips grid)"], ["Animation", "motion/react"], ["State", "useState only"]].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-1 border-b border-[#e8edf5] last:border-0">
                <span className="text-[11px] text-[#7a93b8] font-['Rubik',sans-serif]">{k}</span>
                <span className="text-[11px] text-[#0c3058] font-mono">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nav Tabs */}
      <div className="bg-white border-b border-[#e8edf5] sticky top-[52px] z-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {NAV_SECTIONS.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                className={`shrink-0 px-4 py-3.5 text-[13px] font-['Rubik',sans-serif] border-b-2 transition-all whitespace-nowrap ${activeSection === s.id ? "border-[#0B5394] text-[#0B5394] font-medium" : "border-transparent text-[#4a5e78] hover:text-[#0c3058]"}`}>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10 space-y-20">

        {/* ═══ COLORS ══════════════════════════════════════════════════════════ */}
        <section id="colors">
          <SectionTitle note="IGDS — Israel Government Design System">צבעים</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {colors.map(g => (
              <div key={g.group} className="bg-white rounded-[10px] border border-[#e8edf5] p-4">
                <p className="text-[10px] font-semibold text-[#7a93b8] uppercase tracking-wider mb-3 font-['Rubik',sans-serif]">{g.group}</p>
                {g.tokens.map(t => <ColorSwatch key={t.name} {...t} />)}
              </div>
            ))}
          </div>
          <div className="bg-white rounded-[10px] border border-[#e8edf5] p-5">
            <p className="text-[13px] font-semibold text-[#0c3058] mb-3 font-['Rubik',sans-serif]">Header Gradient</p>
            <div className="h-[52px] rounded-[8px] flex items-center px-6 mb-3" style={{ backgroundImage: GRAD }}>
              <p className="text-white text-[13px] font-['Rubik',sans-serif]">GovForms Header — 65px</p>
            </div>
            <code className="text-[11px] font-mono text-[#4a5e78] bg-[#f9fafb] px-3 py-2 rounded-[6px] block">
              linear-gradient(141.916deg, #025FDB 2.36%, #025FDB 35.71%, #0B3668 97.64%)
            </code>
          </div>
        </section>

        {/* ═══ TYPOGRAPHY ══════════════════════════════════════════════════════ */}
        <section id="typography">
          <SectionTitle note="Rubik — Google Fonts">טיפוגרפיה</SectionTitle>
          <div className="bg-white rounded-[10px] border border-[#e8edf5] overflow-hidden">
            <div className="bg-[#f0f7ff] px-5 py-3 border-b border-[#e8edf5]">
              <code className="text-[11px] font-mono text-[#073763]">@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap')</code>
            </div>
            <div className="divide-y divide-[#f8fafc]">
              {typographyScale.map((t, i) => (
                <div key={i} className="px-5 py-4 flex items-center gap-4 flex-wrap">
                  <div className="w-[200px] shrink-0">
                    <p className="text-[12px] font-medium text-[#7a93b8] font-['Rubik',sans-serif]">{t.label}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Smartphone size={9} className="text-[#CC6600]" />
                      <code className="text-[10px] font-mono text-[#CC6600]">{t.mob}</code>
                    </div>
                    <div className="flex items-center gap-1">
                      <Monitor size={9} className="text-[#0B5394]" />
                      <code className="text-[10px] font-mono text-[#0B5394]">{t.desk}</code>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="size-2.5 rounded-sm border border-[#e0e0e0]" style={{ backgroundColor: t.color }} />
                      <code className="text-[9px] font-mono text-[#9aadcc]">{t.color}</code>
                    </div>
                  </div>
                  <p className={`font-['Rubik',sans-serif] flex-1 text-right ${t.cls}`}>{t.sample}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ICONS ════════════════════════════════════════════════════════════ */}
        <section id="icons">
          <SectionTitle note="Figma SVG imports — כל האייקונים בשימוש">אייקונים</SectionTitle>

          {/* grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 mb-6">

            {/* 1 — Search (large filled) */}
            <IconTile
              name="מגנט — כפתור" nameEn="Search (button)" size="18×18px" usedIn="S1,S3,S4"
              importVar="searchIconPaths" file="svg-vtbi2n43qh"
              importCode={`import searchIconPaths from "../imports/svg-vtbi2n43qh"`}
              bg="#0B5394"
              render={<svg className="size-6" fill="none" viewBox="0 0 18 18"><path d={searchIconPaths.pf764100} fill="white" /></svg>}
            />

            {/* 2 — Search (header gradient) */}
            <IconTile
              name="מגנט — header" nameEn="Search (gradient)" size="21×21px" usedIn="S1 header"
              importVar="newSearchSvgPaths" file="svg-w5s8le89s9"
              importCode={`import newSearchSvgPaths from "../imports/svg-w5s8le89s9"`}
              bg="linear-gradient(135deg,#025FDB,#0B3668)"
              render={<svg className="size-6" fill="none" viewBox="0 0 21 21"><path d={newSearchSvgPaths.pd8105b0} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>}
            />

            {/* 3 — Search small (input hint) */}
            <IconTile
              name="מגנט — hint" nameEn="Search (small hint)" size="15×15px" usedIn="S1 input"
              importVar="newSearchSvgPaths" file="svg-w5s8le89s9"
              importCode={`import newSearchSvgPaths from "../imports/svg-w5s8le89s9"`}
              bg="#f1f5fb"
              render={<svg className="size-5" fill="none" viewBox="0 0 15 15"><circle cx="6.75" cy="6.75" r="5.5" stroke="#5878a4" strokeWidth="1.5" /><path d="M14.25 14.25L10.995 10.995" stroke="#5878a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>}
            />

            {/* 4 — Alert warning circle */}
            <IconTile
              name="עיגול אזהרה" nameEn="Alert circle" size="20×20px" usedIn="S3 warning"
              importVar="alertIconPaths" file="svg-7zbiy66fkz"
              importCode={`import alertIconPaths from "../imports/svg-7zbiy66fkz"`}
              bg="#fff9ec"
              render={<svg className="size-6" fill="none" viewBox="0 0 20 20"><path clipRule="evenodd" d={alertIconPaths.p10d12700} fill="#CC6600" fillRule="evenodd" /></svg>}
            />

            {/* 5 — Pencil / edit */}
            <IconTile
              name="עיפרון" nameEn="Pencil/edit" size="16×16px" usedIn="S5 new search"
              importVar="pencilSvgPaths" file="svg-wkk9euaaor"
              importCode={`import pencilSvgPaths from "../imports/svg-wkk9euaaor"`}
              bg="#f0f7ff"
              render={<svg className="size-5" fill="none" viewBox="0 0 16 16"><path d={pencilSvgPaths.pd42db80} fill="#0B5394" /></svg>}
            />

            {/* 6 — External link / open in new */}
            <IconTile
              name="קישור חיצוני" nameEn="External link" size="16×16px" usedIn="S5 results"
              importVar="manualSelectionSvgPaths" file="svg-2lxjg24eou"
              importCode={`import manualSelectionSvgPaths from "../imports/svg-2lxjg24eou"`}
              bg="#f0f7ff"
              render={
                <div className="size-5 relative">
                  <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 14 14">
                    <path d={manualSelectionSvgPaths.pd9a60c0} stroke="#0B5394" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={manualSelectionSvgPaths.p3c0f2400} stroke="#0B5394" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={manualSelectionSvgPaths.p7277800} stroke="#0B5394" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              }
            />

            {/* 7 — Search / option arrow (16px) */}
            <IconTile
              name="חץ אפשרות" nameEn="Option arrow" size="16×16px" usedIn="S4,S5 options"
              importVar="newDesignSvgPaths" file="svg-5dptxl6sir"
              importCode={`import newDesignSvgPaths from "../imports/svg-5dptxl6sir"`}
              bg="#f0f7ff"
              render={<svg className="size-5" fill="none" viewBox="0 0 13 13"><circle cx="5.94" cy="5.94" r="5.14" stroke="#0B5394" strokeWidth="1.6" /><line x1="9.57" y1="9.57" x2="12.36" y2="12.36" stroke="#0B5394" strokeWidth="1.6" strokeLinecap="round" /></svg>}
            />

            {/* 8 — Chat bubble */}
            <IconTile
              name="בועת צ׳אט" nameEn="Chat bubble" size="20×20px" usedIn="header icon"
              importVar="messageSvgPaths" file="svg-e05apn42ak"
              importCode={`import messageSvgPaths from "../imports/svg-e05apn42ak"`}
              bg="#f1f5fb"
              render={<svg className="size-6" fill="none" viewBox="0 0 20 20"><path d={messageSvgPaths.p36ddfa00} fill="#0B5394" /></svg>}
            />

            {/* 9 — Sparkle / star */}
            <IconTile
              name="ניצוץ / כוכב" nameEn="Sparkle/star" size="20×20px" usedIn="result icon"
              importVar="resultSvgPaths" file="svg-aopyuz4qpf"
              importCode={`import resultSvgPaths from "../imports/svg-aopyuz4qpf"`}
              bg="#f0f7ff"
              render={<svg className="size-6" fill="none" viewBox="0 0 20 20"><path d={resultSvgPaths.p1902bdf0} fill="#0B5394" /></svg>}
            />

            {/* 10 — ChevronUp (accordion) — lucide */}
            <IconTile
              name="חץ למעלה" nameEn="ChevronUp (accordion)" size="16×16px" usedIn="S5 accordion"
              importVar="ChevronUp" file="lucide-react"
              importCode={`import { ChevronUp } from "lucide-react"`}
              bg="#f1f5fb"
              render={<svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="#0B5394" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>}
            />

            {/* 11 — ExternalLink — lucide */}
            <IconTile
              name="פתח בחלון" nameEn="ExternalLink" size="16×16px" usedIn="S5 result links"
              importVar="ExternalLink" file="lucide-react"
              importCode={`import { ExternalLink } from "lucide-react"`}
              bg="#f1f5fb"
              render={<svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="#0B5394" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>}
            />

            {/* 12 — Loader spinner */}
            <IconTile
              name="ספינר" nameEn="Loader spinner" size="48×48px" usedIn="S2 searching"
              importVar="Loader48Px" file="imports/Loader48Px"
              importCode={`import Loader48Px from "../imports/Loader48Px"`}
              bg="#f1f5fb"
              render={<div className="size-6" style={{ color: "#0B5394" }}><Loader48Px /></div>}
            />

          </div>

          {/* Gov logo special tile */}
          <div className="bg-white rounded-[10px] border border-[#e8edf5] p-5">
            <p className="text-[10px] font-semibold text-[#7a93b8] uppercase tracking-wider mb-3 font-['Rubik',sans-serif]">לוגו ממשלתי — Gov Logo (composite multi-path)</p>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="h-[52px] rounded-[8px] flex items-center px-6" style={{ backgroundImage: GRAD }}>
                <GovLogo w={120} h={53} />
              </div>
              <div className="flex-1 min-w-[200px]">
                <code className="text-[11px] font-mono text-[#4a5e78] bg-[#f9fafb] px-3 py-2 rounded-[6px] block mb-1">
                  import svgPaths from "../imports/svg-mjzwtgf3j9"
                </code>
                <p className="text-[11px] text-[#7a93b8] font-['Rubik',sans-serif]">SVG מורכב מ-20+ נתיבים — לוגו מדינת ישראל עם מנורה. שימוש בלעדי ב-Header.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COMPONENTS ═══════════════════════════════════════════════════════ */}
        <section id="components">
          <SectionTitle note="כל ה-states הרלוונטיים — interactive preview">קומפוננטות</SectionTitle>
          <div className="space-y-6">
            <ComponentShowcase />
          </div>
        </section>

        {/* ═══ SCREENS ═════════════════════════════════════════════════════════ */}
        <section id="screens">
          <SectionTitle note="5 States · Mobile 375px + Desktop 1280px">מסכים — Frames & Handoff</SectionTitle>

          {/* Container spec */}
          <ContainerSpecCard />

          {/* State machine */}
          <div className="bg-white rounded-[10px] border border-[#e8edf5] p-5 mb-8">
            <p className="text-[12px] font-semibold text-[#0c3058] mb-3 font-['Rubik',sans-serif]">State Machine</p>
            <div className="flex flex-wrap gap-2 items-center justify-center py-1" dir="ltr">
              {[{ s: "initial", c: "#0B5394" }, { s: "→" }, { s: "searching", c: "#073763" }, { s: "→" }, { s: "clarification", c: "#CC6600" }].map((n, i) =>
                n.s === "→" ? <span key={i} className="text-[#b0c4d8] text-lg">→</span>
                  : <span key={i} className="px-3 py-1.5 rounded-[6px] text-[11px] font-mono text-white" style={{ backgroundColor: (n as any).c }}>{n.s}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center py-1" dir="ltr">
              <span className="text-[11px] font-mono text-[#7a93b8]">searching</span>
              <span className="text-[#b0c4d8]">→</span>
              <span className="px-3 py-1.5 rounded-[6px] text-[11px] font-mono text-white bg-[#4a5e78]">partial-clarification</span>
              <span className="text-[#b0c4d8]">→</span>
              <span className="px-3 py-1.5 rounded-[6px] text-[11px] font-mono text-white bg-[#0B7A3E]">results</span>
              <span className="text-[10px] text-[#7a93b8]">/ searching → results (direct)</span>
            </div>
            <code className="block mt-3 text-[10px] font-mono text-[#4a5e78] bg-[#f9fafb] px-3 py-2 rounded-[6px]">
              type ChatStep = 'initial' | 'searching' | 'clarification' | 'partial-clarification' | 'results'
            </code>
          </div>

          {/* Individual screens */}
          <div className="space-y-10">
            {SCREENS.map(sd => (
              <div key={sd.stateKey} className="bg-white rounded-[16px] border border-[#c3cfe7] overflow-hidden">

                {/* Screen header */}
                <div className="flex items-center justify-between px-6 py-4 bg-[#f9fafb] border-b border-[#e8edf5] flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <Tag label={sd.tag} color={sd.tagColor} />
                    <div>
                      <h3 className="font-['Rubik',sans-serif] text-[17px] font-semibold text-[#0c3058]">{sd.title}</h3>
                      <p className="text-[11px] text-[#7a93b8] font-mono">{sd.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-[#9aadcc] font-['Rubik',sans-serif]">Trigger:</p>
                    <code className="text-[11px] font-mono text-[#0B5394]">{sd.trigger}</code>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[14px] text-[#4A4A4A] font-['Rubik',sans-serif] mb-6 leading-relaxed">{sd.description}</p>

                  {/* Frame — full width on top */}
                  <div className="w-full mb-7">
                    <p className="text-[10px] font-semibold text-[#7a93b8] uppercase tracking-wider mb-3 font-['Rubik',sans-serif]">UI Frame Preview</p>
                    <FrameViewer
                      stateKey={sd.stateKey}
                      mobileEl={<sd.MobFrame />}
                      desktopEl={<sd.DeskFrame />}
                    />
                  </div>

                  {/* Component Specs — 2-col grid below */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] font-semibold text-[#7a93b8] uppercase tracking-wider font-['Rubik',sans-serif]">Component Specs</p>
                      <span className="text-[10px] text-[#9aadcc] font-['Rubik',sans-serif]">{sd.specs.length} רכיבים</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                      {sd.specs.map(spec => <SpecCard key={spec.num} spec={spec} />)}
                    </div>
                  </div>

                  {/* Breakpoints Table — full width */}
                  <BreakpointsTable rows={sd.bp} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ DEV NOTES ═══════════════════════════════════════════════════════ */}
        <section id="notes">
          <SectionTitle>הנחיות פיתוח</SectionTitle>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "RTL", color: "#0B5394", items: ['dir="rtl" על wrapper ראשי', 'dir="rtl" על כל input/textarea בנפרד', "Alert accent: border-right (לא border-left) — RTL leading edge", "ChevronLeft לניווט (לא ChevronRight)", "Rubik תומך Hebrew natively"] },
              { title: "Accessibility WCAG 2.1 AA", color: "#7ad94a", items: ["כל כפתורים: focus-visible outline 2px #0068f5 (border.focused), offset 2px", "קישורי תוצאות: text-decoration underline חובה", "כפתור disabled: cursor-not-allowed + bg #f0f3f6 + text #8596af (grey-color.200/.600)", "Min-height לכפתורים: 48px (touch target)", "ניגודיות #0c3058 on white: ~11:1 ratio (AAA)"] },
              { title: "Animation", color: "#073763", items: ["motion/react — import from 'motion/react'", "Shimmer: animate backgroundPosition 200%→-200%, 2.5s linear ∞", "Step entry: CSS fadeInUp 0.3s ease-in", "Hover/Active: JS inline style (onMouseEnter/Leave/Down/Up)", "Loading delay: setTimeout(800ms) לפני detectTopic()"] },
              { title: "State Management", color: "#4a5e78", items: ["useState בלבד (ללא Redux/Context)", "currentStep: ChatStep — state machine", "searchQuery: string | detectedTopic: object|null", "showAdditionalTopics: boolean (accordion)", "searchInputRef: RefObject (focus on quick topic click)"] },
              { title: "Responsive Strategy", color: "#CC6600", items: ["Breakpoint ראשי: md: = 768px", "sm: = 640px (quick topics grid בלבד)", "Card max-w-[780px] — מרוכז דסקטופ", "Page header max-w-[780px] — מיושר לכרטיס", "Mobile-first: ברירת מחדל = mobile styles"] },
              { title: "File Structure", color: "#025FDB", items: ["/App.tsx — RouterProvider entry", "/routes.ts — React Router", "/components/PublicInquiryPageWithSmartNav.tsx — main", "/imports/svg-*.ts — Figma SVG paths", "/imports/Loader48Px.tsx — Figma spinner", "/styles/globals.css — CSS vars + Rubik"] },
            ].map(b => (
              <div key={b.title} className="bg-white rounded-[10px] border border-[#e8edf5] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="size-2.5 rounded-full shrink-0" style={{ backgroundColor: b.color }} />
                  <p className="text-[13px] font-semibold text-[#0c3058] font-['Rubik',sans-serif]">{b.title}</p>
                </div>
                <ul className="space-y-2">
                  {b.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 rounded-full shrink-0" style={{ backgroundColor: b.color + "80" }} />
                      <p className="text-[12px] text-[#4A4A4A] font-['Rubik',sans-serif] leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-[#e8edf5] pt-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-[11px] text-[#9aadcc] font-['Rubik',sans-serif]">Design System v1.0 · IGDS Compliant · RTL · משרד הבינוי והשיכון</p>
          <Link to="/" className="flex items-center gap-2 text-[13px] text-[#0B5394] hover:underline font-['Rubik',sans-serif]">
            <ArrowLeft size={13} />חזרה לאפליקציה
          </Link>
        </div>
      </div>
    </div>
  );
}
