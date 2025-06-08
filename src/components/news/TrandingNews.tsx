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
    <div className="flex flex-col gap-4 bg-secondary rounded-lg p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Trending News</h2>
        <ChevronRight className="text-primary" size={20} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full h-60 relative rounded-lg overflow-hidden">
          <Image
            alt="tranding"
            src={trandingNews}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex items-start justify-center gap-3">
            <h3 className="text-lg font-semibold">
              Premier League: Results And Scores
            </h3>
            <Bookmark
              color="#c3cc54"
              fill="#c3cc54"
              className="cursor-pointer"
            />
          </div>
          <p className="text-[12px] text-white/70 mt-1">4 HOURS AGO</p>
        </div>
      </div>

      <div className="space-y-4 overflow-y-scroll">
        {mockNews.map((news) => (
          <div
            key={news.id}
            className="flex items-center space-x-4 p-2 hover:bg-dark rounded-lg transition-colors cursor-pointer"
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-center gap-3">
                <h3 className="font-medium line-clamp-2">{news.title}</h3>
                <Bookmark
                  color="#c3cc54"
                  fill={news.id == "3" ? "#c3cc54" : "transparent"}
                  className="cursor-pointer w-8"
                />
              </div>
              <p className="text-[12px] text-white/70 mt-1">{news.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
