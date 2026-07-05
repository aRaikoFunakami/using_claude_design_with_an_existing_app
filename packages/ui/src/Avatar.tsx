type AvatarProps = {
  name: string;
};

// Initials avatar. Deterministic color from the name. Softened, muted palette (Notion).
const palette = ["bg-[#6a9bd0]", "bg-[#6aad7a]", "bg-[#d99b6a]", "bg-[#a58ac0]", "bg-[#c98a8a]", "bg-[#6ab0a8]"];

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
