import { Badge, Tag, Avatar, Toolbar, Button, Table, THead, TBody, TR, TH, TD } from "@ds/ui";
import { issues, statusColor, trackerColor } from "./data";
import type { Issue } from "./data";

export function IssueList({ onOpen }: { onOpen: (issue: Issue) => void }) {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl font-medium tracking-tight text-[#37352f]">Issues</h1>
        <Button>+ New issue</Button>
      </div>

      <div className="mb-3">
        <Toolbar>
          <span>Filters:</span>
          <select className="rounded-md bg-[#f1f1ef] px-2.5 py-1 text-[#37352f]">
            <option>Status: open</option>
            <option>Status: all</option>
          </select>
          <select className="rounded-md bg-[#f1f1ef] px-2.5 py-1 text-[#37352f]">
            <option>Assignee: any</option>
          </select>
          <select className="rounded-md bg-[#f1f1ef] px-2.5 py-1 text-[#37352f]">
            <option>Priority: any</option>
          </select>
          <input
            className="rounded-md bg-[#f1f1ef] px-2.5 py-1 text-[#37352f] placeholder:text-[#9b9a97]"
            placeholder="Search subject…"
          />
          <button className="ml-auto text-[#787774] hover:text-[#37352f]">Apply</button>
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
                <span className="text-[#787774]">#{it.id}</span>
              </TD>
              <TD>
                <Tag color={trackerColor[it.tracker]}>{it.tracker}</Tag>
              </TD>
              <TD>
                <Badge color={statusColor[it.status]}>{it.status}</Badge>
              </TD>
              <TD>{it.priority}</TD>
              <TD>
                <span className="text-[#37352f]">{it.subject}</span>
              </TD>
              <TD>
                <span className="flex items-center gap-2">
                  <Avatar name={it.assignee} />
                  <span className="text-[#37352f]">{it.assignee}</span>
                </span>
              </TD>
              <TD>
                <span className="whitespace-nowrap text-[#9b9a97]">{it.updated}</span>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>

      <div className="mt-4 flex items-center gap-3 text-sm text-[#9b9a97]">
        <span>({issues.length} issues)</span>
        <span className="ml-auto">« 1 2 3 »</span>
      </div>
    </div>
  );
}
