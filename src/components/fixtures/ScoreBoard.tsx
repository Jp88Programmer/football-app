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
    <div className="bg-background-1 rounded-lg p-4 flex flex-col gap-6 h-full">
      <DateSelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <FixturesList date={selectedDate} />
    </div>
  );
};

export default ScoreBoard;
