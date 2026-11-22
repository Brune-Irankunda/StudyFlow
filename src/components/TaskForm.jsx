
import { useEffect, useState } from "react";
import Button from "./Button";

function TaskForm({ initialTask, onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Programming");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setCategory(initialTask.category);
      setDueDate(initialTask.dueDate);
      setPriority(initialTask.priority);
    } else {
      setTitle("");
      setCategory("Programming");
      setDueDate("");
      setPriority("Medium");
    }

    setError("");
  }, [initialTask]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task title.");
      return;
    }

    onSubmit({
      title: title.trim(),
      category,
      dueDate,
      priority,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-bold text-gray-800">
        {initialTask ? "Edit Task" : "Add New Task"}
      </h2>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Task Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setError("");
          }}
          placeholder="Enter your study task"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
        />

        {error && (
          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Category
        </label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
        >
          <option>Programming</option>
          <option>Database</option>
          <option>Networking</option>
          <option>Mathematics</option>
          <option>Personal</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Due Date
        </label>

        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Priority
        </label>

        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button type="submit">
          {initialTask ? "Save Changes" : "Add Task"}
        </Button>

        <Button
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default TaskForm;
