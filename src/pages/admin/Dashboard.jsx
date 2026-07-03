import { Package, Users, ShoppingBag, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement
);

ChartJS.defaults.color = '#8892b0';
ChartJS.defaults.borderColor = 'rgba(255,255,255,0.05)';

export default function Dashboard() {
  // Mock Data
  const stats = [
    { label: 'Total Revenue', value: '$45,231', icon: <DollarSign size={24} />, color: 'var(--primary)', trend: '+12.5%', isUp: true },
    { label: 'Orders', value: '1,245', icon: <ShoppingBag size={24} />, color: 'var(--success)', trend: '+5.2%', isUp: true },
    { label: 'Products', value: '342', icon: <Package size={24} />, color: 'var(--warning)', trend: '-1.4%', isUp: false },
    { label: 'Customers', value: '8,430', icon: <Users size={24} />, color: 'var(--info)', trend: '+18.2%', isUp: true },
  ];

  const revData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Revenue ($)',
      data: [35000, 41000, 38000, 45000, 52000, 48000, 56000],
      borderColor: '#6c63ff',
      backgroundColor: 'rgba(108,99,255,0.2)',
      tension: 0.4, fill: true
    }]
  };

  const salesData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Sales',
      data: [120, 190, 150, 220, 180, 250, 210],
      backgroundColor: '#43e97b'
    }]
  };

  const topProductsData = {
    labels: ['Headphones', 'Smart Watch', 'Keyboard'],
    datasets: [{
      data: [300, 150, 100],
      backgroundColor: ['#6c63ff', '#43e97b', '#f7971e'],
      borderWidth: 0
    }]
  };

  return (
    <div>
      <div className="page-header">
        <h1>Admin Dashboard</h1>
        <p>Overview of store performance</p>
      </div>

      <div className="grid-4" style={{ marginBottom: 40 }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon" style={{ background: `${s.color}22`, color: s.color }}>
              {s.icon}
            </div>
            <div>
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
              <div className={`trend ${s.isUp ? 'trend-up' : 'trend-down'}`}>
                {s.isUp ? <TrendingUp size={14} style={{ display: 'inline', marginRight: 4 }} /> : <TrendingDown size={14} style={{ display: 'inline', marginRight: 4 }} />}
                {s.trend} from last month
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginBottom: 40 }}>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ marginBottom: 20 }}>Revenue Overview</h3>
          <div style={{ height: 300 }}>
            <Line data={revData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ marginBottom: 20 }}>Weekly Sales</h3>
          <div style={{ height: 300 }}>
            <Bar data={salesData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ marginBottom: 20 }}>Top Products</h3>
          <div style={{ height: 300, display: 'flex', justifyContent: 'center' }}>
            <Doughnut data={topProductsData} options={{ maintainAspectRatio: false, cutout: '70%' }} />
          </div>
        </div>
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ marginBottom: 20 }}>Recent Orders</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4,5].map(i => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>#MOCK-100{i}</td>
                    <td>Jane Doe</td>
                    <td style={{ fontWeight: 600, color: 'var(--primary-light)' }}>$125.00</td>
                    <td><span className="badge badge-success">Delivered</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
