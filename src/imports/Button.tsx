import svgPaths from "./svg-carxloqrkq";

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #667D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #667D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[17px] py-[11px] relative rounded-[9999px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c6d9ec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Heebo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#132439] text-[14px] text-center w-[175.596px]">
        <p className="leading-[20px]" dir="auto">
          בירור תנאי זכאות למחיר מטרה
        </p>
      </div>
      <Svg />
    </div>
  );
}