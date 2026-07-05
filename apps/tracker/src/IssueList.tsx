import { Badge, Tag, Avatar, Toolbar, Button, Table, THead, TBody, TR, TH, TD } from "@ds/ui";
import { issues, statusColor, trackerColor } from "./data";
import type { Issue } from "./data";

export function IssueList({ onOpen }: { onOpen: (issue: Issue) => void }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-800">Issues</h1>
        <Button>+ New issue</Button>
      </div>

      <div className="mb-2">
        <Toolbar>
          <span className="text-gray-500">Filters:</span>
          <select className="border border-gray-300 bg-white px-1 py-0.5">
            <option>Status: open</option>
            <option>Status: all</option>
          </select>
          <select className="border border-gray-300 bg-white px-1 py-0.5">
            <option>Assignee: any</option>
          </select>
          <select className="border border-gray-300 bg-white px-1 py-0.5">
            <option>Priority: any</option>
          </select>
          <input className="border border-gray-300 px-1 py-0.5" placeholder="Search subject…" />
          <button className="ml-auto text-blue-700 hover:underline">Apply</button>
        </Toolbar>
      </div>

      <Table>
        <THead>
          <TR>
            <TH>#</TH>
            <TH>Tracker</TH>
            <TH>Status</TH>
            <TH>Priority</TH>
            <TH>Subject</TH>
            <TH>Assignee</TH>
            <TH>Updated</TH>
          </TR>
        </THead>
        <TBody>
          {issues.map((it) => (
            <TR key={it.id} onClick={() => onOpen(it)}>
              <TD>
                <span className="text-blue-700">#{it.id}</span>
              </TD>
              <TD>
                <Tag color={trackerColor[it.tracker]}>{it.tracker}</Tag>
              </TD>
              <TD>
                <Badge color={statusColor[it.status]}>{it.status}</Badge>
              </TD>
              <TD>{it.priority}</TD>
              <TD>
                <span className="text-gray-800">{it.subject}</span>
              </TD>
              <TD>
                <span className="flex items-center gap-1.5">
                  <Avatar name={it.assignee} />
                  <span className="text-gray-700">{it.assignee}</span>
                </span>
              </TD>
              <TD>
                <span className="whitespace-nowrap text-gray-500">{it.updated}</span>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>

      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
        <span>({issues.length} issues)</span>
        <span className="ml-auto">« 1 2 3 »</span>
      </div>
    </div>
  );
}
