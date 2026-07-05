type AvatarProps = {
  name: string;
};

// Initials avatar. Deterministic color from the name.
const palette = ["bg-blue-600", "bg-green-600", "bg-orange-600", "bg-purple-600", "bg-red-600", "bg-teal-600"];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ name }: AvatarProps) {
  const color = palette[name.length % palette.length];
  return (
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white ${color}`}
      title={name}
    >
      {initials(name)}
    </span>
  );
}
