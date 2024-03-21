import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>
        <h1>nav</h1>
      </nav>
      <Outlet />
      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
}
