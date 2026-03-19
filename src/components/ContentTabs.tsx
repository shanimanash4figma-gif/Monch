import { useState } from "react";
import { AlertCircle, Phone, ExternalLink } from "lucide-react";

export function ContentTabs() {
  const [activeTab, setActiveTab] = useState("not-found");

  const tabs = [
    { id: "help", label: "סיוע בדיור" },
    { id: "registration-employees", label: "רישום מקרקעין (עובדי משרד הבינוי והשיכון)" },
    { id: "registration", label: "רשם המקרקעין" },
    { id: "housing-program", label: "תוכנית דירה בהנחה (מחיר למשתכן ובזארו)" },
    { id: "not-found", label: "לא מצאת מה שחיפשת?" },
  ];

  return (
    <>
      {/* Tabs Navigation */}
      <div className="border-b border-[#E0E0E0] bg-white" dir="rtl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-3 md:py-4 whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id
                  ? "border-[#0B5394] text-[#0B5394]"
                  : "border-transparent text-[#073763] hover:text-[#0B5394]"
              }`}
            >
              {tab.label}
            </button>
          ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {activeTab === "not-found" && (
            <></>
          )}

          {activeTab === "housing-program" && (
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm space-y-4 animate-in fade-in duration-300" dir="rtl">
              <h2 className="text-[#073763] mb-4">תוכנית דירה בהנחה</h2>
              <p className="text-[#073763]">
                תוכניות מחיר למשתכן ודירה להשכיר מספקות פתרונות דיור במחירים נוחים לזכאים.
              </p>
              <div className="space-y-2">
                <p className="text-[#073763] font-medium">ליצירת קשר:</p>
                <p className="text-[#4A4A4A]">טלפון: 03-7634444</p>
                <p className="text-[#4A4A4A]">דוא"ל: housing@gov.il</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-[#0B5394] hover:underline">
                <ExternalLink className="w-4 h-4" />
                למידע נוסף על תוכניות דיור בהנחה
              </a>
            </div>
          )}

          {activeTab === "registration" && (
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm space-y-4 animate-in fade-in duration-300" dir="rtl">
              <h2 className="text-[#073763] mb-4">רשם המקרקעין</h2>
              <p className="text-[#073763]">
                רשם המקרקעין אחראי על רישום זכויות במקרקעין ועל ניהול מרשם המקרקעין.
              </p>
              <div className="space-y-2">
                <p className="text-[#073763] font-medium">ליצירת קשר:</p>
                <p className="text-[#4A4A4A]">טלפון: 02-6298222</p>
                <p className="text-[#4A4A4A]">דוא"ל: registrar@moch.gov.il</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-[#0B5394] hover:underline">
                <ExternalLink className="w-4 h-4" />
                למידע נוסף על רישום מקרקעין
              </a>
            </div>
          )}

          {activeTab === "registration-employees" && (
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm space-y-4 animate-in fade-in duration-300" dir="rtl">
              <h2 className="text-[#073763] mb-4">רישום מקרקעין - עובדי משרד</h2>
              <p className="text-[#073763]">
                מידע ושירותים לעובדי המשרד בנושא רישום מקרקעין.
              </p>
              <div className="space-y-2">
                <p className="text-[#073763] font-medium">ליצירת קשר פנימי:</p>
                <p className="text-[#4A4A4A]">שלוחה: 5555</p>
                <p className="text-[#4A4A4A]">דוא"ל פנימי: internal@moch.gov.il</p>
              </div>
            </div>
          )}

          {activeTab === "help" && (
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm space-y-4 animate-in fade-in duration-300" dir="rtl">
              <h2 className="text-[#073763] mb-4">סיוע בדיור</h2>
              <p className="text-[#073763]">
                המשרד מספק מגוון פתרונות לסיוע בדיור, כולל סיוע בשכר דירה, במשכנתא ובדיור ציבורי.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-[#F0F7FF] rounded-lg">
                  <h3 className="text-[#073763] mb-2">סיוע בשכר דירה</h3>
                  <p className="text-[#4A4A4A] text-sm">תמיכה כספית לשכירי דירות זכאים</p>
                </div>
                <div className="p-4 bg-[#F0F7FF] rounded-lg">
                  <h3 className="text-[#073763] mb-2">סיוע במשכנתא</h3>
                  <p className="text-[#4A4A4A] text-sm">תמיכה בהלוואות משכנתא לזכאים</p>
                </div>
                <div className="p-4 bg-[#F0F7FF] rounded-lg">
                  <h3 className="text-[#073763] mb-2">דיור ציבורי</h3>
                  <p className="text-[#4A4A4A] text-sm">דירות להשכרה במחיר מופחת</p>
                </div>
                <div className="p-4 bg-[#F0F7FF] rounded-lg">
                  <h3 className="text-[#073763] mb-2">דיור מוגן</h3>
                  <p className="text-[#4A4A4A] text-sm">פתרונות דיור למבוגרים ומוגבלים</p>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-[#0B5394] hover:underline mt-4">
                <ExternalLink className="w-4 h-4" />
                למידע נוסף על סיוע בדיור
              </a>
            </div>
          )}
      </div>
    </>
  );
}