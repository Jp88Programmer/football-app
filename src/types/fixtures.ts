export interface Team {
  id: number;
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
