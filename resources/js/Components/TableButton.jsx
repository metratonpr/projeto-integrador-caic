// TableButton.jsx
import React from 'react';

export default function TableButton({ onClick, children, className }) {
    return (
        <button onClick={onClick} className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${className}`}>
            {children}
        </button>
    );
}
