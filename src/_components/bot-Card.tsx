import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BotCardProps {
  name: string;
  sub: string;
  icon: React.ReactNode;
  desc: string;
  gradientClass: string;
}

const BotCard: React.FC<BotCardProps> = ({
  name,
  sub,
  icon,
  desc,
  gradientClass,
}) => {
  return (
    <div className="border border-[#3CDFFF]/30 bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden">
      <div
        className={cn(
          "p-4 border-b bg-gradient-to-r bg-clip-text text-transparent border-[#3CDFFF]/30 flex justify-between items-center",
          gradientClass
        )}
      >
        <div className="flex  flex-col gap-2">
          <h3 className="font-bold text-xl ">{name}</h3>
          <span>{sub}</span>
        </div>
        <span>{icon}</span>
      </div>
      <div className="p-4 flex items-center flex-col gap-10 bg-[#171717]">
        <div className="flex w-full justify-between mb-2">
          <span className="font-semibold">ROI (Monthly)</span>
          <span className="text-green-500 bg-[#0AC50036] px-3 rounded-full">
            +8%
          </span>
        </div>
        <p className="text-sm w-2/3 self-start font-medium mb-6">{desc}</p>
        <div className="flex w-full flex-col gap-4 mb-4">
          <div className="flex font-medium justify-between">
            <span>Rent:</span>
            <span>0.1 $ SONIC/day</span>
          </div>
          <div className="flex font-medium justify-between">
            <span>Buy:</span>
            <span>5 $ SONIC/day</span>
          </div>
        </div>
        <Button
          variant="gradientoutline"
          className="w-2/3 overflow-hidden p-[0.5px]"
        >
          <span className="bg-[#171717] flex justify-center items-center w-full h-full">
            <span className="bg-gradient-to-r from-[#21D99E]  to-[#A355DE] bg-clip-text text-transparent">
              View More
            </span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default BotCard;
