import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import DynamicTitle from './DynamicTitle';

export default function AdminLayout() {
  return (
    <div className="admin-layout" style={{ background: 'var(--bg)' }}>
      <DynamicTitle />
      <AdminSidebar />
      <main className="admin-content fade-in">
        <Outlet />
      </main>
    </div>
  );
}
