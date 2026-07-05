import { Badge, Tag, Avatar, Button, Table, TBody, TR, TH, TD } from "@ds/ui";
import { statusColor, trackerColor } from "./data";
import type { Issue } from "./data";

export function IssueDetail({ issue, onBack }: { issue: Issue; onBack: () => void }) {
  return (
    <div>
      <div className="mb-3 text-sm text-[#9b9a97]">
        <button onClick={onBack} className="text-[#787774] hover:text-[#37352f]">
          Issues
        </button>
        <span className="mx-1">»</span>
        <span>#{issue.id}</span>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <Tag color={trackerColor[issue.tracker]}>{issue.tracker}</Tag>
        <h1 className="text-2xl font-medium tracking-tight text-[#37352f]">
          #{issue.id} {issue.subject}
        </h1>
        <div className="ml-auto flex gap-2">
          <Button variant="secondary">Edit</Button>
          <Button>Update</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <section>
            <div className="mb-1.5 text-xs font-medium uppercase tracking-wide text-[#9b9a97]">
              Description
            </div>
            <p className="text-sm text-[#37352f]">{issue.description}</p>
          </section>

          <section>
            <div className="mb-1.5 text-xs font-medium uppercase tracking-wide text-[#9b9a97]">
              History
            </div>
            <ul className="space-y-3">
              {issue.comments.map((c, i) => (
                <li key={i} className="flex gap-2.5 text-sm">
                  <Avatar name={c.author} />
                  <div>
                    <div className="text-[#9b9a97]">
                      <span className="font-medium text-[#37352f]">{c.author}</span> · {c.when}
                    </div>
                    <div className="text-[#37352f]">{c.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside>
          <Table>
            <TBody>
              <TR>
                <TH>Status</TH>
                <TD>
                  <Badge color={statusColor[issue.status]}>{issue.status}</Badge>
                </TD>
              </TR>
              <TR>
                <TH>Priority</TH>
                <TD>{issue.priority}</TD>
              </TR>
              <TR>
                <TH>Assignee</TH>
                <TD>
                  <span className="flex items-center gap-1.5">
                    <Avatar name={issue.assignee} />
                    {issue.assignee}
                  </span>
                </TD>
              </TR>
              <TR>
                <TH>Updated</TH>
                <TD>{issue.updated}</TD>
              </TR>
            </TBody>
          </Table>
        </aside>
      </div>
    </div>
  );
}
