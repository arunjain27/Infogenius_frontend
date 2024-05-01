import { Navigate } from 'react-router-dom';

const Protected= ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        // User not authenticated
        return <Navigate to="/signin" replace />;
    }

    return children;
};