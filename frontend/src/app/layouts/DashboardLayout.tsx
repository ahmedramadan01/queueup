import { NavLink, Outlet } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">QueueUp</div>
        <nav aria-label="Business navigation">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/queues">Queues</NavLink>
        </nav>
      </aside>
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
