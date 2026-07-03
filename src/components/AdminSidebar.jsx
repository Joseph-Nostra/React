import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Grid, Tag, Users, ShoppingBag, CreditCard, Star, Ticket, Settings } from 'lucide-react';

export default function AdminSidebar() {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { to: '/admin', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
    { to: '/admin/products', icon: <Package size={18} />, label: 'Products' },
    { to: '/admin/categories', icon: <Grid size={18} />, label: 'Categories' },
    { to: '/admin/brands', icon: <Tag size={18} />, label: 'Brands' },
    { to: '/admin/orders', icon: <ShoppingBag size={18} />, label: 'Orders' },
    { to: '/admin/users', icon: <Users size={18} />, label: 'Users' },
    { to: '/admin/payments', icon: <CreditCard size={18} />, label: 'Payments' },
    { to: '/admin/reviews', icon: <Star size={18} />, label: 'Reviews' },
    { to: '/admin/coupons', icon: <Ticket size={18} />, label: 'Coupons' },
    { to: '/admin/settings', icon: <Settings size={18} />, label: 'Settings' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Link to="/" style={{ color: 'var(--primary-light)' }}>E-Shop Admin</Link>
      </div>
      <ul className="sidebar-nav">
        {links.map(link => (
          <li key={link.to}>
            <Link to={link.to} className={path === link.to ? 'active' : ''}>
              {link.icon} {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
