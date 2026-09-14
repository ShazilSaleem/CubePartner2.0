import Image from "next/image";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Dashboard", icon: "/icons/icon-portal-dashboard.svg", active: true },
  { label: "Activities", icon: "/icons/icon-portal-activities.svg", active: false },
  { label: "Search", icon: "/icons/icon-portal-search.svg", active: false },
  { label: "Settings", icon: "/icons/icon-portal-settings.svg", active: false },
  { label: "Profile", icon: "/icons/icon-portal-profile.svg", active: false },
];

const friends = [
  { name: "Jenny Wilson", role: "UX Designer" },
  { name: "Mike Thompson", role: "UX Designer" },
  { name: "Simone Bilby", role: "UX Designer" },
];

const tiles = [
  { label: "Images", count: "183", icon: "/icons/icon-portal-images.svg" },
  { label: "Wishlists", count: "293", icon: "/icons/icon-portal-wishlists.svg" },
  { label: "Layers", count: "488", icon: "/icons/icon-portal-layers.svg" },
  { label: "Shares", count: "572", icon: "/icons/icon-portal-shares.svg" },
];

const quickAccess = ["Design tools", "Wireframes", "Layers"];

const history = [
  { project: "Design System", person: "Juliana Kolpasho", date: "17.10.2020" },
  { project: "Digital Tools", person: "David Gilroy", date: "22.11.2020" },
  { project: "Quality Design", person: "Samantha Moon", date: "23.11.2020" },
];

function Avatar({ size }: { size: "sm" | "md" }) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-surface-light",
        size === "sm" ? "size-5" : "size-6",
      )}
    >
      <Image src="/icons/icon-portal-user.svg" alt="" width={12} height={12} className="size-3" />
    </span>
  );
}

/** Decorative mock-up of the client portal dashboard from the Client Area design. */
export function PortalPreview() {
  return (
    <div aria-hidden="true" className="relative select-none">
      <div className="flex overflow-hidden border border-surface-border bg-white shadow-card">
        <aside className="hidden w-[132px] shrink-0 flex-col gap-3 border-r border-surface-border px-4 pt-4 pb-[60px] sm:flex">
          <div className="flex items-center gap-2">
            <span className="size-4 border-2 border-brand" />
            <span className="text-xs leading-4 font-semibold text-ink">Logo</span>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            {nav.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <Image src={item.icon} alt="" width={14} height={14} className="size-3.5" />
                <span
                  className={cn(
                    "text-[11px] leading-[16.5px]",
                    item.active ? "font-semibold text-brand" : "text-ink-muted",
                  )}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="pt-3 text-[10px] leading-[15px] tracking-[0.025em] uppercase text-ink-muted">Friends online</p>
          <div className="flex flex-col gap-3 pb-2">
            {friends.map((friend) => (
              <div key={friend.name} className="flex items-center gap-2">
                <Avatar size="sm" />
                <span className="text-[10px] leading-[12.5px] text-ink">
                  {friend.name}
                  <br />
                  <span className="text-ink-muted">{friend.role}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1 bg-brand p-2">
            <Image src="/icons/icon-portal-premium.svg" alt="" width={12} height={12} className="size-3" />
            <span className="text-[10px] leading-[15px] font-medium text-brand-foreground">Go Premium</span>
          </div>
        </aside>

        <div className="flex flex-1 flex-col gap-2 bg-surface-light/50 p-4">
          <div className="flex items-center gap-2 border border-surface-border bg-white px-3 py-2">
            <Image src="/icons/icon-portal-search.svg" alt="" width={14} height={14} className="size-3.5" />
            <span className="text-[11px] leading-[16.5px] text-ink-muted">Search design system</span>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {tiles.map((tile) => (
              <div
                key={tile.label}
                className="flex h-[46px] items-center justify-between border border-surface-border bg-white px-3 py-2.5"
              >
                <span className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center bg-surface-light">
                    <Image src={tile.icon} alt="" width={12} height={12} className="size-3" />
                  </span>
                  <span className="text-[11px] leading-[16.5px] text-ink">{tile.label}</span>
                </span>
                <span className="text-[11px] leading-[16.5px] text-ink-muted">{tile.count}</span>
              </div>
            ))}
          </div>
          <p className="pt-3 text-[11px] leading-[16.5px] font-semibold text-ink">Quick access</p>
          <div className="flex gap-3">
            {quickAccess.map((label) => (
              <div key={label} className="flex flex-1 flex-col gap-2 bg-surface p-3">
                <span className="block h-9 border border-surface-border bg-white/70" />
                <span className="text-[10px] leading-[15px] text-ink">{label}</span>
              </div>
            ))}
          </div>
          <p className="pt-3 text-[11px] leading-[16.5px] font-semibold text-ink">History</p>
          <div className="border border-surface-border bg-white">
            {history.map((row, i) => (
              <div
                key={row.project}
                className={cn(
                  "flex gap-2 px-3 py-2 text-[10px] leading-[15px]",
                  i < history.length - 1 && "border-b border-surface-border",
                )}
              >
                <span className="flex-1 font-medium text-ink">{row.project}</span>
                <span className="flex-1 text-ink-muted">{row.person}</span>
                <span className="flex-1 text-right text-ink-muted">{row.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 -left-6 hidden w-[176px] flex-col gap-2 border border-surface-border bg-white p-3 shadow-card sm:flex">
        <div className="flex items-center gap-2 pb-1">
          <Avatar size="md" />
          <span className="text-[10px] leading-[12.5px] font-semibold text-ink">
            Johnatan Miller
            <br />
            <span className="font-normal text-ink-muted">Online</span>
          </span>
        </div>
        <div className="bg-surface px-2 py-1.5 text-[9px] leading-[13.5px] text-ink-muted">Search</div>
        <div className="bg-brand p-2 text-[9px] leading-[13.5px] text-brand-foreground">Digital Design Platform</div>
        <p className="pt-1 text-[10px] leading-[15px] font-semibold text-ink">Your projects</p>
        <div className="bg-surface/70 p-2 text-[9px] leading-[11.25px] text-ink">
          How to design great design tools for your business
        </div>
        <div className="bg-surface/70 p-2 text-[9px] leading-[11.25px] text-ink">
          How to design great design tools for your business
        </div>
      </div>
    </div>
  );
}
