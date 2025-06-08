"use client";
import Image from "next/image";
import { Bookmark, ChevronRight } from "lucide-react";
import news1 from "../../../public/news/news1.png";
import news2 from "../../../public/news/news2.png";
import news3 from "../../../public/news/news3.png";
import news4 from "../../../public/news/news4.png";
import news5 from "../../../public/news/news5.png";
import trandingNews from "../../../public/news/tranding-news.png";

import type { StaticImageData } from "next/image";

interface NewsItem {
  id: string;
  title: string;
  image: string | StaticImageData;
  time: string;
}

const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Results And Scores From The Premier League",
    image: news1,
    time: "3 HOURS AGO",
  },
  {
    id: "2",
    title: "Here Are The Top 100 Players And Managers",
    image: news2,
    time: "4 HOURS AGO",
  },
  {
    id: "3",
    title: "Join Or Start A Competition Now!",
    image: news3,
    time: "6 HOURS AGO",
  },
  {
    id: "4",
    title: "Results and scores from the Premier League....!!",
    image: news4,
    time: "7 HOURS AGO",
  },
  {
    id: "5",
    title: "Results and scores from the Premier League....!!",
    image: news5,
    time: "8 HOURS AGO",
  },
];

export default function TrendingNews() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 bg-secondary rounded-lg p-3 sm:p-4 max-w-80 h-full">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white">
          Trending News
        </h2>
        <ChevronRight className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="w-full h-40 sm:h-48 md:h-52 lg:h-48 relative rounded-lg overflow-hidden">
          <Image
            alt="trending"
            src={trandingNews}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 260px"
            priority
          />
        </div>
        <div className="px-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-black dark:text-white sm:font-semibold line-clamp-2 pr-2">
              Premier League: Results And Scores
            </h3>
            <Bookmark
              color="#c3cc54"
              fill="#c3cc54"
              className="cursor-pointer flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5"
            />
          </div>
          <p className="text-[10px] sm:text-xs  text-gray-800  dark:text-white/70  mt-1">
            4 HOURS AGO
          </p>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3 md:space-y-4 overflow-y-auto flex-1 -mx-1 px-1">
        {mockNews.map((news) => (
          <div
            key={news.id}
            className="flex items-start sm:items-center gap-2 sm:gap-3 p-2 hover:bg-dark/50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 48px, 64px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xs sm:text-sm font-medium text-black dark:text-white line-clamp-2 pr-2">
                  {news.title}
                </h3>
                <Bookmark
                  color="#c3cc54"
                  fill={news.id === "3" ? "#c3cc54" : "transparent"}
                  className="cursor-pointer flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5"
                />
              </div>
              <p className="text-[10px] sm:text-xs text-gray-800  dark:text-white/70  mt-1">
                {news.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
