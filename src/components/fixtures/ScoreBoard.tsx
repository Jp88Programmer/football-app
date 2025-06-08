"use client";
import React, { useState } from "react";
import DateSelector from "./DateSelector";
import FixturesList from "./FixtureList";
import { format } from "date-fns";

const ScoreBoard = () => {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  return (
    <div className="bg-background-1 rounded-lg p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 md:gap-6 h-full overflow-hidden">
      <div className="sticky top-0 z-10 bg-background-1 pb-2 sm:pb-3">
        <DateSelector
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className="flex-1 overflow-y-auto -mx-2 sm:mx-0 px-2 sm:px-0">
        <FixturesList date={selectedDate} />
      </div>
    </div>
  );
};

export default ScoreBoard;
