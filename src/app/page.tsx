"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import TrendingNews from "@/components/news/TrandingNews";
import ScoreBoard from "@/components/fixtures/ScoreBoard";
import Banner from "@/components/layout/Banner";
import useViewport from "@/hooks/useViewport";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isMobile } = useViewport();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="max-w-[1920px] m-auto flex flex-col md:flex-row min-h-screen bg-dark-bg text-white p-3 md:p-4 lg:p-6 gap-3 md:gap-4 lg:gap-6 relative">
      {/* Mobile Header with Hamburger */}
      {isMobile && (
        <div className="flex justify-between items-center md:hidden mb-3">
          <h1 className="text-xl font-bold">Football App</h1>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* Sidebar - Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:inset-auto`}
      >
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 md:hidden ${
            isSidebarOpen ? "block" : "hidden"
          }`}
          onClick={toggleSidebar}
        ></div>
        <div
          className={`w-56 h-full bg-background-1 flex-shrink-0 overflow-y-auto fixed left-0 top-0 z-50 md:relative md:block ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <Sidebar />
        </div>
      </div>

      <main className="flex flex-col xl:flex-row gap-3 md:gap-4 lg:gap-6 overflow-hidden w-full">
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 overflow-y-auto w-full">
          <Banner />
          <ScoreBoard />
        </div>
        <div className="lg:overflow-y-auto">
          <TrendingNews />
        </div>
      </main>
    </div>
  );
}
