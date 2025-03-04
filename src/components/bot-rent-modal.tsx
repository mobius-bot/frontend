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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Clock } from "lucide-react"

export function BotRentModal() {
  const [open, setOpen] = useState(false)
  const [duration, setDuration] = useState("1")
  const [loading, setLoading] = useState(false)

  const handleRent = async () => {
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
        <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600">
          <Clock className="mr-2 h-4 w-4" />
          Rent Bot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rent Arbitrage Ace</DialogTitle>
          <DialogDescription>Choose your rental duration and confirm payment</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="duration">Rental Duration</Label>
            <RadioGroup defaultValue={duration} onValueChange={setDuration} className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="r1" />
                <Label htmlFor="r1" className="flex justify-between w-full">
                  <span>1 Day</span>
                  <span className="font-medium">0.1 $SONIC</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="7" id="r2" />
                <Label htmlFor="r2" className="flex justify-between w-full">
                  <span>7 Days</span>
                  <span className="font-medium">0.65 $SONIC</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="30" id="r3" />
                <Label htmlFor="r3" className="flex justify-between w-full">
                  <span>30 Days</span>
                  <span className="font-medium">2.5 $SONIC</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="custom">Custom Duration (Days)</Label>
            <Input id="custom" type="number" min="1" max="365" placeholder="Enter number of days" />
          </div>
          <div className="space-y-2">
            <Label>Payment Summary</Label>
            <div className="rounded-md border p-3">
              <div className="flex justify-between text-sm">
                <span>
                  Rental Fee ({duration} day{Number.parseInt(duration) > 1 ? "s" : ""})
                </span>
                <span className="font-medium">{(0.1 * Number.parseInt(duration)).toFixed(2)} $SONIC</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Network Fee</span>
                <span className="font-medium">~0.001 $SONIC</span>
              </div>
              <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                <span>Total</span>
                <span>{(0.1 * Number.parseInt(duration) + 0.001).toFixed(3)} $SONIC</span>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleRent} disabled={loading}>
            {loading ? "Processing..." : "Confirm Rental"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

