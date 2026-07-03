import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Lock, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [formData, setFormData] = useState({ password: '', password_confirmation: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      return toast.error("Passwords don't match");
    }
    setIsLoading(true);
    try {
      // submit reset password
      toast.success('Password successfully reset (Mock)');
      navigate('/login');
    } catch (err) {
      toast.error('Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page fade-in">
      <div className="auth-card">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', padding: 16, borderRadius: 20, background: 'var(--primary)', marginBottom: 20 }}>
            <Lock size={32} color="#fff" />
          </div>
          <h2>Set new password</h2>
          <p>Your new password must be different from previous used passwords.</p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="form-group">
            <label className="form-label">New Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', top: 14, left: 16, color: 'var(--text-dim)' }} />
              <input 
                type="password" name="password" className="input" placeholder="Must be at least 6 characters" required
                minLength="6" onChange={handleChange} style={{ paddingLeft: 46 }}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', top: 14, left: 16, color: 'var(--text-dim)' }} />
              <input 
                type="password" name="password_confirmation" className="input" placeholder="Confirm your new password" required
                minLength="6" onChange={handleChange} style={{ paddingLeft: 46 }}
              />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: 10 }} disabled={isLoading}>
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/login" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
}
