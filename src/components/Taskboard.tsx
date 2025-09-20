"use client";
import TaskColumn from "./TaskColumn";
import { useTasks } from "@/context/TaskContext";
import ThreeProgress from "./ThreeProgress";

export default function TaskBoard() {
  const { state } = useTasks();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskColumn title="To do" status="todo" tasks={state.tasks} />
        <TaskColumn title="In progress" status="in-progress" tasks={state.tasks} />
        <TaskColumn title="Done" status="done" tasks={state.tasks} />
      </div>

      {/* Right column: progress widget or summary */}
      <aside className="space-y-4">
        <div className="p-4 rounded-lg theme-card border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">Progress</h4>
          <ThreeProgress />
        </div>
      </aside>
    </div>
  );
}
