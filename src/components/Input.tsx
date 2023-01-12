import React, { HTMLAttributes, ReactNode, useId } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    children?: ReactNode;
}

export const Input = ({ label, children, ...rest }: InputProps) => {
    const id = useId();
    return (
        <div className="font-semibold">
            {label && (
                <label htmlFor={id} className="block mb-0 text-slate-700 text-base">
                    {label}
                </label>
            )}
            <div className="relative flex items-center">
                <input
                    type="text"
                    id={id}
                    className="py-4 pl-4 pr-10 border border-slate-300 rounded-lg leading-4 hover:border-violet-600 h-12 font-medium outline-transparent focus:outline-violet-600"
                    {...rest}
                />
                {children && <span className="-ml-9 text-slate-600">{children}</span>}
            </div>
        </div>
    );
};
