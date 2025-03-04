import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, BarChart3, RefreshCw, ArrowRight } from "lucide-react"

export function BotShowcase() {
  const featuredBots = [
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
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Bots</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose from our selection of high-performance trading bots built for Sonic SVM
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-12">
          {featuredBots.map((bot) => (
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
        <div className="flex justify-center mt-12">
          <a href="/marketplace">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
              View All Bots
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

