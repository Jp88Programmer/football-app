"use client";
import Image from "next/image";
import { format } from "date-fns";
import type { Fixture } from "@/types/fixtures";

type TournamentInfo = {
  name: string;
  stage: string;
};

interface FixtureCardProps {
  fixture: Fixture;
  tournament: TournamentInfo;
  className?: string;
  id: number;
}

export default function FixtureCard({ fixture, id }: FixtureCardProps) {
  const { localteam, visitorteam, time, scores } = fixture;
  const isLive = time.status === "LIVE";
  const matchTime = new Date(time.starting_at.date_time);
  const formattedTime = format(matchTime, "HH:mm");

  return (
    <div
      className={`px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between ${
        id % 2 !== 0 ? "bg-card-2" : "bg-background-2"
      }`}
    >
      <div className="flex-shrink-0 w-12 sm:w-14">
        {isLive ? (
          <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium bg-green-500/20 text-green-400">
            Live
          </span>
        ) : (
          <span className="text-xs sm:text-sm text-muted-foreground">
            {formattedTime}
          </span>
        )}
      </div>

      <div className="flex-1 flex items-center justify-between ml-2 sm:ml-0">
        <div className="flex-1 flex items-center justify-end space-x-1 sm:space-x-2">
          <span className="text-xs sm:text-sm font-medium text-black dark:text-white text-right line-clamp-1">
            {localteam.name}
          </span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-card-1 flex-shrink-0 flex items-center justify-center">
            <Image
              src={localteam.logo_path}
              alt={localteam.name}
              width={22}
              height={22}
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
          </div>
        </div>

        <div className="w-12 text-center">
          {scores?.localteam_score !== undefined &&
          scores?.visitorteam_score !== undefined ? (
            <span className="font-medium text-black dark:text-white">
              {scores.localteam_score}-{scores.visitorteam_score}
            </span>
          ) : (
            <span className="text-muted-foreground">-</span>
          )}
        </div>

        <div className="flex-1 flex items-center space-x-2">
          <div className="rounded-full flex items-center justify-center">
            <Image
              src={visitorteam.logo_path}
              alt={visitorteam.name}
              width={26}
              height={26}
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-black dark:text-white">
            {visitorteam.name}
          </span>
        </div>
      </div>
    </div>
  );
}
