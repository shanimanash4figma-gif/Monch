import imgD79CD799D793D794201Png from "figma:asset/93a72912797406b70b93b48670188dea93380437.png";
import imgD7AaD7A7D795D7A4D7Aa20D794D794D799D7A8D799D795D79F201Png from "figma:asset/62d9c9bf6bec9ddb3787defaae87fdd1a4673067.png";
import imgD794D79BD7A0D79420D79CD794D7A8D799D795D79F201Png from "figma:asset/11edde1adc55dc133e65884a496679c86615919c.png";

function D79CD799D793D794201Png() {
  return (
    <div className="absolute right-[69.99px] size-[60px] top-[24px]" data-name="%D7%9C%D7%99%D7%93%D7%94%20(1).png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgD79CD799D793D794201Png} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[19.99px] left-1/2 overflow-clip top-[100px] translate-x-[-50%] w-[91.44px]" data-name="Container">
      <div className="absolute flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[18.75px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[#0c3058] text-[16px] text-center top-[9.38px] translate-x-[-50%] translate-y-[-50%] w-[75.776px]">
        <p className="leading-[20px]" dir="auto">
          לידה והורות
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[148.49px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[199.99px]" data-name="Link">
      <D79CD799D793D794201Png />
      <Container />
    </div>
  );
}

function D7AaD7A7D795D7A4D7Aa20D794D794D799D7A8D799D795D79F201Png() {
  return (
    <div className="absolute right-[69.99px] size-[60px] top-[24px]" data-name="%D7%AA%D7%A7%D7%95%D7%A4%D7%AA%20%D7%94%D7%94%D7%99%D7%A8%D7%99%D7%95%D7%9F%20(1).png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgD7AaD7A7D795D7A4D7Aa20D794D794D799D7A8D799D795D79F201Png} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[19.99px] left-[calc(50%+0.01px)] overflow-clip top-[100px] translate-x-[-50%] w-[107.89px]" data-name="Container">
      <div className="absolute flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[18.75px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[#0c3058] text-[16px] text-center top-[9.38px] translate-x-[-50%] translate-y-[-50%] w-[92.252px]">
        <p className="leading-[20px]" dir="auto">
          תקופת ההיריון
        </p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[148.49px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[199.99px]" data-name="Link">
      <D7AaD7A7D795D7A4D7Aa20D794D794D799D7A8D799D795D79F201Png />
      <Container1 />
    </div>
  );
}

function D794D79BD7A0D79420D79CD794D7A8D799D795D79F201Png() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="%D7%94%D7%9B%D7%A0%D7%94%20%D7%9C%D7%94%D7%A8%D7%99%D7%95%D7%9F%20(1).png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgD794D79BD7A0D79420D79CD794D7A8D799D795D79F201Png} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[19.99px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex flex-col font-['Rubik:Bold',sans-serif] font-bold h-[18.75px] justify-center leading-[0] left-[calc(50%+0.38px)] text-[#0068f5] text-[16px] text-center top-[9.38px] translate-x-[-50%] translate-y-[-50%] w-[80.764px]">
        <p className="leading-[20px]" dir="auto">
          לפני ההיריון
        </p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#e8f0fc] box-border content-stretch flex flex-col gap-[16px] items-center px-[52px] py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[199.99px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#0068f5] border-[0px_0px_4.5px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <D794D79BD7A0D79420D79CD794D7A8D799D795D79F201Png />
      <Container2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <Link key={i} />
      ))}
      <Frame />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[148.49px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="content-stretch flex flex-col gap-[10px] h-[148.49px] items-end overflow-auto relative w-full">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8f0fc] border-[0px_0px_3.75px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white h-[79.98px] relative rounded-[8px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="absolute flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[18.75px] justify-center leading-[0] right-[24.03px] text-[#0c3058] text-[16px] text-right top-[35.63px] translate-y-[-50%] w-[802.506px]">
        <p className="leading-[24px]" dir="auto">
          ההכנות המומלצות לפני כניסה להיריון והדרכים להתמודד עם קשיים להרות – מידע הכרחי לשלב הראשון בדרך להקמת משפחה
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Rubik:Bold',sans-serif] font-bold h-[28.5px] justify-center leading-[0] relative shrink-0 text-[#0c3058] text-[24px] text-right w-full">
        <p className="leading-[28.8px]" dir="auto">
          לפני ההיריון
        </p>
      </div>
      <BackgroundShadow />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-start left-0 top-0 w-[1200.39px]">
      <HorizontalBorder />
      <Frame2 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="relative size-full">
      <Frame3 />
    </div>
  );
}