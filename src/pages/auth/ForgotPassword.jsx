import { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Mail, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { forgotPassword } from '../../services/api';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // await forgotPassword({ email });
      setIsSent(true);
      toast.success('Reset link sent to your email (Mock)');
    } catch (err) {
      toast.error('Failed to send reset link');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page fade-in">
      <div className="auth-card">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', padding: 16, borderRadius: 20, background: 'var(--primary)', marginBottom: 20 }}>
            <KeyRound size={32} color="#fff" />
          </div>
          <h2>Forgot Password?</h2>
          <p>No worries, we'll send you reset instructions.</p>
        </div>
        
        {!isSent ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', top: 14, left: 16, color: 'var(--text-dim)' }} />
                <input 
                  type="email" className="input" placeholder="Enter your email" required
                  value={email} onChange={e => setEmail(e.target.value)}
                  style={{ paddingLeft: 46 }}
                />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: 10 }} disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Reset Password'}
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>We sent a password reset link to <strong>{email}</strong></p>
            <button className="btn btn-primary" onClick={() => setIsSent(false)} style={{ marginTop: 20 }}>
              Try another email
            </button>
          </div>
        )}
        
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/login" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
}
