
import { useEffect, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function FocusPage() {
  useDocumentTitle("Focus");

  const modes = {
    Focus: 25 * 60,
    "Short Break": 5 * 60,
    "Long Break": 15 * 60,
  };

  const [mode, setMode] = useState("Focus");
  const [seconds, setSeconds] = useState(modes.Focus);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          setIsRunning(false);

          if (mode === "Focus") {
            setCompletedSessions((count) => count + 1);
          }

          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, mode]);

  function changeMode(selectedMode) {
    setMode(selectedMode);
    setSeconds(modes[selectedMode]);
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setSeconds(modes[mode]);
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const time = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  const progress =
    ((modes[mode] - seconds) / modes[mode]) * 100;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-teal-700">
          DEEP WORK
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Focus Time
        </h1>

        <p className="mt-2 text-gray-500">
          Take control of your study sessions and stay focused.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(modes).map((item) => (
            <button
              key={item}
              onClick={() => changeMode(item)}
              className={`rounded-lg px-5 py-3 font-semibold transition ${
                mode === item
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mx-auto my-8 max-w-sm">
          <div className="text-7xl font-bold tracking-wider text-gray-900">
            {time}
          </div>

          <p className="mt-3 text-gray-500">
            {mode === "Focus"
              ? "Time to concentrate!"
              : "Take a relaxing break."}
          </p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-teal-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            disabled={seconds === 0}
            className="rounded-lg bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700 disabled:opacity-50"
          >
            {isRunning ? "Pause" : "Start"}
          </button>

          <button
            onClick={resetTimer}
            className="rounded-lg bg-gray-200 px-8 py-3 font-semibold text-gray-700 hover:bg-gray-300"
          >
            Reset
          </button>
        </div>

        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-bold text-gray-800">
            Focus Statistics
          </h2>

          <p className="mt-3 text-gray-500">
            Completed Focus Sessions
          </p>

          <p className="mt-2 text-3xl font-bold text-teal-600">
            {completedSessions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FocusPage;
