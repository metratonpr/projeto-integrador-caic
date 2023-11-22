// TableHeader.jsx
import React from 'react';

export default function TableHeader({ children }) {
    return (
        <thead className="text-xs bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            {children}
        </thead>
    );
}
