import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Settings, LogOut, FileText, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockProducts } from '../mockData';
import toast from 'react-hot-toast';

export default function Profile() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');

  // Pseudo auth check, will be replaced with real protected route later
  const displayUser = user || { name: 'John Doe', email: 'john@example.com', role: 'client' };

  // Fake orders for the history
  const fakeOrders = [
    { _id: 'MOCK-1001', date: '2026-07-01', total: 125.00, status: 'delivered', items: mockProducts.slice(0,2) },
    { _id: 'MOCK-1002', date: '2026-06-15', total: 349.99, status: 'shipped', items: [mockProducts[0]] }
  ];

  return (
    <div className="section container fade-in">
      <div className="page-header" style={{ marginBottom: 40 }}>
        <h1>My Account</h1>
        <p>Manage your profile and orders.</p>
      </div>

      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Sidebar */}
        <div style={{ flex: '1 1 250px', background: 'var(--bg2)', borderRadius: 'var(--card-radius)', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
          <div style={{ padding: 32, textAlign: 'center', borderBottom: '1px solid var(--glass-border)' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800 }}>
              {displayUser.name.charAt(0)}
            </div>
            <h3 style={{ marginBottom: 4 }}>{displayUser.name}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{displayUser.email}</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button className="btn" style={{ background: activeTab === 'orders' ? 'rgba(108,99,255,0.1)' : 'transparent', color: activeTab === 'orders' ? 'var(--primary)' : 'var(--text-muted)', borderLeft: activeTab === 'orders' ? '3px solid var(--primary)' : '3px solid transparent', padding: '16px 24px', justifyContent: 'flex-start', borderRadius: 0 }} onClick={() => setActiveTab('orders')}>
              <Package size={18} /> Order History
            </button>
            <button className="btn" style={{ background: activeTab === 'settings' ? 'rgba(108,99,255,0.1)' : 'transparent', color: activeTab === 'settings' ? 'var(--primary)' : 'var(--text-muted)', borderLeft: activeTab === 'settings' ? '3px solid var(--primary)' : '3px solid transparent', padding: '16px 24px', justifyContent: 'flex-start', borderRadius: 0 }} onClick={() => setActiveTab('settings')}>
              <Settings size={18} /> Account Settings
            </button>
            <button className="btn" style={{ background: 'transparent', color: 'var(--error)', borderLeft: '3px solid transparent', padding: '16px 24px', justifyContent: 'flex-start', borderRadius: 0 }} onClick={logout}>
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        {/* Content Panel */}
        <div style={{ flex: '1 1 600px' }}>
          {activeTab === 'orders' && (
            <div className="fade-in">
              <h2 style={{ marginBottom: 24 }}>Order History</h2>
              {fakeOrders.length === 0 ? (
                <p style={{ color: 'var(--text-muted)' }}>You have no orders yet.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {fakeOrders.map(order => (
                    <div key={order._id} style={{ background: 'var(--bg2)', borderRadius: 'var(--card-radius)', border: '1px solid var(--glass-border)', padding: 24 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid var(--glass-border)' }}>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>Order #{order._id}</div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Placed on {order.date}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary-light)', marginBottom: 6 }}>${order.total.toFixed(2)}</div>
                          <span className={`badge ${order.status === 'delivered' ? 'badge-success' : 'badge-warning'}`} style={{ textTransform: 'capitalize' }}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', gap: 16, overflowX: 'auto', marginBottom: 24 }}>
                        {order.items.map(item => (
                          <div key={item._id} style={{ minWidth: 200, display: 'flex', gap: 12, alignItems: 'center', background: 'var(--bg3)', padding: 12, borderRadius: 10, border: '1px solid var(--glass-border)' }}>
                            <img src={item.image} alt={item.name} style={{ width: 48, height: 48, borderRadius: 6, objectFit: 'cover' }} />
                            <div>
                              <div style={{ fontSize: '0.9rem', fontWeight: 600, width: 110, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                              {order.status === 'delivered' && (
                                <button className="btn" style={{ padding: '2px 0', fontSize: '0.75rem', color: 'var(--secondary)' }}>
                                  <Star size={12} style={{ display: 'inline', marginRight: 4 }} /> Rate Product
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                        <Link to={`/invoice/${order._id}`} className="btn btn-outline btn-sm">
                          <FileText size={16} /> View Invoice
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="fade-in" style={{ background: 'var(--bg2)', borderRadius: 'var(--card-radius)', border: '1px solid var(--glass-border)', padding: 32 }}>
              <h2 style={{ marginBottom: 24 }}>Update Profile</h2>
              <form onSubmit={e => { e.preventDefault(); toast.success('Profile updated'); }} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                <div className="grid-2">
                  <div className="form-group"><label className="form-label">Full Name</label><input type="text" className="input" defaultValue={displayUser.name} /></div>
                  <div className="form-group"><label className="form-label">Email Address</label><input type="email" className="input" defaultValue={displayUser.email} /></div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>Save Changes</button>
              </form>

              <div className="divider"></div>

              <h2 style={{ margin: '32px 0 24px' }}>Change Password</h2>
              <form onSubmit={e => { e.preventDefault(); toast.success('Password changed'); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-group"><label className="form-label">Current Password</label><input type="password" className="input" required /></div>
                <div className="grid-2">
                  <div className="form-group"><label className="form-label">New Password</label><input type="password" className="input" required /></div>
                  <div className="form-group"><label className="form-label">Confirm Password</label><input type="password" className="input" required /></div>
                </div>
                <button type="submit" className="btn btn-secondary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>Update Password</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
