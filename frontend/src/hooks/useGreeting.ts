// ponytail: trivial hook, exists to establish the hooks/ layer the DS refactor will grow into
export function useGreeting(name = "World") {
  return `Hello, ${name}!`;
}
