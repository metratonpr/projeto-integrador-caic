// DataTable.jsx
import React from 'react';

export default function DataTable({ children }) {
    return (
        <table className="w-full text-sm text-left rtl:text-right border-collapse border">
            {children}
        </table>
    );
}
