import svgPaths from "./svg-36yz1yqduw";

function Svg() {
  return (
    <div className="absolute left-[552.3px] size-[16px] top-[calc(50%+6px)] translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19bc7f80} id="Vector" stroke="var(--stroke-0, #FFC105)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6V8.66667" id="Vector_2" stroke="var(--stroke-0, #FFC105)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #FFC105)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[#d1e0f0] border-[1px_0px_0px] border-solid h-[33px] left-[21px] top-[126.5px] w-[568.3px]" data-name="HorizontalBorder">
      <Svg />
      <div className="absolute flex flex-col font-['Heebo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] right-[21.61px] text-[#ffc105] text-[14px] text-right top-[calc(50%+6px)] translate-y-[-50%] w-[238.785px]">
        <p className="leading-[20px]" dir="auto">
          חשוב: נא לא להזין פרטים אישיים/מזהים.
        </p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#eff5fb] h-[176.5px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[10px] shrink-0 w-[610.3px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#d1e0f0] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute flex flex-col font-['Heebo:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] right-[20.68px] text-[#132439] text-[15px] text-right top-[29px] translate-y-[-50%] w-[329.558px]">
        <p className="leading-[24.38px]" dir="auto">
          שלום! אני עוזר פניות הציבור של משרד הבינוי והשיכון.
        </p>
      </div>
      <div className="absolute flex flex-col font-['Heebo:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] right-[20.71px] text-[#132439] text-[15px] text-right top-[77.75px] translate-y-[-50%] w-[33.782px]">
        <p className="leading-[24.38px]" dir="auto">{`כתבו `}</p>
      </div>
      <div className="absolute flex flex-col font-['Heebo:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] right-[54.16px] text-[#132439] text-[15px] text-right top-[77.75px] translate-y-[-50%] w-[43.753px]">
        <p className="leading-[24.38px]" dir="auto">
          בקצרה
        </p>
      </div>
      <div className="absolute flex flex-col font-['Heebo:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] right-[97.53px] text-[#132439] text-[15px] text-right top-[77.75px] translate-y-[-50%] w-[468.432px]">
        <p className="leading-[24.38px]" dir="auto">{` את נושא הפנייה, ואפנה אתכם לדף ידע או לטופס פניות הציבור להגשת פנייה`}</p>
      </div>
      <div className="absolute flex flex-col font-['Heebo:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] right-[20.61px] text-[#132439] text-[15px] text-right top-[102.13px] translate-y-[-50%] w-[63.554px]">
        <p className="leading-[24.38px]" dir="auto">
          מאובטחת.
        </p>
      </div>
      <HorizontalBorder />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p874e300} id="Vector" stroke="var(--stroke-0, #0B68DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #0B68DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, #0B68DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, #0B68DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #0B68DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#deebf7] relative rounded-[12px] shrink-0 size-[32px]" data-name="Background">
      <Svg1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-0 top-0">
      <BackgroundBorderShadow />
      <Background />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}