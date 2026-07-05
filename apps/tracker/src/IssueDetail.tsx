import { Badge, Tag, Avatar, Button, Table, TBody, TR, TH, TD } from "@ds/ui";
import { statusColor, trackerColor } from "./data";
import type { Issue } from "./data";

export function IssueDetail({ issue, onBack }: { issue: Issue; onBack: () => void }) {
  return (
    <div>
      <div className="mb-2 text-sm text-gray-500">
        <button onClick={onBack} className="text-blue-700 hover:underline">
          Issues
        </button>
        <span className="mx-1">»</span>
        <span>#{issue.id}</span>
      </div>

      <div className="mb-3 flex items-center gap-2">
        <Tag color={trackerColor[issue.tracker]}>{issue.tracker}</Tag>
        <h1 className="text-lg font-bold text-gray-800">
          #{issue.id} {issue.subject}
        </h1>
        <div className="ml-auto flex gap-2">
          <Button variant="secondary">Edit</Button>
          <Button>Update</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <section className="border border-gray-300 bg-white">
            <div className="border-b border-gray-300 bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-600">
              Description
            </div>
            <p className="px-3 py-2 text-sm text-gray-800">{issue.description}</p>
          </section>

          <section className="border border-gray-300 bg-white">
            <div className="border-b border-gray-300 bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-600">
              History
            </div>
            <ul className="divide-y divide-gray-200">
              {issue.comments.map((c, i) => (
                <li key={i} className="flex gap-2 px-3 py-2 text-sm">
                  <Avatar name={c.author} />
                  <div>
                    <div className="text-gray-500">
                      <span className="font-medium text-gray-700">{c.author}</span> · {c.when}
                    </div>
                    <div className="text-gray-800">{c.body}</div>
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
