import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BotRentModal } from "@/components/bot-rent-modal"
import { BotBuyModal } from "@/components/bot-buy-modal"
import { TrendingUp, Calendar, User, Star, BarChart2, Activity, Info } from "lucide-react"

export default function BotDetail({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the bot data based on the ID
  const bot = {
    id: params.id,
    name: "Arbitrage Ace",
    description: "Spot and execute price differences across Sonic DEXs for consistent profits",
    longDescription:
      "Arbitrage Ace is an advanced trading bot that monitors multiple DEXs on the Sonic SVM blockchain to identify price discrepancies. When it finds a profitable opportunity, it executes trades to capitalize on the difference, generating returns with minimal risk. The bot uses sophisticated algorithms to factor in gas fees and slippage to ensure each trade is profitable.",
    roi: "7%",
    strategy: "Arbitrage",
    rentPrice: "0.1 $SONIC/day",
    buyPrice: "5 $SONIC",
    developer: "SonicDev Labs",
    created: "2023-11-15",
    users: 127,
    rating: 4.8,
    icon: TrendingUp,
    performance: [
      { date: "Jan", value: 5.2 },
      { date: "Feb", value: 6.1 },
      { date: "Mar", value: 7.3 },
      { date: "Apr", value: 6.9 },
      { date: "May", value: 7.8 },
      { date: "Jun", value: 8.2 },
    ],
  }

  return (
    <div className="container py-10">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{bot.name}</h1>
              <p className="text-muted-foreground">{bot.strategy} Strategy</p>
            </div>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">About this Bot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{bot.longDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span>Real-time monitoring of multiple DEXs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span>Automatic execution of profitable trades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span>Gas fee and slippage optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span>Customizable trade size and risk parameters</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Bot Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Developer: {bot.developer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Created: {bot.created}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Active Users: {bot.users}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Rating: {bot.rating}/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="performance" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Historical Performance</CardTitle>
                  <CardDescription>Monthly ROI over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="h-full w-full flex items-center justify-center">
                    <BarChart2 className="h-40 w-40 text-muted-foreground" />
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Performance chart would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Bot Settings</CardTitle>
                  <CardDescription>Configure bot parameters after purchase</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-40">
                    <div className="text-center space-y-2">
                      <Info className="h-10 w-10 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">
                        Settings will be available after renting or purchasing this bot
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monthly ROI:</span>
                  <Badge variant="outline" className="font-bold">
                    {bot.roi}
                  </Badge>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-medium">Rent:</span>
                  <span>{bot.rentPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Buy:</span>
                  <span>{bot.buyPrice}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <BotRentModal />
              <BotBuyModal />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li className="flex gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Connect your wallet</p>
                    <p className="text-sm text-muted-foreground">Link your Solana-compatible wallet</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Rent or buy the bot</p>
                    <p className="text-sm text-muted-foreground">Pay with $SONIC or stablecoins</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Configure settings</p>
                    <p className="text-sm text-muted-foreground">Set your risk level and trade size</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    4
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Start trading</p>
                    <p className="text-sm text-muted-foreground">Bot begins executing trades automatically</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

