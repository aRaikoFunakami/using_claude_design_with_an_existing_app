type GreetingProps = {
  message: string;
};

export function Greeting({ message }: GreetingProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-8 py-6 shadow-sm">
      <h1 className="text-3xl font-bold text-gray-900">{message}</h1>
      <p className="mt-2 text-gray-500">A minimal React app, ready for Claude Design.</p>
    </div>
  );
}
