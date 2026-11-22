
import useDocumentTitle from "../hooks/useDocumentTitle";

function FocusPage() {
  useDocumentTitle("Focus");

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
        <div className="text-5xl">⏱️</div>
        <h2 className="mt-4 text-xl font-bold text-gray-800">
          Focus Timer
        </h2>
        <p className="mt-2 text-gray-500">
          Your study timer will appear here.
        </p>
      </div>
    </div>
  );
}

export default FocusPage;
