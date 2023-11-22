// TableRow.jsx
import React from 'react';

export default function TableRow({ children }) {
    return <tr className="bg-white dark:bg-gray-800 border dark:border-gray-600">{children}</tr>;
}
