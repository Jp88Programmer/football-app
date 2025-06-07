"use client";

import { useQuery } from "@tanstack/react-query";
import FixtureCard from "./FixtureCard";
import type { Fixture } from "@/types/fixtures";

async function fetchFixtures(date: string) {
  const response = await fetch(`/api/fixtures?date=${date}`);
  if (!response.ok) {
    throw new Error("Failed to fetch fixtures");
  }
  return response.json();
}

export default function FixturesList({ date }: {date: string}) {

  const { data, isLoading, error } = useQuery<{ data: Fixture[] }>({
    queryKey: ["fixtures", date],
    queryFn: () => fetchFixtures(date),
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-secondary animate-pulse h-32 rounded-lg" />
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
      <div className="text-center py-8 text-white/70">
        No fixtures found for this date.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data.data.map((fixture) => (
        <FixtureCard key={fixture.id} fixture={fixture} />
      ))}
    </div>
  );
}
