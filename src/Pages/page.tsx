import { BotShowcase } from "@/components/bot-showcase"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
            <span className="text-xl font-bold">MobiusBot</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium">
              Home
            </a>
            <a href="/marketplace" className="text-sm font-medium">
              Marketplace
            </a>
            <a href="/how-it-works" className="text-sm font-medium">
              How It Works
            </a>
            <a href="/faq" className="text-sm font-medium">
              FAQ
            </a>
          </nav>
          {/* <ConnectWalletButton /> */}
        </div>
      </header>
      <main className="flex-1">
        {/* <HeroSection /> */}
        <BotShowcase />
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MobiusBot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/terms" className="text-xs text-muted-foreground underline underline-offset-4">
              Terms
            </a>
            <a href="/privacy" className="text-xs text-muted-foreground underline underline-offset-4">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

