"use client";
import { useTasks, Task } from "@/context/TaskContext";

export default function TaskCard({ task }: { task: Task }) {
  const { dispatch } = useTasks();

  return (
    <div className="p-4 rounded-lg theme-card border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <div className={`font-medium ${task.status === "done" ? "line-through text-gray-400" : ""}`}>{task.title}</div>
          {task.project && <div className="text-xs theme-muted">{task.project}</div>}
        </div>
        <div className="text-xs theme-muted">{task.progress ?? 0}/10</div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs theme-muted">{task.due ?? ""}</div>

        <div className="flex items-center gap-2">
          <select
            value={task.status}
            onChange={(e) => dispatch({ type: "updateStatus", id: task.id, status: e.target.value as Task["status"] })}
            className="px-2 py-1 rounded border bg-transparent text-sm"
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <button onClick={() => dispatch({ type: "remove", id: task.id })} className="px-2 py-1 bg-red-600 text-white rounded text-sm">Delete</button>
        </div>
      </div>
    </div>
  );
}
