
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-50">

      
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-2xl font-bold text-teal-700">
              StudyFlow
            </h1>

            <p className="text-sm text-gray-500">
              Plan better. Study smarter.
            </p>
          </div>

          <Navbar />

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <Outlet />
      </main>

      <footer className="mt-10 border-t border-gray-200 bg-white px-5 py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2026 StudyFlow. Stay focused, keep learning.
        </p>
      </footer>

    </div>
  );
}

export default SiteLayout;
