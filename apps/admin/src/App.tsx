import { useState } from "react";
import { Button, Card, Dialog } from "@ds/ui";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Admin</h1>
      <Card title="Users" className="max-w-md">
        <p>Manage users of the customer app.</p>
        <Button className="mt-4" onClick={() => setOpen(true)}>
          Invite user
        </Button>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)} title="Invite user">
        <p>This dialog is built on the native &lt;dialog&gt; element.</p>
        <Button variant="secondary" className="mt-4" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Dialog>
    </main>
  );
}
