"use client";
import Image from "next/image";
import { format } from "date-fns";
import type { Fixture } from "@/types/fixtures";

interface FixtureCardProps {
  fixture: Fixture;
}

export default function FixtureCard({ fixture }: FixtureCardProps) {
  const { localteam, visitorteam, time, scores } = fixture;
  const isLive = time.status === "LIVE";
  const matchTime = new Date(time.starting_at.date_time);

  return (
    <div className="bg-secondary rounded-lg p-4 hover:bg-dark transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-white/70">
          {isLive ? (
            <span className="text-primary">LIVE</span>
          ) : (
            format(matchTime, "HH:mm")
          )}
        </span>
        <span className="text-sm text-white/70">{fixture.league_id}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 relative">
            <Image
              src={localteam.logo_path}
              alt={localteam.name}
              fill
              className="object-contain"
            />
          </div>
          <span className="font-medium">{localteam.name}</span>
        </div>
        <span className="font-bold text-lg">
          {scores?.localteam_score ?? "-"}
        </span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 relative">
            <Image
              src={visitorteam.logo_path}
              alt={visitorteam.name}
              fill
              className="object-contain"
            />
          </div>
          <span className="font-medium">{visitorteam.name}</span>
        </div>
        <span className="font-bold text-lg">
          {scores?.visitorteam_score ?? "-"}
        </span>
      </div>
    </div>
  );
}
