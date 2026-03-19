import svgPaths from "./svg-z5ogchwizg";

function Container() {
  return (
    <div className="absolute h-[20px] left-[calc(50%+8px)] overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[107.31px]" data-name="Container">
      <div className="absolute flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[18.75px] justify-center leading-[0] right-[-0.37px] text-[#0068f5] text-[16px] text-right top-[9.38px] translate-y-[-50%] w-[107.676px]">
        <p className="leading-[20px]" dir="auto">
          הצגת עוד
        </p>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="absolute inset-[16.67%]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="plus">
          <path d={svgPaths.p3ddd200} fill="var(--fill-0, #0068F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[13.35px] size-[16px] top-[12.09px]" data-name="SVG">
      <Plus />
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-white border border-[#c3cfe7] border-solid relative rounded-[8px] size-full" data-name="Button - הצג עוד שירותים">
      <Container />
      <Svg />
    </div>
  );
}