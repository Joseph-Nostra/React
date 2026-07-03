import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { UserPlus, User, Mail, Lock } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', password_confirmation: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      return toast.error("Passwords don't match");
    }
    
    setIsLoading(true);
    try {
      // Mock successful registration
      // await register(formData);
      toast.success('Account created successfully (Mock)');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page fade-in">
      <div className="auth-card">
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
           <div style={{ display: 'inline-flex', padding: 16, borderRadius: 20, background: 'var(--primary)', marginBottom: 20 }}>
            <UserPlus size={32} color="#fff" />
          </div>
          <h2>Create Account</h2>
          <p>Join our premium shopping platform today.</p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', top: 14, left: 16, color: 'var(--text-dim)' }} />
              <input type="text" name="name" className="input" placeholder="John Doe" required onChange={handleChange} style={{ paddingLeft: 46 }} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', top: 14, left: 16, color: 'var(--text-dim)' }} />
              <input type="email" name="email" className="input" placeholder="Enter your email" required onChange={handleChange} style={{ paddingLeft: 46 }} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', top: 14, left: 16, color: 'var(--text-dim)' }} />
              <input type="password" name="password" className="input" placeholder="Create a password" required minLength="6" onChange={handleChange} style={{ paddingLeft: 46 }} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', top: 14, left: 16, color: 'var(--text-dim)' }} />
              <input type="password" name="password_confirmation" className="input" placeholder="Confirm your password" required minLength="6" onChange={handleChange} style={{ paddingLeft: 46 }} />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: 10 }} disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: 24, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Sign in</Link>
        </div>
      </div>
    </div>
  );
}
