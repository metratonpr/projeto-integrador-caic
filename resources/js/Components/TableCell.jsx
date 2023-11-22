// TableCell.jsx
import React from 'react';

export default function TableCell({ children, style }) {
    return <td className="px-6 py-4 text-gray-900 border dark:border-gray-600" style={style}>{children}</td>;
}
