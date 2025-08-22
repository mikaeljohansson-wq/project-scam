import React from 'react';
import Dashboard from '../components/Admin/Dashboard';
import UserManagement from '../components/Admin/UserManagement';
import { AnimatedTransition } from '../components/Animations/AnimatedTransition';

const AdminView: React.FC = () => {
    return (
        <AnimatedTransition>
            <div className="admin-view">
                <h1>Admin Panel</h1>
                <Dashboard />
                <UserManagement />
            </div>
        </AnimatedTransition>
    );
};

export default AdminView;