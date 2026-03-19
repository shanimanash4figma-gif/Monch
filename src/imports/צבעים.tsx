import svgPaths from "./svg-8seyaf1muv";
import imgImage1 from "figma:asset/44700f4845707f14b562821da9e2e480eaaaf55c.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[226px] items-start justify-end relative shrink-0">
      <div className="h-[45px] relative shrink-0 w-[189px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-end relative shrink-0">
      <Frame />
      <p className="font-['Rubik:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c3058] text-[80px] text-nowrap whitespace-pre" dir="auto">
        צבעים
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-[1233px]">
      <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-end leading-[36px] relative shrink-0 text-[#0c3058] text-[24px] text-right w-[835px]">
        <p className="mb-0" dir="auto">{`ה-Design Tokens מתארים את ההחלטות העיצוביות של הצבעים, שנועדו לשרת את השימושים שהוגדרו. `}</p>
        <p className="mb-0" dir="auto">{`למטה תוכלו לראות את מנעד האפשרויות בתוכן התקבלו ההחלטות. שימו לב, יש להשתמש רק ב-Design Tokens של ההחלטות. `}</p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          אין להוסיף Tokens באופן עצמאי. במידה ויש צורך ב-Tokens נוספים יש לפנות לצוות ה-Design System הממשלתי
        </p>
        <p dir="auto">&nbsp;</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f6f9fc] h-[600px] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full" data-name="צבעים">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[600px] items-end pb-[24px] pt-[64px] px-[64px] relative w-full">
          <Frame2 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-with-stroke
        </p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f5ffef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#347314] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[2713px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2377px] w-[280px]" data-name>
      <Frame12 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר יש קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        קו המתאר יוצר קונטרסט על הרקע הלבן
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">neutral-100</span>
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-without-stroke
        </p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#ddffcd] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[2384px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2377px] w-[280px]" data-name>
      <Frame26 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר אין קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-badge
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">neutral-100</span>
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-without-text
        </p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#7ad94a] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[2063px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2377px] w-[280px]" data-name>
      <Frame28 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר אין טקסט מעל
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-progress bar, לא להשתמש באייקון
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">neutral-100</span>
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-with-stroke
        </p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#f5ffef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame29 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#347314] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[2709px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2704px] w-[280px]" data-name>
      <Frame30 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר יש קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        קו המתאר יוצר קונטרסט על הרקע הלבן
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">neutral-100</span>
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-without-stroke
        </p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#ddffcd] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[2380px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2704px] w-[280px]" data-name>
      <Frame32 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר אין קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-badge
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">neutral-100</span>
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-without-text
        </p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#7ad94a] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[2059px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2704px] w-[280px]" data-name>
      <Frame37 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר אין טקסט מעל
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-progress bar, לא להשתמש באייקון
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">neutral-100</span>
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-with-stroke
        </p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#f5ffef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame38 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#347314] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[2709px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[3042px] w-[280px]" data-name>
      <Frame39 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר יש קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        קו המתאר יוצר קונטרסט על הרקע הלבן
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">neutral-100</span>
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-without-stroke
        </p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#ddffcd] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[2380px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[3042px] w-[280px]" data-name>
      <Frame43 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר אין קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-badge
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">neutral-100</span>
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-without-text
        </p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#7ad94a] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[2059px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[3042px] w-[280px]" data-name>
      <Frame45 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר אין טקסט מעל
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-progress bar, לא להשתמש באייקון
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">neutral-100</span>
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Medium',sans-serif] font-medium" dir="auto">
          netural-default
        </p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame46 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8596af] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[650px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[570px] w-[280px]" data-name>
      <Frame47 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע לקומפוננטה או קונטיינר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל בתוך input field
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        מבוסס על igds.ref.neutral-color.<span className="font-['Rubik:Bold',sans-serif] font-bold">000</span>
      </p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          netural-hover
        </p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#f1f5fb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[330px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[570px] w-[280px]" data-name>
      <Frame54 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע למצב hover
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל במעבר עכבר על menu item
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.neutral-color.50</span>
      </p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8596af] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          disabled-default
        </p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#f0f3f6] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[650px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[919px] w-[280px]" data-name>
      <Frame56 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע למצב disabled
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל בכפתור או input field
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        מבוסס על igds.ref.grey-color.<span className="font-['Rubik:Bold',sans-serif] font-bold">200</span>
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[#8596af] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          disabled-default
        </p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#ebf3ff] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[665px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1295px] w-[280px]" data-name>
      <Frame58 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע למצב pre-field
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-input field בעת מילוי אוטומטי
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        מבוסס על igds.ref.brand-color.<span className="font-['Rubik:Bold',sans-serif] font-bold">50</span>
      </p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8596af] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          disabled-without-text
        </p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#ced7e0] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame59 />
        </div>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[330px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[919px] w-[280px]" data-name>
      <Frame60 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע disabled ללא טקסט מעל
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-toogle במצב לא אקטיבי
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        מבוסס על igds.ref.grey-color.<span className="font-['Rubik:Bold',sans-serif] font-bold">400</span>
      </p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8596af] text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          disabled-without-text
        </p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#8596af] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-0 overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[919px] w-[280px]" data-name>
      <Frame62 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע disabled ללא טקסט במצב hover
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-toogle במצב hover לא אקטיבי
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        מבוסס על igds.ref.grey-color.<span className="font-['Rubik:Bold',sans-serif] font-bold">600</span>
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          brand-default
        </p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#0068f5] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[704px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2030px] w-[280px]" data-name>
      <Frame64 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע למצב default
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל בכפתור
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.500</span>
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-with-border
        </p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#f5ffef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame65 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#347314] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[704px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2377px] w-[280px]" data-name>
      <Frame66 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר יש קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        קו המתאר יוצר קונטרסט על הרקע הלבן
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.green-color.50</span>
      </p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-without-border
        </p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[#ddffcd] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame67 />
        </div>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[375px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2377px] w-[280px]" data-name>
      <Frame68 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר אין קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-badge
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.green-color.100</span>
      </p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-without-text
        </p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#7ad94a] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[54px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2377px] w-[280px]" data-name>
      <Frame70 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר אין טקסט מעל
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-progress bar, לא להשתמש באייקון
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.green-color.500</span>
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a35200] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          warning-with-border
        </p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#fff9ec] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame71 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a35200] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component20() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[700px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2704px] w-[280px]" data-name>
      <Frame72 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע שימו לב כאשר יש קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        קו המתאר יוצר קונטרסט על הרקע הלבן
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.yellow-color.50</span>
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a35200] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          warning-without-border
        </p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#ffecc2] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame73 />
        </div>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[371px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2704px] w-[280px]" data-name>
      <Frame74 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע שימו לב כאשר אין קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-badge
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.yellow-color.100</span>
      </p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          warning-without-text
        </p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-[#dda82f] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame75 />
        </div>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[50px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2704px] w-[280px]" data-name>
      <Frame76 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצלחה כאשר אין טקסט מעל
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        לא להשתמש באייקון
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.yellow-color.400</span>
      </p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a72223] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          failure-with-border
        </p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-[#ffefef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame77 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a72223] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[700px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[3042px] w-[280px]" data-name>
      <Frame78 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע כישלון כאשר יש קו מתאר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        קו המתאר יוצר קונטרסט על הרקע הלבן
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.red-color.50</span>
      </p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a72223] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          failure-without-border
        </p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#ffcbcb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[371px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[3042px] w-[280px]" data-name>
      <Frame80 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full whitespace-pre-wrap" dir="auto">{`רקע כישלון  כאשר אין קו מתאר`}</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-badge
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.red-color.100</span>
      </p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          failure-without-text
        </p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[#eb4a4b] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame81 />
        </div>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[50px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[3042px] w-[280px]" data-name>
      <Frame82 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full whitespace-pre-wrap" dir="auto">{`רקע כישלון  כאשר אין טקסט מעל`}</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-progress bar, לא להשתמש באייקון
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.red-color.500</span>
      </p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          brand-hover
        </p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#0057cc] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame83 />
        </div>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[375px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2030px] w-[280px]" data-name>
      <Frame84 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע למצב hover
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל במעבר עכבר על כפתור
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.600</span>
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          brand-pressed
        </p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-[#0045a3] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame85 />
        </div>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[54px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2030px] w-[280px]" data-name>
      <Frame86 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע למצב pressed
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל בלחיצה על כפתור
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.700</span>
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          secondary-button-pressed
        </p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-[#ebf3ff] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame87 />
        </div>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[330px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1295px] w-[280px]" data-name>
      <Frame88 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע למצב pressed של כפתור משני
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        מאפשר להמחיש את הלחיצה ברקע בהיר
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        מבוסס על igds.ref.brand-color.<span className="font-['Rubik:Bold',sans-serif] font-bold">50</span>
      </p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          neutral-secondlevel
        </p>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[#f1f5fb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame89 />
        </div>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-0 overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[570px] w-[280px]" data-name>
      <Frame90 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע להבדלה מתוך רקע לבן
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל בטבלה בתוך טבלה או neutral badge
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.neutral-color.50</span>
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          inverted
        </p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#0c3058] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame91 />
        </div>
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-0 overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1295px] w-[280px]" data-name>
      <Frame92 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע כהה להודעות שמעל רכיבים רבים
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        נשתמש ב-tooltip שנמצא מעל גרפים בלבד
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.900</span>
      </p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          numeric-badge
        </p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-[#c93435] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame93 />
        </div>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[678px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1649px] w-[280px]" data-name>
      <Frame94 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע ל-numeric badge
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        נשתמש ב-tooltip שנמצא מעל גרפים בלבד
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.red-color.600</span>
      </p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          scroller
        </p>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#8596af] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame95 />
        </div>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[345px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1654px] w-[280px]" data-name>
      <Frame96 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע לרכיב גלילה
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        נשתמש ב-tooltip שנמצא מעל גרפים בלבד
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.border-color.500</span>
      </p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          full-screen-default
        </p>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#f6f9fc] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame97 />
        </div>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[300px] items-center left-[650px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[243px] w-[280px]" data-name>
      <Frame98 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע למסך מלא
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        מבוסס על igds.ref.brand-color.<span className="font-['Rubik:Bold',sans-serif] font-bold">50</span>
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute h-[3342px] left-[2009px] top-0 w-[1173px]">
      <Component10 />
      <Component11 />
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
      <Component16 />
      <Component17 />
      <Component18 />
      <Component19 />
      <Component20 />
      <Component21 />
      <Component22 />
      <Component23 />
      <Component24 />
      <Component25 />
      <Component26 />
      <Component27 />
      <Component28 />
      <Component29 />
      <Component30 />
      <Component31 />
      <Component32 />
      <Component33 />
      <p className="absolute font-['Rubik:ExtraBold',sans-serif] font-extrabold leading-[1.5] left-[576px] text-[#0c3058] text-[64px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre" dir="auto">
        Background
      </p>
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[1.5] left-[573px] text-[#0c3058] text-[48px] text-center text-nowrap top-[97px] translate-x-[-50%] whitespace-pre" dir="auto">
        צבעי רקע למילוי המסך או קונטיינרים
      </p>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1173px] text-[#0c3058] text-[0px] text-[16px] text-right top-[654px] translate-x-[-100%] w-[150px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבעים נייטרליים
        </p>
        <p dir="auto">צבעי רקע שנועדו להכיל תוכן ולאפשר לו להיות קריא</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1173px] text-[#0c3058] text-[0px] text-[16px] text-right top-[2114px] translate-x-[-100%] w-[211px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבעי מותג
        </p>
        <p dir="auto">צבעי רקע שנועדו להדגיש פעולות או פקדים מסוימים באמצעות צבעי המותג</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1173px] text-[#0c3058] text-[0px] text-[16px] text-right top-[1382px] translate-x-[-100%] w-[211px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבעי פעולה
        </p>
        <p className="mb-0" dir="auto">
          צבעים של רכיבים ספציפיים
        </p>
        <p dir="auto">או שמעידים על התנהגויות ייחודיות לרכיבים</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1173px] text-[#0c3058] text-[0px] text-[16px] text-right top-[997px] translate-x-[-100%] w-[211px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבעי disabled
        </p>
        <p dir="auto">צבעי רקע שנועדו לציין שהרכיבים לא פעילים ולא ניתן לקיים איתם אינטרקציה</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1173px] text-[#0c3058] text-[0px] text-[16px] text-right top-[2430px] translate-x-[-100%] w-[158px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבעי סטטוס
        </p>
        <p className="mb-0" dir="auto">
          צבעי רקע שנועדו להעביר משמעות לגבי הסטטוס של הרכיב
        </p>
        <p className="mb-0" dir="auto">
          &nbsp;
        </p>
        <p dir="auto">שימו לב לשלב את צבע הטקסט המתאים</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1173px] text-[#0c3058] text-[0px] text-[16px] text-right top-[327px] translate-x-[-100%] w-[228px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבע רקע למסך
        </p>
        <p dir="auto">צבע שממלא את המסך, ויוצר קונטרסט לעומת הקומפוננטות</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          subtle-default
        </p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-white h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame99 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#8596af] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component34() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[1002px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[217px] w-[280px]" data-name>
      <Frame100 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        קו מתאר במצב default
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-input field
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.border-color.500</span>
      </p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          brand-default
        </p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-white h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame101 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#0068f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component35() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[1002px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[544px] w-[280px]" data-name>
      <Frame102 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        קו מתאר במצב default
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-secondary button
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.500</span>
      </p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8596af] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          disabled
        </p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-[#f0f3f6] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame103 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#8596af] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component36() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[1002px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[871px] w-[280px]" data-name>
      <Frame104 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        מצב disabled
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-input field
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.grey-color.500</span>
      </p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          active
        </p>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-white h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame105 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#0068f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component37() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[1002px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1212px] w-[280px]" data-name>
      <Frame106 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        מצב active
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל כאשר כותבים בתוך input field
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.500</span>
      </p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          divider-default
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col h-px items-start justify-center relative shrink-0 w-[320px]" data-name="Divider">
      <div className="bg-[#b5c7e2] h-px shrink-0 w-full" />
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-[#f1f5fb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-center flex flex-wrap gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame107 />
          <Divider />
        </div>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[1002px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1551px] w-[280px]" data-name>
      <Frame108 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        קו מפריד במצב default
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        ראו קומפוננטת Divider
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.border-color.300</span>
      </p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          divider-inverted
        </p>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="content-stretch flex flex-col h-px items-start justify-center relative shrink-0 w-[320px]" data-name="Divider">
      <div className="bg-white h-px shrink-0 w-[320px]" />
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-[#0c3058] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-center flex flex-wrap gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame109 />
          <Divider1 />
        </div>
      </div>
    </div>
  );
}

function Component39() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[673px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1551px] w-[280px]" data-name>
      <Frame110 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        קו מפריד במצב inverted
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        ראו קומפוננטת Divider
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.border-color.50</span>
      </p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          focused
        </p>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-white h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame111 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#0068f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component40() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[673px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1213px] w-[280px]" data-name>
      <Frame112 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        מצב Focus
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        לטובת ניווט באמצעות המקלדת
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.500</span>
      </p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success
        </p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="bg-[#f5ffef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame113 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#347314] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component41() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[673px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[871px] w-[280px]" data-name>
      <Frame114 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        סטטוס הצלחה
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-Toast
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.green-color.700</span>
      </p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[#a35200] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          warning
        </p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-[#fff9ec] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame115 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#a35200] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component42() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[344px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[871px] w-[280px]" data-name>
      <Frame116 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        סטטוס ״שימו לב״
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-Toast
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.yellow-color.700</span>
      </p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a72223] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          faliure
        </p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-[#ffefef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame117 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#a72223] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component43() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-0 overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[871px] w-[280px]" data-name>
      <Frame118 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        סטטוס שגיאה
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-toast או input field
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.red-color.700</span>
      </p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          brand-hover
        </p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-white h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame119 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#0045a3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component44() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[673px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[544px] w-[280px]" data-name>
      <Frame120 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        קו מתאר במצב hover
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-secondary button
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.700</span>
      </p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.border.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          subtle-hover
        </p>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="bg-white h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame121 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#455163] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component45() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[673px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[217px] w-[280px]" data-name>
      <Frame122 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        קו מתאר במצב hover
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-input field
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.border-color.800</span>
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute h-[1851px] left-[186px] top-[1359px] w-[1528px]">
      <Component34 />
      <Component35 />
      <Component36 />
      <Component37 />
      <Component38 />
      <Component39 />
      <Component40 />
      <Component41 />
      <Component42 />
      <Component43 />
      <Component44 />
      <Component45 />
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[1.5] left-[875.5px] text-[#0c3058] text-[48px] text-center text-nowrap top-[94px] translate-x-[-50%] whitespace-pre" dir="auto">
        צבעים לקווי מתאר וקווים מפרידים
      </p>
      <p className="absolute font-['Rubik:ExtraBold',sans-serif] font-extrabold leading-[1.5] left-[875.5px] text-[#0c3058] text-[64px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre" dir="auto">
        Border
      </p>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1528px] text-[#0c3058] text-[0px] text-[16px] text-right top-[296px] translate-x-[-100%] w-[222px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          קו מתאר נייטרלי
        </p>
        <p dir="auto">לטובת מצבי default ו-hover</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1528px] text-[#0c3058] text-[0px] text-[16px] text-right top-[629px] translate-x-[-100%] w-[209px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          קו מתאר בצבע המותג
        </p>
        <p dir="auto">לטובת מצבי default ו-hover</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1528px] text-[#0c3058] text-[0px] text-[16px] text-right top-[946px] translate-x-[-100%] w-[187px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          קו מתאר לחיווי מצבים
        </p>
        <p className="mb-0" dir="auto">
          לטובת מצבים או סטטוסים ספציפיים
        </p>
        <p className="mb-0" dir="auto">
          &nbsp;
        </p>
        <p dir="auto">שימו לב שצבע הטקסט הוא בפועל באותו גוון, רק עם Token אחר</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1528px] text-[#0c3058] text-[0px] text-[16px] text-right top-[1284px] translate-x-[-100%] w-[187px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבעי פעולה
        </p>
        <p className="mb-0" dir="auto">
          צבעים של רכיבים ספציפיים
        </p>
        <p dir="auto">או שמעידים על התנהגויות ייחודיות לרכיבים</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1528px] text-[#0c3058] text-[0px] text-[16px] text-right top-[1636px] translate-x-[-100%] w-[187px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבעי Divider
        </p>
        <p dir="auto">צבעים של קו הפרדה</p>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          subtle-primary
        </p>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="bg-[#f1f5fb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame123 />
        </div>
      </div>
    </div>
  );
}

function Component46() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[987px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[243px] w-[280px]" data-name>
      <Frame124 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        צבע כותרת, או טקסט רץ ראשי
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        נגיש לשימוש בכל הרקעים הבהירים
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.text-color.900</span>
      </p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0068f5] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          link-secondary
        </p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-[#f1f5fb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame125 />
        </div>
      </div>
    </div>
  );
}

function Component47() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[329px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[588px] w-[280px]" data-name>
      <Frame126 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        לכפתורים בצבע שאינו ראשי
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        בכפתורים לא מודגשים, למשל ב-menu
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.text-color.900</span>
      </p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          subtle-inverted
        </p>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-[#0068f5] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame127 />
        </div>
      </div>
    </div>
  );
}

function Component48() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[329px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[243px] w-[280px]" data-name>
      <Frame128 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        צבע טקסט על רקע כהה
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        לרכיבים סטטיים, למשל numeric badge
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.text-color.000</span>
      </p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0068f5] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          link-default
        </p>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="bg-[#f1f5fb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame129 />
        </div>
      </div>
    </div>
  );
}

function Component49() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[987px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[582px] w-[280px]" data-name>
      <Frame130 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        לינק במצב default
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        לשימוש בכפתורים
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.500</span>
      </p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8596af] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          disabled
        </p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-[#f0f3f6] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame131 />
        </div>
      </div>
    </div>
  );
}

function Component50() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[987px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[915px] w-[280px]" data-name>
      <Frame132 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        מצב disabled
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        לרכיבים במצב disabled
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.grey-color.600</span>
      </p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0068f5] text-[#347314] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success
        </p>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#f5ffef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame133 />
        </div>
      </div>
    </div>
  );
}

function Component51() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[658px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[915px] w-[280px]" data-name>
      <Frame134 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        סטטוס הצלחה
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-toast
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.green-color.800</span>
      </p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0068f5] text-[#a35200] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          warning
        </p>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-[#fff9ec] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame135 />
        </div>
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[329px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[919px] w-[280px]" data-name>
      <Frame136 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        סטטוס ״שימו לב״
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-toast
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.yellow-color.700</span>
      </p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#a72223] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          faliure
        </p>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="bg-[#ffefef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame137 />
        </div>
      </div>
    </div>
  );
}

function Component53() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-0 overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[915px] w-[280px]" data-name>
      <Frame138 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        סטטוס שגיאה
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל ב-toast או input field
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.red-color.700</span>
      </p>
    </div>
  );
}

function Frame139() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0045a3] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          link-hover
        </p>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="bg-[#f1f5fb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame139 />
        </div>
      </div>
    </div>
  );
}

function Component54() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[658px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[588px] w-[280px]" data-name>
      <Frame140 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        לינק במצב hover
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        לשימוש בכפתורים
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.700</span>
      </p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#5878a4] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          subtle-secondary
        </p>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="bg-white h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame141 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8596af] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component55() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[658px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[243px] w-[280px]" data-name>
      <Frame142 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        צבע טקסט משני
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        שימו לב: נגיש לשימוש רק על רקע לבן
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.secondary-text-color.600</span>
      </p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[0px] text-[16px] text-center text-nowrap text-white whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.text.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          link-inverted
        </p>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="bg-[#0068f5] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame143 />
        </div>
      </div>
    </div>
  );
}

function Component56() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-0 overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[588px] w-[280px]" data-name>
      <Frame144 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        לכפתורים על רקע כהה
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        למשל בכפתור
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.text-color.000</span>
      </p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute h-[1219px] left-[204px] top-0 w-[1493px]">
      <Component46 />
      <Component47 />
      <Component48 />
      <Component49 />
      <Component50 />
      <Component51 />
      <Component52 />
      <Component53 />
      <Component54 />
      <Component55 />
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[1.5] left-[841px] text-[#0c3058] text-[48px] text-center text-nowrap top-[113px] translate-x-[-50%] whitespace-pre" dir="auto">
        צבעים לטקסט ואייקונים - תמיד יהיו באותו גוון
      </p>
      <p className="absolute font-['Rubik:ExtraBold',sans-serif] font-extrabold leading-[1.5] left-[840.5px] text-[#0c3058] text-[64px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre" dir="auto">{`Text & Icon`}</p>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1493px] text-[#0c3058] text-[0px] text-[16px] text-right top-[355px] translate-x-[-100%] w-[187px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבע טקסט לא אינטרקטיבי
        </p>
        <p dir="auto">צבע שלטקסט ואייקונים המיועדים לקריא, שלא מתקיימת איתם אינטרקציה בפני עצמם, בשונה מלינק</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1493px] text-[#0c3058] text-[0px] text-[16px] text-right top-[673px] translate-x-[-100%] w-[187px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבע טקסט אינטרקטיבי
        </p>
        <p dir="auto">לטובת לינקים או כפתורים עם קונטיינר שקוף</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1493px] text-[#0c3058] text-[0px] text-[16px] text-right top-[1015px] translate-x-[-100%] w-[187px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבע טקסט לחיווי מצבים
        </p>
        <p dir="auto">לטובת מצבים או סטטוסים ספציפיים</p>
      </div>
      <Component56 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#002352] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.illustration.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          stroke-primary
        </p>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
        <g id="3">
          <path d="M0 0V90H90V0H0Z" fill="var(--fill-0, #002352)" id="Vector" opacity="0" />
          <g id="Path 18915">
            <path clipRule="evenodd" d={svgPaths.p274bae70} fill="var(--fill-0, #EBF3FF)" fillRule="evenodd" id="Vector_2" />
          </g>
          <path d={svgPaths.p33f0b800} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pd211a80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3686d180} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p21850400} fill="var(--fill-0, #002352)" id="Vector_6" />
          <path d={svgPaths.p3fe00c00} fill="var(--fill-0, #002352)" id="Vector_7" />
          <path d={svgPaths.p392df780} fill="var(--fill-0, #002352)" id="Vector_8" />
          <path d={svgPaths.pdee4600} fill="var(--fill-0, #002352)" id="Vector_9" />
          <path d={svgPaths.p2a894580} fill="var(--fill-0, #002352)" id="Vector_10" />
          <path d={svgPaths.p12253700} fill="var(--fill-0, #002352)" id="Vector_11" />
          <path d={svgPaths.p78a6300} fill="var(--fill-0, #002352)" id="Vector_12" />
          <path d={svgPaths.p226f84f0} fill="var(--fill-0, #002352)" id="Vector_13" />
          <path d={svgPaths.p37823a00} fill="var(--fill-0, #002352)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Frame146() {
  return (
    <div className="bg-white h-[180px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[180px] items-center pb-[42px] pt-[12px] px-[12px] relative w-full">
          <Frame145 />
          <Phone />
        </div>
      </div>
    </div>
  );
}

function Component57() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[987px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[243px] w-[280px]" data-name>
      <Frame146 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        צבע קו ראשי
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">{`משמש כצבע ברירת מחדל לקווי מתאר `}</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.text-color.900</span>
      </p>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#002352] text-[0px] text-[16px] text-center w-[236px]" dir="auto">
        igds.light.base.color.illustration.<span className="font-['Rubik:Bold',sans-serif] font-bold">fill-base</span>
      </p>
    </div>
  );
}

function Phone1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
        <g id="3">
          <path d="M0 0V90H90V0H0Z" fill="var(--fill-0, #002352)" id="Vector" opacity="0" />
          <g id="Path 18915">
            <path clipRule="evenodd" d={svgPaths.p274bae70} fill="var(--fill-0, #EBF3FF)" fillRule="evenodd" id="Vector_2" />
          </g>
          <path d={svgPaths.p33f0b800} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pd211a80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3686d180} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p21850400} fill="var(--fill-0, #002352)" id="Vector_6" />
          <path d={svgPaths.p3fe00c00} fill="var(--fill-0, #002352)" id="Vector_7" />
          <path d={svgPaths.p392df780} fill="var(--fill-0, #002352)" id="Vector_8" />
          <path d={svgPaths.pdee4600} fill="var(--fill-0, #002352)" id="Vector_9" />
          <path d={svgPaths.p2a894580} fill="var(--fill-0, #002352)" id="Vector_10" />
          <path d={svgPaths.p12253700} fill="var(--fill-0, #002352)" id="Vector_11" />
          <path d={svgPaths.p78a6300} fill="var(--fill-0, #002352)" id="Vector_12" />
          <path d={svgPaths.p226f84f0} fill="var(--fill-0, #002352)" id="Vector_13" />
          <path d={svgPaths.p37823a00} fill="var(--fill-0, #002352)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Frame148() {
  return (
    <div className="bg-white h-[180px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[180px] items-center pb-[42px] pt-[12px] px-[12px] relative w-full">
          <Frame147 />
          <Phone1 />
        </div>
      </div>
    </div>
  );
}

function Component58() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[987px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[601px] w-[280px]" data-name>
      <Frame148 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        צבע מילוי בסיס
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        משמש למילוי האלמנטים המרכזיים
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        מבוסס על igds.ref.text-color.000
      </p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0068f5] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.illustration.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          stroke-secondary
        </p>
      </div>
    </div>
  );
}

function Phone2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
        <g id="3">
          <path d="M0 0V90H90V0H0Z" fill="var(--fill-0, #8ADAF4)" id="Vector" opacity="0" />
          <g id="Path 18915">
            <path clipRule="evenodd" d={svgPaths.p274bae70} fill="var(--fill-0, #EBF3FF)" fillRule="evenodd" id="Vector_2" />
          </g>
          <path d={svgPaths.p33f0b800} fill="var(--fill-0, #FF8497)" id="Vector_3" />
          <path d={svgPaths.p17797900} fill="var(--fill-0, #FF8497)" id="Vector_4" />
          <path d={svgPaths.p3686d180} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1c56a800} fill="var(--fill-0, #002352)" id="Vector_6" />
          <path d={svgPaths.pc2c6400} fill="var(--fill-0, #002352)" id="Vector_7" />
          <path d={svgPaths.p392df780} fill="var(--fill-0, #0068F5)" id="Vector_8" />
          <path d={svgPaths.p20fbd900} fill="var(--fill-0, #0068F5)" id="Vector_9" />
          <path d={svgPaths.p39fbe700} fill="var(--fill-0, #8ADAF4)" id="Vector_10" />
          <path d={svgPaths.p12253700} fill="var(--fill-0, #8ADAF4)" id="Vector_11" />
          <path d={svgPaths.p78a6300} fill="var(--fill-0, #8ADAF4)" id="Vector_12" />
          <path d={svgPaths.p161f8600} fill="var(--fill-0, #002352)" id="Vector_13" />
          <path d={svgPaths.p37823a00} fill="var(--fill-0, #002352)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Frame150() {
  return (
    <div className="bg-white h-[180px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[180px] items-center pb-[42px] pt-[12px] px-[12px] relative w-full">
          <Frame149 />
          <Phone2 />
        </div>
      </div>
    </div>
  );
}

function Component59() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[658px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[243px] w-[280px]" data-name>
      <Frame150 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        צבע קו משני
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full whitespace-pre-wrap" dir="auto">{`משמש כצבע קו להדגשה  ומקביל לצבע המותג`}</p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.text-color.500</span>
      </p>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0068f5] text-[#ff8497] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.illustration.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          fill-accent
        </p>
      </div>
    </div>
  );
}

function Phone3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
        <g id="3">
          <path d="M0 0V90H90V0H0Z" fill="var(--fill-0, #8ADAF4)" id="Vector" opacity="0" />
          <g id="Path 18915">
            <path clipRule="evenodd" d={svgPaths.p274bae70} fill="var(--fill-0, #EBF3FF)" fillRule="evenodd" id="Vector_2" />
          </g>
          <path d={svgPaths.p33f0b800} fill="var(--fill-0, #FF8497)" id="Vector_3" />
          <path d={svgPaths.p17797900} fill="var(--fill-0, #FF8497)" id="Vector_4" />
          <path d={svgPaths.p3686d180} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1c56a800} fill="var(--fill-0, #002352)" id="Vector_6" />
          <path d={svgPaths.pc2c6400} fill="var(--fill-0, #002352)" id="Vector_7" />
          <path d={svgPaths.p392df780} fill="var(--fill-0, #0068F5)" id="Vector_8" />
          <path d={svgPaths.p20fbd900} fill="var(--fill-0, #0068F5)" id="Vector_9" />
          <path d={svgPaths.p39fbe700} fill="var(--fill-0, #8ADAF4)" id="Vector_10" />
          <path d={svgPaths.p12253700} fill="var(--fill-0, #8ADAF4)" id="Vector_11" />
          <path d={svgPaths.p78a6300} fill="var(--fill-0, #8ADAF4)" id="Vector_12" />
          <path d={svgPaths.p161f8600} fill="var(--fill-0, #002352)" id="Vector_13" />
          <path d={svgPaths.p37823a00} fill="var(--fill-0, #002352)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-white h-[180px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[180px] items-center pb-[42px] pt-[12px] px-[12px] relative w-full">
          <Frame151 />
          <Phone3 />
        </div>
      </div>
    </div>
  );
}

function Component60() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[658px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[601px] w-[280px]" data-name>
      <Frame152 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        צבע מילוי אקסנט
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="rtl">
        משמש לאלמנטים בולטים באיור,
      </p>
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full">
        <p className="mb-0" dir="auto">{`מבוסס על `}</p>
        <p className="font-['Rubik:Italic',sans-serif] italic" dir="auto">
          igds.light.ref.gov-illustration.hoopie-pink
        </p>
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8adaf4] text-[0px] text-[16px] text-center w-[236px]">
        <p className="mb-0" dir="auto">
          igds.light.base.color.illustration.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          stroke-tertiary
        </p>
      </div>
    </div>
  );
}

function Phone4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
        <g id="3">
          <path d="M0 0V90H90V0H0Z" fill="var(--fill-0, #8ADAF4)" id="Vector" opacity="0" />
          <g id="Path 18915">
            <path clipRule="evenodd" d={svgPaths.p274bae70} fill="var(--fill-0, #EBF3FF)" fillRule="evenodd" id="Vector_2" />
          </g>
          <path d={svgPaths.p33f0b800} fill="var(--fill-0, #FF8497)" id="Vector_3" />
          <path d={svgPaths.p17797900} fill="var(--fill-0, #FF8497)" id="Vector_4" />
          <path d={svgPaths.p3686d180} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1c56a800} fill="var(--fill-0, #002352)" id="Vector_6" />
          <path d={svgPaths.pc2c6400} fill="var(--fill-0, #002352)" id="Vector_7" />
          <path d={svgPaths.p392df780} fill="var(--fill-0, #0068F5)" id="Vector_8" />
          <path d={svgPaths.p20fbd900} fill="var(--fill-0, #0068F5)" id="Vector_9" />
          <path d={svgPaths.p39fbe700} fill="var(--fill-0, #8ADAF4)" id="Vector_10" />
          <path d={svgPaths.p12253700} fill="var(--fill-0, #8ADAF4)" id="Vector_11" />
          <path d={svgPaths.p78a6300} fill="var(--fill-0, #8ADAF4)" id="Vector_12" />
          <path d={svgPaths.p161f8600} fill="var(--fill-0, #002352)" id="Vector_13" />
          <path d={svgPaths.p37823a00} fill="var(--fill-0, #002352)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Frame154() {
  return (
    <div className="bg-white h-[175px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[175px] items-center pb-[42px] pt-[12px] px-[12px] relative w-full">
          <Frame153 />
          <Phone4 />
        </div>
      </div>
    </div>
  );
}

function Component61() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[329px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[243px] w-[280px]" data-name>
      <Frame154 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        צבע קו שלישי
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="auto">
        נועד להוסיף עניין ויזואלי באלמנטים דקורטיביים
      </p>
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full">
        <p className="mb-0" dir="auto">{`מבוסס על `}</p>
        <p className="font-['Rubik:Italic',sans-serif] italic" dir="auto">
          igds.light.ref.gov-illustration.hoopie-cyan
        </p>
      </div>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ebf3ff] text-[0px] text-[16px] text-center w-[236px]">
        <p className="mb-0" dir="auto">
          igds.light.base.color.illustration.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          fill-backdrop
        </p>
      </div>
    </div>
  );
}

function Phone5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[90px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
        <g id="3">
          <path d="M0 0V90H90V0H0Z" fill="var(--fill-0, #8ADAF4)" id="Vector" opacity="0" />
          <g id="Path 18915">
            <path clipRule="evenodd" d={svgPaths.p274bae70} fill="var(--fill-0, #EBF3FF)" fillRule="evenodd" id="Vector_2" />
          </g>
          <path d={svgPaths.p33f0b800} fill="var(--fill-0, #FF8497)" id="Vector_3" />
          <path d={svgPaths.p17797900} fill="var(--fill-0, #FF8497)" id="Vector_4" />
          <path d={svgPaths.p3686d180} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1c56a800} fill="var(--fill-0, #002352)" id="Vector_6" />
          <path d={svgPaths.pc2c6400} fill="var(--fill-0, #002352)" id="Vector_7" />
          <path d={svgPaths.p392df780} fill="var(--fill-0, #0068F5)" id="Vector_8" />
          <path d={svgPaths.p20fbd900} fill="var(--fill-0, #0068F5)" id="Vector_9" />
          <path d={svgPaths.p39fbe700} fill="var(--fill-0, #8ADAF4)" id="Vector_10" />
          <path d={svgPaths.p12253700} fill="var(--fill-0, #8ADAF4)" id="Vector_11" />
          <path d={svgPaths.p78a6300} fill="var(--fill-0, #8ADAF4)" id="Vector_12" />
          <path d={svgPaths.p161f8600} fill="var(--fill-0, #002352)" id="Vector_13" />
          <path d={svgPaths.p37823a00} fill="var(--fill-0, #002352)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Frame156() {
  return (
    <div className="bg-[#30639c] h-[183px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[183px] items-center pb-[42px] pt-[12px] px-[12px] relative w-full">
          <Frame155 />
          <Phone5 />
        </div>
      </div>
    </div>
  );
}

function Component62() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[329px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[601px] w-[280px]" data-name>
      <Frame156 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        צבע מילוי רקע
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#0c3058] text-[14px] text-center w-full" dir="rtl">
        משמש כתמיכה ויזואלית לאיור כולו
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.brand-color.50</span>
      </p>
    </div>
  );
}

function Phone6() {
  return (
    <div className="absolute left-[1259px] overflow-clip size-[56px] top-[113px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="3">
          <path d="M0 0V56H56V0H0Z" fill="var(--fill-0, #8ADAF4)" id="Vector" opacity="0" />
          <g id="Path 18915">
            <path clipRule="evenodd" d={svgPaths.peae6100} fill="var(--fill-0, #EBF3FF)" fillRule="evenodd" id="Vector_2" />
          </g>
          <path d={svgPaths.p3a5d28f0} fill="var(--fill-0, #FF8497)" id="Vector_3" />
          <path d={svgPaths.p1ca6e900} fill="var(--fill-0, #FF8497)" id="Vector_4" />
          <path d={svgPaths.p14057240} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p383ab0c0} fill="var(--fill-0, #002352)" id="Vector_6" />
          <path d={svgPaths.p33789400} fill="var(--fill-0, #002352)" id="Vector_7" />
          <path d={svgPaths.p177d1c80} fill="var(--fill-0, #0068F5)" id="Vector_8" />
          <path d={svgPaths.p12de4400} fill="var(--fill-0, #0068F5)" id="Vector_9" />
          <path d={svgPaths.p28b90200} fill="var(--fill-0, #8ADAF4)" id="Vector_10" />
          <path d={svgPaths.p7bd0e10} fill="var(--fill-0, #8ADAF4)" id="Vector_11" />
          <path d={svgPaths.p2ae85630} fill="var(--fill-0, #8ADAF4)" id="Vector_12" />
          <path d={svgPaths.p39f61a00} fill="var(--fill-0, #002352)" id="Vector_13" />
          <path d={svgPaths.p14f58e80} fill="var(--fill-0, #002352)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Phone7() {
  return (
    <div className="absolute left-[1394px] overflow-clip size-[56px] top-[113px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="3">
          <path d="M0 0V56H56V0H0Z" fill="var(--fill-0, #002352)" id="Vector" opacity="0" />
          <g id="Path 18915">
            <path clipRule="evenodd" d={svgPaths.peae6100} fill="var(--fill-0, #EBF3FF)" fillRule="evenodd" id="Vector_2" />
          </g>
          <path d={svgPaths.p3a5d28f0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p22c5e480} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p14057240} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p5c0e800} fill="var(--fill-0, #002352)" id="Vector_6" />
          <path d={svgPaths.p2b08be00} fill="var(--fill-0, #002352)" id="Vector_7" />
          <path d={svgPaths.p177d1c80} fill="var(--fill-0, #002352)" id="Vector_8" />
          <path d={svgPaths.p2fd93500} fill="var(--fill-0, #002352)" id="Vector_9" />
          <path d={svgPaths.p23f1f800} fill="var(--fill-0, #002352)" id="Vector_10" />
          <path d={svgPaths.p7bd0e10} fill="var(--fill-0, #002352)" id="Vector_11" />
          <path d={svgPaths.p2ae85630} fill="var(--fill-0, #002352)" id="Vector_12" />
          <path d={svgPaths.pc66f000} fill="var(--fill-0, #002352)" id="Vector_13" />
          <path d={svgPaths.p14f58e80} fill="var(--fill-0, #002352)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute h-[1219px] left-[1689px] top-[3539px] w-[1493px]">
      <Component57 />
      <Component58 />
      <Component59 />
      <Component60 />
      <Component61 />
      <Component62 />
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[1.5] left-[841px] text-[#0c3058] text-[48px] text-center text-nowrap top-[113px] translate-x-[-50%] whitespace-pre" dir="auto">
        צבע הקווים ומילוי האיורים
      </p>
      <p className="absolute font-['Rubik:ExtraBold',sans-serif] font-extrabold leading-[1.5] left-[840.5px] text-[#0c3058] text-[64px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre" dir="auto">
        Illustrations
      </p>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1493px] text-[#0c3058] text-[0px] text-[16px] text-right top-[355px] translate-x-[-100%] w-[187px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבעי קו
        </p>
        <p dir="auto">משמש לתיאור קווי המתאר החיצוניים של האובייקט או הדמות המאויירת</p>
      </div>
      <div className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[1493px] text-[#0c3058] text-[0px] text-[16px] text-right top-[673px] translate-x-[-100%] w-[187px]">
        <p className="font-['Rubik:Bold',sans-serif] font-bold mb-0" dir="auto">
          צבע מילוי
        </p>
        <p dir="auto">משמש למילוי שטחי האיור</p>
      </div>
      <Phone6 />
      <Phone7 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-px mt-[2px] relative size-[20px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(217, 217, 217, 1)", "--stroke-0": "rgba(0, 104, 245, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" id="Ellipse 4" r="9.5" stroke="var(--stroke-0, #0068F5)" />
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['Rubik:Light',sans-serif] font-light h-[19px] leading-[24px] ml-[13px] mt-0 relative text-[#0068f5] text-[14px] text-right translate-x-[-100%] w-[13px]">1</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end leading-[0] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Rubik:Light',sans-serif] font-light justify-center relative shrink-0 text-[#0c3058] text-[16px] text-nowrap text-right">
        <p className="leading-[24px] whitespace-pre" dir="auto">
          איור וקטורי הניתן להגדלה ושומר על איכותו בכל גודל.
        </p>
      </div>
      <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center relative self-stretch shrink-0 text-[#0068f5] text-[16px] w-[136px]">
        <p className="leading-[1.5]" dir="auto">
          Graphical element
        </p>
      </div>
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-[2px] relative size-[20px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(217, 217, 217, 1)", "--stroke-0": "rgba(0, 104, 245, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" id="Ellipse 4" r="9.5" stroke="var(--stroke-0, #0068F5)" />
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['Rubik:Light',sans-serif] font-light h-[19px] leading-[24px] ml-[14px] mt-0 relative text-[#0068f5] text-[14px] text-right translate-x-[-100%] w-[13px]">2</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] relative shrink-0">
      <div className="flex flex-col font-['Rubik:Light',sans-serif] font-light justify-center relative shrink-0 text-[#0c3058] text-[16px] text-nowrap text-right">
        <p className="leading-[24px] whitespace-pre" dir="auto">
          צבעי האיור המבוססים על צבעי המותג.
        </p>
      </div>
      <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center relative self-stretch shrink-0 text-[#0068f5] text-[16px] w-[96px]">
        <p className="leading-[1.5]" dir="auto">
          Color Palette
        </p>
      </div>
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-[2px] relative size-[20px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(217, 217, 217, 1)", "--stroke-0": "rgba(0, 104, 245, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" id="Ellipse 4" r="9.5" stroke="var(--stroke-0, #0068F5)" />
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['Rubik:Regular',sans-serif] font-normal leading-[24px] ml-[16px] mt-0 relative text-[#0068f5] text-[10px] text-nowrap text-right translate-x-[-100%] whitespace-pre" dir="auto">
        2.1
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start justify-end leading-[0] px-[24px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Rubik:Light',sans-serif] font-light grow justify-center min-h-px min-w-px relative shrink-0 text-[#0c3058] text-[0px] text-right">
            <p className="leading-[24px] mb-0 text-[16px]" dir="auto">
              באיורים בגירסה הצבעונית נעשה שימוש בשלושה צבעים לקווים
            </p>
            <p className="leading-[0] mb-0 text-[16px]" dir="rtl">
              <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5]">Primary:</span>
              <span className="leading-[24px]">{` הצבע העיקרי של קווי האיור, מקביל לצבע הטקסט הראשי ביצירת בסיס של האיור.`}</span>
            </p>
            <p className="leading-[0] mb-0 text-[16px]" dir="rtl">
              <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5]">Secondary:</span>
              <span className="leading-[24px]">{` הצבע המשני, שמודגש יותר ומקביל לצבע המותג, מעניק לאיור נוכחות וחיים.`}</span>
            </p>
            <p className="leading-[0] text-[16px]" dir="rtl">
              <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5]">Motion-effect:</span>
              <span className="leading-[24px]">{` נועד להוסיף עניין ויזואלי, בדרך כלל באלמנטים דקורטיביים באיור וניתן לבחירה. `}</span>
            </p>
          </div>
          <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#0068f5] text-[16px] w-[49px]">
            <p className="leading-[1.5]" dir="auto">
              Stroke
            </p>
          </div>
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-[2px] relative size-[20px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(217, 217, 217, 1)", "--stroke-0": "rgba(0, 104, 245, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" id="Ellipse 4" r="9.5" stroke="var(--stroke-0, #0068F5)" />
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['Rubik:Regular',sans-serif] font-normal leading-[24px] ml-[17px] mt-0 relative text-[#0068f5] text-[10px] text-nowrap text-right translate-x-[-100%] whitespace-pre" dir="auto">
        2.2
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start justify-end leading-[0] px-[24px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Rubik:Light',sans-serif] font-light grow justify-center min-h-px min-w-px relative shrink-0 text-[#0c3058] text-[0px] text-right">
            <p className="leading-[24px] mb-0 text-[16px]" dir="auto">
              באיורים בגירסה הצבעונית נעשה שימוש בשלושה צבעים למילוי
            </p>
            <p className="leading-[0] mb-0 text-[16px]" dir="rtl">
              <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5]">{`Base: `}</span>
              <span className="leading-[24px]">משמש למילוי האלמנטים המרכזיים, לרוב נייטרלי ונועד למלא את הרכיב המרכזי בהאיור.</span>
            </p>
            <p className="leading-[0] mb-0 text-[16px]" dir="rtl">
              <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5]">Accent:</span>
              <span className="leading-[24px]">{` משמש לאלמנטים בולטים באיור, המושכים תשומת לב ומדגישים את צבעי המותג.`}</span>
            </p>
            <p className="leading-[0] text-[16px]" dir="rtl">
              <span className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5]">Backdrop:</span>
              <span className="leading-[24px]">{` משמש כתמיכה ויזואלית לאיור כולו, מעניק תחושת מסגור או הדגשה למכלול.`}</span>
            </p>
          </div>
          <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[24px] justify-center relative shrink-0 text-[#0068f5] text-[16px] w-[49px]">
            <p className="leading-[1.5]" dir="auto">
              Fill
            </p>
          </div>
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-[2px] relative size-[20px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(217, 217, 217, 1)", "--stroke-0": "rgba(0, 104, 245, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" id="Ellipse 4" r="9.5" stroke="var(--stroke-0, #0068F5)" />
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['Rubik:Light',sans-serif] font-light h-[19px] leading-[24px] ml-[14px] mt-0 relative text-[#0068f5] text-[14px] text-right translate-x-[-100%] w-[13px]">3</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end leading-[0] relative shrink-0">
      <div className="flex flex-col font-['Rubik:Light',sans-serif] font-light justify-center relative shrink-0 text-[#0c3058] text-[16px] text-nowrap text-right">
        <p className="leading-[24px] whitespace-pre" dir="auto">{`טקסט תיאורי לקוראי מסך להבטחת נגישות. `}</p>
      </div>
      <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center relative self-stretch shrink-0 text-[#0068f5] text-[16px] w-[56px]">
        <p className="leading-[1.5]" dir="auto">
          Alt Text
        </p>
      </div>
      <Group4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Rubik:Regular',sans-serif] font-normal grow justify-center leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#0c3058] text-[16px] text-right">
        <p className="mb-0" dir="auto">{`*יש להתאים את הצבעים בטבלת ה-Variables, ואין לבצע שינויים ישירים בצבעי האיורים, `}</p>
        <p dir="auto">כדי לשמור על אחידות בכל האיורים.</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-end left-[2116px] top-[4856px] w-[888px]">
      <Frame36 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.base.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          success-with-stroke
        </p>
      </div>
    </div>
  );
}

function Frame158() {
  return (
    <div className="bg-[rgba(59,57,57,0.7)] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame157 />
        </div>
      </div>
    </div>
  );
}

function Component63() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[207px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[191px] w-[280px]" data-name>
      <Frame158 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע הצללה להדגשה של popup
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[0px] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        <span>{`מבוסס על `}</span>
        <span className="font-['Rubik:Italic',sans-serif] italic">igds.ref.opacity-color.700</span>
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute h-[491px] left-[665px] top-[3340px] w-[676px]">
      <p className="absolute font-['Rubik:Bold',sans-serif] font-bold leading-[1.5] left-[338px] text-[#0c3058] text-[48px] text-center text-nowrap top-[107px] translate-x-[-50%] whitespace-pre" dir="auto">
        צבעים עם שקיפות, לטובת הצללה
      </p>
      <p className="absolute font-['Rubik:ExtraBold',sans-serif] font-extrabold leading-[1.5] left-[347px] text-[#0c3058] text-[64px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre" dir="auto">
        Overlay
      </p>
      <Component63 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white h-[5263px] relative shrink-0 w-full">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Frame51 />
      <Frame48 />
      <Frame50 />
      <Frame52 />
      <Frame11 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame49 key={i} />
      ))}
    </div>
  );
}

function Frame159() {
  return (
    <div className="box-border content-stretch flex items-center justify-center mb-[-28px] relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-center mb-[-28px] min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        {" "}
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-center mb-[-28px] min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #EBF3FF
      </p>
    </div>
  );
}

function Frame160() {
  return (
    <div className="bg-[#ebf3ff] box-border content-stretch flex flex-col items-center justify-center overflow-clip pb-[70px] pt-[42px] px-[12px] relative shrink-0 size-[200px]">
      <Frame159 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #B7D6FF
      </p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="bg-[#b7d6ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame161 />
      <Frame162 />
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #8ABBFF
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#8abbff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame164 />
      <Frame165 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #5CA1FF
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#5ca1ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame166 />
      <Frame167 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #2E87FF
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#2e87ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame168 />
      <Frame169 />
    </div>
  );
}

function Frame170() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #0068F5
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#0068f5] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame170 />
      <Frame171 />
    </div>
  );
}

function Frame172() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #0057CC
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#0057cc] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame172 />
      <Frame173 />
    </div>
  );
}

function Frame174() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #0045A3
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#0045a3] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame174 />
      <Frame175 />
    </div>
  );
}

function Frame176() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #00347B
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#00347b] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame176 />
      <Frame177 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.israel-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #002352
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#002352] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame178 />
      <Frame179 />
    </div>
  );
}

function BrandColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Brand color">
      <Frame160 />
      <Frame163 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          white
        </p>
      </div>
    </div>
  );
}

function Frame181() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">{`# `}</p>
    </div>
  );
}

function Frame182() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame180 />
      <Frame181 />
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame184() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #F4F9FF
      </p>
    </div>
  );
}

function Frame185() {
  return (
    <div className="bg-[#f4f9ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame183 />
      <Frame184 />
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame187() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #DBECFF
      </p>
    </div>
  );
}

function Frame188() {
  return (
    <div className="bg-[#dbecff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame186 />
      <Frame187 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #C2DFFF
      </p>
    </div>
  );
}

function Frame191() {
  return (
    <div className="bg-[#c2dfff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame189 />
      <Frame190 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #A9D1FF
      </p>
    </div>
  );
}

function Frame194() {
  return (
    <div className="bg-[#a9d1ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame192 />
      <Frame193 />
    </div>
  );
}

function Frame195() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #90C4FF
      </p>
    </div>
  );
}

function Frame197() {
  return (
    <div className="bg-[#90c4ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame195 />
      <Frame196 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #6BA3E0
      </p>
    </div>
  );
}

function Frame200() {
  return (
    <div className="bg-[#6ba3e0] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame198 />
      <Frame199 />
    </div>
  );
}

function Frame201() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #4B81BE
      </p>
    </div>
  );
}

function Frame203() {
  return (
    <div className="bg-[#4b81be] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame201 />
      <Frame202 />
    </div>
  );
}

function Frame204() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #30639C
      </p>
    </div>
  );
}

function Frame206() {
  return (
    <div className="bg-[#30639c] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame204 />
      <Frame205 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #1B487A
      </p>
    </div>
  );
}

function Frame209() {
  return (
    <div className="bg-[#1b487a] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame207 />
      <Frame208 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dawn-blue-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #0C3058
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#0c3058] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame210 />
      <Frame211 />
    </div>
  );
}

function TextColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text color">
      <Frame182 />
      <Frame185 />
      <Frame188 />
      <Frame191 />
      <Frame194 />
      <Frame197 />
      <Frame200 />
      <Frame203 />
      <Frame206 />
      <Frame209 />
      <Frame24 />
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame213() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #F5F9FF
      </p>
    </div>
  );
}

function Frame214() {
  return (
    <div className="bg-[#f5f9ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame212 />
      <Frame213 />
    </div>
  );
}

function Frame215() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame216() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #D7E8FF
      </p>
    </div>
  );
}

function Frame217() {
  return (
    <div className="bg-[#d7e8ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame215 />
      <Frame216 />
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame219() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #B9D6FF
      </p>
    </div>
  );
}

function Frame220() {
  return (
    <div className="bg-[#b9d6ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame218 />
      <Frame219 />
    </div>
  );
}

function Frame221() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame222() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #99C2FB
      </p>
    </div>
  );
}

function Frame223() {
  return (
    <div className="bg-[#99c2fb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame221 />
      <Frame222 />
    </div>
  );
}

function Frame224() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #82A9DE
      </p>
    </div>
  );
}

function Frame226() {
  return (
    <div className="bg-[#82a9de] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame224 />
      <Frame225 />
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame228() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #6D90C1
      </p>
    </div>
  );
}

function Frame229() {
  return (
    <div className="bg-[#6d90c1] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame227 />
      <Frame228 />
    </div>
  );
}

function Frame230() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame231() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #5878A4
      </p>
    </div>
  );
}

function Frame232() {
  return (
    <div className="bg-[#5878a4] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame230 />
      <Frame231 />
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame234() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #466186
      </p>
    </div>
  );
}

function Frame235() {
  return (
    <div className="bg-[#466186] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame233 />
      <Frame234 />
    </div>
  );
}

function Frame236() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame237() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #344A69
      </p>
    </div>
  );
}

function Frame238() {
  return (
    <div className="bg-[#344a69] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame236 />
      <Frame237 />
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          secondary-oxford-blue.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame240() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[176px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #24354C
      </p>
    </div>
  );
}

function Frame241() {
  return (
    <div className="bg-[#24354c] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame239 />
      <Frame240 />
    </div>
  );
}

function SecondaryTextColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Secondary text color">
      <Frame214 />
      <Frame217 />
      <Frame220 />
      <Frame223 />
      <Frame226 />
      <Frame229 />
      <Frame232 />
      <Frame235 />
      <Frame238 />
      <Frame241 />
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.ref.
        </p>
        <p className="mb-0" dir="auto">
          dim-grey.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          000
        </p>
      </div>
    </div>
  );
}

function Frame243() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FFFFFF
      </p>
    </div>
  );
}

function Frame244() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame242 />
      <Frame243 />
    </div>
  );
}

function Frame245() {
  return (
    <div className="box-border content-stretch flex items-center justify-center mb-[-10px] relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame246() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-center mb-[-10px] min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        {" "}
      </p>
    </div>
  );
}

function Frame247() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-center mb-[-10px] min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #F1F5FB
      </p>
    </div>
  );
}

function Frame248() {
  return (
    <div className="bg-[#f1f5fb] box-border content-stretch flex flex-col items-center justify-center overflow-clip pb-[52px] pt-[42px] px-[12px] relative shrink-0 size-[200px]">
      <Frame245 />
      <Frame246 />
      <Frame247 />
    </div>
  );
}

function Frame249() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame250() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #E1EAF4
      </p>
    </div>
  );
}

function Frame251() {
  return (
    <div className="bg-[#e1eaf4] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame249 />
      <Frame250 />
    </div>
  );
}

function Frame252() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame253() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #D2DBE8
      </p>
    </div>
  );
}

function Frame254() {
  return (
    <div className="bg-[#d2dbe8] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame252 />
      <Frame253 />
    </div>
  );
}

function Frame255() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame256() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #BAC3D2
      </p>
    </div>
  );
}

function Frame257() {
  return (
    <div className="bg-[#bac3d2] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame255 />
      <Frame256 />
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame259() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #A2ACBB
      </p>
    </div>
  );
}

function Frame260() {
  return (
    <div className="bg-[#a2acbb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame258 />
      <Frame259 />
    </div>
  );
}

function Frame261() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame262() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #8C96A4
      </p>
    </div>
  );
}

function Frame263() {
  return (
    <div className="bg-[#8c96a4] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame261 />
      <Frame262 />
    </div>
  );
}

function Frame264() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame265() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #767F8E
      </p>
    </div>
  );
}

function Frame266() {
  return (
    <div className="bg-[#767f8e] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame264 />
      <Frame265 />
    </div>
  );
}

function Frame267() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame268() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #616A77
      </p>
    </div>
  );
}

function Frame269() {
  return (
    <div className="bg-[#616a77] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame267 />
      <Frame268 />
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame271() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #4D5560
      </p>
    </div>
  );
}

function Frame272() {
  return (
    <div className="bg-[#4d5560] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame270 />
      <Frame271 />
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.dim-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame274() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #39404A
      </p>
    </div>
  );
}

function Frame275() {
  return (
    <div className="bg-[#39404a] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame273 />
      <Frame274 />
    </div>
  );
}

function NeutralColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Neutral color">
      <Frame244 />
      <Frame248 />
      <Frame251 />
      <Frame254 />
      <Frame257 />
      <Frame260 />
      <Frame263 />
      <Frame266 />
      <Frame269 />
      <Frame272 />
      <Frame275 />
    </div>
  );
}

function Frame276() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame277() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FAFCFF
      </p>
    </div>
  );
}

function Frame278() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame276 />
      <Frame277 />
    </div>
  );
}

function Frame279() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame280() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #E6F0FF
      </p>
    </div>
  );
}

function Frame281() {
  return (
    <div className="bg-[#e6f0ff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame279 />
      <Frame280 />
    </div>
  );
}

function Frame282() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame283() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #CEE1FC
      </p>
    </div>
  );
}

function Frame284() {
  return (
    <div className="bg-[#cee1fc] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame282 />
      <Frame283 />
    </div>
  );
}

function Frame285() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame286() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #B5C7E2
      </p>
    </div>
  );
}

function Frame287() {
  return (
    <div className="bg-[#b5c7e2] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame285 />
      <Frame286 />
    </div>
  );
}

function Frame288() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame289() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #9CAEC9
      </p>
    </div>
  );
}

function Frame290() {
  return (
    <div className="bg-[#9caec9] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame288 />
      <Frame289 />
    </div>
  );
}

function Frame291() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame292() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #8596AF
      </p>
    </div>
  );
}

function Frame293() {
  return (
    <div className="bg-[#8596af] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame291 />
      <Frame292 />
    </div>
  );
}

function Frame294() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame295() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #6F7E95
      </p>
    </div>
  );
}

function Frame296() {
  return (
    <div className="bg-[#6f7e95] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame294 />
      <Frame295 />
    </div>
  );
}

function Frame297() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame298() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #59677C
      </p>
    </div>
  );
}

function Frame299() {
  return (
    <div className="bg-[#59677c] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame297 />
      <Frame298 />
    </div>
  );
}

function Frame300() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame301() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #455163
      </p>
    </div>
  );
}

function Frame302() {
  return (
    <div className="bg-[#455163] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame300 />
      <Frame301 />
    </div>
  );
}

function Frame303() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center w-[100px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.bright-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame304() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #323B49
      </p>
    </div>
  );
}

function Frame305() {
  return (
    <div className="bg-[#323b49] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame303 />
      <Frame304 />
    </div>
  );
}

function BorderColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Border color">
      <Frame278 />
      <Frame281 />
      <Frame284 />
      <Frame287 />
      <Frame290 />
      <Frame293 />
      <Frame296 />
      <Frame299 />
      <Frame302 />
      <Frame305 />
    </div>
  );
}

function Frame306() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame307() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #F5F7F9
      </p>
    </div>
  );
}

function Frame308() {
  return (
    <div className="bg-[#f5f7f9] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame306 />
      <Frame307 />
    </div>
  );
}

function Frame309() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame310() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #F0F3F6
      </p>
    </div>
  );
}

function Frame311() {
  return (
    <div className="bg-[#f0f3f6] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame309 />
      <Frame310 />
    </div>
  );
}

function Frame312() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame313() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #EBEFF3
      </p>
    </div>
  );
}

function Frame314() {
  return (
    <div className="bg-[#ebeff3] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame312 />
      <Frame313 />
    </div>
  );
}

function Frame315() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame316() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #E0E8EF
      </p>
    </div>
  );
}

function Frame317() {
  return (
    <div className="bg-[#e0e8ef] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame315 />
      <Frame316 />
    </div>
  );
}

function Frame318() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame319() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #CED7E0
      </p>
    </div>
  );
}

function Frame320() {
  return (
    <div className="bg-[#ced7e0] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame318 />
      <Frame319 />
    </div>
  );
}

function Frame321() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame322() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #B6C0CC
      </p>
    </div>
  );
}

function Frame323() {
  return (
    <div className="bg-[#b6c0cc] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame321 />
      <Frame322 />
    </div>
  );
}

function Frame324() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame325() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #8596AF
      </p>
    </div>
  );
}

function Frame326() {
  return (
    <div className="bg-[#8596af] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame324 />
      <Frame325 />
    </div>
  );
}

function Frame327() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame328() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #5D6E87
      </p>
    </div>
  );
}

function Frame329() {
  return (
    <div className="bg-[#5d6e87] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame327 />
      <Frame328 />
    </div>
  );
}

function Frame330() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame331() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #495A73
      </p>
    </div>
  );
}

function Frame332() {
  return (
    <div className="bg-[#495a73] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame330 />
      <Frame331 />
    </div>
  );
}

function Frame333() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center w-[101px]">
        <p className="mb-0" dir="auto">
          igds.light.ref.steel-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame334() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #21324B
      </p>
    </div>
  );
}

function Frame335() {
  return (
    <div className="bg-[#21324b] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame333 />
      <Frame334 />
    </div>
  );
}

function GreyColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Grey color">
      <Frame308 />
      <Frame311 />
      <Frame314 />
      <Frame317 />
      <Frame320 />
      <Frame323 />
      <Frame326 />
      <Frame329 />
      <Frame332 />
      <Frame335 />
    </div>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame337() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #F3F3F3
      </p>
    </div>
  );
}

function Frame338() {
  return (
    <div className="bg-[rgba(243,243,243,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame336 />
      <Frame337 />
    </div>
  );
}

function Frame339() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame340() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #DEDEDE
      </p>
    </div>
  );
}

function Frame341() {
  return (
    <div className="bg-[rgba(222,222,222,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame339 />
      <Frame340 />
    </div>
  );
}

function Frame342() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame343() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #CACACA
      </p>
    </div>
  );
}

function Frame344() {
  return (
    <div className="bg-[rgba(202,202,202,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame342 />
      <Frame343 />
    </div>
  );
}

function Frame345() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame346() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #B6B6B6
      </p>
    </div>
  );
}

function Frame347() {
  return (
    <div className="bg-[rgba(182,182,182,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame345 />
      <Frame346 />
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame349() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #A1A1A1
      </p>
    </div>
  );
}

function Frame350() {
  return (
    <div className="bg-[rgba(161,161,161,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame348 />
      <Frame349 />
    </div>
  );
}

function Frame351() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame352() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #8D8D8D
      </p>
    </div>
  );
}

function Frame353() {
  return (
    <div className="bg-[rgba(141,141,141,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame351 />
      <Frame352 />
    </div>
  );
}

function Frame354() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame355() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #787878
      </p>
    </div>
  );
}

function Frame356() {
  return (
    <div className="bg-[rgba(120,120,120,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame354 />
      <Frame355 />
    </div>
  );
}

function Frame357() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame358() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #646464
      </p>
    </div>
  );
}

function Frame359() {
  return (
    <div className="bg-[rgba(100,100,100,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame357 />
      <Frame358 />
    </div>
  );
}

function Frame360() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame361() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #504E4E
      </p>
    </div>
  );
}

function Frame362() {
  return (
    <div className="bg-[rgba(80,78,78,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame360 />
      <Frame361 />
    </div>
  );
}

function Frame363() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          warm-grey-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame364() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #3B3939
      </p>
    </div>
  );
}

function Frame365() {
  return (
    <div className="bg-[rgba(59,57,57,0.5)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame363 />
      <Frame364 />
    </div>
  );
}

function OpacityColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Opacity color">
      <Frame338 />
      <Frame341 />
      <Frame344 />
      <Frame347 />
      <Frame350 />
      <Frame353 />
      <Frame356 />
      <Frame359 />
      <Frame362 />
      <Frame365 />
    </div>
  );
}

function Frame366() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame367() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #F5FFEF
      </p>
    </div>
  );
}

function Frame368() {
  return (
    <div className="bg-[#f5ffef] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame366 />
      <Frame367 />
    </div>
  );
}

function Frame369() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame370() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #DDFFCD
      </p>
    </div>
  );
}

function Frame371() {
  return (
    <div className="bg-[#ddffcd] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame369 />
      <Frame370 />
    </div>
  );
}

function Frame372() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame373() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #C6FFAA
      </p>
    </div>
  );
}

function Frame374() {
  return (
    <div className="bg-[#c6ffaa] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame372 />
      <Frame373 />
    </div>
  );
}

function Frame375() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame376() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #AFFF87
      </p>
    </div>
  );
}

function Frame377() {
  return (
    <div className="bg-[#afff87] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame375 />
      <Frame376 />
    </div>
  );
}

function Frame378() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame379() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #96FB63
      </p>
    </div>
  );
}

function Frame380() {
  return (
    <div className="bg-[#96fb63] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame378 />
      <Frame379 />
    </div>
  );
}

function Frame381() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame382() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #7AD94A
      </p>
    </div>
  );
}

function Frame383() {
  return (
    <div className="bg-[#7ad94a] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame381 />
      <Frame382 />
    </div>
  );
}

function Frame384() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame385() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #60B734
      </p>
    </div>
  );
}

function Frame386() {
  return (
    <div className="bg-[#60b734] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame384 />
      <Frame385 />
    </div>
  );
}

function Frame387() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame388() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #499522
      </p>
    </div>
  );
}

function Frame389() {
  return (
    <div className="bg-[#499522] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame387 />
      <Frame388 />
    </div>
  );
}

function Frame390() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame391() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #347314
      </p>
    </div>
  );
}

function Frame392() {
  return (
    <div className="bg-[#347314] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame390 />
      <Frame391 />
    </div>
  );
}

function Frame393() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          galil-green-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame394() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #22510A
      </p>
    </div>
  );
}

function Frame395() {
  return (
    <div className="bg-[#22510a] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame393 />
      <Frame394 />
    </div>
  );
}

function GreenColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Green color">
      <Frame368 />
      <Frame371 />
      <Frame374 />
      <Frame377 />
      <Frame380 />
      <Frame383 />
      <Frame386 />
      <Frame389 />
      <Frame392 />
      <Frame395 />
    </div>
  );
}

function Frame396() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame397() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FFF9EC
      </p>
    </div>
  );
}

function Frame398() {
  return (
    <div className="bg-[#fff9ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame396 />
      <Frame397 />
    </div>
  );
}

function Frame399() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame400() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FFECC2
      </p>
    </div>
  );
}

function Frame401() {
  return (
    <div className="bg-[#ffecc2] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame399 />
      <Frame400 />
    </div>
  );
}

function Frame402() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame403() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FFDF97
      </p>
    </div>
  );
}

function Frame404() {
  return (
    <div className="bg-[#ffdf97] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame402 />
      <Frame403 />
    </div>
  );
}

function Frame405() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame406() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FFD36D
      </p>
    </div>
  );
}

function Frame407() {
  return (
    <div className="bg-[#ffd36d] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame405 />
      <Frame406 />
    </div>
  );
}

function Frame408() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame409() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FFC643
      </p>
    </div>
  );
}

function Frame410() {
  return (
    <div className="bg-[#ffc643] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame408 />
      <Frame409 />
    </div>
  );
}

function Frame411() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame412() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #DDA82F
      </p>
    </div>
  );
}

function Frame413() {
  return (
    <div className="bg-[#dda82f] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame411 />
      <Frame412 />
    </div>
  );
}

function Frame414() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame415() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #BB8C1F
      </p>
    </div>
  );
}

function Frame416() {
  return (
    <div className="bg-[#bb8c1f] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame414 />
      <Frame415 />
    </div>
  );
}

function Frame417() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame418() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #997012
      </p>
    </div>
  );
}

function Frame419() {
  return (
    <div className="bg-[#997012] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame417 />
      <Frame418 />
    </div>
  );
}

function Frame420() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame421() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #775508
      </p>
    </div>
  );
}

function Frame422() {
  return (
    <div className="bg-[#775508] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame420 />
      <Frame421 />
    </div>
  );
}

function Frame423() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          negev-yellow-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame424() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #553C01
      </p>
    </div>
  );
}

function Frame425() {
  return (
    <div className="bg-[#553c01] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame423 />
      <Frame424 />
    </div>
  );
}

function YellowColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Yellow color">
      <Frame398 />
      <Frame401 />
      <Frame404 />
      <Frame407 />
      <Frame410 />
      <Frame413 />
      <Frame416 />
      <Frame419 />
      <Frame422 />
      <Frame425 />
    </div>
  );
}

function Frame426() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          50
        </p>
      </div>
    </div>
  );
}

function Frame427() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FFEFEF
      </p>
    </div>
  );
}

function Frame428() {
  return (
    <div className="bg-[#ffefef] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame426 />
      <Frame427 />
    </div>
  );
}

function Frame429() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          100
        </p>
      </div>
    </div>
  );
}

function Frame430() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FFCBCB
      </p>
    </div>
  );
}

function Frame431() {
  return (
    <div className="bg-[#ffcbcb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame429 />
      <Frame430 />
    </div>
  );
}

function Frame432() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          200
        </p>
      </div>
    </div>
  );
}

function Frame433() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FFA6A7
      </p>
    </div>
  );
}

function Frame434() {
  return (
    <div className="bg-[#ffa6a7] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame432 />
      <Frame433 />
    </div>
  );
}

function Frame435() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          300
        </p>
      </div>
    </div>
  );
}

function Frame436() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FF8283
      </p>
    </div>
  );
}

function Frame437() {
  return (
    <div className="bg-[#ff8283] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame435 />
      <Frame436 />
    </div>
  );
}

function Frame438() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ffefef] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          400
        </p>
      </div>
    </div>
  );
}

function Frame439() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#ffefef] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #FF5E5F
      </p>
    </div>
  );
}

function Frame440() {
  return (
    <div className="bg-[#ff5e5f] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame438 />
      <Frame439 />
    </div>
  );
}

function Frame441() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          500
        </p>
      </div>
    </div>
  );
}

function Frame442() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #EB4A4B
      </p>
    </div>
  );
}

function Frame443() {
  return (
    <div className="bg-[#eb4a4b] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame441 />
      <Frame442 />
    </div>
  );
}

function Frame444() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          600
        </p>
      </div>
    </div>
  );
}

function Frame445() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #C93435
      </p>
    </div>
  );
}

function Frame446() {
  return (
    <div className="bg-[#c93435] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame444 />
      <Frame445 />
    </div>
  );
}

function Frame447() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          700
        </p>
      </div>
    </div>
  );
}

function Frame448() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #A72223
      </p>
    </div>
  );
}

function Frame449() {
  return (
    <div className="bg-[#a72223] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame447 />
      <Frame448 />
    </div>
  );
}

function Frame450() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          800
        </p>
      </div>
    </div>
  );
}

function Frame451() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #851414
      </p>
    </div>
  );
}

function Frame452() {
  return (
    <div className="bg-[#851414] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame450 />
      <Frame451 />
    </div>
  );
}

function Frame453() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f5f9ff] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.ref.
        </p>
        <p className="mb-0" dir="auto">
          coral-red-
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          900
        </p>
      </div>
    </div>
  );
}

function Frame454() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f5f9ff] text-[14px] text-center text-nowrap whitespace-pre" dir="auto">
        #63090A
      </p>
    </div>
  );
}

function Frame455() {
  return (
    <div className="bg-[#63090a] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative shrink-0 size-[200px]">
      <Frame453 />
      <Frame454 />
    </div>
  );
}

function RedColor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Red color">
      <Frame428 />
      <Frame431 />
      <Frame434 />
      <Frame437 />
      <Frame440 />
      <Frame443 />
      <Frame446 />
      <Frame449 />
      <Frame452 />
      <Frame455 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#f0f3f6] content-stretch flex flex-col gap-[230px] items-start relative shrink-0 w-[2200px]">
      <BrandColor />
      <TextColor />
      <SecondaryTextColor />
      <NeutralColor />
      <BorderColor />
      <GreyColor />
      <OpacityColor />
      <GreenColor />
      <YellowColor />
      <RedColor />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#f0f3f6] box-border content-stretch flex flex-col items-start px-[60px] py-0 relative shrink-0 text-right w-[820px]">
      <p className="font-['Rubik:ExtraBold',sans-serif] font-extrabold leading-[1.5] relative shrink-0 text-[#5878a4] text-[64px] w-full" dir="auto">{` Option Tokens`}</p>
      <div className="font-['Rubik:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#5878a4] text-[48px] w-full">
        <p className="mb-0" dir="auto">
          מנעד האפשרויות שעליו ביססנו את ההחלטות העיצוביות
        </p>
        <p dir="auto">&nbsp;</p>
      </div>
      <div className="font-['Rubik:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#a72223] text-[48px] w-full">
        <p className="mb-0" dir="auto">
          אין לעשות שימוש ללא תיאום עם צוות הדיזיין סיסטם הממשלתי
        </p>
        <p dir="auto">שימוש בטוקנים אלה עלול להוביל לבעיות נגישות</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#f0f3f6] box-border content-stretch flex gap-[85px] items-start justify-end px-0 py-[110px] relative shrink-0 w-full">
      <Frame35 />
      <Frame41 />
    </div>
  );
}

export default function Component64() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[130px] items-start relative rounded-[32px] size-full" data-name="צבעים">
      <Component />
      <Frame34 />
      <Frame42 />
    </div>
  );
}