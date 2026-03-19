import svgPaths from "./svg-wkk9euaaor";

function OutlinePencil() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.978px] left-1/2 top-[calc(50%-0.01px)] w-[15.998px]" data-name="outline/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9984 15.9777">
        <g id="outline/pencil">
          <path d={svgPaths.pd42db80} fill="var(--fill-0, #0C3058)" id="ð¨-Icon-Ð¡olor" />
        </g>
      </svg>
    </div>
  );
}

export default function Pencil() {
  return (
    <div className="relative size-full" data-name="pencil">
      <OutlinePencil />
    </div>
  );
}