export interface Team {
  id?: number;
  name: string;
  logo_path: string;
}

export interface Score {
  localteam_score: number;
  visitorteam_score: number;
}

export interface Fixture {
  id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  round_id: number;
  localteam_id: number;
  visitorteam_id: number;
  localteam: Team;
  visitorteam: Team;
  scores: Score;
  time: {
    status: string;
    starting_at: {
      date_time: string;
      date: string;
      time: string;
      timestamp: number;
      timezone: string;
    };
  };
}

// ...existing code...

export interface ApiFixture {
  id: number;
  sport_id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  group_id: number | null;
  aggregate_id: number | null;
  round_id: number;
  state_id: number;
  venue_id: number;
  name: string;
  starting_at: string;
  result_info: string;
  leg: string;
  details: string | null;
  length: number;
  placeholder: boolean;
  has_odds: boolean;
  has_premium_odds: boolean;
  starting_at_timestamp: number;
}

export interface ApiFixtureResponse {
  data: ApiFixture[];
}