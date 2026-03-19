import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E0E0E0] mt-auto">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" dir="rtl">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-[#073763]">אודות</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  אודות המשרד
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  מבנה ארגוני
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  דוחות ונתונים
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  מכרזים ורכש
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div className="space-y-4">
            <h3 className="text-[#073763]">שירותים</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  סיוע בדיור
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  רישום מקרקעין
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  מחיר למשתכן
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  דירה להשכיר
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h3 className="text-[#073763]">יצירת קשר</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  קבלת קהל
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  שאלות נפוצות
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  הגשת תלונה
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  פניות הציבור
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="space-y-4">
            <h3 className="text-[#073763]">מידע נוסף</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  הצהרת נגישות
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  תנאי שימוש
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors">
                  מדיניות פרטיות
                </a>
              </li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#4A4A4A] hover:text-[#0B5394] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#E0E0E0]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#4A4A4A]" dir="rtl">
            <p>© {new Date().getFullYear()} משרד הבינוי והשיכון - כל הזכויות שמורות</p>
            <p>
              פותח על ידי{" "}
              <a href="https://www.gov.il" className="text-[#0B5394] hover:underline">
                ממשלת ישראל
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}