"use client";
import React, { useState, useEffect } from "react";

export default function UserModal({ userId, onClose }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
                if (!res.ok) 
                    throw new Error('User not found');
                    return res.json();
                })
            .then(data => setUser(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [userId]);
    return (
        <div className="modalbackground" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <h2>User Details</h2>
                <button className="close" onClick={onClose}>Close</button>

                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {user && (
                    <div>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                    </div>
                )}
            </div>

        </div>

    )
}