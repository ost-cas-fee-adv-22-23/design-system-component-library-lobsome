import React, { ReactNode } from 'react';

export interface LabelProps {
    children: ReactNode;
    size: 'xl' | 'l' | 'm' | 's';
}

const labelSizes: Record<string, string[]> = {
    xl: ['text-2xl', 'leading-6'],
    l: ['text-xl', 'leading-5'],
    m: ['text-base', 'leading-4'],
    s: ['text-sm', 'leading-3'],
};

export const Label = ({ children, size }: LabelProps) => {
    return <div className={['font-semibold', 'text-slate-600', ...labelSizes[size]].join(' ')}>{children}</div>;
};
