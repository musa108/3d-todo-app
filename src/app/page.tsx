"use client";
import { useState } from "react";
import TaskBoard from "@/components/Taskboard";
import AddTaskModal from "@/components/AddTaskModal";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-start h-full">
      {/* Sidebar on the left */}
      <div className="w-64 h-full">
        <Sidebar />
      </div>

      {/* Main content on the right */}
      <div className="ml-10">
        {/* Top bar */}
        <div className="flex items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Welcome back, Vincent 👋</h1>
            <div className="text-sm text-gray-500">Board view • Add view</div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              + Add Task
            </button>
          </div>
        </div>

        <TaskBoard />

        {open && <AddTaskModal onClose={() => setOpen(false)} />}
      </div>
    </div>
  );
}
