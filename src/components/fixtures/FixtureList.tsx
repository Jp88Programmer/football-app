"use client";

import { useQuery } from "@tanstack/react-query";
import FixtureCard from "./FixtureCard";
import type { Fixture } from "@/types/fixtures";
import { dummyFixtures } from "@/data/dummyFixtures";
import { Globe } from "lucide-react";

const TOURNAMENTS: Record<number, { name: string; stage: string }> = {
  501: { name: "Scottish Premiership", stage: "Matchday 1" },
  502: { name: "FIFA Women's World Cup", stage: "Quarter Finals" },
};

async function fetchFixtures(date: string) {
  const response = await fetch(`/api/fixtures?date=${date}`);
  if (!response.ok) {
    throw new Error("Failed to fetch fixtures");
  }
  return response.json();
}

const groupFixturesByTournament = (fixtures: Fixture[]) => {
  const groupTournament = fixtures.reduce<Record<number, Fixture[]>>(
    (acc, fixture) => {
      if (!acc[fixture.league_id]) {
        acc[fixture.league_id] = [];
      }
      acc[fixture.league_id].push(fixture);
      return acc;
    },
    {}
  );

  return groupTournament;
};

export default function FixturesList({ date }: { date: string }) {
  // const { data, isLoading, error } = useQuery<{ data: Fixture[] }>({
  //   queryKey: ["fixtures", date],
  //   queryFn: () => fetchFixtures(date),
  // });

  // For now, use dummy data
  const data = {
    data: dummyFixtures.filter((fixture) =>
      new Date(fixture.starting_at).toISOString().startsWith(date)
    ),
  };
  const isLoading = false;
  const error = null;

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-background-2 animate-pulse h-32 rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Failed to load fixtures. Please try again later.
      </div>
    );
  }

  if (!data?.data?.length) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No fixtures found for this date.
      </div>
    );
  }

  const fixturesByTournament = groupFixturesByTournament(data?.data);

  return (
    <div className="space-y-6">
      {Object.entries(fixturesByTournament).map(([leagueId, fixtures]) => {
        const tournament = TOURNAMENTS[Number(leagueId)] || {
          name: `League ${leagueId}`,
          stage: "Matches",
        };

        fixtures.sort((a, b) => {
          return (
            new Date(a.time.starting_at.date_time).getTime() -
            new Date(b.time.starting_at.date_time).getTime()
          );
        });

        return (
          <div
            className={`w-full mx-auto bg-card rounded-xl overflow-hidden shadow-lg border border-border`}
            key={leagueId}
          >
            <div className="bg-background px-4 py-3 flex items-center space-x-2 border-b border-border">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                {tournament.name}{" "}
                <span className="text-muted-foreground">
                  ({tournament.stage})
                </span>
              </span>
            </div>
            <div key={leagueId} className="">
              {fixtures.map((fixture, index) => (
                <FixtureCard
                  key={fixture.id}
                  id={index}
                  fixture={fixture}
                  tournament={tournament}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
