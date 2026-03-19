import svgPaths from "./svg-tenb880pmq";
import { imgGroup19082, imgGroup19086 } from "./svg-icird";

function Person() {
  return (
    <div className="absolute inset-[12.5%_20.83%]" data-name="person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
        <g id="person">
          <path d={svgPaths.p325a0a00} fill="var(--fill-0, white)" id="\uD83C\uDFA8-Icon-\u0421olor" />
        </g>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[86.78px] size-[18px] top-[2.69px]" data-name="SVG">
      <Person />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[20.7px] left-[calc(50%+0.005px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[104.78px]" data-name="Container">
      <Svg />
      <div className="absolute flex flex-col font-['Rubik:Regular',_sans-serif] font-normal h-[18.67px] justify-center leading-[0] right-[25.68px] text-[16px] text-right text-white top-[9.99px] translate-y-[-50%] w-[79.102px]">
        <p className="leading-[20px]" dir="auto">
          לאזור האישי
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-auto min-w-[110px] px-3" data-name="Link - כניסה לאזור האישי הממשלתי">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <Container />
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="absolute inset-[8.34%_8.33%_8.33%_8.33%]" data-name="phone-call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="phone-call">
          <path d={svgPaths.p127c0100} fill="var(--fill-0, white)" id="moked-Icon-\u0421olor" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[43.21px] size-[16px] top-[3.18px]" data-name="SVG">
      <PhoneCall />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[21px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[59.21px]" data-name="Container">
      <Svg1 />
      <div className="absolute flex flex-col font-['Rubik:Regular',_sans-serif] font-normal h-[18.67px] justify-center leading-[0] right-[23.69px] text-[16px] text-right text-white top-[10.01px] translate-y-[-50%] w-[35.517px]">
        <p className="leading-[21px]">1299</p>
      </div>
    </div>
  );
}

function Link1299() {
  return (
    <div className="h-[40px] relative rounded-[6px] shrink-0 w-auto min-w-[60px] px-2" data-name="Link - לחצו לחיוג למוקד מענה ממשלתי מרכזי שמספרו 1 2 9 9">
      <Container1 />
    </div>
  );
}

function Globe() {
  return (
    <div className="absolute inset-[8.333%]" data-name="globe">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="globe">
          <path d={svgPaths.p3a47a900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute left-[76.63px] size-[17px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <Globe />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="absolute inset-[39.58%_29.17%_35.42%_29.17%]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 4">
        <g id="chevron-down">
          <path d={svgPaths.p1eb2be00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute left-[13.73px] size-[14px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <ChevronDown />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[107.63px]" data-name="Button - בחירת שפה">
      <Svg2 />
      <div className="absolute flex flex-col font-['Rubik:Regular',_sans-serif] font-normal h-[24px] justify-center leading-[0] left-[calc(50%-5.473px)] text-[16px] text-center text-white top-[32px] translate-x-[-50%] translate-y-[-50%] w-[41.225px]">
        <p className="leading-[24px]" dir="auto">
          עברית
        </p>
      </div>
      <Svg3 />
      <div className="absolute flex flex-col font-['Rubik:Regular',_sans-serif] font-normal h-[24px] justify-center leading-[0] left-[calc(50%-45.782px)] text-[16px] text-[rgba(255,255,255,0.5)] text-center top-[32px] translate-x-[-50%] translate-y-[-50%] w-[4.066px]">
        <p className="leading-[24px]">|</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[107.63px]" data-name="Container">
      <Button />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex gap-2 md:gap-3 items-center shrink-0 order-2 md:order-1">
      <div className="hidden sm:block">
        <Link />
      </div>
      <Link1299 />
      <Container2 />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="absolute inset-[39.58%_29.17%_35.42%_29.17%]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
        <g id="chevron-down">
          <path d={svgPaths.p96eb700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute left-[4px] size-[18px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <ChevronDown1 />
    </div>
  );
}

function ItemButton() {
  return (
    <div className="absolute h-[40px] left-[347.42px] rounded-[6px] top-1/2 translate-y-[-50%] w-[81.81px]" data-name="Item → Button">
      <div className="absolute flex flex-col font-['Rubik:Regular',_sans-serif] font-normal h-[18.67px] justify-center leading-[0] left-[calc(50%+7.179px)] text-[16px] text-center text-white top-[calc(50%-0.335px)] translate-x-[-50%] translate-y-[-50%] w-[52.169px]">
        <p className="leading-[22px]" dir="auto">
          שירותים
        </p>
      </div>
      <Svg4 />
    </div>
  );
}

function ItemLink() {
  return (
    <div className="absolute h-[40px] left-[187.48px] rounded-[6px] top-1/2 translate-y-[-50%] w-[143.94px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Rubik:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] right-[7.6px] text-[16px] text-right text-white top-[20px] translate-y-[-50%] w-[128.338px]">
        <p className="leading-[22px]" dir="auto">
          משרדים וגופי ממשל
        </p>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="absolute inset-[39.58%_29.17%_35.42%_29.17%]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
        <g id="chevron-down">
          <path d={svgPaths.p96eb700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute left-[4px] size-[18px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <ChevronDown2 />
    </div>
  );
}

function ItemButton1() {
  return (
    <div className="absolute h-[40px] left-[109.61px] rounded-[6px] top-1/2 translate-y-[-50%] w-[61.88px]" data-name="Item → Button">
      <div className="absolute flex flex-col font-['Rubik:Regular',_sans-serif] font-normal h-[18.67px] justify-center leading-[0] left-[calc(50%+7.197px)] text-[16px] text-center text-white top-[calc(50%-0.335px)] translate-x-[-50%] translate-y-[-50%] w-[32.273px]">
        <p className="leading-[22px]" dir="auto">
          מידע
        </p>
      </div>
      <Svg5 />
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="absolute h-[40px] left-[8px] rounded-[6px] top-1/2 translate-y-[-50%] w-[85.6px]" data-name="Item → Link">
      <div className="absolute flex flex-col font-['Rubik:Regular',_sans-serif] font-normal h-[22px] justify-center leading-[0] right-[7.69px] text-[16px] text-right text-white top-[20px] translate-y-[-50%] w-[69.907px]">
        <p className="leading-[22px]" dir="auto">
          קבלת קהל
        </p>
      </div>
    </div>
  );
}

function NavList() {
  return (
    <div className="h-[64px] relative shrink-0 w-auto" data-name="Nav → List">
      <div className="flex gap-4 items-center h-full">
        <ItemButton />
        <ItemLink />
        <ItemButton1 />
        <ItemLink1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[24px] left-[113.68px] overflow-clip top-1/2 translate-y-[-50%] w-[129.66px]" data-name="Container">
      <div className="absolute flex flex-col font-['Rubik:Regular',_sans-serif] font-normal h-[18.67px] justify-center leading-[0] right-[-0.3px] text-[16px] text-black text-right top-[12.01px] translate-y-[-50%] w-[129.961px]">
        <p className="leading-[24px]" dir="auto">
          חפשו שירות או מידע
        </p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute inset-[12.5%]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="search">
          <path d={svgPaths.p2a7e900} fill="var(--fill-0, #0C3058)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="SVG">
      <Search />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(12,48,88,0.1)] left-[4.67px] rounded-[15.5px] size-[31px] top-1/2 translate-y-[-50%]" data-name="Overlay">
      <Svg6 />
    </div>
  );
}

function ButtonDialog() {
  return (
    <div className="bg-white h-[40px] relative rounded-[30px] shrink-0 w-full max-w-[260px] min-w-[180px]" data-name="Button dialog">
      <div aria-hidden="true" className="absolute border border-[rgba(12,48,88,0.3)] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Container3 />
      <Overlay />
    </div>
  );
}

function Group19079() {
  return (
    <div className="absolute inset-[11.96%_0.5%_20.3%_74.87%]">
      <div className="absolute inset-[-1.62%_-2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 38">
          <g id="Group 19079">
            <path d={svgPaths.p3fa05b00} id="Path 4223" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="1.1805" />
            <path d={svgPaths.p2d05d680} id="Path 4224" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.394183" />
            <path d={svgPaths.p2faf4860} fill="var(--fill-0, white)" id="Path 4225" />
            <path d={svgPaths.p904d340} fill="var(--fill-0, white)" id="Path 4226" />
            <path d={svgPaths.p3ce3de80} fill="var(--fill-0, white)" id="Path 4227" />
            <path d={svgPaths.pba1c900} fill="var(--fill-0, white)" id="Path 4228" />
            <path d={svgPaths.p117756c0} fill="var(--fill-0, white)" id="Path 4229" />
            <path d={svgPaths.pa014900} fill="var(--fill-0, white)" id="Path 4230" />
            <path d={svgPaths.p13492680} fill="var(--fill-0, white)" id="Path 4231" />
            <path d={svgPaths.p3da85540} fill="var(--fill-0, white)" id="Path 4232" />
            <path d={svgPaths.p273a4c80} fill="var(--fill-0, white)" id="Path 4233" />
            <path d={svgPaths.p34d7500} fill="var(--fill-0, white)" id="Path 4234" />
            <path d={svgPaths.p38148c00} fill="var(--fill-0, white)" id="Path 4235" />
            <path d={svgPaths.p33938660} fill="var(--fill-0, white)" id="Path 4236" />
            <path d={svgPaths.p16490680} fill="var(--fill-0, white)" id="Path 4237" />
            <path d={svgPaths.p39c6d900} fill="var(--fill-0, white)" id="Path 4238" />
            <path d={svgPaths.p2f007e80} fill="var(--fill-0, white)" id="Path 4239" />
            <path d={svgPaths.p335eaf00} fill="var(--fill-0, white)" id="Path 4240" />
            <path d={svgPaths.pd878500} fill="var(--fill-0, white)" id="Path 4241" />
            <path d={svgPaths.p336d0bc0} fill="var(--fill-0, white)" id="Path 4242" />
            <path d={svgPaths.pb0de580} fill="var(--fill-0, white)" id="Path 4243" />
            <path d={svgPaths.p2f1d8a00} fill="var(--fill-0, white)" id="Path 4244" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group157() {
  return (
    <div className="absolute bottom-[19.05%] left-[0.01%] right-[44.02%] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 44">
        <g id="Group 156">
          <g id="Group 156_2">
            <path clipRule="evenodd" d={svgPaths.p2f310c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 1894" />
            <path clipRule="evenodd" d={svgPaths.p3dd1800} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 1895" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p76f480} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 1896" />
          <path clipRule="evenodd" d={svgPaths.p27061e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2503" />
          <path clipRule="evenodd" d={svgPaths.p11a95f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2504" />
        </g>
      </svg>
    </div>
  );
}

function Group2008() {
  return (
    <div className="absolute inset-[27.01%_31.36%_34.31%_51.02%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Group 2008">
          <path clipRule="evenodd" d={svgPaths.p2f5117d2} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2699" />
          <path clipRule="evenodd" d={svgPaths.p259c5500} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2700" />
          <path clipRule="evenodd" d={svgPaths.p18b38280} fill="var(--fill-0, white)" fillRule="evenodd" id="Path 2701" />
        </g>
      </svg>
    </div>
  );
}

function Group2009() {
  return (
    <div className="absolute bottom-[19.05%] contents left-[0.01%] right-[31.36%] top-0">
      <Group157 />
      <Group2008 />
    </div>
  );
}

function Group19080() {
  return (
    <div className="absolute bottom-[19.05%] contents left-[0.01%] right-[31.36%] top-0">
      <Group2009 />
    </div>
  );
}

function Group19082() {
  return (
    <div className="absolute bottom-0 left-[17.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[62.536px_15.069px] right-[29.9%] top-[71.91%]" style={{ maskImage: `url('${imgGroup19082}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 16">
        <g id="Group 19082">
          <path d={svgPaths.p2737dd00} fill="var(--fill-0, white)" id="Path 156" />
          <path d={svgPaths.p2a82f700} fill="var(--fill-0, white)" id="Path 157" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute bottom-0 contents left-[17.99%] right-[29.9%] top-[71.91%]" data-name="Clip path group">
      <Group19082 />
    </div>
  );
}

function Group19083() {
  return (
    <div className="absolute bottom-0 contents left-[17.99%] right-[29.9%] top-[71.91%]">
      <ClipPathGroup />
    </div>
  );
}

function Group19086() {
  return (
    <div className="absolute inset-[77.39%_42.31%_6.63%_19.23%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.004px_-0.009px] mask-size-[46.145px_8.584px]" style={{ maskImage: `url('${imgGroup19086}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 9">
        <g id="Group 19086">
          <path d={svgPaths.p16e8bb80} fill="var(--fill-0, white)" id="Rectangle 5957" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[77.38%_42.32%_6.62%_19.23%]" data-name="Clip path group">
      <Group19086 />
    </div>
  );
}

function Group19087() {
  return (
    <div className="absolute contents inset-[77.38%_42.32%_6.62%_19.23%]">
      <ClipPathGroup1 />
    </div>
  );
}

function Group19088() {
  return (
    <div className="absolute bottom-0 contents left-[17.99%] right-[29.9%] top-[71.91%]">
      <Group19083 />
      <Group19087 />
      <div className="absolute inset-[76.4%_31.27%_4.48%_59.16%]" data-name="Path 160">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
          <path d={svgPaths.p3635f980} fill="var(--fill-0, white)" id="Path 160" />
        </svg>
      </div>
    </div>
  );
}

function Group19091() {
  return (
    <div className="absolute bottom-0 contents left-[0.01%] right-[0.5%] top-0">
      <Group19079 />
      <Group19080 />
      <Group19088 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute h-[53.646px] left-[16px] top-0 w-[120px]" data-name="SVG">
      <Group19091 />
    </div>
  );
}

function LinkGovIl() {
  return (
    <div className="h-[53.65px] relative shrink-0 w-[152px]" data-name="Link - לדף הבית של Gov.il">
      <Svg7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex gap-3 md:gap-4 items-center shrink-0 order-1 md:order-3">
      <ButtonDialog />
      <LinkGovIl />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-24 items-center justify-between w-full">
      <Frame2 />
      <div className="hidden lg:block">
        <NavList />
      </div>
      <Frame1 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="absolute inset-[29.17%_39.58%_29.17%_35.42%]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
        <g id="chevron-left">
          <path d={svgPaths.p302bb300} fill="var(--fill-0, #0B3668)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute left-0 size-[20px] top-[0.5px]" data-name="SVG">
      <ChevronLeft />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-white h-[21px] left-[901.98px] top-[-871.33px] w-[116.04px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#005fcc] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Rubik:Bold',_sans-serif] font-bold h-[18.66px] justify-center leading-[0] left-[calc(50%+10.185px)] text-[#0b3668] text-[14px] text-center top-[9.33px] translate-x-[-50%] translate-y-[-50%] w-[96.409px]">
        <p className="leading-[21px]" dir="auto">
          דלג לתוכן האתר
        </p>
      </div>
      <Svg8 />
    </div>
  );
}

export default function Background() {
  return (
    <div className="relative w-full" data-name="Background">
      <div className="w-full">
        <div className="box-border flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between px-4 md:px-6 lg:px-8 py-2 md:py-0 w-full min-h-[64px]">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}