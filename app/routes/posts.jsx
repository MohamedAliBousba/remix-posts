import React from 'react'
import { Outlet } from 'remix';

const posts = () => {
    return (
        <div className="container mt-3">
            <Outlet />
        </div>
    )
}

export default posts
