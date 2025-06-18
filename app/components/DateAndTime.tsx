"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function Calendar26() {
  const [openFrom, setOpenFrom] = React.useState(false)
  const [openTo, setOpenTo] = React.useState(false)
  const [dateFrom, setDateFrom] = React.useState<Date | undefined>(new Date("2025-06-01"))
  const [dateTo, setDateTo] = React.useState<Date | undefined>(new Date("2025-06-03"))

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Check-in */}
      <div className="flex-1">
        <Label htmlFor="date-from" className="text-white font-semibold mb-1 block">
          Check-in
        </Label>
        <div className="flex gap-2">
          <Popover open={openFrom} onOpenChange={setOpenFrom}>
            <PopoverTrigger asChild>
              <Button variant="outline" id="date-from" className="flex-1 justify-between font-normal min-w-[150px]">
                {dateFrom
                  ? dateFrom.toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Select date"}
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dateFrom}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDateFrom(date)
                  setOpenFrom(false)
                }}
              />
            </PopoverContent>
          </Popover>
          <Input
            type="time"
            id="time-from"
            step="1"
            defaultValue="10:30:00"
            className="w-[110px] bg-white text-black border border-gray-300"
          />
        </div>
      </div>

      {/* Check-out */}
      <div className="flex-1">
        <Label htmlFor="date-to" className="text-white font-semibold mb-1 block">
          Check-out
        </Label>
        <div className="flex gap-2">
          <Popover open={openTo} onOpenChange={setOpenTo}>
            <PopoverTrigger asChild>
              <Button variant="outline" id="date-to" className="flex-1 justify-between font-normal min-w-[150px]">
                {dateTo
                  ? dateTo.toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Select date"}
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dateTo}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDateTo(date)
                  setOpenTo(false)
                }}
                disabled={dateFrom && { before: dateFrom }}
              />
            </PopoverContent>
          </Popover>
          <Input
            type="time"
            id="time-to"
            step="1"
            defaultValue="12:30:00"
            className="w-[110px] bg-white text-black border border-gray-300"
          />
        </div>
      </div>
    </div>
  )
}
