import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <div className="stats">
                <div className="stat-item">
                    <h2>Total Users</h2>
                    <p>150</p>
                </div>
                <div className="stat-item">
                    <h2>Total Listings</h2>
                    <p>75</p>
                </div>
                <div className="stat-item">
                    <h2>Active Listings</h2>
                    <p>50</p>
                </div>
            </div>
            <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/admin/users">User Management</Link></li>
                    <li><Link to="/admin/listings">Manage Listings</Link></li>
                    <li><Link to="/admin/reports">View Reports</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;