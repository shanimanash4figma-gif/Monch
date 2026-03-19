import svgPaths from "./svg-qvhluw34ux";

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-white" dir="auto">
          לאזור האישי
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative rounded-[8px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[17px] py-px relative size-full">
          <Text />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[21px] left-0 text-[16px] text-white top-0">1299</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2384_575)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2384_575">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[37px] relative rounded-[6px] shrink-0 w-[83.219px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
        <Text1 />
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[20.5px] text-[16px] text-center text-white top-0 translate-x-[-50%]" dir="auto">
          עברית
        </p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2384_644)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14d10c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2384_644">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[40px] relative rounded-[6px] shrink-0 w-[108.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
        <Icon2 />
        <Text2 />
        <Icon3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-[352.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Link />
        <Link1 />
        <Button />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0 w-[93.609px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[12px] text-[16px] text-white top-[8px]" dir="auto">
          קבלת קהל
        </p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[16px] text-[16px] text-center text-white top-0 translate-x-[-50%]" dir="auto">
          מידע
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0 w-[75.875px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[12px] py-0 relative size-full">
        <Icon4 />
        <Text3 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative rounded-[6px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[12px] text-[16px] text-white top-[8px]" dir="auto">
          משרדים וגופי ממשל
        </p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[22px] left-[26px] text-[16px] text-center text-white top-0 translate-x-[-50%]" dir="auto">
          שירותים
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0 w-[95.813px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[12px] py-0 relative size-full">
        <Icon5 />
        <Text4 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[38px] relative shrink-0 w-[489.234px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link2 />
        <Button1 />
        <Link3 />
        <Button2 />
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[1.57%_1.92%]">
      <div className="absolute inset-[1.57%_1.92%]" data-name="Path 4223">
        <div className="absolute inset-[-1.62%_-2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.7189 37.5154">
            <path d={svgPaths.p16b4cf80} id="Path 4223" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="1.18016" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[3.67%_4.48%_4.28%_4.18%]" data-name="Path 4224">
        <div className="absolute inset-[-0.57%_-0.7%_-0.75%_-0.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3673 34.9906">
            <path d={svgPaths.p187cac40} id="Path 4224" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.394068" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[61.35%_45.91%_38.01%_52.52%]" data-name="Path 4225">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.4825 0.239396">
          <path d={svgPaths.p12ccc480} fill="var(--fill-0, white)" id="Path 4225" />
        </svg>
      </div>
      <div className="absolute inset-[69.52%_52.53%_29.67%_45.21%]" data-name="Path 4226">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.6939 0.305048">
          <path d={svgPaths.p24b4a00} fill="var(--fill-0, white)" id="Path 4226" />
        </svg>
      </div>
      <div className="absolute inset-[6.41%_76.62%_16.94%_8.24%]" data-name="Path 4227">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.64933 28.7556">
          <path d={svgPaths.p178bbc00} fill="var(--fill-0, white)" id="Path 4227" />
        </svg>
      </div>
      <div className="absolute inset-[6.42%_7.53%_16.93%_77.29%]" data-name="Path 4228">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66402 28.7546">
          <path d={svgPaths.p30f98200} fill="var(--fill-0, white)" id="Path 4228" />
        </svg>
      </div>
      <div className="absolute inset-[13.93%_24.1%_27.64%_24.76%]" data-name="Path 4229">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7089 21.9221">
          <path d={svgPaths.p2620c600} fill="var(--fill-0, white)" id="Path 4229" />
        </svg>
      </div>
      <div className="absolute inset-[58.45%_36.01%_36.91%_56.22%]" data-name="Path 4230">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.38768 1.74139">
          <path d={svgPaths.p2100080} fill="var(--fill-0, white)" id="Path 4230" />
        </svg>
      </div>
      <div className="absolute inset-[59.74%_37.36%_37.69%_58.34%]" data-name="Path 4231">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32065 0.962898">
          <path d={svgPaths.p19d0bd80} fill="var(--fill-0, white)" id="Path 4231" />
        </svg>
      </div>
      <div className="absolute inset-[60.84%_40.37%_38.35%_58.68%]" data-name="Path 4232">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.292186 0.30366">
          <path d={svgPaths.p327e74b0} fill="var(--fill-0, white)" id="Path 4232" />
        </svg>
      </div>
      <div className="absolute inset-[60.87%_38.19%_38.68%_61.47%]" data-name="Path 4233">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.102699 0.168237">
          <path d={svgPaths.p76abb00} fill="var(--fill-0, white)" id="Path 4233" />
        </svg>
      </div>
      <div className="absolute inset-[65.57%_30.5%_29.25%_57.29%]" data-name="Path 4234">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.7503 1.94181">
          <path d={svgPaths.p38e61e00} fill="var(--fill-0, white)" id="Path 4234" />
        </svg>
      </div>
      <div className="absolute inset-[66.55%_36.78%_31.73%_58.8%]" data-name="Path 4235">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.35863 0.644671">
          <path d={svgPaths.p921c000} fill="var(--fill-0, white)" id="Path 4235" />
        </svg>
      </div>
      <div className="absolute inset-[66.66%_32.01%_31.82%_64.86%]" data-name="Path 4236">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.961144 0.571455">
          <path d={svgPaths.p3f044480} fill="var(--fill-0, white)" id="Path 4236" />
        </svg>
      </div>
      <div className="absolute inset-[67.56%_37.2%_30.44%_59.4%]" data-name="Path 4237">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.04454 0.751368">
          <path d={svgPaths.p69e600} fill="var(--fill-0, white)" id="Path 4237" />
        </svg>
      </div>
      <div className="absolute inset-[67.56%_31.85%_30.47%_64.83%]" data-name="Path 4238">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.02178 0.73917">
          <path d={svgPaths.p1a296680} fill="var(--fill-0, white)" id="Path 4238" />
        </svg>
      </div>
      <div className="absolute inset-[67.89%_45.76%_30.53%_51.66%]" data-name="Path 4239">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.790513 0.593689">
          <path d={svgPaths.p15e07ba0} fill="var(--fill-0, white)" id="Path 4239" />
        </svg>
      </div>
      <div className="absolute inset-[73.3%_64.89%_11.99%_24.76%]" data-name="Path 4240">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.17877 5.51976">
          <path d={svgPaths.p122aa540} fill="var(--fill-0, white)" id="Path 4240" />
        </svg>
      </div>
      <div className="absolute inset-[79.48%_22.76%_15.1%_71.9%]" data-name="Path 4241">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.64215 2.0325">
          <path d={svgPaths.p3d68ad80} fill="var(--fill-0, white)" id="Path 4241" />
        </svg>
      </div>
      <div className="absolute inset-[79.53%_42.82%_11.98%_48.78%]" data-name="Path 4242">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57861 3.18472">
          <path d={svgPaths.p271b4000} fill="var(--fill-0, white)" id="Path 4242" />
        </svg>
      </div>
      <div className="absolute inset-[79.7%_28.83%_11.96%_58.7%]" data-name="Path 4243">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82925 3.12617">
          <path d={svgPaths.p1b40bd00} fill="var(--fill-0, white)" id="Path 4243" />
        </svg>
      </div>
      <div className="absolute inset-[79.81%_52.27%_12.03%_36.44%]" data-name="Path 4244">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.468 3.06029">
          <path d={svgPaths.p66f7e48} fill="var(--fill-0, white)" id="Path 4244" />
        </svg>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[37.516px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group11 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute content-stretch flex flex-col h-[37.516px] items-start left-[1608.27px] top-[10.99px] w-[30.719px]" data-name="Group37">
      <Icon6 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[33.12%_9.34%_18.92%_30.78%]" data-name="Group 156_2">
      <div className="absolute inset-[33.15%_39.16%_18.93%_30.78%]" data-name="Path 1894">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1919 20.8182">
          <path clipRule="evenodd" d={svgPaths.p39573c80} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 1894" />
        </svg>
      </div>
      <div className="absolute inset-[33.12%_9.34%_18.92%_60.22%]" data-name="Path 1895">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4507 20.8305">
          <path clipRule="evenodd" d={svgPaths.p28201e50} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 1895" />
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-0">
      <Group9 />
      <div className="absolute inset-[33.58%_71.04%_0_0]" data-name="Path 1896">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4587 28.8516">
          <path clipRule="evenodd" d={svgPaths.p12c8a800} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 1896" />
        </svg>
      </div>
      <div className="absolute inset-[16.47%_4.84%_68.23%_85.27%]" data-name="Path 2503">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64569 6.64514">
          <path clipRule="evenodd" d={svgPaths.p175b1600} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2503" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_84.7%_90.11%]" data-name="Path 2504">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64576 6.6451">
          <path clipRule="evenodd" d={svgPaths.p27ddb000} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2504" />
        </svg>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[43.438px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group7 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[43.438px] items-start left-[1519px] top-[5.16px] w-[67.188px]" data-name="Group38">
      <Icon7 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute inset-[77.86%_78.28%_0_0]" data-name="Path 2699">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.59537 4.59664">
          <path clipRule="evenodd" d={svgPaths.p1a88e080} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2699" />
        </svg>
      </div>
      <div className="absolute inset-[0_36.09%_1.24%_40.68%]" data-name="Path 2700">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91375 20.5068">
          <path clipRule="evenodd" d={svgPaths.p3405e000} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2700" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_1.25%_80.51%]" data-name="Path 2701">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.12291 20.5063">
          <path clipRule="evenodd" d={svgPaths.p1f80aa00} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2701" />
        </svg>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[20.766px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group10 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20.766px] items-start left-[1580.22px] top-[19.65px] w-[21.156px]" data-name="Group111">
      <Icon8 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Group212">
      <Group1 />
      <Group6 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute inset-[0_0_89.69%_2.39%]" data-name="Path 156">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.0489 1.55517">
          <path d={svgPaths.p3c829070} fill="var(--fill-0, white)" id="Path 156" />
        </svg>
      </div>
      <div className="absolute inset-[89.69%_2.39%_0_0]" data-name="Path 157">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.0489 1.55512">
          <path d={svgPaths.p2dff04c0} fill="var(--fill-0, white)" id="Path 157" />
        </svg>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[15.078px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group12 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[15.078px] items-start left-[1540.58px] top-[43.73px] w-[62.547px]" data-name="Group53">
      <Icon9 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.1719 8.59375">
        <path d={svgPaths.p1a441800} fill="var(--fill-0, white)" id="Rectangle 5957" />
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[8.594px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group13 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.594px] items-start left-[1542.06px] top-[46.66px] w-[46.172px]" data-name="Group72">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[10.281px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 10.2812">
        <path d={svgPaths.p1aeea700} fill="var(--fill-0, white)" id="Path 160" />
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.281px] items-start left-[1589.98px] top-[46.13px] w-[11.5px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Group92">
      <Group2 />
      <Group3 />
      <Container1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute left-[-1299.34px] size-0 top-[-5.17px]" data-name="Group102">
      <Group />
      <Group8 />
      <Group4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[24px] left-[65px] text-[#073763] text-[16px] text-center top-0 translate-x-[-50%]" dir="auto">
          חפשו שירות או מידע
        </p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #073763)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #073763)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex gap-[8px] h-[40px] items-center left-0 px-[17px] py-px rounded-[33554400px] top-[6.81px] w-[187.656px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(7,55,99,0.3)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <Text5 />
      <Icon12 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[53.641px] relative shrink-0 w-[355.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group5 />
        <Button3 />
      </div>
    </div>
  );
}

function GovTopBar() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="GovTopBar" style={{ backgroundImage: "linear-gradient(143.97deg, rgb(2, 95, 219) 2.3594%, rgb(2, 95, 219) 35.708%, rgb(11, 54, 104) 97.641%)" }}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">
          <Container />
          <Navigation />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Heading 1">
      <p className="css-ew64yg font-['Rubik:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#0c3058] text-[32px] text-right" dir="auto">
        צרו קשר עם משרד הבינוי והשיכון
      </p>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#0068f5] h-[4px] shrink-0 w-[42px]" data-name="Container" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[500.188px]">
      <Heading />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pl-[63px] pr-0 py-0 relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Rubik:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#8596af] text-[16px] text-center" dir="auto">
          שיחה חדשה
        </p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3b0e2580} id="Vector" stroke="var(--stroke-0, #8596AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(240,243,246,0.1)] h-[38px] opacity-50 relative rounded-[8px] shrink-0 w-[138.859px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8596af] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[17px] py-px relative size-full">
        <Text6 />
        <Icon13 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[999.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Rubik:SemiBold',sans-serif] font-semibold leading-[24px] left-[709.73px] text-[18px] text-white top-0" dir="auto">
          עוזר פניות הציבור - מכוון אותך למקום הנכון
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[38px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Paragraph />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#0c3058] content-stretch flex flex-col h-[63px] items-start left-px pb-px pt-[12px] px-[24px] top-[0.81px] w-[1262px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] left-[636.84px] text-[#0c3058] text-[16px] text-right top-0 translate-x-[-100%]" dir="auto">
        שלום! אני עוזר פניות הציבור של משרד הבינוי והשיכון.
      </p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0 w-[48.078px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Rubik:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0c3058] text-[16px] text-right" dir="auto">
        בקצרה
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-right" dir="auto">
        את נושא הפנייה, ואכוון אתכם לדף ידע או לטופס פניות הציבור להגשת פנייה מאובטחת.
      </p>
      <div className="flex flex-row items-center self-stretch">
        <BoldText />
      </div>
      <p className="css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[16px] text-right" dir="auto">
        כתבו
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[-2.45px] top-[-40px] w-[638.5px]">
      <Paragraph1 />
      <Frame3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[636.047px]" data-name="Paragraph">
      <Frame4 />
    </div>
  );
}

function Container7() {
  return <div className="absolute border-[#e0e0e0] border-solid border-t h-px left-0 top-[84px] w-[636.047px]" data-name="Container" />;
}

function OutlineAlertTriangle() {
  return (
    <div className="absolute inset-[8.33%_4.17%_12.5%_4.17%]" data-name="outline/alert-triangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9994 19">
        <g id="outline/alert-triangle">
          <path d={svgPaths.pd812d00} fill="var(--fill-0, #A35200)" id="ð¨-Icon-Ð¡olor" />
        </g>
      </svg>
    </div>
  );
}

function AlertTriangle() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Alert-Triangle">
      <OutlineAlertTriangle />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative">
      <p className="css-ew64yg font-['Rubik:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a35200] text-[16px] text-right" dir="auto">
        נא לא להזין פרטים אישיים/מזהים.
      </p>
      <AlertTriangle />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0 w-[636.047px]">
      <Frame7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[24px] left-0 top-[101px] w-[636.047px]" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[125px] relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f1f5fb] content-stretch flex flex-col h-[157px] items-start pb-0 pt-[16px] px-[20px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px] shrink-0 w-[676.047px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute contents inset-[25.62%_25.63%_25.63%_25.62%]" data-name="Frame">
      <div className="absolute inset-[25.62%_25.63%_25.63%_25.62%]" data-name="Vector">
        <div className="absolute inset-[-3.85%]" style={{ "--fill-0": "rgba(12, 48, 88, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <path d={svgPaths.pd8105b0} fill="var(--fill-0, #0C3058)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(12, 48, 88, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d={svgPaths.p1fd92980} fill="var(--fill-0, #0C3058)" id="Ellipse 1" />
        </svg>
      </div>
      <Frame />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] size-[40px] top-[4px]" data-name="Frame">
      <Icon14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start justify-end relative w-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[157px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pl-[413.953px] pr-0 py-0 relative size-full">
        <Frame14 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-white h-[358px] left-px top-[65.72px] w-[1262px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-0 pt-[24px] px-[24px] relative rounded-[inherit] size-full">
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border-[#b5c7e2] border-b border-solid inset-0 pointer-events-none" />
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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b5c7e2] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Search />
      <p className="css-ew64yg font-['Rubik:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#0c3058] text-[16px] text-center" dir="auto">
        סיוע בשכר דירה
      </p>
    </div>
  );
}

function OutlineSearch1() {
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

function Search1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="search">
      <OutlineSearch1 />
    </div>
  );
}

function ChipButtonDefault() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center px-[16px] py-[12px] relative rounded-[100px] shrink-0 w-[261px]" data-name="Chip button / Default">
      <div aria-hidden="true" className="absolute border border-[#b5c7e2] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Search1 />
      <p className="css-ew64yg font-['Rubik:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#0c3058] text-[16px] text-center" dir="auto">
        בירור תנאי זכאות למחיר מטרה
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Frame8 />
      <ChipButtonDefault />
    </div>
  );
}

function OutlinePaperPlane() {
  return (
    <div className="absolute inset-[8.35%_8.35%_8.33%_8.33%]" data-name="outline/paper-plane">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6635 16.6642">
        <g id="outline/paper-plane">
          <path d={svgPaths.p3d87c9f0} fill="var(--fill-0, #8596AF)" id="ð¨-Icon-Ð¡olor" />
        </g>
      </svg>
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Send">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <OutlinePaperPlane />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Rubik:Medium',sans-serif] font-medium leading-[20px] left-[20px] text-[#8596af] text-[14px] text-center top-[-1px] translate-x-[-50%]" dir="auto">
          שליחה
        </p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f0f3f6] content-stretch flex gap-[8px] h-[46px] items-center justify-center opacity-50 relative rounded-[8px] shrink-0 w-[118px]" data-name="Button">
      <Send />
      <Text7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0">
      <p className="css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5878a4] text-[16px]" dir="auto">
        אני פונה בנושא...
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Button5 />
      <Frame10 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b5c7e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start px-[8px] py-[9px] relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#b5c7e2] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Rubik:Regular',sans-serif] font-normal leading-[0] left-[1214px] text-[#5878a4] text-[14px] text-right top-[0.38px] translate-x-[-100%]" dir="auto">
        <span className="leading-[16px]">{`התשובות מבוססות על בינה מלאכותית ועלולות לכלול אי-דיוקים. במקרה של סתירה או אי התאמה בין המידע שניתן על ידי העוזר לבין הוראות הדין הרלוונטיות, יגברו הוראות הדין. `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] underline">לתנאי השימוש</span>
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[214px] items-start left-px pb-0 pt-[16px] px-[24px] top-[425.63px] w-[1262px]" data-name="Container">
      <Frame13 />
      <Container15 />
      <Paragraph3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white h-[639.813px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container6 />
        <Container13 />
        <Container16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b5c7e2] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_12px_0px_rgba(6,77,173,0.15)]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Container4 />
      <Container17 />
    </div>
  );
}

function PublicInquiryPage() {
  return (
    <div className="bg-[#f0f7ff] h-[767px] relative shrink-0 w-full" data-name="PublicInquiryPage">
      <div className="content-stretch flex flex-col items-start pb-0 pt-[24px] px-[208px] relative size-full">
        <Frame11 />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f1f5fb] content-stretch flex flex-col items-start relative size-full" data-name="מסך פתיחה">
      <GovTopBar />
      <PublicInquiryPage />
    </div>
  );
}