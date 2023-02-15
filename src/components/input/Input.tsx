import React, { InputHTMLAttributes, ReactNode, useId } from 'react';
import Cancel from '../icon/icons/Cancel';
import { Label } from '../foundation/typography/Label';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    children?: ReactNode;
    errorMessage?: string | null | undefined;
}

export const Input = ({ label, children, errorMessage, ...rest }: InputProps) => {
    const id = useId();
    return (
        <div className="font-semibold">
            {label && <Label htmlFor={id}>{label}</Label>}
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
                        'w-full',
                        errorMessage
                            ? 'border-red-600 focus:outline-red-600 hover:border-red-600'
                            : 'hover:border-violet-600 focus:outline-violet-600',
                    ].join(' ')}
                    {...rest}
                />
                {children && !errorMessage && <span className="-ml-9 text-slate-600">{children}</span>}
                {errorMessage && (
                    <span className="-ml-9 text-red-600">
                        <Cancel />
                    </span>
                )}
            </div>
            {errorMessage && <p className="text-red-600 text-xs pt-2 font-medium text-right leading-3">{errorMessage}</p>}
        </div>
    );
};
