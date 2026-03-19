import svgPaths from "./svg-ot18y0t72u";

function Svg() {
  return (
    <div className="absolute left-[calc(50%+24.03px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p22f0380} id="Vector" stroke="var(--stroke-0, #667D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.5693 1.43133L7.276 8.724" id="Vector_2" stroke="var(--stroke-0, #667D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#eef2f6] h-[40px] left-[620.95px] rounded-[12px] top-1/2 translate-y-[-50%] w-[104.05px]" data-name="Button">
      <Svg />
      <div className="absolute flex flex-col font-['Heebo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[calc(50%-11.84px)] text-[#667d99] text-[14px] text-center top-[20px] translate-x-[-50%] translate-y-[-50%] w-[40.372px]">
        <p className="leading-[20px]" dir="auto">
          שליחה
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[22px] left-[12px] overflow-clip right-[12px] top-[8px]" data-name="Container">
      <div className="absolute flex flex-col font-['Heebo:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] right-[-0.36px] text-[#667d99] text-[15px] text-right top-[11px] translate-y-[-50%] w-[106.655px]">
        <p className="leading-[normal]" dir="auto">
          אני פונה בנושא...
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute h-[38.5px] left-[9px] overflow-clip right-[125.05px] top-1/2 translate-y-[-50%]" data-name="Input">
      <Container />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white h-[58px] relative rounded-[16px] shrink-0 w-full" data-name="Form">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Button />
        <Input />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe6ec] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_-2px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

export default function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(238,242,246,0.3)] content-stretch flex flex-col items-start p-[16px] relative size-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dfe6ec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Form />
    </div>
  );
}