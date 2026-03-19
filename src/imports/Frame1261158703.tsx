import svgPaths from "./svg-9f5rvk0sy2";
import imgVIcon from "figma:asset/1b29bb90bfae221974e2cfd8da8d15e447b94025.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
        <g clipPath="url(#clip0_4125_254)" id="Icon">
          <path d={svgPaths.p31462a00} fill="var(--fill-0, #0068F5)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4125_254">
            <rect fill="white" height="15.9896" width="15.9896" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[64.878px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Rubik:Medium',sans-serif] font-medium leading-[20px] left-[32.5px] text-[#0068f5] text-[14px] text-center top-[-0.89px]" dir="auto">
          חיפוש חדש
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[38.194px] relative rounded-[8px] shrink-0 w-[123.056px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.986px] items-center pl-[17.101px] pr-[1.111px] py-[1.111px] relative size-full">
        <Icon />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[38.194px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end pr-[693.958px] relative size-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[17.778px] items-start relative shrink-0 w-[76.649px]" data-name="Paragraph">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#0c3058] text-[15px] text-right" dir="auto">
        הפנייה שלך:
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24.002px] relative shrink-0 w-[280.538px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Rubik:Medium',sans-serif] font-medium leading-[24px] left-[281px] text-[#0c3058] text-[16px] text-right top-[0.22px]" dir="auto">
        ״בירור על סיוע בשכר דירה לעולים חדשים״
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-end relative shrink-0">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c3cfe7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[20px] py-[16px] relative w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Container2 />
    </div>
  );
}

function OutlinePerson() {
  return (
    <div className="absolute inset-[12.5%_20.83%]" data-name="outline/person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g id="outline/person">
          <path d={svgPaths.p2b14e00} fill="var(--fill-0, white)" id="ð¨-Icon-Ð¡olor" />
        </g>
      </svg>
    </div>
  );
}

function Person() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Person">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <OutlinePerson />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#0c3058] content-stretch flex items-center justify-center relative rounded-[37282700px] shadow-[0px_2px_8px_0px_rgba(12,48,88,0.25)] shrink-0 size-[43.993px]" data-name="Container">
      <Person />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Container3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21.997px] relative shrink-0 w-[131.128px]" data-name="Paragraph">
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#0c3058] text-[15px] top-[-0.89px]" dir="auto">
        נראה שפנייתך בנושא:
      </p>
    </div>
  );
}

function VIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="V_icon">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVIcon} />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[151.118px]">
      <Paragraph3 />
      <VIcon />
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative w-full">
        <Frame9 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[21.997px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[611.701px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return <div className="h-[26.007px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.986px] h-[73.09px] items-end min-h-px min-w-px pb-[1.111px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c3cfe7] border-b-[1.111px] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <p className="font-['Rubik:SemiBold',sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#0c3058] text-[19px] text-right" dir="auto">
        סיוע בדיור | בדיקת זכאות לסיוע בשכר דירה
      </p>
      <Paragraph4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
      <Container5 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
        <g id="Icon">
          <path d={svgPaths.p38946820} id="Vector" stroke="var(--stroke-0, #0C3058)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999349" />
          <path d={svgPaths.pb385b80} id="Vector_2" stroke="var(--stroke-0, #0C3058)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999349" />
          <path d={svgPaths.p1498e000} id="Vector_3" stroke="var(--stroke-0, #0C3058)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999349" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] relative shrink-0" data-name="Paragraph">
      <p className="font-['Rubik:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#0068f5] text-[15px]" dir="auto">
        סיוע בשכר דירה- מדריך
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[17.986px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9861 17.9861">
        <g clipPath="url(#clip0_4125_294)" id="Icon">
          <path d={svgPaths.p3711a780} id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
          <path d={svgPaths.p496cc00} id="Vector_2" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
          <path d="M7.35795 6.5404H5.72285" id="Vector_3" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
          <path d="M12.2632 9.8106H5.72285" id="Vector_4" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
          <path d="M12.2632 13.0808H5.72285" id="Vector_5" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
        </g>
        <defs>
          <clipPath id="clip0_4125_294">
            <rect fill="white" height="17.9861" width="17.9861" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[17.986px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Paragraph5 />
      <Container8 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Icon1 />
        <Frame19 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[45.99px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#c3cfe7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end px-[16.99px] py-px relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
        <g id="Icon">
          <path d={svgPaths.p38946820} id="Vector" stroke="var(--stroke-0, #0C3058)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999349" />
          <path d={svgPaths.pb385b80} id="Vector_2" stroke="var(--stroke-0, #0C3058)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999349" />
          <path d={svgPaths.p1498e000} id="Vector_3" stroke="var(--stroke-0, #0C3058)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999349" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] relative shrink-0" data-name="Paragraph">
      <p className="font-['Rubik:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#0068f5] text-[15px]" dir="auto">
        שאלות נפוצות- סיוע בשכר דירה
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[17.986px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9861 17.9861">
        <g clipPath="url(#clip0_4125_294)" id="Icon">
          <path d={svgPaths.p3711a780} id="Vector" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
          <path d={svgPaths.p496cc00} id="Vector_2" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
          <path d="M7.35795 6.5404H5.72285" id="Vector_3" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
          <path d="M12.2632 9.8106H5.72285" id="Vector_4" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
          <path d="M12.2632 13.0808H5.72285" id="Vector_5" stroke="var(--stroke-0, #1976D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6351" />
        </g>
        <defs>
          <clipPath id="clip0_4125_294">
            <rect fill="white" height="17.9861" width="17.9861" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[17.986px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Paragraph6 />
      <Container9 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Icon3 />
        <Frame23 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[45.99px] relative rounded-[8px] shrink-0 w-[707.028px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#c3cfe7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end px-[16.99px] py-px relative size-full">
        <Frame22 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[11.996px] h-[103.976px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[17.986px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[5%_5%_65%_65%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.19444 7.19444">
            <path d={svgPaths.p1e079700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79861" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[5%_5%_40%_40%]" data-name="Vector">
        <div className="absolute inset-[-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.691 11.691">
            <path d={svgPaths.p221e4900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79861" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20%_20%_5%_5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2882 15.2882">
            <path d={svgPaths.p34cd1e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.79861" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[17.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0068f5] h-[51.997px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.986px] items-center justify-center pl-[0.017px] relative size-full">
          <Container10 />
          <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[16px] text-center text-white" dir="auto">
            <span className="leading-[24px]">{` רוצה להגיש פנייה בנושא סיוע בדיור `}</span>
            <span className="font-['Rubik:Bold',sans-serif] font-bold leading-[24px]">|</span>
            <span className="leading-[24px]">{` בדיקת זכאות לסיוע בשכר דירה`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c3cfe7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[15.99px] items-start p-[24px] relative w-full">
        <Frame16 />
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#0c3058] text-[15px] text-right w-full whitespace-pre-wrap" dir="auto">
          כדי לחסוך לך זמן המתנה למענה, כדאי לבדוק אם התשובה מופיעה כאן:
        </p>
        <Container7 />
        <Button1 />
      </div>
    </div>
  );
}

function OutlineArrowUp() {
  return (
    <div className="relative size-full" data-name="outline/arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.18259 13.9999">
        <g id="outline/arrow-up">
          <path d={svgPaths.p10974680} fill="var(--fill-0, #0C3058)" id="ð¨-Icon-Ð¡olor" />
        </g>
      </svg>
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron">
      <div className="absolute flex inset-[7.91px_5px] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[14px] rotate-90 w-[8.183px]">
          <OutlineArrowUp />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end min-w-[268px] relative shrink-0 w-full">
      <Chevron />
      <div className="flex flex-[1_0_0] flex-col font-['Rubik:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#0c3058] text-[16px] text-right">
        <p className="leading-[1.25] whitespace-pre-wrap" dir="auto">
          ייתכן וכוונתך לנושאים הבאים
        </p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
          <g id="Group">
            <path d={svgPaths.pbb3a80} id="Vector" stroke="var(--stroke-0, #5878A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
            <path d={svgPaths.p442a100} id="Vector_2" stroke="var(--stroke-0, #5878A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[15.99px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Rubik:Regular',sans-serif] font-['Rubik:SemiBold',sans-serif] font-normal font-semibold leading-[0] relative shrink-0 text-[#073763] text-[0px] text-right" dir="auto">
        <span className="leading-[22px] text-[16px]">מחיר מטרה |</span>
        <span className="leading-[22px] text-[15px]">{` `}</span>
        <span className="leading-[22px] text-[16px]">בדיקת סטטוס הגשה</span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container11 />
      <Frame4 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[8px] shrink-0 w-[385.399px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c3cfe7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
          <g id="Group">
            <path d={svgPaths.pbb3a80} id="Vector" stroke="var(--stroke-0, #5878A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
            <path d={svgPaths.p442a100} id="Vector_2" stroke="var(--stroke-0, #5878A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59896" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[15.99px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container12 />
      <p className="font-['Rubik:Regular',sans-serif] font-['Rubik:SemiBold',sans-serif] font-normal font-semibold leading-[0] relative shrink-0 text-[#073763] text-[0px] text-right" dir="auto">
        <span className="leading-[22px] text-[16px]">דירה בהנחה |</span>
        <span className="leading-[22px] text-[15px]">{` שאלות כלליות`}</span>
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c3cfe7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#c3cfe7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end px-[24px] py-[16px] relative w-full">
          <Frame />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Container4 />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <Frame10 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[19.497px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[3.57%]" data-name="Vector">
        <div className="absolute inset-[-3.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4965 19.4965">
            <path d={svgPaths.p86fce70} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39261" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[19.497px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pl-[0.017px] rounded-[37282700px] shadow-[0px_2px_8px_0px_rgba(12,48,88,0.25)] size-[47.986px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(90.0751deg, rgb(2, 95, 219) 0%, rgb(2, 95, 219) 35.02%, rgb(11, 54, 104) 99.935%)" }}>
      <Container14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[47.986px]">
      <Container13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame15 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <Container1 />
      <Frame18 />
      <Frame17 />
    </div>
  );
}

function AccordionItem() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".accordion-item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative w-full">
        <Frame7 />
      </div>
    </div>
  );
}

function Icon9() {
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

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[15.99px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Container17 />
      <p className="font-['Rubik:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0068f5] text-[16px] text-center" dir="auto">
        בחירה בנושא מתאים אחר
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[23.993px] left-[301.23px] top-[34px] w-[214.531px]" data-name="Button">
      <Frame11 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[61.319px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[86.424px] relative shrink-0 w-[817.014px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t-[1.111px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function ResultsStep() {
  return (
    <div className="relative shrink-0 w-[817.014px]" data-name="ResultsStep">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.993px] items-start relative w-full">
        <AccordionItem />
        <Container15 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pl-[47.986px] pt-[31.997px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)] top-0 w-[912.986px]" data-name="Container">
      <ResultsStep />
    </div>
  );
}

export default function Frame21() {
  return (
    <div className="relative size-full">
      <Container />
    </div>
  );
}