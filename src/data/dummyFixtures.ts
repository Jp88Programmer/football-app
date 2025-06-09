import stMirren from "../../public/Teams/st-mirren.png";
import celtic from "../../public/Teams/celtic.png";
import kilmarnock from "../../public/Teams/Kilmarnock.png";
import hearts from "../../public/Teams/hearts.png";
import hibernian from "../../public/Teams/hibernian.png";
import rangers from "../../public/Teams/rangers.png";
import aberdeen from "../../public/Teams/aberdeen.png";
import dundee from "../../public/Teams/dundee.png";

export const dummyFixtures = [
  {
    id: 19146700,
    sport_id: 1,
    league_id: 501,
    season_id: 23690,
    stage_id: 77471570,
    group_id: null,
    aggregate_id: null,
    round_id: 340573,
    state_id: 5,
    venue_id: 8879,
    name: "St. Mirren vs Hibernian",
    starting_at: new Date().toISOString().replace("T", " ").split(".")[0],
    result_info: "St. Mirren won after full-time.",
    leg: "1/1",
    details: null,
    length: 90,
    localteam_id: 12345,
    visitorteam_id: 67890,
    placeholder: false,
    has_odds: true,
    has_premium_odds: true,
    starting_at_timestamp: Date.now() / 1000,
    localteam: {
      name: "St. Mirren",
      logo_path: stMirren,
    },
    visitorteam: {
      name: "Hibernian",
      logo_path: hibernian,
    },
    time: {
      status: "FT",
      starting_at: {
        date_time: new Date(Date.now()).toISOString().split(".")[0] + "Z",
      },
    },
    scores: {
      localteam_score: 2,
      visitorteam_score: 1,
    },
  },
  {
    id: 19146701,
    sport_id: 1,
    league_id: 501,
    season_id: 23690,
    stage_id: 77471570,
    group_id: null,
    aggregate_id: null,
    round_id: 340573,
    state_id: 5,
    venue_id: 8909,

    name: "Celtic vs Kilmarnock",
    starting_at: "2025-06-07 15:30:00",
    result_info: "Celtic won after full-time.",
    leg: "1/1",
    details: null,
    length: 90,
    localteam_id: 12346,
    visitorteam_id: 67891,
    placeholder: false,
    has_odds: true,
    has_premium_odds: true,
    starting_at_timestamp: 1722785400,
    localteam: {
      name: "Celtic",
      logo_path: celtic,
    },
    visitorteam: {
      name: "Kilmarnock",
      logo_path: kilmarnock,
    },
    time: {
      status: "FT",
      starting_at: {
        date_time: "2024-08-04T15:30:00Z",
      },
    },
    scores: {
      localteam_score: 3,
      visitorteam_score: 0,
    },
  },
  // Add more dummy fixtures below
  {
    id: 19146702,
    sport_id: 1,
    league_id: 502,
    season_id: 23691,
    stage_id: 77471571,
    group_id: null,
    aggregate_id: null,
    round_id: 340574,
    state_id: 5,
    venue_id: 8910,
    name: "Rangers vs Aberdeen",
    starting_at: "2025-06-08 18:00:00",
    result_info: "Draw after full-time.",
    leg: "1/1",
    details: null,
    length: 90,
    localteam_id: 12347,
    visitorteam_id: 67892,
    placeholder: false,
    has_odds: true,
    has_premium_odds: true,
    starting_at_timestamp: 1722871200,
    localteam: {
      name: "Rangers",
      logo_path: rangers,
    },
    visitorteam: {
      name: "Aberdeen",
      logo_path: aberdeen,
    },
    time: {
      status: "LIVE",
      starting_at: {
        date_time: "2024-08-05T18:00:00Z",
      },
    },
    scores: {
      localteam_score: 1,
      visitorteam_score: 1,
    },
  },
  {
    id: 19146703,
    sport_id: 1,
    league_id: 503,
    season_id: 23692,
    stage_id: 77471572,
    group_id: null,
    aggregate_id: null,
    round_id: 340575,
    state_id: 5,
    venue_id: 8911,
    name: "Hearts vs Dundee",
    starting_at: "2025-06-09 20:00:00",
    result_info: "Hearts won after full-time.",
    leg: "1/1",
    details: null,
    length: 90,
    localteam_id: 12348,
    visitorteam_id: 67893,
    placeholder: false,
    has_odds: true,
    has_premium_odds: true,
    starting_at_timestamp: 1722957600,
    localteam: {
      name: "Hearts",
      logo_path: hearts,
    },
    visitorteam: {
      name: "Dundee",
      logo_path: dundee,
    },
    time: {
      status: "NS",
      starting_at: {
        date_time: "2024-08-06T20:00:00Z",
      },
    },
    scores: {
      localteam_score: null,
      visitorteam_score: null,
    },
  },
];
