import svgPaths from "./svg-7zbiy66fkz";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end leading-[0] pt-[2px] relative shrink-0 text-[#0c3058] text-[16px] text-right w-full">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap" dir="auto">
          עיצוב מכליל – חשוב לדעת!
        </p>
      </div>
      <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap" dir="auto">
          לפרטים נוספים על התאמת שירותים דיגיטליים למשתמשים עם אוריינות דיגיטלית נמוכה היכנסו לקישור המצורף.
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Rubik:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0068f5] text-[0px] text-center whitespace-nowrap">
        <a className="block cursor-pointer decoration-solid leading-[1.5] text-[16px] underline" dir="auto" href="https://harhayeda.gov.il/literacy/guides-digital-literacy/designing-population-low-digital-literacy/">
          עיצוב שירותים דיגיטליים לאוכלוסיה עם אוריינות דיגיטלית נמוכה
        </a>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end min-h-px min-w-px relative">
      <Frame1 />
      <Button />
    </div>
  );
}

function OutlineAlertCircle() {
  return (
    <div className="absolute inset-[8.33%]" data-name="outline/alert-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="outline/alert-circle">
          <path clipRule="evenodd" d={svgPaths.p10d12700} fill="var(--fill-0, #CC6600)" fillRule="evenodd" id="ð¨-Icon-Ð¡olor" />
        </g>
      </svg>
    </div>
  );
}

function AlertCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="alert-circle">
      <OutlineAlertCircle />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Frame />
      <AlertCircle />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end p-[16px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function InlineToast() {
  return (
    <div className="bg-[#fff9ec] relative rounded-[8px] size-full" data-name="Inline Toast">
      <div className="content-start flex flex-wrap gap-[16px] items-start justify-end min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a35200] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}