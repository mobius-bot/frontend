import { BotFilter } from "@/components/bot-filter"
import { BotGrid } from "@/components/bot-grid"

export default function Marketplace() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter">Bot Marketplace</h1>
              <p className="text-muted-foreground">Browse, rent, or buy trading bots for the Sonic SVM blockchain</p>
            </div>
            <BotFilter />
            <BotGrid />
          </div>
        </div>
      </main>
    </div>
  )
}

