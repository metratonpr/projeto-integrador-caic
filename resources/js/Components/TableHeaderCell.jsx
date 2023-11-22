// TableHeaderCell.jsx
import React from 'react';

export default function TableHeaderCell({ children, colSpan, style }) {
    return (
        <th colSpan={colSpan} className="px-6 py-3 border dark:border-gray-600" style={style}>
            {children}
        </th>
    );
}
