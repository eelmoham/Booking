"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/ui/ui/button"
import { Calendar } from "@/ui/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/ui/popover"

export default function DatePicker({seter, defaultDate, withFrom = null, disabled = false}) {
  
  const [openCalandar, setOpenCalandar] = React.useState(false)

  return (
    <Popover onOpenChange={setOpenCalandar} open={openCalandar}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal",
            !defaultDate && "text-muted-foreground"
          )}
          
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {defaultDate ? format(new Date(defaultDate), "yyyy-MM-dd") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-auto p-0 text-black")}>
        <Calendar
          disabled={(date) =>
            {
              if (withFrom == null){
                let newDate = new Date()
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
                return date < new Date(newDate)
              }
              else
              {
                let newDate = new Date(withFrom)
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
                return date <= new Date(newDate)
              }
            }
          }
          mode="single"
          selected={new Date(defaultDate)}
          onSelect={(date) => {
            date != undefined && seter(date)
            setOpenCalandar(false)
          }}
          initialFocus
          
        />
      </PopoverContent>
    </Popover>
  )
}
