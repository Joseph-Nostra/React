import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="section container fade-in">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch!</p>
      </div>

      <div className="grid-2">
        {/* Contact info blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="card" style={{ padding: 32, display: 'flex', gap: 24, alignItems: 'center' }}>
            <div style={{ padding: 16, background: 'var(--primary)', borderRadius: '50%', color: 'white' }}>
              <Mail size={32} />
            </div>
            <div>
              <h3 style={{ marginBottom: 4 }}>Email</h3>
              <p style={{ color: 'var(--text-dim)', fontWeight: 600 }}>support@eshop.com</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We usually reply within 24 hours.</p>
            </div>
          </div>

          <div className="card" style={{ padding: 32, display: 'flex', gap: 24, alignItems: 'center' }}>
            <div style={{ padding: 16, background: 'var(--warning)', borderRadius: '50%', color: 'white' }}>
              <Phone size={32} />
            </div>
            <div>
              <h3 style={{ marginBottom: 4 }}>Phone</h3>
              <p style={{ color: 'var(--text-dim)', fontWeight: 600 }}>+1 (555) 123-4567</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mon-Fri from 8am to 6pm.</p>
            </div>
          </div>

          <div className="card" style={{ padding: 32, display: 'flex', gap: 24, alignItems: 'center' }}>
            <div style={{ padding: 16, background: 'var(--success)', borderRadius: '50%', color: 'white' }}>
              <MapPin size={32} />
            </div>
            <div>
              <h3 style={{ marginBottom: 4 }}>Office</h3>
              <p style={{ color: 'var(--text-dim)', fontWeight: 600 }}>123 Commerce St.</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Los Angeles, CA 90001, USA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card" style={{ padding: 40 }}>
          <h2 style={{ marginBottom: 24 }}>Send a Message</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input type="text" className="input" placeholder="John Doe" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input type="email" className="input" placeholder="john@example.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" className="input" placeholder="How can we help?" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="input" rows="5" placeholder="Write your message here..." required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '12px 32px' }}>
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
