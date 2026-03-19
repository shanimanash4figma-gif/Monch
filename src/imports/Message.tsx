import svgPaths from "./svg-e05apn42ak";

function OutlineMessageCircle() {
  return (
    <div className="absolute inset-[8.34%_8.33%]" data-name="outline/message-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0009 19.9992">
        <g id="outline/message-circle">
          <path d={svgPaths.p36ddfa00} fill="var(--fill-0, #0C3058)" id="ð¨-Icon-Ð¡olor" />
        </g>
      </svg>
    </div>
  );
}

export default function Message() {
  return (
    <div className="relative size-full" data-name="Message">
      <OutlineMessageCircle />
    </div>
  );
}