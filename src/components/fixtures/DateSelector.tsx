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
import useViewport from "@/hooks/useViewport";

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

  const { isMobile } = useViewport();

  const handlePrevDate = () =>
    setSelectedDate(format(subDays(selected, 1), "yyyy-MM-dd"));
  const handleNextDate = () =>
    setSelectedDate(format(addDays(selected, 1), "yyyy-MM-dd"));

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-between rounded-lg">
        <button
          onClick={handlePrevDate}
          className="p-1 sm:p-2 hover:bg-dark rounded-lg flex-shrink-0"
          aria-label="Previous day"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white" />
        </button>

        <div className="mx-1 sm:mx-2">
          <div className="flex space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 w-full justify-center  max-w-[650px] overflow-x-auto">
            {dates.map((date) => (
              <button
                key={date.toISOString()}
                onClick={() => setSelectedDate(format(date, "yyyy-MM-dd"))}
                className={`px-2 sm:px-3 md:px-4 lg:px-7 py-1 rounded-lg flex-shrink-0 transition-colors ${
                  format(date, "yyyy-MM-dd") === selectedDate
                    ? "border border-primary text-primary"
                    : "bg-card-1 hover:bg-dark"
                }`}
              >
                <div className="text-[10px] sm:text-xs">
                  {format(date, "EEE")}
                </div>
                <div className="text-xs sm:text-sm font-medium sm:font-bold">
                  {format(date, "dd/MM")}
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNextDate}
          className="p-1 sm:p-2 hover:bg-dark rounded-lg flex-shrink-0"
          aria-label="Next day"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white" />
        </button>
      </div>
      <div className="">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            {!isMobile ? (
              <Button
                className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-card-1 hover:bg-background-1 border border-primary"
                variant="outline"
                onClick={() => setOpen(!open)}
              >
                <CalendarIcon className="w-6 h-6" color="#c3cc54" />
                <span className="text-[12px]">
                  {format(selected, "dd/MM/yyyy")
                    ? format(selected, "dd/MM/yyyy")
                    : "View Calendar"}
                </span>
              </Button>
            ) : (
              <div
                className="flex items-center justify-end "
                onClick={() => setOpen(!open)}
              >
                <CalendarIcon className="w-6 h-6 mr-2 text-primary" />
              </div>
            )}
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
