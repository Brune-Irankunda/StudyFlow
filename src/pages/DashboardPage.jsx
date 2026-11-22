
import useDocumentTitle from "../hooks/useDocumentTitle";
import SummaryCard from "../components/SummaryCard";
import SectionCard from "../components/SectionCard";
import { Link } from "react-router-dom";

function DashboardPage({ tasks }) {
  useDocumentTitle("Dashboard");

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const upcomingTasks = tasks
    .filter((task) => !task.completed)
    .slice(0, 3);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold text-teal-700">
          YOUR STUDY SPACE
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Welcome back!
        </h1>
        <p className="mt-2 text-gray-500">
          Here is your study progress at a glance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="Total Tasks"
          value={totalTasks}
          description="All your study tasks"
          icon=""
        />
        <SummaryCard
          title="Completed"
          value={completedTasks}
          description="Tasks finished"
          icon=""
        />
        <SummaryCard
          title="Pending"
          value={pendingTasks}
          description="Tasks to work on"
          icon=""
        />
        <SummaryCard
          title="Progress"
          value={`${progress}%`}
          description="Your completion rate"
          icon=""
        />
      </div>

      <SectionCard
        title="Study Progress"
        description="Keep moving toward your goals"
      >
        <div className="h-3 w-full rounded-full bg-gray-100">
          <div
            className="h-3 rounded-full bg-teal-600"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {completedTasks} of {totalTasks} tasks completed
        </p>
      </SectionCard>

      <SectionCard
        title="Upcoming Tasks"
        description="Your next pending study tasks"
      >
        {upcomingTasks.length > 0 ? (
          <ul className="space-y-3">
            {upcomingTasks.map((task) => (
              <li
                key={task.id}
                className="flex flex-wrap justify-between gap-2 border-b border-gray-100 pb-3 last:border-0"
              >
                <span className="font-medium text-gray-800">
                  {task.title}
                </span>
                <span className="text-sm text-gray-500">
                  {task.dueDate || "No due date"}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">
            No upcoming tasks. Great work!
          </p>
        )}

        <Link
          to="/tasks"
          className="mt-4 inline-block font-semibold text-teal-700 hover:underline"
        >
          View all tasks →
        </Link>
      </SectionCard>
    </div>
  );
}

export default DashboardPage;
