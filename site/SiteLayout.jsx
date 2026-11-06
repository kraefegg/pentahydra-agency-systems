import { Outlet } from "@tanstack/react-router";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-ink">
      <SiteHeader />
      <main className="flex-1 pt-[76px]">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}