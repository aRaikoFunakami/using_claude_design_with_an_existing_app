import { Greeting } from "../components/Greeting";
import { useGreeting } from "../hooks/useGreeting";

export function HomePage() {
  const message = useGreeting();
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <Greeting message={message} />
    </main>
  );
}
