import { Outlet } from "react-router";

export function RootLayout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Outlet />
    </div>
  );
}
