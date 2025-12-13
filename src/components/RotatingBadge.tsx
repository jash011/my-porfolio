import { ChevronDown } from "lucide-react";

interface RotatingBadgeProps {
  text: string;
}

const RotatingBadge = ({ text }: RotatingBadgeProps) => {
  const characters = text.split("");
  const angleStep = 360 / characters.length;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center cursor-pointer group">
      {/* Rotating text */}
      <div className="absolute inset-0 animate-spin-slow">
        {characters.map((char, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-0 origin-[0_48px] text-[11px] font-medium tracking-wider text-foreground"
            style={{
              transform: `rotate(${index * angleStep}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
      
      {/* Center arrow */}
      <div className="z-10 animate-bounce-subtle">
        <ChevronDown className="w-5 h-5 text-foreground" />
      </div>
    </div>
  );
};

export default RotatingBadge;
