export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
      <div className="flex flex-col font-['Rubik:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#0c3058] text-[24px] text-right w-full">
        <p className="leading-[28px]" dir="auto">
          אודות המשרד
        </p>
      </div>
      <div className="bg-[#0068f5] h-[4px] shrink-0 w-[42px]" data-name="Background" />
    </div>
  );
}