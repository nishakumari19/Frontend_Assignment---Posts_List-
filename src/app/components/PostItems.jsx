"use client";
import React, { useState } from "react";
import UserModal from "./UserModal";

export default function PostItems({ post }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>Post ID: {post.id} | User ID: {post.userId}</small>
            <button onClick={() => setOpen(true)}>View User Details</button>

            {open && (
                <UserModal userId={post.userId} onClose={() => setOpen(false)} />
            )}
        </div>
    )
}