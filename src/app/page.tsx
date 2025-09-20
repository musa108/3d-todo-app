"use client";
import { useState } from "react";
import TaskBoard from "@/components/Taskboard";
import AddTaskModal from "@/components/AddTaskModal";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-start h-full">
      <div className="w-64 h-full max-lg:hidden">
        <Sidebar />
      </div>

      
      <div className="lg:ml-10">
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
