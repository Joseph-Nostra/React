import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, updateQty, removeItem, total, tva } = useCart();
  const grandTotal = total + tva;

  if (items.length === 0) {
    return (
      <div className="section container fade-in" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <div style={{ display: 'inline-flex', padding: 24, borderRadius: '50%', background: 'var(--bg2)', marginBottom: 24 }}>
          <ShoppingBag size={48} color="var(--text-dim)" />
        </div>
        <h2>Your cart is empty</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn btn-primary btn-lg">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="section container fade-in">
      <div className="page-header">
        <h1>Shopping Cart</h1>
        <p>Review your items before checkout.</p>
      </div>

      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 600px' }}>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item._id}>
                    <td style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <Link to={`/product/${item._id}`}>
                        <img src={item.image} alt={item.name} style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover' }} />
                      </Link>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 4 }}>{item.name}</div>
                        <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>{item.category?.name || 'Category'}</div>
                      </div>
                    </td>
                    <td style={{ fontWeight: 600 }}>${item.price.toFixed(2)}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg3)', borderRadius: 8, border: '1px solid var(--glass-border)', width: 'fit-content' }}>
                        <button style={{ background: 'none', border: 'none', color: 'var(--text)', padding: '4px 12px', cursor: 'pointer' }} onClick={() => updateQty(item._id, item.qty - 1)}>-</button>
                        <div style={{ width: 24, textAlign: 'center', fontSize: '0.9rem' }}>{item.qty}</div>
                        <button style={{ background: 'none', border: 'none', color: 'var(--text)', padding: '4px 12px', cursor: 'pointer' }} onClick={() => updateQty(item._id, item.qty + 1)}>+</button>
                      </div>
                    </td>
                    <td style={{ fontWeight: 700, color: 'var(--primary-light)' }}>${(item.price * item.qty).toFixed(2)}</td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn-icon" style={{ color: 'var(--error)', background: 'rgba(255,77,109,0.1)' }} onClick={() => removeItem(item._id)}>
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ flex: '1 1 300px', background: 'var(--bg2)', borderRadius: 'var(--card-radius)', padding: 32, border: '1px solid var(--glass-border)', position: 'sticky', top: 90 }}>
          <h3 style={{ marginBottom: 24 }}>Order Summary</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, color: 'var(--text-muted)' }}>
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, color: 'var(--text-muted)' }}>
            <span>TVA (20%)</span>
            <span>${tva.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, color: 'var(--text-muted)' }}>
            <span>Shipping</span>
            <span style={{ color: 'var(--success)', fontWeight: 600 }}>Free</span>
          </div>
          
          <div className="divider" style={{ margin: '16px 0' }}></div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32, fontSize: '1.4rem', fontWeight: 800 }}>
            <span>Total</span>
            <span style={{ color: 'var(--primary-light)' }}>${grandTotal.toFixed(2)}</span>
          </div>

          <Link to="/checkout" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
            Proceed to Checkout <ArrowRight size={18} />
          </Link>
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <Link to="/products" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
