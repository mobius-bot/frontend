"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal } from "lucide-react"

export function BotFilter() {
  const [showFilters, setShowFilters] = useState(false)
  const [minRoi, setMinRoi] = useState(0)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search bots..." className="w-full pl-8" />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowFilters(!showFilters)}
          className="h-10 w-10 shrink-0 sm:w-10"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle filters</span>
        </Button>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="roi-high">Highest ROI</SelectItem>
            <SelectItem value="roi-low">Lowest ROI</SelectItem>
            <SelectItem value="price-high">Highest Price</SelectItem>
            <SelectItem value="price-low">Lowest Price</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {showFilters && (
        <div className="grid gap-4 rounded-lg border p-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="strategy">Strategy</Label>
            <Select>
              <SelectTrigger id="strategy">
                <SelectValue placeholder="All strategies" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All strategies</SelectItem>
                <SelectItem value="arbitrage">Arbitrage</SelectItem>
                <SelectItem value="yield">Yield Farming</SelectItem>
                <SelectItem value="trend">Trend Following</SelectItem>
                <SelectItem value="liquidity">Liquidity Provision</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="price-range">Price Range</Label>
            <Select>
              <SelectTrigger id="price-range">
                <SelectValue placeholder="Any price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any price</SelectItem>
                <SelectItem value="0-1">0-1 $SONIC</SelectItem>
                <SelectItem value="1-5">1-5 $SONIC</SelectItem>
                <SelectItem value="5-10">5-10 $SONIC</SelectItem>
                <SelectItem value="10+">10+ $SONIC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Minimum ROI: {minRoi}%</Label>
            <Slider defaultValue={[0]} max={20} step={0.5} onValueChange={(value) => setMinRoi(value[0])} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="availability">Availability</Label>
            <Select>
              <SelectTrigger id="availability">
                <SelectValue placeholder="All bots" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All bots</SelectItem>
                <SelectItem value="rent">Available for rent</SelectItem>
                <SelectItem value="buy">Available for purchase</SelectItem>
                <SelectItem value="both">Rent and buy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  )
}

