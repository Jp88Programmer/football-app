import Sidebar from "@/components/layout/Sidebar";
import TrendingNews from "@/components/news/TrandingNews";
import ScoreBoard from "@/components/fixtures/ScoreBoard";
import Banner from "@/components/layout/Banner";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-dark-bg text-white p-6 gap-6">
      <Sidebar />
      <main className="flex-1">
        <div className="flex gap-6">
          <div className="flex flex-col gap-6 w-full">
            <Banner />
            <ScoreBoard />
          </div>
          <div className="flex">
            <TrendingNews />
          </div>
        </div>
      </main>
    </div>
  );
}
