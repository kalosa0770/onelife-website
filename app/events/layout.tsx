import { Tracking } from "@/components/Tracking";

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Tracking />
      <main className="bg-white text-foreground">{children}</main>
    </>
  );
}
