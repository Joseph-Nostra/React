import { useState } from 'react';
import toast from 'react-hot-toast';
import { Save } from 'lucide-react';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    storeName: 'E-Shop Platform',
    contactEmail: 'contact@eshop.com',
    currency: 'USD ($)',
    taxRate: 20,
    maintenanceMode: false
  });

  const handleSave = (e) => {
    e.preventDefault();
    toast.success('Store settings updated successfully!');
  };

  return (
    <div style={{ maxWidth: 800 }}>
      <div className="page-header">
        <h1>Store Settings</h1>
        <p>Configure global platform settings.</p>
      </div>

      <div className="card" style={{ padding: 32 }}>
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Store Name</label>
              <input type="text" className="input" value={settings.storeName} onChange={e => setSettings({...settings, storeName: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">Contact Email</label>
              <input type="email" className="input" value={settings.contactEmail} onChange={e => setSettings({...settings, contactEmail: e.target.value})} required />
            </div>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Currency</label>
              <select className="input" value={settings.currency} onChange={e => setSettings({...settings, currency: e.target.value})}>
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Default Tax Rate (%)</label>
              <input type="number" className="input" value={settings.taxRate} onChange={e => setSettings({...settings, taxRate: e.target.value})} />
            </div>
          </div>

          <div style={{ padding: 16, background: 'var(--bg3)', borderRadius: 12, border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Maintenance Mode</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Disable client ordering and display a maintenance screen.</div>
            </div>
            <label className="switch" style={{ position: 'relative', display: 'inline-block', width: 44, height: 24 }}>
              <input type="checkbox" checked={settings.maintenanceMode} onChange={e => setSettings({...settings, maintenanceMode: e.target.checked})} style={{ opacity: 0, width: 0, height: 0 }} />
              <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: settings.maintenanceMode ? 'var(--error)' : 'var(--text-muted)', transition: '.4s', borderRadius: 34 }}></span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-end', marginTop: 16 }}>
            <Save size={18} /> Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}
