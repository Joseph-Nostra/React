import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Checkout() {
  const { items, total, tva, clearCart } = useCart();
  const navigate = useNavigate();
  const grandTotal = total + tva;
  
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', city: '', zip: '', deliveryMethod: 'standard', paymentMethod: 'card' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) return toast.error('Cart is empty');
    
    setIsLoading(true);
    // Simulate payment & order creation
    setTimeout(() => {
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/invoice/MOCK-1001'); // fake invoice redirect
      setIsLoading(false);
    }, 1500);
  };

  if (items.length === 0) return <div className="section container" style={{ textAlign: 'center' }}><h2>Cart is empty</h2><Link to="/products">Go back to products</Link></div>;

  return (
    <div className="section container fade-in">
      <div className="page-header">
        <h1>Checkout</h1>
        <p>Complete your order.</p>
      </div>

      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Checkout Form */}
        <div style={{ flex: '1 1 600px' }}>
          <form id="checkout-form" onSubmit={handleSubmit}>
            <div style={{ background: 'var(--bg2)', padding: 32, borderRadius: 'var(--card-radius)', border: '1px solid var(--glass-border)', marginBottom: 24 }}>
              <h3 style={{ marginBottom: 24 }}>1. Shipping Information</h3>
              <div className="grid-2">
                <div className="form-group"><label className="form-label">Full Name</label><input type="text" className="input" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} /></div>
                <div className="form-group"><label className="form-label">Phone Number</label><input type="text" className="input" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} /></div>
              </div>
              <div className="form-group" style={{ marginTop: 16 }}><label className="form-label">Address</label><input type="text" className="input" required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} /></div>
              <div className="grid-2" style={{ marginTop: 16 }}>
                <div className="form-group"><label className="form-label">City</label><input type="text" className="input" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} /></div>
                <div className="form-group"><label className="form-label">Postal Code</label><input type="text" className="input" required value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})} /></div>
              </div>
            </div>

            <div style={{ background: 'var(--bg2)', padding: 32, borderRadius: 'var(--card-radius)', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ marginBottom: 24 }}>2. Payment Method</h3>
              <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: formData.paymentMethod === 'card' ? 'var(--primary)' : 'var(--bg3)', borderRadius: 12, cursor: 'pointer', transition: 'var(--transition)' }}>
                  <input type="radio" name="payment" value="card" checked={formData.paymentMethod === 'card'} onChange={e => setFormData({...formData, paymentMethod: e.target.value})} />
                  <CreditCard size={24} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Credit Card</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Pay securely with Visa, Mastercard</div>
                  </div>
                </label>
                
                {formData.paymentMethod === 'card' && (
                  <div className="grid-2 fade-in" style={{ padding: '0 16px 16px' }}>
                    <div className="form-group"><input type="text" className="input" placeholder="Card Number" required={formData.paymentMethod === 'card'} /></div>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <div className="form-group"><input type="text" className="input" placeholder="MM/YY" required={formData.paymentMethod === 'card'} /></div>
                      <div className="form-group"><input type="text" className="input" placeholder="CVC" required={formData.paymentMethod === 'card'} /></div>
                    </div>
                  </div>
                )}
                
                <label style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: formData.paymentMethod === 'cod' ? 'var(--primary)' : 'var(--bg3)', borderRadius: 12, cursor: 'pointer', transition: 'var(--transition)' }}>
                  <input type="radio" name="payment" value="cod" checked={formData.paymentMethod === 'cod'} onChange={e => setFormData({...formData, paymentMethod: e.target.value})} />
                  <Truck size={24} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Cash on Delivery</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Pay when you receive your order</div>
                  </div>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div style={{ flex: '1 1 300px', background: 'var(--bg2)', borderRadius: 'var(--card-radius)', padding: 32, border: '1px solid var(--glass-border)', position: 'sticky', top: 90 }}>
          <h3 style={{ marginBottom: 24 }}>Order Summary</h3>
          <div style={{ maxHeight: 200, overflowY: 'auto', marginBottom: 24, paddingRight: 8 }}>
            {items.map(item => (
              <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={item.image} alt={item.name} style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, width: 140, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Qty: {item.qty}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 600 }}>${(item.price * item.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="divider"></div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, color: 'var(--text-muted)' }}>
            <span>Subtotal</span><span>${total.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, color: 'var(--text-muted)' }}>
            <span>TVA (20%)</span><span>${tva.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, color: 'var(--text-muted)' }}>
            <span>Shipping</span><span style={{ color: 'var(--success)', fontWeight: 600 }}>Free</span>
          </div>
          
          <div className="divider"></div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32, fontSize: '1.4rem', fontWeight: 800 }}>
            <span>Total</span><span style={{ color: 'var(--primary-light)' }}>${grandTotal.toFixed(2)}</span>
          </div>

          <button form="checkout-form" type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={isLoading}>
            {isLoading ? 'Processing...' : <><ShieldCheck size={18} /> Confirm Order</>}
          </button>
        </div>
      </div>
    </div>
  );
}
