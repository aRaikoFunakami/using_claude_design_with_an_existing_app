import { Button, Card } from "@ds/ui";

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <Card title="Hello, World!" className="max-w-md">
        <p>A minimal customer app, built on the @ds/ui design system.</p>
        <Button className="mt-4">Get started</Button>
      </Card>
    </main>
  );
}
