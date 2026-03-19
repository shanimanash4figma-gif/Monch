import svgPaths from "./svg-mr50o8mu92";

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
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-[51.604px] items-center justify-end min-h-px min-w-px relative" data-name="Container">
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Button2 />
      <p className="css-ew64yg font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0c3058] text-[17px] text-right tracking-[-0.4316px]" dir="auto">
        בדיקת זכאות לסיוע בשכר דירה
      </p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[16px] relative size-full">
          <Frame12 />
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

function Heading1() {
  return (
    <div className="h-[25.646px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold','Arimo:Bold',sans-serif] font-semibold leading-[25.65px] left-[340.01px] not-italic text-[#1f2937] text-[19px] top-[-0.67px] tracking-[-0.4453px]" dir="auto">
        סיוע בדיור | בדיקת זכאות לסיוע בשכר דירה
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-end relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#6b7280] text-[15px] tracking-[-0.2344px]" dir="auto">
        ריכזנו עבורך מידע ואפשרויות פניה בנושא:
      </p>
      <Heading1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[687px]">
      <Frame2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[14px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Frame1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3a382d00} id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p678c080} id="Vector_2" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 6.75H6" id="Vector_3" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 9.75H6" id="Vector_4" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 12.75H6" id="Vector_5" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[269.198px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg decoration-solid font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#1f2937] text-[15px] top-[-1px] tracking-[-0.2344px] underline" dir="auto">
          סיוע בשכר דירה- מדריך
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-end pr-[337.469px] relative size-full">
          <Icon3 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#f9fafb] h-[46.5px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
          <Container5 />
          <Icon4 />
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
          <path d={svgPaths.p3a382d00} id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p678c080} id="Vector_2" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 6.75H6" id="Vector_3" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 9.75H6" id="Vector_4" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 12.75H6" id="Vector_5" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[122.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg decoration-solid font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[22.5px] left-0 not-italic text-[#1f2937] text-[15px] top-[-1px] tracking-[-0.2344px] underline" dir="auto">
          שאלות נפוצות- סיוע בשכר דירה
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-end pr-[483.719px] relative size-full">
          <Icon5 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#f9fafb] h-[46.5px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
          <Container6 />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Link />
      <Link1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[135.667px] items-start pb-[0.667px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Frame4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[23.25px] not-italic relative shrink-0 text-[#5878a4] text-[15px] text-right tracking-[-0.2344px] w-full" dir="auto">
        כדי לחסוך לך זמן המתנה, כדאי לבדוק אם התשובה מופיעה כאן:
      </p>
      <Container7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Container4 />
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[135.406px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium','Arimo:Regular',sans-serif] font-medium leading-[24px] left-[20.7px] not-italic text-[16px] text-center text-white top-[0.17px] tracking-[-0.3125px] translate-x-[-50%]" dir="auto">
        לא מצאתי תשובה, רוצה להגיש פניה
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M11.25 2.25H15.75V6.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 10.5L15.75 2.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p7686680} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Text2 />
        <Icon7 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0068f5] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[0.01px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame14 />
        <Button3 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[179.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Arimo:Regular',sans-serif] font-medium leading-[22.5px] left-[180px] not-italic text-[#6b7280] text-[15px] text-right top-[-1px] tracking-[-0.2344px] translate-x-[-100%]" dir="auto">
          נושאים נוספים שאולי יתאימו
        </p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex h-[42.5px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Icon8 />
        </div>
      </div>
      <Text3 />
    </div>
  );
}

function OutlineSearch() {
  return (
    <div className="absolute inset-[12.5%]" data-name="outline/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0002 15">
        <g id="outline/search">
          <path d={svgPaths.p36b67cc0} fill="var(--fill-0, #0C3058)" id="ð¨-Icon-Ð¡olor" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="search">
      <OutlineSearch />
    </div>
  );
}

function Text4() {
  return (
    <div className="font-['Inter:Medium','Arimo:Regular',sans-serif] font-medium h-[24px] leading-[24px] not-italic relative shrink-0 text-[#1f2937] text-[16px] text-right tracking-[-0.3125px] w-[82.594px]" data-name="Text">
      <p className="absolute css-ew64yg left-[83px] top-[-0.33px] translate-x-[-100%]" dir="auto">
        סיוע בדיור
      </p>
      <p className="absolute css-ew64yg left-[83px] top-[-0.33px] translate-x-[-100%]" dir="auto">
        סיוע בדיור
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Search />
        <Text4 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white content-stretch flex h-[53.333px] items-center justify-end pl-[16.667px] pr-[24.667px] py-[0.667px] relative rounded-[10px] shrink-0 w-[362px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#bfdbfe] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame13 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center justify-end min-h-px min-w-px relative">
      {[...Array(2).keys()].map((_, i) => (
        <Button5 key={i} />
      ))}
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Button4 />
      <Frame5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular','Arimo:Regular',sans-serif] font-normal leading-[22.5px] left-[368.32px] not-italic text-[#6b7280] text-[15px] text-center top-[-1px] tracking-[-0.2344px] translate-x-[-50%]" dir="auto">
        לא מצאתי תשובה מתאימה?
      </p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0068F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0068F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center left-[6px] top-[-0.33px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Icon9 />
        </div>
      </div>
      <p className="css-ew64yg font-['Inter:Medium','Arimo:Regular',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0068f5] text-[16px] text-center tracking-[-0.3125px]" dir="auto">
        פנייה כללית למשרד הבניין והשיכון
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[227.5px]" data-name="Text">
      <Frame11 />
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[247.5px]" data-name="Button">
      <Text5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Paragraph1 />
      <Button6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-[16px] relative shrink-0 w-[736px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[202.917px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f1f5fb] h-[759.063px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start pt-[16px] px-[16px] relative size-full">
        <Container8 />
        <Container10 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[816px] items-start left-0 overflow-clip rounded-[10px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.3)] top-0 w-[800px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container11 />
    </div>
  );
}

export default function Frame10() {
  return (
    <div className="relative size-full">
      <Container12 />
    </div>
  );
}