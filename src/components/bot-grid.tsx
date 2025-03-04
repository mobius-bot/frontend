import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, BarChart3, RefreshCw, LineChart, Shuffle, ArrowRightLeft, PieChart } from "lucide-react"

export function BotGrid() {
  const bots = [
    {
      id: 1,
      name: "Arbitrage Ace",
      description: "Spot and execute price differences across Sonic DEXs",
      roi: "7%",
      strategy: "Arbitrage",
      rentPrice: "0.1 $SONIC/day",
      buyPrice: "5 $SONIC",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Yield Farmer Pro",
      description: "Automatically move funds to highest yield pools",
      roi: "5.5%",
      strategy: "Yield",
      rentPrice: "0.15 $SONIC/day",
      buyPrice: "7 $SONIC",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      name: "Trend Surfer",
      description: "Follow market momentum with smart entry/exit",
      roi: "9%",
      strategy: "Trend",
      rentPrice: "0.2 $SONIC/day",
      buyPrice: "10 $SONIC",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      name: "Liquidity Provider",
      description: "Optimize LP positions across multiple pools",
      roi: "4%",
      strategy: "Liquidity",
      rentPrice: "0.08 $SONIC/day",
      buyPrice: "4 $SONIC",
      icon: RefreshCw,
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 5,
      name: "Flash Trader",
      description: "Execute high-speed trades during market volatility",
      roi: "11%",
      strategy: "Flash",
      rentPrice: "0.25 $SONIC/day",
      buyPrice: "12 $SONIC",
      icon: LineChart,
      color: "from-red-500 to-rose-500",
    },
    {
      id: 6,
      name: "Multi-DEX Swapper",
      description: "Find the best swap rates across all Sonic DEXs",
      roi: "6%",
      strategy: "Swap",
      rentPrice: "0.12 $SONIC/day",
      buyPrice: "6 $SONIC",
      icon: Shuffle,
      color: "from-indigo-500 to-violet-500",
    },
    {
      id: 7,
      name: "Pair Trader",
      description: "Trade correlated token pairs for consistent returns",
      roi: "5%",
      strategy: "Pairs",
      rentPrice: "0.1 $SONIC/day",
      buyPrice: "5 $SONIC",
      icon: ArrowRightLeft,
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: 8,
      name: "Portfolio Balancer",
      description: "Maintain optimal asset allocation across your portfolio",
      roi: "3.5%",
      strategy: "Balance",
      rentPrice: "0.07 $SONIC/day",
      buyPrice: "3.5 $SONIC",
      icon: PieChart,
      color: "from-teal-500 to-emerald-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {bots.map((bot) => (
        <Card key={bot.id} className="overflow-hidden">
          <CardHeader className={`bg-gradient-to-r ${bot.color} text-white`}>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{bot.name}</CardTitle>
              <bot.icon className="h-5 w-5" />
            </div>
            <CardDescription className="text-white/80">{bot.strategy} Strategy</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium">ROI (Monthly)</span>
                <Badge variant="outline" className="font-bold">
                  {bot.roi}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{bot.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Rent:</span>
                  <span className="font-medium">{bot.rentPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Buy:</span>
                  <span className="font-medium">{bot.buyPrice}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 p-6 pt-0">
            <a href={`/marketplace/bot/${bot.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                Details
              </Button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

