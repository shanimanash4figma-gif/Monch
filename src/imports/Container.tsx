import svgPaths from "./svg-edzn5fl6q1";

function Group1000004529() {
  return (
    <div className="absolute bottom-[3.85%] contents left-0 right-0 top-0">
      <div className="absolute bottom-[3.85%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1e2cb780} fill="url(#paint0_linear_5_832)" id="Star 3" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_832" x1="0" x2="1882.57" y1="0" y2="1957.87">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[9.62%_4%_65.39%_70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
          <path d={svgPaths.pdb485c0} fill="url(#paint0_linear_5_830)" id="Star 4" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_830" x1="0" x2="489.468" y1="0" y2="509.047">
              <stop />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[19.594px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1000004529 />
    </div>
  );
}

function Group1000004530() {
  return (
    <div className="absolute bg-[rgba(0,0,255,0)] content-stretch flex flex-col items-start left-[14.21px] size-[19.594px] top-[14.2px]" data-name="Group1000004529">
      <Icon />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[2.23696e+07px] size-full" data-name="Container">
      <Group1000004530 />
    </div>
  );
}