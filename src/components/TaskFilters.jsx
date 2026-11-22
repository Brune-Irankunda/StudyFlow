
function TaskFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  status,
  onStatusChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-4">

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Search Tasks
        </label>

        <input
          type="text"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by title..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-teal-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Category
        </label>

        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        >
          <option value="All">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Database">Database</option>
          <option value="Networking">Networking</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Personal">Personal</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          value={status}
          onChange={(event) => onStatusChange(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        >
          <option value="All">All Tasks</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Sort By
        </label>

        <select
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        >
          <option value="dueDate">Due Date</option>
          <option value="alphabetical">A - Z</option>
        </select>
      </div>

    </div>
  );
}

export default TaskFilters;
