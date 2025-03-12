"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ShoppingCart } from "lucide-react"

export function BotBuyModal() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleBuy = async () => {
    setLoading(true)
    // Simulate transaction
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full text-green-400 bg-transparent cursor-pointer border-green-400 hover:bg-green-300/10">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Buy Bot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Buy Arbitrage Ace</DialogTitle>
          <DialogDescription>Purchase this bot for permanent access</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Purchase Details</Label>
            <div className="rounded-md border p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Arbitrage Ace</h4>
                  <p className="text-sm text-muted-foreground">Permanent Access</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">5 $SONIC</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Bot Price</span>
                  <span>5 $SONIC</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Fee</span>
                  <span>~0.001 $SONIC</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t">
                  <span>Total</span>
                  <span>5.001 $SONIC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label>What You Get</Label>
            <ul className="space-y-2 text-sm">
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
                <span>Permanent access to the bot</span>
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
                <span>All future updates and improvements</span>
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
                <span>Ability to resell the bot in the future</span>
              </li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleBuy} disabled={loading}>
            {loading ? "Processing..." : "Confirm Purchase"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

