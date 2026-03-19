import imgNewBirthPng from "figma:asset/1e3c92cf6ff90a0266bc271572d7f39a74b82a1d.png";

function NewBirthPng() {
  return (
    <div className="h-[391.44px] relative shrink-0 w-[576px]" data-name="new-birth.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNewBirthPng} />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[146.34px] leading-[0] relative shrink-0 text-[#0c3058] w-[600px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Rubik:Bold',sans-serif] font-bold h-[49.5px] justify-center left-[calc(50%+150.46px)] text-[42px] text-center top-[24.75px] translate-x-[-50%] translate-y-[-50%] w-[203.788px]">
        <p className="leading-[50.4px]" dir="auto">
          היריון ולידה
        </p>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[18.75px] justify-center right-[47.65px] text-[16px] text-right top-[70.01px] translate-y-[-50%] w-[190.628px]">
        <p className="leading-[24px]" dir="auto">
          איך להתכונן לתקופת ההיריון?
        </p>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[18.75px] justify-center right-[241.89px] text-[16px] text-right top-[70.01px] translate-y-[-50%] w-[291.203px]">
        <p className="leading-[24px]" dir="auto">
          מה חשוב לעשות מיד לאחר הלידה ואילו זכויות
        </p>
      </div>
      <div className="absolute flex flex-col font-['Rubik:Regular',sans-serif] font-normal h-[42.74px] justify-center leading-[24px] right-[47.8px] text-[16px] text-right top-[105.99px] translate-y-[-50%] w-[486.81px]">
        <p className="mb-0" dir="auto">
          מגיעות להורים הטריים? כאן אפשר למצוא מידע מועיל על השירותים וההטבות
        </p>
        <p dir="auto">להורים המיועדים בתקופת ההיריון ולאחר הלידה</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full">
      <NewBirthPng />
      <Paragraph />
    </div>
  );
}