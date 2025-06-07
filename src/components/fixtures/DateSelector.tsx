"use client";

import { format, addDays, subDays, parseISO } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DateSelector({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}) {
  const selected = parseISO(selectedDate);
  const dates = [-2, -1, 0, 1, 2].map((offset) => addDays(selected, offset));

  const handlePrevDate = () =>
    setSelectedDate(format(subDays(selected, 1), "yyyy-MM-dd"));
  const handleNextDate = () =>
    setSelectedDate(format(addDays(selected, 1), "yyyy-MM-dd"));

  return (
    <div className="flex items-center justify-between rounded-lg p-4 mb-6">
      <button onClick={handlePrevDate} className="p-2 hover:bg-dark rounded-lg">
        <ChevronLeft size={20} />
      </button>

      <div className="flex space-x-4">
        {dates.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => setSelectedDate(format(date, "yyyy-MM-dd"))}
            className={`px-6 py-2 rounded-lg ${
              format(date, "yyyy-MM-dd") === selectedDate
                ? "border border-primary text-primary"
                : "bg-card-1 hover:bg-dark"
            }`}
          >
            <div className="text-sm">{format(date, "EEE")}</div>
            <div className="font-bold">{format(date, "dd/MM")}</div>
          </button>
        ))}
      </div>

      <button onClick={handleNextDate} className="p-2 hover:bg-dark rounded-lg">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
