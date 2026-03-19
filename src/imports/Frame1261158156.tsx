function Frame1() {
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

function Frame() {
  return (
    <div className="bg-white h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8596af] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[650px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[570px] w-[280px]" data-name>
      <Frame />
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

function Frame2() {
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

function Frame3() {
  return (
    <div className="bg-[#f1f5fb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[330px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[570px] w-[280px]" data-name>
      <Frame3 />
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

function Frame4() {
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

function Frame5() {
  return (
    <div className="bg-[#f0f3f6] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[650px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[919px] w-[280px]" data-name>
      <Frame5 />
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

function Frame6() {
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

function Frame7() {
  return (
    <div className="bg-[#ebf3ff] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[665px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1295px] w-[280px]" data-name>
      <Frame7 />
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

function Frame8() {
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

function Frame9() {
  return (
    <div className="bg-[#ced7e0] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[330px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[919px] w-[280px]" data-name>
      <Frame9 />
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

function Frame10() {
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

function Frame11() {
  return (
    <div className="bg-[#8596af] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-0 overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[919px] w-[280px]" data-name>
      <Frame11 />
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

function Frame12() {
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

function Frame13() {
  return (
    <div className="bg-[#0068f5] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[704px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2030px] w-[280px]" data-name>
      <Frame13 />
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

function Frame14() {
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

function Frame15() {
  return (
    <div className="bg-[#f5ffef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#347314] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[704px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2377px] w-[280px]" data-name>
      <Frame15 />
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

function Frame16() {
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

function Frame17() {
  return (
    <div className="bg-[#ddffcd] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[375px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2377px] w-[280px]" data-name>
      <Frame17 />
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

function Frame18() {
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

function Frame19() {
  return (
    <div className="bg-[#7ad94a] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[54px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2377px] w-[280px]" data-name>
      <Frame19 />
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

function Frame20() {
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

function Frame21() {
  return (
    <div className="bg-[#fff9ec] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a35200] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[700px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2704px] w-[280px]" data-name>
      <Frame21 />
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

function Frame22() {
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

function Frame23() {
  return (
    <div className="bg-[#ffecc2] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[371px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2704px] w-[280px]" data-name>
      <Frame23 />
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

function Frame24() {
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

function Frame25() {
  return (
    <div className="bg-[#dda82f] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[50px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2704px] w-[280px]" data-name>
      <Frame25 />
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

function Frame26() {
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

function Frame27() {
  return (
    <div className="bg-[#ffefef] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame26 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#a72223] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[700px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[3042px] w-[280px]" data-name>
      <Frame27 />
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

function Frame28() {
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

function Frame29() {
  return (
    <div className="bg-[#ffcbcb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[371px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[3042px] w-[280px]" data-name>
      <Frame29 />
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

function Frame30() {
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

function Frame31() {
  return (
    <div className="bg-[#eb4a4b] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[50px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[3042px] w-[280px]" data-name>
      <Frame31 />
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

function Frame32() {
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

function Frame33() {
  return (
    <div className="bg-[#0057cc] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[375px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2030px] w-[280px]" data-name>
      <Frame33 />
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

function Frame34() {
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

function Frame35() {
  return (
    <div className="bg-[#0045a3] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[54px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[2030px] w-[280px]" data-name>
      <Frame35 />
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

function Frame36() {
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

function Frame37() {
  return (
    <div className="bg-[#ebf3ff] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[330px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1295px] w-[280px]" data-name>
      <Frame37 />
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

function Frame38() {
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

function Frame40() {
  return (
    <div className="bg-[#f1f5fb] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-0 overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[570px] w-[280px]" data-name>
      <Frame40 />
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

function Frame41() {
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

function Frame42() {
  return (
    <div className="bg-[#0c3058] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-0 overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1295px] w-[280px]" data-name>
      <Frame42 />
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

function Frame43() {
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

function Frame44() {
  return (
    <div className="bg-[#c93435] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[678px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1649px] w-[280px]" data-name>
      <Frame44 />
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

function Frame45() {
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

function Frame46() {
  return (
    <div className="bg-[#8596af] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[300px] items-center left-[345px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[1654px] w-[280px]" data-name>
      <Frame46 />
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

function Frame47() {
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

function Frame48() {
  return (
    <div className="bg-[#f6f9fc] h-[200px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[200px] items-center justify-center px-[12px] py-[42px] relative w-full">
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[300px] items-center left-[650px] overflow-clip p-[8px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-[243px] w-[280px]" data-name>
      <Frame48 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-center w-full" dir="auto">
        רקע למסך מלא
      </p>
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#5878a4] text-[12px] text-center tracking-[0.5px] w-full" dir="auto">
        מבוסס על igds.ref.brand-color.<span className="font-['Rubik:Bold',sans-serif] font-bold">50</span>
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute h-[3342px] left-0 top-0 w-[1173px]">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
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

export default function Frame49() {
  return (
    <div className="relative size-full">
      <Frame39 />
    </div>
  );
}