
import useDocumentTitle from "../hooks/useDocumentTitle";

function SettingsPage() {
  useDocumentTitle("Settings");

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

      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">
          Study Preferences
        </h2>
        <p className="mt-2 text-gray-500">
          Your personal study preferences will appear here.
        </p>
      </div>
    </div>
  );
}

export default SettingsPage;
