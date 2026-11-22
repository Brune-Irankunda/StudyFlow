
import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const defaultSettings = {
  focusDuration: 25,
  shortBreak: 5,
  longBreak: 15,
  dailyGoal: 3,
  notifications: true,
  autoStartBreaks: false,
};

function getSavedSettings() {
  try {
    const saved = localStorage.getItem("studyFlowSettings");

    return saved
      ? { ...defaultSettings, ...JSON.parse(saved) }
      : defaultSettings;
  } catch {
    return defaultSettings;
  }
}

function SettingsPage() {
  useDocumentTitle("Settings");

  const [settings, setSettings] = useState(getSavedSettings);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setSettings((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : Number(value),
    }));

    setMessage("");
  }

  function saveSettings(e) {
    e.preventDefault();

    localStorage.setItem(
      "studyFlowSettings",
      JSON.stringify(settings)
    );

    setMessage("Your settings have been saved successfully!");
  }

  function resetSettings() {
    setSettings(defaultSettings);
    localStorage.setItem(
      "studyFlowSettings",
      JSON.stringify(defaultSettings)
    );
    setMessage("Settings restored to default.");
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-teal-700">
          PERSONALIZE YOUR SPACE
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-2 text-gray-500">
          Customize your StudyFlow experience.
        </p>
      </div>

      <form
        onSubmit={saveSettings}
        className="space-y-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Study Preferences
          </h2>

          <p className="mt-2 text-gray-500">
            Choose how you want to organize your study sessions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Focus Duration (minutes)
            </label>

            <input
              type="number"
              name="focusDuration"
              min="1"
              max="120"
              value={settings.focusDuration}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Short Break (minutes)
            </label>

            <input
              type="number"
              name="shortBreak"
              min="1"
              max="60"
              value={settings.shortBreak}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Long Break (minutes)
            </label>

            <input
              type="number"
              name="longBreak"
              min="1"
              max="60"
              value={settings.longBreak}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Daily Study Goal (hours)
            </label>

            <input
              type="number"
              name="dailyGoal"
              min="1"
              max="24"
              value={settings.dailyGoal}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>
        </div>

        <div className="space-y-4 border-t pt-5">
          <h2 className="text-xl font-bold text-gray-800">
            Additional Preferences
          </h2>

          <label className="flex items-center gap-3 text-gray-700">
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="h-5 w-5 accent-teal-600"
            />

            Enable study reminders
          </label>

          <label className="flex items-center gap-3 text-gray-700">
            <input
              type="checkbox"
              name="autoStartBreaks"
              checked={settings.autoStartBreaks}
              onChange={handleChange}
              className="h-5 w-5 accent-teal-600"
            />

            Automatically start breaks
          </label>
        </div>

        {message && (
          <p className="rounded-lg bg-green-50 p-3 text-green-700">
            {message}
          </p>
        )}

        <div className="flex flex-wrap gap-3 border-t pt-5">
          <button
            type="submit"
            className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700"
          >
            Save Settings
          </button>

          <button
            type="button"
            onClick={resetSettings}
            className="rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-300"
          >
            Reset Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default SettingsPage;
