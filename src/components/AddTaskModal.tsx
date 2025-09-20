"use client";
import { useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { TaskStatus } from "@/context/TaskContext";

export default function AddTaskModal({ onClose }: { onClose: () => void }) {
  const { dispatch } = useTasks();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<TaskStatus>("todo");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch({ type: "add", payload: { title: title.trim(), status } });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-3">Add Task</h3>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Task title" className="w-full p-2 mb-3 border rounded dark:bg-gray-700" />
        <select value={status} onChange={(e)=>setStatus(e.target.value as TaskStatus)} className="w-full p-2 mb-4 border rounded dark:bg-gray-700">
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-3 py-1 rounded">Cancel</button>
          <button type="submit" className="px-3 py-1 rounded bg-indigo-600 text-white">Add</button>
        </div>
      </form>
    </div>
  );
}
