function Frame1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c3058] text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        <p className="mb-0" dir="auto">
          igds.light.base.color.background.
        </p>
        <p className="font-['Rubik:Bold',sans-serif] font-bold" dir="auto">
          neutral-secondlevel
        </p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f1f5fb] relative rounded-[4px] size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[42px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}