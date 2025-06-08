import Sidebar from "@/components/layout/Sidebar";
import TrendingNews from "@/components/news/TrandingNews";
import ScoreBoard from "@/components/fixtures/ScoreBoard";
import Banner from "@/components/layout/Banner";

export default function Home() {
  return (
    <div className="flex h-screen bg-dark-bg text-white p-6 gap-6">
      <Sidebar />
      <main className="flex gap-6 h-full">
        <div className="flex flex-col gap-6 w-full h-full">
          <Banner />
          <ScoreBoard />
        </div>
        <div className="flex">
          <TrendingNews />
        </div>
      </main>
    </div>
  );
}
