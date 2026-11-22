
import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useDebounce from "../hooks/useDebounce";

function TasksPage({ tasks, setTasks }) {
  useDocumentTitle("Tasks");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("dueDate");

  const [title, setTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Study");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const categories = [
    "All",
    ...new Set(tasks.map((task) => task.category)),
  ];

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter((task) =>
      category === "All" || task.category === category
    )
    .filter((task) => {
      if (status === "Completed") return task.completed;
      if (status === "Pending") return !task.completed;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === "priority") {
        const order = { High: 1, Medium: 2, Low: 3 };
        return order[a.priority] - order[b.priority];
      }

      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  function addTask(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task title.");
      return;
    }

    if (!dueDate) {
      setError("Please select a due date.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      category: newCategory,
      dueDate,
      priority,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);

    setTitle("");
    setDueDate("");
    setPriority("Medium");
    setError("");
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

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

      {/* Add Task Form */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Add New Task
        </h2>

        <form onSubmit={addTask} className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg border p-3"
          />

          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="rounded-lg border p-3"
          >
            <option value="Study">Study</option>
            <option value="Assignment">Assignment</option>
            <option value="Revision">Revision</option>
            <option value="Project">Project</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="rounded-lg border p-3"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="rounded-lg border p-3"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>

          {error && (
            <p className="text-sm text-red-600 md:col-span-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="rounded-lg bg-teal-600 p-3 font-semibold text-white hover:bg-teal-700 md:col-span-2"
          >
            + Add Task
          </button>
        </form>
      </div>

      {/* Search and Filters */}
      <div className="grid gap-3 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border bg-white p-3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border bg-white p-3"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border bg-white p-3"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border bg-white p-3"
        >
          <option value="dueDate">Sort by Due Date</option>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">
          Your Tasks ({filteredTasks.length})
        </h2>

        {filteredTasks.length === 0 ? (
          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <p className="text-gray-500">
              No tasks found. Try changing your filters or add a task.
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 accent-teal-600"
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
                    {task.category} · Due: {task.dueDate}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Priority: {task.priority}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    task.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="font-semibold text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TasksPage;
