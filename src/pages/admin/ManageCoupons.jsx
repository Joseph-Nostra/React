import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ManageCoupons() {
  const [coupons] = useState([
    { id: 1, code: 'SUMMER20', discount: '20%', expiry: '2026-08-31', status: 'active' },
    { id: 2, code: 'WELCOME10', discount: '10%', expiry: '2026-12-31', status: 'active' },
    { id: 3, code: 'FLASH50', discount: '50%', expiry: '2026-07-01', status: 'expired' }
  ]);

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Manage Coupons</h1>
          <p>Create discount codes for the store.</p>
        </div>
        <button className="btn btn-primary" onClick={() => toast('Modal to Add Coupon', { icon: '🚧' })}>
          <Plus size={18} /> Add Coupon
        </button>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Discount</th>
                <th>Expiry Date</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map(c => (
                <tr key={c.id}>
                  <td style={{ fontWeight: 800, color: 'var(--primary-light)', letterSpacing: 1 }}>{c.code}</td>
                  <td style={{ fontWeight: 600 }}>{c.discount}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{c.expiry}</td>
                  <td><span className={`badge badge-${c.status === 'active' ? 'success' : 'error'}`}>{c.status}</span></td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn-icon" onClick={() => toast('Edit Coupon', { icon: '🚧' })} style={{ color: 'var(--info)', background: 'rgba(56,189,248,0.1)', marginRight: 8 }}><Edit size={16} /></button>
                    <button className="btn-icon" onClick={() => toast('Delete Coupon', { icon: '🚧' })} style={{ color: 'var(--error)', background: 'rgba(255,77,109,0.1)' }}><Trash2 size={16} /></button>
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
