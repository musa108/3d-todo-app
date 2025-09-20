"use client";
import { useTheme } from "@/context/ThemeContext";

export default function Sidebar() {
  const { theme, toggle } = useTheme();

  return (
    <aside
      className={`w-72 h-full border-r flex flex-col justify-between ${
        theme === "dark"
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div>
        <div className="px-6 py-6">
          <div className="text-xl font-bold">Projects</div>
        </div>

        <div className="px-4">
          <div
            className={`text-xs mb-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Projects
          </div>
          <ul className="space-y-2 mb-6">
            <li
              className={`px-3 py-2 rounded-md font-medium ${
                theme === "dark" ? "bg-gray-800" : "bg-indigo-50"
              }`}
            >
              Design system
            </li>
            <li
              className={`px-3 py-2 rounded-md ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              User flow
            </li>
            <li
              className={`px-3 py-2 rounded-md ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Ux research
            </li>
          </ul>

          <div
            className={`text-xs mb-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Tasks
          </div>
          <ul className="space-y-2">
            <li
              className={`px-3 py-2 rounded-md ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              All tasks (11)
            </li>
            <li
              className={`px-3 py-2 rounded-md ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              To do (4)
            </li>
            <li
              className={`px-3 py-2 rounded-md ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              In progress (4)
            </li>
            <li
              className={`px-3 py-2 rounded-md ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Done (3)
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`px-6 py-4 border-t flex items-center justify-between ${
          theme === "dark" ? "border-gray-800" : "border-gray-100"
        }`}
      >
        <span
          className={`text-sm ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Light
        </span>
        <button
          onClick={toggle}
          className={`px-3 py-1 rounded-full ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
          aria-label="toggle theme"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
        <span
          className={`text-sm ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Dark
        </span>
      </div>
    </aside>
  );
}
