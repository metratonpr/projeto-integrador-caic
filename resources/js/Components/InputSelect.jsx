import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function InputSelect({ type = 'text', options = [], className = '', isFocused = false, ...props }, ref) {
    const inputRef = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    const commonInputProps = {
        className: 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' + className,
        ...props,
        ref: inputRef,
    };

    if (type === 'select') {
        return (
            <select {...commonInputProps}>
                {options.map((option, index) => (
                    <option key={index} value={option.id}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }

    return <input type={type} {...commonInputProps} />;
});
