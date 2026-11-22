
import useDocumentTitle from "../hooks/useDocumentTitle";

function TasksPage() {
  useDocumentTitle("Tasks");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-teal-700">
          STAY ORGANIZED
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          My Tasks
        </h1>
        <p className="mt-2 text-gray-500">
          Manage your study activities and track your progress.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        <div className="text-4xl">📝</div>
        <h2 className="mt-4 text-xl font-bold text-gray-800">
          Your Tasks
        </h2>
        <p className="mt-2 text-gray-500">
          Your task management tools will appear here.
        </p>
      </div>
    </div>
  );
}

export default TasksPage;
