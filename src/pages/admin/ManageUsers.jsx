import { useState } from 'react';
import { Edit, Trash2, Search, ShieldCommand } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ManageUsers() {
  const [users] = useState([
    { id: 1, name: 'Admin Supremo', email: 'admin@eshop.com', role: 'admin', status: 'active' },
    { id: 2, name: 'Client User', email: 'client@eshop.com', role: 'client', status: 'active' },
    { id: 3, name: 'Bad Guy', email: 'spammer@eshop.com', role: 'client', status: 'blocked' }
  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Manage Users</h1>
        <p>Control user accounts and roles.</p>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>
                    <div style={{ fontWeight: 600 }}>{u.name}</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>{u.email}</div>
                  </td>
                  <td>
                    {u.role === 'admin' ? 
                      <span className="badge badge-info"><ShieldCommand size={12} style={{ display: 'inline', marginRight: 4 }}/> Admin</span> : 
                      <span className="badge" style={{ background: 'var(--bg3)' }}>Client</span>
                    }
                  </td>
                  <td>
                    <span className={`badge badge-${u.status === 'active' ? 'success' : 'error'}`}>{u.status}</span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn-icon" onClick={() => toast('Edit User', { icon: '🚧' })} style={{ color: 'var(--info)', background: 'rgba(56,189,248,0.1)', marginRight: 8 }}><Edit size={16} /></button>
                    <button className="btn-icon" onClick={() => toast('Delete User', { icon: '🚧' })} style={{ color: 'var(--error)', background: 'rgba(255,77,109,0.1)' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
