export type TrackerType = "Bug" | "Feature" | "Support";
export type Status = "New" | "In Progress" | "Resolved" | "Feedback" | "Closed";
export type Priority = "Low" | "Normal" | "High" | "Urgent";

export type Issue = {
  id: number;
  tracker: TrackerType;
  status: Status;
  priority: Priority;
  subject: string;
  assignee: string;
  updated: string;
  description: string;
  comments: { author: string; when: string; body: string }[];
};

export const issues: Issue[] = [
  {
    id: 1042,
    tracker: "Bug",
    status: "In Progress",
    priority: "High",
    subject: "Login fails intermittently on Safari",
    assignee: "Aoi Tanaka",
    updated: "2026-07-03 14:22",
    description:
      "Users on Safari 18 report that login succeeds but the session is dropped on the next request. Repro rate ~30%.",
    comments: [
      { author: "Aoi Tanaka", when: "2026-07-03 14:22", body: "Reproduced. Looks like a SameSite cookie issue." },
      { author: "Ken Sato", when: "2026-07-03 15:01", body: "Confirmed on staging too." },
    ],
  },
  {
    id: 1041,
    tracker: "Feature",
    status: "New",
    priority: "Normal",
    subject: "Add CSV export to the issue list",
    assignee: "Mei Kudo",
    updated: "2026-07-02 09:10",
    description: "Allow exporting the current filtered issue list to CSV.",
    comments: [{ author: "Mei Kudo", when: "2026-07-02 09:10", body: "Scoping the columns to include." }],
  },
  {
    id: 1039,
    tracker: "Support",
    status: "Feedback",
    priority: "Low",
    subject: "How do I reset my API token?",
    assignee: "Ken Sato",
    updated: "2026-07-01 17:45",
    description: "Customer asks how to rotate their API token from the settings page.",
    comments: [{ author: "Ken Sato", when: "2026-07-01 17:45", body: "Replied with the settings link." }],
  },
  {
    id: 1035,
    tracker: "Bug",
    status: "Resolved",
    priority: "Urgent",
    subject: "Dashboard chart renders blank when data is empty",
    assignee: "Aoi Tanaka",
    updated: "2026-06-30 11:03",
    description: "Empty datasets crash the chart component instead of showing an empty state.",
    comments: [{ author: "Aoi Tanaka", when: "2026-06-30 11:03", body: "Fixed with a guard + empty state." }],
  },
  {
    id: 1028,
    tracker: "Feature",
    status: "Closed",
    priority: "Normal",
    subject: "Dark mode for the settings screens",
    assignee: "Mei Kudo",
    updated: "2026-06-28 16:30",
    description: "Ship dark mode across the settings area.",
    comments: [{ author: "Mei Kudo", when: "2026-06-28 16:30", body: "Shipped in 2.4." }],
  },
];

export const trackerColor: Record<TrackerType, "red" | "green" | "blue"> = {
  Bug: "red",
  Feature: "green",
  Support: "blue",
};

export const statusColor: Record<Status, "blue" | "orange" | "green" | "purple" | "gray"> = {
  New: "blue",
  "In Progress": "orange",
  Resolved: "green",
  Feedback: "purple",
  Closed: "gray",
};
