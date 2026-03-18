import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackDevtools } from "@tanstack/react-devtools";

import "../styles.css";

export const Route = createRootRoute({
  component: RootComponent,
});
function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> ส่วนกลางที่อยากให้มีทุกหน้า */}
      <main className="flex-1">
        <Outlet /> {/* หน้าจอของแต่ละ Feature จะมาโผล่ตรงนี้ */}
      </main>
      {/* <Footer /> ส่วนท้ายที่อยากให้มีทุกหน้า */}
      <TanStackDevtools />
    </div>
  );
}
