import { default as default_2 } from 'react';
import { RxCollection } from 'rxdb';
import { RxDatabase } from 'rxdb';
import { RxDocument } from 'rxdb';
import { StoreApi } from 'zustand';

export declare type CommandItem = {
    value: string;
    onSelect: () => void;
    children: default_2.ReactNode;
};

export declare const DAY_WEEK_MONTH_YEAR: ({
    label: string;
    value: "day";
} | {
    label: string;
    value: "week";
} | {
    label: string;
    value: "month";
} | {
    label: string;
    value: "year";
})[];

export declare const DAYS_OF_WEEK: ({
    label: string;
    value: "sunday";
} | {
    label: string;
    value: "monday";
} | {
    label: string;
    value: "tuesday";
} | {
    label: string;
    value: "wednesday";
} | {
    label: string;
    value: "thursday";
} | {
    label: string;
    value: "friday";
} | {
    label: string;
    value: "saturday";
})[];

export declare const DAYS_OF_WEEK_INCL_DAY: ({
    label: string;
    value: "sunday";
} | {
    label: string;
    value: "monday";
} | {
    label: string;
    value: "tuesday";
} | {
    label: string;
    value: "wednesday";
} | {
    label: string;
    value: "thursday";
} | {
    label: string;
    value: "friday";
} | {
    label: string;
    value: "saturday";
} | {
    label: string;
    value: "day";
})[];

export declare type DBCollections = {
    tasks: TaskCollection;
    task_events: TaskEventCollection;
    workspaces: WorkspaceCollection;
};

export declare const ENDS: ({
    label: string;
    value: "never";
} | {
    label: string;
    value: "after";
} | {
    label: string;
    value: "on-date";
})[];

export declare interface Flint {
    db: RxDatabase<DBCollections, any, any>;
    taskStore: TaskStore;
    useTaskStore: () => TaskStoreState & TaskStoreActions;
    registerPlugin(plugin: FlintPlugin): void;
}

export declare interface FlintPlugin {
    name: string;
    version: string;
    init(): void;
    renderCommandItems?: (props: {
        page: Page | undefined;
        setOpen: (open: boolean, page?: Page | undefined) => void;
    }) => CommandItem[];
}

export declare interface FlintWindow extends Window {
    flint: Flint;
}

export declare function isSection(task: Task): boolean;

export declare const MONTHS: ({
    label: string;
    value: "january";
} | {
    label: string;
    value: "february";
} | {
    label: string;
    value: "march";
} | {
    label: string;
    value: "april";
} | {
    label: string;
    value: "may";
} | {
    label: string;
    value: "june";
} | {
    label: string;
    value: "july";
} | {
    label: string;
    value: "august";
} | {
    label: string;
    value: "september";
} | {
    label: string;
    value: "october";
} | {
    label: string;
    value: "november";
} | {
    label: string;
    value: "december";
})[];

export declare type Page = "root" | "schedule" | "assign";

export declare type Prefix = "last" | `${number}th` | `${number}nd` | `${number}rd` | `${number}st`;

export declare interface Role {
    id: string;
    name: string;
    description: string;
}

export declare const SCHEDULE: ({
    label: string;
    value: "never";
} | {
    label: string;
    value: "after-completion";
} | {
    label: string;
    value: "daily";
} | {
    label: string;
    value: "weekly";
} | {
    label: string;
    value: "monthly";
} | {
    label: string;
    value: "yearly";
})[];

export declare type Schedule = {
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

export declare const SECTION_PREFIX = "#";

export declare const SECTION_PREFIX_REGEX: RegExp;

export declare type Task = {
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
    assets?: {
        [localName: string]: string;
    };
    updatedAt?: number;
    userId?: string;
    workspaceId?: string;
    /**
     * If the task has a custom renderer, we ask plugins to render this task instead of the default task renderer.
     */
    customTaskRenderer?: string;
};

export declare type TaskCollection = RxCollection<Task, any, TaskCollectionMethods>;

export declare type TaskCollectionMethods = {
    search: (query: string) => Promise<TaskDocument[]>;
    createTask: (name: string, from: "command menu" | "modal" | "ai" | "plugin", estimatedDuration?: number, afterTaskId?: string, description?: string) => Promise<TaskDocument | undefined>;
};

export declare type TaskDocument = RxDocument<Task>;

export declare type TaskEvent = {
    id: string;
    taskId: string;
    type: "start" | "stop" | "created" | "completed" | "uncompleted" | "update-description" | "unscheduled";
    timestamp: number;
    userId?: string;
} | {
    id: string;
    taskId: string;
    type: "update-duration";
    previousValue?: number;
    value?: number;
    timestamp: number;
    userId?: string;
} | {
    id: string;
    taskId: string;
    type: "update-name";
    previousValue?: string;
    value?: string;
    timestamp: number;
    userId?: string;
} | {
    id: string;
    taskId: string;
    timestamp: number;
    type: "update-seconds-worked";
    secondsWorked: number;
    userId?: string;
} | {
    id: string;
    taskId: string;
    timestamp: number;
    type: "scheduled";
    postponedUntilTimestamp: number;
    userId?: string;
} | {
    id: string;
    taskId: string;
    timestamp: number;
    type: "repeated";
    userId?: string;
} | {
    id: string;
    taskId: string;
    timestamp: number;
    type: "repeated-removed";
    userId?: string;
};

export declare type TaskEventCollection = RxCollection<TaskEvent>;

export declare type TaskStore = StoreApi<TaskStoreState & TaskStoreActions>;

export declare interface TaskStoreActions {
}

export declare interface TaskStoreState {
    sortedTasks: TaskDocument[];
    renderedTasks: TaskDocument[];
    currentWorkspace: WorkspaceDocument | null;
    workspaces: WorkspaceDocument[];
}

export declare interface User {
    sub: string;
    name: string;
    email: string;
    given_name?: string;
    family_name?: string;
    picture?: string;
    nickname?: string;
    roles: Role[];
    subscriptions: {
        id: string;
        status: string;
    }[];
}

export declare type Workspace = {
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

export declare type WorkspaceCollection = RxCollection<Workspace>;

export declare type WorkspaceDocument = RxDocument<Workspace>;

export { }
