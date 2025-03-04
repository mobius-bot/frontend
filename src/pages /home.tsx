import BotCard from "@/_components/bot-Card";
import Header from "@/_components/Header";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChartSpline,
  HelpCircle,
  TrendingUp,
  Zap,
} from "lucide-react";

function Home() {
  return (
    <>
      <main className="min-h-screen relative overflow-hidden bg-black z-0  text-white">
        <div className="w-[250px] h-[250px] bg-radial to-[#31C1B0] from-[#2F92AE] absolute -z-10 blur-[100px] -left-20 -top-20"></div>
        <div className="w-[250px] h-[250px] bg-radial to-[#31C1B0] from-[#2F92AE] absolute -z-10 blur-[100px] left-2/5 top-full"></div>
        <div className="w-[250px] h-[250px] bg-radial to-[#8331C1] from-[#AE2FAC] absolute -z-10 blur-[130px] -right-22 top-[70vh]"></div>
        <Header />
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 flex  flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 z-10">
            <div className="backdrop-blur-sm p-6  text-center md:text-left flex  items-center md:items-start flex-col rounded-lg">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Automate Your Trading on{" "}
                <span className="bg-gradient-to-r from-[#3CDFFF] to-[#B467FF] bg-clip-text text-transparent">
                  Sonic SVM
                </span>
              </h1>
              <p className="text-gray-400 mb-6">
                Rent or buy high-performance trading bots. Connect your wallet,
                choose a strategy, and start earning.
              </p>
              <p className="text-gray-400 mb-6">
                Trade 24/7 with Sonic SVM's lightning-fast blockchain
              </p>
              <div className="flex fflex-row gap-4">
                <Button variant={"gradient"}>
                  Explore bots <ArrowRight />
                </Button>
                <span className="border-[#3CDFFF] cursor-pointer flex items-center gap-2 text-[#3CDFFF] bg-[]">
                  <HelpCircle className="w-5 h-5" />
                  Learn More
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2  flex justify-center mt-8 md:mt-0">
            <img src="/hero.png" alt="Robot mascot" className="z-0" />
          </div>
        </section>

        {/* Featured Bots Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Featured Bots
          </h2>
          <p className="text-white font-medium text-center mb-12">
            Choose from our selection of high-performance trading bots built for
            Sonic SVM
          </p>

          <div className="grid md:grid-cols-3 gap-6 p-3">
            {[
              {
                name: "Arbitrage Ace",
                sub: "Arbitrage Ace",
                icon: <TrendingUp className="text-[#21D99E]" />,
                desc: "Spot and execute price differences across sonic DEXs",
                gradientClass: "from-[#21D99E] to-[#00D9F5]",
              },
              {
                name: "Yield Farmer Pro",
                sub: "Yield Strategy",
                icon: <Zap className="text-[#D9A821]" />,
                desc: "Automatically move funds to highest yield pools",
                gradientClass: "from-[#D9A821] to-[#F56600] ",
              },
              {
                name: "Trend Surfer",
                sub: "Trend Strategy",
                icon: <ChartSpline className="text-[#9553E2] rotate-90" />,
                desc: "Automatically move funds to highest yield pools",
                gradientClass: "from-[#7A32E0] to-[#C317B2]",
              },
            ].map((bot) => (
              <BotCard key={bot.name} {...bot} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant={"gradient"}>
              View All Bots <ArrowRight />
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
