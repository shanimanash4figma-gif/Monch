import svgPaths from "./svg-43w8k3cken";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M5 12H19" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 5L19 12L12 19" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[22369600px] size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute bg-clip-text font-['Rubik:Bold',sans-serif] font-bold leading-[32px] left-[819.17px] text-[#073763] text-[24px] text-right top-0" dir="auto" style={{ backgroundImage: "linear-gradient(90deg, rgb(7, 55, 99) 0%, rgb(7, 55, 99) 100%), linear-gradient(97.4901deg, rgb(2, 95, 219) 0.47648%, rgb(2, 95, 219) 35.143%, rgb(11, 54, 104) 99.524%)", WebkitTextFillColor: "transparent" }}>
          עוזר פניות הציבור- מכוון אותך למקום הנכון
        </p>
      </div>
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="ChatHeader">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Button />
        </div>
      </div>
      <Heading />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-start pb-[0.667px] pl-[24px] pr-[40px] pt-[20px] relative shrink-0 w-[919px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <ChatHeader />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[919px]">
      <Container2 />
    </div>
  );
}

function Icon1() {
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

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[22369600px] shrink-0 size-[40px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[293.833px]">
      <Button1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Frame4 />
        <p className="font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0c3058] text-[17px] text-right tracking-[-0.4316px]" dir="auto">
          עזרה
        </p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#f9fafb] h-[73.333px] relative rounded-[16px] shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[20.667px] py-[0.667px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Form />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f0f7ff] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#90caf9] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[24.667px] py-[24px] relative w-full">
          <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#073763] text-[16px] text-right w-[631px] whitespace-pre-wrap" dir="auto">
            {`לא הצלחנו לזהות את הנושא בוודאות. אנא נסו לנסח את הפניה מחדש: `}
            <br aria-hidden="true" />
            {` למשל: "רוצה לבדוק זכאות לדיור ציבורי" או "איך מגישים בקשה לסיוע בשכר דירה"`}
          </p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Label">
      <p className="-translate-x-full absolute font-['Rubik:Medium',sans-serif] font-medium leading-[22.5px] left-[855.67px] text-[#4a4a4a] text-[15px] text-right top-[-0.33px]" dir="auto">
        נסחו מחדש את הפנייה:
      </p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9ca3af] text-[16px] text-right" dir="auto">
          לדוגמה: רוצה לברר על זכאות למחיר מטרה
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[22px] py-[2px] relative size-full">
          <TextInput />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
          <g id="Group">
            <path d={svgPaths.p26ac6c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p9d0e300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Rubik:Medium',sans-serif] font-medium leading-[24px] left-[24.5px] text-[17px] text-center text-white top-0" dir="auto">
          חיפוש
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0068f5] h-[54px] opacity-50 relative rounded-[8px] shadow-[0px_2px_8px_0px_rgba(25,118,210,0.25)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[0.01px] relative size-full">
          <Icon2 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Container4 />
      <Button2 />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[164.5px] items-end relative shrink-0 w-full" data-name="Form">
      <Label />
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Container3 />
      <Form1 />
    </div>
  );
}

function ClarificationStep() {
  return (
    <div className="content-stretch flex flex-col h-[408.417px] items-start relative shrink-0 w-full" data-name="ClarificationStep">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <ClarificationStep />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[24px] relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[560px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pl-[8px] relative size-full">
          <Frame6 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="-translate-x-1/2 col-1 font-['Rubik:Regular',sans-serif] font-normal ml-[417px] mt-0 relative row-1 text-[#5878a4] text-[13px] text-center w-[834px] whitespace-pre-wrap" dir="auto">
        <span className="leading-[18px]">{`נא לא להזין פרטים אישיים/מזהים. התשובות מבוססות על בינה מלאכותית ועלולות לכלול אי-דיוקים. במקרה של סתירה או אי התאמה בין המידע שניתן על ידי העוזר לבין הוראות הדין הרלוונטיות, יגברו הוראות הדין. `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline">לתנאי השימוש</span>
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[68.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[16.667px] px-[40px] relative size-full">
        <Group1 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[12px] shadow-[0px_4px_24px_0px_rgba(7,55,99,0.08),0px_2px_8px_0px_rgba(7,55,99,0.04)] size-full" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}