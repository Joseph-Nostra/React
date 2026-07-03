import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ManagePayments() {
  const [payments] = useState([
    { id: 'TXN-A1B2', orderId: 'MOCK-1001', amount: 125.00, method: 'Card', status: 'completed', date: '2026-07-03' },
    { id: 'TXN-C3D4', orderId: 'MOCK-1002', amount: 450.50, method: 'COD', status: 'pending', date: '2026-07-01' }
  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Manage Payments</h1>
        <p>Review customer transactions.</p>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Order Ref</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(p => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600 }}>{p.id}</td>
                  <td style={{ color: 'var(--primary-light)' }}>#{p.orderId}</td>
                  <td>{p.method}</td>
                  <td style={{ fontWeight: 600 }}>${p.amount.toFixed(2)}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{p.date}</td>
                  <td><span className={`badge badge-${p.status === 'completed' ? 'success' : 'warning'}`}>{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
