"use client";

import { format, addDays, subDays, parseISO } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function DateSelector({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}) {
  const selected = parseISO(selectedDate);
  const dates = [-2, -1, 0, 1, 2].map((offset) => addDays(selected, offset));

  const [open, setOpen] = useState(false);

  const handlePrevDate = () =>
    setSelectedDate(format(subDays(selected, 1), "yyyy-MM-dd"));
  const handleNextDate = () =>
    setSelectedDate(format(addDays(selected, 1), "yyyy-MM-dd"));

  return (
    <div className="flex items-center w-full">
      <div className="flex items-center justify-between rounded-lg p-1">
        <button
          onClick={handlePrevDate}
          className="p-2 hover:bg-dark rounded-lg"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex space-x-4">
          {dates.map((date) => (
            <button
              key={date.toISOString()}
              onClick={() => setSelectedDate(format(date, "yyyy-MM-dd"))}
              className={`px-7 py-1 rounded-lg ${
                format(date, "yyyy-MM-dd") === selectedDate
                  ? "border border-primary text-primary"
                  : "bg-card-1 hover:bg-dark"
              }`}
            >
              <div className="text-[12px]">{format(date, "EEE")}</div>
              <div className="text-sm font-bold">{format(date, "dd/MM")}</div>
            </button>
          ))}
        </div>

        <button
          onClick={handleNextDate}
          className="p-2 hover:bg-dark rounded-lg"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              className="flex items-center gap-2 p-3 rounded-lg bg-card-1 hover:bg-background-1 border border-primary"
              variant="outline"
              onClick={() => setOpen(!open)}
            >
              <CalendarIcon className="w-8 h-8" color="#c3cc54" />
              <span className="text-sm">
                {format(selected, "dd/MM/yyyy")
                  ? format(selected, "dd/MM/yyyy")
                  : "View Calendar"}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              required={true}
              selected={selected}
              captionLayout="dropdown"
              onSelect={(date: Date) => {
                setSelectedDate(format(date, "yyyy-MM-dd"));
                setOpen(false);
              }}
              className="bg-card-1"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
