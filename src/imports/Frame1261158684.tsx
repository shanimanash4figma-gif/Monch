import svgPaths from "./svg-7m7377ullt";

function Paragraph() {
  return (
    <div className="h-[21.997px] relative shrink-0 w-[131.128px]" data-name="Paragraph">
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#5878a4] text-[15px] top-[-0.89px]" dir="auto">
        נראה שפנייתך בנושא:
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[10.21%_14.31%_17.51%_13.4%]" data-name="Group">
      <div className="absolute inset-[-6.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1573 13.1573">
          <g id="Group">
            <path d={svgPaths.p2631d280} id="Vector" stroke="var(--stroke-0, #5878A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
            <path d={svgPaths.p17499200} id="Vector_2" stroke="var(--stroke-0, #5878A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[15.99px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[151.118px]">
      <Paragraph />
      <Container />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative size-full">
      <Frame1 />
    </div>
  );
}