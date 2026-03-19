import svgPaths from "./svg-6nx4656ze9";

function Svg() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p19aeb100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p218a3040} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(12,48,88,0.5)] bottom-[1315.67px] left-[1838px] opacity-0 rounded-[50px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] size-[50px]" data-name="Button - חזרה לראש הדף">
      <Svg />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.59%_8.2%_8.2%_8.59%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pe054c00} fill="var(--fill-0, #6841EA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[calc(50%+19.28px)] size-[16px] top-[calc(50%-0.005px)] translate-x-[-50%] translate-y-[-50%]" data-name="SVG">
      <Group />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="absolute bottom-[0.66px] left-[28.67px] top-[0.67px] w-[75.9px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0.667px_0px_0px] border-[rgba(86,86,95,0.2)] border-solid inset-0 pointer-events-none" />
      <Svg1 />
      <div className="absolute flex flex-col font-['Helvetica:Regular',_sans-serif] h-[15.33px] justify-center leading-[0] left-[calc(50%-10.235px)] not-italic text-[#f3f3f3] text-[13px] text-center top-[calc(50%-0.34px)] translate-x-[-50%] translate-y-[-50%] w-[43.43px]">
        <p className="leading-[20px]">Explain</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p4bfdd00} fill="var(--fill-0, #F3F3F3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute left-[calc(50%-37.945px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#202020] h-[24px] left-[-999px] rounded-[6px] top-[-999px] w-[105.23px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(86,86,95,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <VerticalBorder />
      <Svg2 />
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div className="relative size-full" data-name="1920w default" style={{ backgroundImage: "linear-gradient(90deg, rgb(241, 247, 255) 0%, rgb(241, 247, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Button />
      <BackgroundBorder />
    </div>
  );
}