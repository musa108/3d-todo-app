"use client";
import React, { createContext, useContext, useEffect, useReducer } from "react";

export type TaskStatus = "todo" | "in-progress" | "done";
export type Task = {
  id: string;
  title: string;
  project?: string;
  progress?: number; // 0-100
  due?: string;
  status: TaskStatus;
  createdAt: string;
};

type State = { tasks: Task[] };
type Action =
  | { type: "add"; payload: Omit<Task, "id" | "createdAt"> }
  | { type: "updateStatus"; id: string; status: TaskStatus }
  | { type: "remove"; id: string }
  | { type: "set"; tasks: Task[] };

const initialState: State = { tasks: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      const newTask: Task = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        progress: action.payload.progress ?? 0,
        ...action.payload,
      };
      return { tasks: [newTask, ...state.tasks] };
    }
    case "updateStatus":
      return { tasks: state.tasks.map(t => t.id === action.id ? { ...t, status: action.status } : t) };
    case "remove":
      return { tasks: state.tasks.filter(t => t.id !== action.id) };
    case "set":
      return { tasks: action.tasks };
    default:
      return state;
  }
}

const TaskContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // init with dummy tasks on mount
  useEffect(() => {
    const sample: Task[] = [
      { id: "t1", title: "Design new ui presentation", project: "Dribbble marketing", progress: 70, due: "24 Aug 2022", status: "todo", createdAt: new Date().toISOString() },
      { id: "t2", title: "Design system update", project: "Oreo website project", progress: 30, due: "12 Nov 2022", status: "in-progress", createdAt: new Date().toISOString() },
      { id: "t3", title: "Add product to the market", project: "UI8 marketplace", progress: 100, due: "6 Jan 2022", status: "done", createdAt: new Date().toISOString() },
    ];
    dispatch({ type: "set", tasks: sample });
  }, []);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must be used within TaskProvider");
  return ctx;
}
