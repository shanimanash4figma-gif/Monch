import svgPaths from "./svg-1cxsj5nm0a";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[22369600px] shrink-0 size-[40px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28.604px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold','Arimo:Bold',sans-serif] font-semibold leading-[28.6px] left-[161px] not-italic text-[22px] text-right text-white top-[0.67px] tracking-[-0.2578px] translate-x-[-100%]" dir="auto">
        עוזר פניות הציבור
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[21px] left-[161.04px] not-italic text-[14px] text-[rgba(255,255,255,0.9)] text-right top-0 tracking-[-0.1504px] translate-x-[-100%]" dir="auto">
        מכוון אותך לטופס הנכון
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[51.604px] relative shrink-0 w-[160.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4006_585)" id="Icon">
          <path d={svgPaths.p1902bdf0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_4006_585">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-b from-[#1976d2] relative rounded-[22369600px] shadow-[0px_2px_8px_0px_rgba(25,118,210,0.3)] shrink-0 size-[40px] to-[#1565c0]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[51.604px] items-center justify-end min-h-px min-w-px relative" data-name="Container">
      <Container />
      <Button1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Button />
        <Container1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[91.604px] relative shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(90.6556deg, rgb(2, 95, 219) 0%, rgb(2, 95, 219) 35%, rgb(11, 54, 104) 100%)" }}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[32px] pr-[48px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #8596AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #8596AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[22369600px] shrink-0 size-[40px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Button2 />
      <p className="css-ew64yg font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0c3058] text-[17px] text-right tracking-[-0.4316px]" dir="auto">
        עזרה
      </p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[16px] relative size-full">
          <Frame3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5db] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[32px] py-[24px] relative w-full">
        <TextInput />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[30px] relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[0.33px] tracking-[-0.4492px]">❓</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <p className="css-ew64yg font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] tracking-[-0.3125px]" dir="auto">
        כדי שאוכל להפנות בצורה מדויקת, אשמח לתיאור בקצרה על מה מדובר
      </p>
      <Text />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0 w-[721px]">
      <Container4 />
      <p className="css-4hzbpn font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#4b5563] text-[15px] text-right tracking-[-0.2344px] w-full" dir="auto">
        מה המטרה או נושא הפנייה?
      </p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white h-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Text Area">
      <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-end p-[16px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-right tracking-[-0.3125px]" dir="auto">
            לדוגמה: אני מעוניין לדעת על תכניות דיור זמינות למשפחות צעירות...
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#9ca3af] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[24px] left-[346.04px] not-italic text-[16px] text-center text-white top-[11.67px] tracking-[-0.3125px] translate-x-[-50%]" dir="auto">
        חיפוש
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] h-[186px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <TextArea />
      <Button3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex flex-col h-[306px] items-start pl-[20px] pr-[24px] pt-[20px] relative rounded-[8px] shrink-0 w-[765px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f1f5fb] h-[759.063px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

export default function Container8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.3)] size-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container7 />
    </div>
  );
}