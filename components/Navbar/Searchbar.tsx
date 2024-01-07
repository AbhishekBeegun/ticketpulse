/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useState } from 'react'

import { addDays, format } from "date-fns"
import  DateRange  from "react-day-picker"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const SearchBarHome = () => {

  const [date, setDate] = useState({
    from: new Date(2024, 0, 7),
    to: addDays(new Date(2024, 0 , 20), 11),
  })

  return (
    <div className='pt-4 rounded-lg flex items-center justify-center '>
        
        <div className='flex items-center px-8 rounded-lg'>
            <div className={cn("grid gap-2")}>
            <Popover>
                <PopoverTrigger asChild>
                <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                    "w-[300px] rounded-lg justify-center text-left mr-6",
                    !date && "text-muted-foreground focus:outline-none"
                    )}
                >
                    <div className="mr-2 h-4 w-4" />
                    <img className='mr-4' src='https://api.iconify.design/uil:calender.svg' />
                    {date?.from ? (
                    date.to ? (
                        <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                        </>
                    ) : (
                        format(date.from, "LLL dd, y")
                    )
                    ) : (
                    <span>Pick a date</span>
                    )}
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                />
                </PopoverContent>
            </Popover>
            </div>

            <button
            onClick={() => console.log(date)}
            className='bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg'>
            Search
            </button>

        </div>
    </div>
  )
}

export default SearchBarHome