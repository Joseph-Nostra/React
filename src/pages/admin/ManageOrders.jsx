import { useState } from 'react';
import { Eye, Edit, Trash2, Search } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ManageOrders() {
  const [orders] = useState([
    { id: 'MOCK-1001', customer: 'Jane Doe', total: 125.00, date: '2026-07-03', status: 'shipped' },
    { id: 'MOCK-1002', customer: 'John Smith', total: 450.50, date: '2026-07-01', status: 'processing' },
    { id: 'MOCK-1003', customer: 'Alice Webb', total: 89.99, date: '2026-06-29', status: 'delivered' }
  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Manage Orders</h1>
        <p>View and update customer records.</p>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Date</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 600 }}>#{o.id}</td>
                  <td>{o.customer}</td>
                  <td style={{ fontWeight: 600, color: 'var(--primary-light)' }}>${o.total.toFixed(2)}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{o.date}</td>
                  <td>
                    <span className={`badge badge-${o.status === 'delivered' ? 'success' : o.status === 'shipped' ? 'info' : 'warning'}`}>
                      {o.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn-icon" onClick={() => toast('View Order Details', { icon: '🚧' })} style={{ color: 'var(--primary)', background: 'rgba(108,99,255,0.1)', marginRight: 8 }}><Eye size={16} /></button>
                    <button className="btn-icon" onClick={() => toast('Update Status', { icon: '🚧' })} style={{ color: 'var(--info)', background: 'rgba(56,189,248,0.1)' }}><Edit size={16} /></button>
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
