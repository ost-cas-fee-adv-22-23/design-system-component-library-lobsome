import React, { HTMLAttributes, ReactNode, useId } from 'react';
import Cancel from "./icons/Cancel";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    children?: ReactNode;
    errorMessage?: string | null | undefined;
}

export const Input = ({ label, children, errorMessage, ...rest }: InputProps) => {
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
                    className={[
                        'py-4',
                        'pl-4',
                        'pr-10',
                        'border',
                        'border-slate-300',
                        'rounded-lg',
                        'leading-4',
                        'hover:border-violet-600',
                        'h-12',
                        'font-medium',
                        'outline-transparent',
                        errorMessage ? 'border-red-600 focus:outline-red-600' : 'focus:outline-violet-600'
                    ].join(' ')}
                    {...rest}
                />
                {(children && !errorMessage) && <span className="-ml-9 text-slate-600">{children}</span>}
                {errorMessage && <span className="-ml-9 text-red-600"><Cancel /></span>}
            </div>
            {errorMessage && <p className="text-red-600 text-xs pt-2 font-normal">{errorMessage}</p>}
        </div>
    );
};
