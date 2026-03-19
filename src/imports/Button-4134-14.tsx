import svgPaths from "./svg-2lxjg24eou";

function Icon() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[5%_5%_65%_65%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.39589 6.39586">
            <path d={svgPaths.pd9a60c0} id="Vector" stroke="var(--stroke-0, #0068F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[5%_5%_40%_40%]" data-name="Vector">
        <div className="absolute inset-[-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3933 10.3933">
            <path d={svgPaths.p3c0f2400} id="Vector" stroke="var(--stroke-0, #0068F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20%_20%_5%_5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5912 13.5912">
            <path d={svgPaths.p7277800} id="Vector" stroke="var(--stroke-0, #0068F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[15.99px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[190.556px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Rubik:Medium',sans-serif] font-medium leading-[24px] left-[95.5px] text-[#0068f5] text-[16px] text-center top-[0.22px]" dir="auto">
        בחירה ידנית של טופס מתאים
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Container />
      <Paragraph />
    </div>
  );
}

export default function Button() {
  return (
    <div className="relative size-full" data-name="Button">
      <Frame />
    </div>
  );
}