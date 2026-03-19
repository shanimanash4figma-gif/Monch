import { Share2, Home, ChevronLeft } from "lucide-react";
import { AIAssistant } from "./AIAssistant";

export function PageHeader() {
  return (
    <>
      {/* AI Assistant */}
      <AIAssistant />
      
      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-[#5878a4]" dir="rtl">
        {/* Last Updated */}
        <div className="flex items-center gap-2">
          <span>תאריך עדכון:</span>
          <span className="text-[#0c3058]">30.12.2024</span>
        </div>

        <span className="text-[#8596af]">•</span>

        {/* Publication Date */}
        <div className="flex items-center gap-2">
          <span>תאריך פרסום:</span>
          <span className="text-[#0c3058]">28.04.2025</span>
        </div>

        <span className="text-[#8596af]">•</span>

        {/* Type */}
        <div className="flex items-center gap-2">
          <span>סוג:</span>
          <span className="text-[#0c3058]">מדריך</span>
        </div>

        <span className="text-[#8596af]">•</span>

        {/* Topics */}

      </div>
    </>
  );
}