import { useParams, Link } from 'react-router-dom';
import { FileText, Printer, ArrowLeft } from 'lucide-react';
import { mockProducts } from '../mockData';
import toast from 'react-hot-toast';

export default function Invoice() {
  const { id } = useParams();
  
  // Fake order data for demonstration
  const order = {
    _id: id,
    date: new Date().toLocaleDateString(),
    status: 'completed',
    customer: { name: 'John Doe', email: 'john@example.com', address: '123 Fake Street, City, 10000' },
    items: mockProducts.slice(0, 2).map(p => ({ ...p, qty: 1 })),
    tva: 25.00,
    total: 125.00
  };

  const printInvoice = () => window.print();

  return (
    <div className="section container fade-in">
      <div style={{ marginBottom: 24 }}>
        <Link to="/products" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <ArrowLeft size={16} /> Continue Shopping
        </Link>
      </div>
      
      <div className="invoice-page">
        <div className="invoice-header">
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: 8 }}><span className="gradient-text">E-Shop</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>hello@eshop.com<br/>+1 (555) 123-4567<br/>Los Angeles, CA</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-light)', marginBottom: 8, letterSpacing: 2 }}>INVOICE</h1>
            <p style={{ fontWeight: 600 }}>Invoice # {order._id}</p>
            <p style={{ color: 'var(--text-muted)' }}>Date: {order.date}</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40, padding: 24, background: 'var(--bg3)', borderRadius: 'var(--card-radius)' }}>
          <div>
            <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: 1, marginBottom: 8 }}>Billed To</h4>
            <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>{order.customer.name}</p>
            <p style={{ color: 'var(--text-dim)' }}>{order.customer.email}</p>
            <p style={{ color: 'var(--text-dim)' }}>{order.customer.address}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: 1, marginBottom: 8 }}>Payment Status</h4>
            <span className="badge badge-success" style={{ fontSize: '0.9rem', padding: '6px 12px' }}>Paid</span>
          </div>
        </div>

        <table style={{ marginBottom: 40 }}>
          <thead>
            <tr>
              <th>Item</th>
              <th style={{ textAlign: 'center' }}>Qty</th>
              <th style={{ textAlign: 'right' }}>Price</th>
              <th style={{ textAlign: 'right' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map(item => (
              <tr key={item._id}>
                <td>
                  <div style={{ fontWeight: 600 }}>{item.name}</div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>{item.category?.name}</div>
                </td>
                <td style={{ textAlign: 'center' }}>{item.qty}</td>
                <td style={{ textAlign: 'right' }}>${item.price.toFixed(2)}</td>
                <td style={{ textAlign: 'right', fontWeight: 600 }}>${(item.price * item.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: 300 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, color: 'var(--text-muted)' }}>
              <span>Subtotal</span><span>${(order.total - order.tva).toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, color: 'var(--text-muted)' }}>
              <span>TVA (20%)</span><span>${order.tva.toFixed(2)}</span>
            </div>
            <div className="divider"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', fontWeight: 800 }}>
              <span>Total</span><span style={{ color: 'var(--primary-light)' }}>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="hide-on-print" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 60 }}>
          <button className="btn btn-primary" onClick={printInvoice}>
            <Printer size={18} /> Print Invoice
          </button>
          <button className="btn btn-outline" onClick={() => {toast.success('Downloading PDF...')}}>
            <FileText size={18} /> Download PDF
          </button>
        </div>
      </div>
      
      <style>{`
        @media print {
          body { background: white; color: black; }
          .navbar, .footer, .hide-on-print { display: none !important; }
          .invoice-page { box-shadow: none; border: none; padding: 0; background: white; }
          .gradient-text { color: black !important; -webkit-text-fill-color: black; }
          table th { background: #f0f0f0 !important; color: black !important; }
          .badge-success { border: 1px solid #43e97b; color: #43e97b !important; }
        }
      `}</style>
    </div>
  );
}
