import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackDevtools } from "@tanstack/react-devtools";

import "../styles.css";
export const Route = createRootRoute({
  component: RootComponent,
});
function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> */}
      <TanStackDevtools />
    </div>
  );
}
