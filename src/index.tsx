import { type StoreApi } from "zustand";
import { type RxDocument, type RxCollection, type RxDatabase } from "rxdb";
import React from "react";

export const SECTION_PREFIX = "#";
export const SECTION_PREFIX_REGEX = new RegExp(`^${SECTION_PREFIX}`, "g");

export function isSection(task: Task) {
  return task.name.startsWith(SECTION_PREFIX);
}

export interface Role {
  id: string;
  name: string;
  description: string;
}

export interface User {
  sub: string;
  name: string;
  email: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  nickname?: string;
  roles: Role[];
  subscriptions: { id: string; status: string }[];
}

export const SCHEDULE = [
  {
    label: "never",
    value: "never" as const,
  },
  {
    label: "after completion",
    value: "after-completion" as const,
  },
  {
    label: "daily",
    value: "daily" as const,
  },
  {
    label: "weekly",
    value: "weekly" as const,
  },
  {
    label: "monthly",
    value: "monthly" as const,
  },
  {
    label: "yearly",
    value: "yearly" as const,
  },
];

export const DAY_WEEK_MONTH_YEAR = [
  {
    label: "day",
    value: "day" as const,
  },
  {
    label: "week",
    value: "week" as const,
  },
  {
    label: "month",
    value: "month" as const,
  },
  {
    label: "year",
    value: "year" as const,
  },
];

export const ENDS = [
  {
    label: "never",
    value: "never" as const,
  },
  {
    label: "after",
    value: "after" as const,
  },
  {
    label: "on date",
    value: "on-date" as const,
  },
];

export const DAYS_OF_WEEK = [
  {
    label: "Sunday",
    value: "sunday" as const,
  },
  {
    label: "Monday",
    value: "monday" as const,
  },
  {
    label: "Tuesday",
    value: "tuesday" as const,
  },
  {
    label: "Wednesday",
    value: "wednesday" as const,
  },
  {
    label: "Thursday",
    value: "thursday" as const,
  },
  {
    label: "Friday",
    value: "friday" as const,
  },
  {
    label: "Saturday",
    value: "saturday" as const,
  },
];

export const DAYS_OF_WEEK_INCL_DAY = [
  {
    label: "day",
    value: "day" as const,
  },
  ...DAYS_OF_WEEK,
];

export const MONTHS = [
  {
    label: "January",
    value: "january" as const,
  },
  {
    label: "February",
    value: "february" as const,
  },
  {
    label: "March",
    value: "march" as const,
  },
  {
    label: "April",
    value: "april" as const,
  },
  {
    label: "May",
    value: "may" as const,
  },
  {
    label: "June",
    value: "june" as const,
  },
  {
    label: "July",
    value: "july" as const,
  },
  {
    label: "August",
    value: "august" as const,
  },
  {
    label: "September",
    value: "september" as const,
  },
  {
    label: "October",
    value: "october" as const,
  },
  {
    label: "November",
    value: "november" as const,
  },
  {
    label: "December",
    value: "december" as const,
  },
];

export type Prefix =
  | "last"
  | `${number}th`
  | `${number}nd`
  | `${number}rd`
  | `${number}st`;

export type Schedule = {
  selectedSchedule: (typeof SCHEDULE)[number]["value"];
  amount: number;
  amountUnit: (typeof DAY_WEEK_MONTH_YEAR)[number]["value"];
  startDateTimestamp: number;
  ends: (typeof ENDS)[number]["value"];
  endsAfter: number;
  endsDateTimestamp: number;
  weekdays: (typeof DAYS_OF_WEEK)[number]["value"][];
  monthDays: {
    prefix: Prefix;
    day: (typeof DAYS_OF_WEEK_INCL_DAY)[number]["value"];
    month?: (typeof MONTHS)[number]["value"];
  }[];
};

export type TaskEvent =
  | {
      id: string;
      taskId: string;
      type:
        | "start"
        | "stop"
        | "created"
        | "completed"
        | "uncompleted"
        | "update-description"
        | "unscheduled";

      timestamp: number;
      userId?: string;
    }
  | {
      id: string;
      taskId: string;
      type: "update-duration";
      previousValue?: number;
      value?: number;
      timestamp: number;
      userId?: string;
    }
  | {
      id: string;
      taskId: string;
      type: "update-name";
      previousValue?: string;
      value?: string;
      timestamp: number;
      userId?: string;
    }
  | {
      id: string;
      taskId: string;
      timestamp: number;
      type: "update-seconds-worked";
      secondsWorked: number;
      userId?: string;
    }
  | {
      id: string;
      taskId: string;
      timestamp: number;
      type: "scheduled";
      postponedUntilTimestamp: number;
      userId?: string;
    }
  | {
      id: string;
      taskId: string;
      timestamp: number;
      type: "repeated";
      userId?: string;
    }
  | {
      id: string;
      taskId: string;
      timestamp: number;
      type: "repeated-removed";
      userId?: string;
    };

export type Task = {
  id: string;
  rank: string;
  name: string;
  isComplete: boolean;
  completedAtTimestamp?: number;
  estimatedDuration: number;
  secondsWorked: number;
  description?: string;
  descriptionJSON?: string;
  postponedUntilTimestamp?: number;
  lastActiveAtTimestamp?: number;
  repeatSchedule?: Schedule;
  repeatSchedulePaused?: boolean;
  repeatScheduleTemplateTaskId?: Task["id"];
  repeatScheduleTimestamp?: number;
  assets?: { [localName: string]: string };
  updatedAt?: number;
  userId?: string;
  workspaceId?: string;
  /**
   * If the task has a custom renderer, we ask plugins to render this task instead of the default task renderer.
   */
  customTaskRenderer?: string;
};

export type Workspace = {
  id: string;
  name: string;
  ownerId: string;
  memberIds: string[];
  owner?: User;
  picture?: string;
  members: User[];
  updatedAt: number;
  createdAt: number;
};

export type TaskCollectionMethods = {
  search: (query: string) => Promise<TaskDocument[]>;
  createTask: (
    name: string,
    from: "command menu" | "modal" | "ai" | "plugin",
    estimatedDuration?: number,
    afterTaskId?: string,
    description?: string
  ) => Promise<TaskDocument | undefined>;
};

export type TaskDocument = RxDocument<Task>;
export type WorkspaceDocument = RxDocument<Workspace>;
export type TaskCollection = RxCollection<Task, any, TaskCollectionMethods>;
export type TaskEventCollection = RxCollection<TaskEvent>;
export type WorkspaceCollection = RxCollection<Workspace>;

export interface TaskStoreState {
  sortedTasks: TaskDocument[];
  renderedTasks: TaskDocument[];
  currentWorkspace: WorkspaceDocument | null;
  workspaces: WorkspaceDocument[];
}

export interface TaskStoreActions {}

export type CommandItem = {
  value: string;
  onSelect: () => void;
  children: React.ReactNode;
};

export type TaskStore = StoreApi<TaskStoreState & TaskStoreActions>;

export type DBCollections = {
  tasks: TaskCollection;
  task_events: TaskEventCollection;
  workspaces: WorkspaceCollection;
};

export type Page = "root" | "schedule" | "assign";

export interface FlintPlugin {
  name: string;
  version: string;
  init(): void;
  renderCommandItems?: (props: {
    page: Page | undefined;
    setOpen: (open: boolean, page?: Page | undefined) => void;
  }) => CommandItem[];
}

export interface Flint {
  db: RxDatabase<DBCollections, any, any>;
  taskStore: TaskStore;
  useTaskStore: () => TaskStoreState & TaskStoreActions;
  registerPlugin(plugin: FlintPlugin): void;
}

export interface FlintWindow extends Window {
  flint: Flint;
}
