"use client";
import TaskCard from "./Taskcard";
import { Task } from "@/context/TaskContext";

export default function TaskColumn({ title, status, tasks }: { title: string; status: Task["status"]; tasks: Task[] }) {
  const filtered = tasks.filter(t => t.status === status);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{title}</h3>
        <div className="text-sm theme-muted">{filtered.length}</div>
      </div>

      <div className="space-y-4">
        {filtered.map(t => <TaskCard key={t.id} task={t} />)}
      </div>
    </div>
  );
}
