interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: "left" | "right";
}

export default function Marquee({ text, speed = 20, direction = "left" }: MarqueeProps) {
  const directionClass = direction === "right" ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className="overflow-hidden border-y border-outline/20 py-4 md:py-6">
      <div className={directionClass} style={{ animationDuration: `${speed}s` }}>
        <div className="flex whitespace-nowrap">
          <span className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-on-surface/10 px-4">
            {text}
          </span>
          <span className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-on-surface/10 px-4">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
