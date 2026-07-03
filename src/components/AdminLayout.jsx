import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout() {
  return (
    <div className="admin-layout" style={{ background: 'var(--bg)' }}>
      <AdminSidebar />
      <main className="admin-content fade-in">
        <Outlet />
      </main>
    </div>
  );
}
