"use client";
import Link from "next/link";
import {
  Home,
  Trophy,
  MessageCircle,
  Bell,
  Users,
  Settings,
  Download,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/provider/ThemeProvider";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  const navLinks = [
    {
      href: "/",
      icon: Home,
      title: "Home",
    },
    {
      href: "/leaderboard",
      icon: Trophy,
      title: "Leader Board",
    },
    {
      href: "/ground",
      icon: Users,
      title: "Ground",
    },
    {
      href: "/chat",
      icon: MessageCircle,
      title: "Chat",
    },
    {
      href: "/notification",
      icon: Bell,
      title: "Notification",
    },
  ];
  return (
    <aside className="w-64 bg-background-1 h-screen p-4 flex flex-col rounded-lg">
      <div className="flex items-center mb-8">
        <h1 className="text-xl font-bold text-black dark:text-white">
          FOOTBALL<span className="text-primary">SHURU</span>
        </h1>
      </div>

      <div className="flex ">
        <nav className="space-y-2">
          {navLinks.map(({ href, icon: Icon, title }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center space-x-3  text-black/70 hover:text-slate-800 dark:text-white/70 hover:dark:text-white hover:bg-dark p-2 rounded-lg"
            >
              <Icon size={20} />
              <span>{title}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-6 space-y-2">
        <Link
          href="/settings"
          className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-dark p-2 rounded-lg"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        <Link
          href="/download"
          className="flex items-center space-x-3 text-white/70 hover:text-white hover:bg-dark p-2 rounded-lg"
        >
          <Download size={20} />
          <span>Download The App</span>
        </Link>
        <div className="flex gap-2 bg-background-2 p-2 rounded-lg">
          <button
            onClick={() => setTheme("light")}
            className={`flex items-center justify-center space-x-2 p-2 ${
              theme == "light" && "bg-background-1"
            } text-black/70 hover:text-slate-800 dark:text-white/70 dark:hover:text-white hover:bg-dark rounded-lg w-full`}
          >
            <Sun size={20} />
            <span>{"Light"}</span>
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`flex items-center justify-center space-x-2 p-2 ${
              theme == "dark" && "bg-background-1"
            } text-black/70 hover:text-slate-800 dark:text-white/70 dark:hover:text-white hover:bg-dark rounded-lg w-full`}
          >
            <Moon size={20} />
            <span>{"Dark"}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
