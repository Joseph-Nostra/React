import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DynamicTitle from './DynamicTitle';

export default function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <DynamicTitle />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
