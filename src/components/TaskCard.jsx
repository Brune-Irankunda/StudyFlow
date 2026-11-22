
import Button from "./Button";

function TaskCard({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="mt-1 h-5 w-5 accent-teal-600"
            aria-label={`Complete ${task.title}`}
          />

          <div>
            <h3
              className={`font-semibold ${
                task.completed
                  ? "text-gray-400 line-through"
                  : "text-gray-800"
              }`}
            >
              {task.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {task.category}
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-gray-500">
          <p>Due: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => onEdit(task)}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
