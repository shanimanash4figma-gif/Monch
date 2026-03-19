import svgPaths from "./svg-m9az85i4o0";

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Rubik:Bold',sans-serif] font-bold leading-[40px] left-[394.31px] text-[#073763] text-[32px] text-center top-[-0.33px] translate-x-[-50%]" dir="auto">
        ניתוב חכם לנושא הפנייה
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[600px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[300.33px] text-[#4a4a4a] text-[16px] text-center top-[0.67px] translate-x-[-50%]" dir="auto">
        תארו את הפנייה ונמצא עבורכם את הטופס ודפי המידע הרלוונטיים
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M17.5 17.5L13.8833 13.8833" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end overflow-clip relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[0px] text-[18px] text-right tracking-[-0.3125px]" dir="auto">
          <span className="font-['Rubik:Regular',sans-serif] leading-[normal]">מה נושא הפניה שלכם?</span>
          <span className="font-['Rubik:Regular',sans-serif] leading-[normal]"> </span>
          <span className="font-['Rubik:Light',sans-serif] font-light leading-[normal]">למשל: ״רוצה לבדוק האם אני זכאי להירשם למחיר מטרה״</span>
        </p>
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

function Button() {
  return (
    <div className="bg-gradient-to-b from-[#1976d2] relative rounded-[22369600px] shadow-[0px_2px_8px_0px_rgba(25,118,210,0.3)] shrink-0 size-[40px] to-[#1565c0]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] relative size-full">
          <Icon />
          <TextInput />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f9fafb] h-[69.333px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="content-stretch flex flex-col items-start p-[0.667px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame />
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Rubik:Medium',sans-serif] font-medium leading-[20px] left-[788.84px] text-[#4a4a4a] text-[14px] text-right top-[-0.67px] translate-x-[-100%]" dir="auto">
        לחצו אחת מהדוגמאות או הקלידו פניה משלכם:
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p126da180} id="Vector_2" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[322.27px] text-[#073763] text-[15px] text-right top-0 translate-x-[-100%]" dir="auto">
          האם אני זכאי לסיוע בשכר דירה?
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[50px] items-center px-[18px] py-[2px] relative rounded-[8px] shrink-0 w-[388px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon2 />
      <Text />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p126da180} id="Vector_2" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[322.81px] text-[#073763] text-[15px] text-right top-0 translate-x-[-100%]" dir="auto">
          מה התנאים לדירה בהנחה?
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[50px] items-center px-[18px] py-[2px] relative rounded-[8px] shrink-0 w-[388px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon3 />
      <Text1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[788px]">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p126da180} id="Vector_2" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[322.2px] text-[#073763] text-[15px] text-right top-0 translate-x-[-100%] w-[186px]" dir="auto">
          מה זכויותיי בפרויקט תמ״א 38?
        </p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[18px] py-[2px] relative size-full">
          <Icon4 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p126da180} id="Vector_2" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[322.58px] text-[#073763] text-[15px] text-right top-0 translate-x-[-100%]" dir="auto">
          מה הסטטוס של הבקשה שלי?
        </p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[18px] py-[2px] relative size-full">
          <Icon5 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-end flex flex-wrap gap-[12px] items-end relative shrink-0 w-[788px]">
      <Frame2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p126da180} id="Vector_2" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[322.48px] text-[#073763] text-[15px] text-right top-0 translate-x-[-100%]" dir="auto">
          רוצה לקבל דירה בדיור ציבורי
        </p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[18px] py-[2px] relative size-full">
          <Icon6 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p126da180} id="Vector_2" stroke="var(--stroke-0, #4A4A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[322.18px] text-[#073763] text-[15px] text-right top-0 translate-x-[-100%]" dir="auto">
          איך מוצאים היתר בנייה?
        </p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[50px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[18px] py-[2px] relative size-full">
          <Icon7 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-[1] content-end flex flex-wrap gap-[12px] items-end relative row-[1] self-start shrink-0 w-[788px]">
      <Frame3 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(3,_minmax(0,_1fr))] h-[174px] relative shrink-0 w-full" data-name="Container">
      <Frame4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[210px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Container2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[51px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Container3 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[166.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[83.5px] text-[#4a4a4a] text-[15px] text-center top-0 translate-x-[-50%]" dir="auto">
          מעדיפים לבחור נושא ידנית?
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[22px] relative shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular','Noto_Sans_Symbols:Regular',sans-serif] font-normal leading-[22px] left-[7.5px] text-[#4a4a4a] text-[15px] text-center top-0 translate-x-[-50%]">←</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[22px] relative shrink-0 w-[234.688px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Medium',sans-serif] font-medium leading-[22px] left-[117px] text-[#0068f5] text-[15px] text-center top-0 translate-x-[-50%]" dir="auto">
          להגשת פנייה בלילת דרך הטופס הרגיל
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
      <Button7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[46.667px] items-start pt-[24.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Container5 />
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[56px] py-[48px] relative rounded-[16px] shadow-[0px_4px_24px_0px_rgba(7,55,99,0.1),0px_2px_8px_0px_rgba(7,55,99,0.06)] size-full" data-name="Main Content">
      <Frame6 />
    </div>
  );
}