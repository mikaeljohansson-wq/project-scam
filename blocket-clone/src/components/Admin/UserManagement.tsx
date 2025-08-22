import React, { useState, useEffect } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await fetch(`/api/users/${userId}`, {
                    method: 'DELETE',
                });
                setUsers(users.filter(user => user.id !== userId));
            } catch (error) {
                setError(error.message);
            }
        }
    };

    const handleAddUser = async (newUser) => {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            const addedUser = await response.json();
            setUsers([...users, addedUser]);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEditUser = async (updatedUser) => {
        try {
            const response = await fetch(`/api/users/${updatedUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });
            const editedUser = await response.json();
            setUsers(users.map(user => (user.id === editedUser.id ? editedUser : user)));
        } catch (error) {
            setError(error.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>User Management</h1>
            <button onClick={() => handleAddUser({ name: 'New User', email: 'newuser@example.com' })}>
                Add User
            </button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleEditUser({ ...user, name: 'Updated Name' })}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;