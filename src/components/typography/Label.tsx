import React, { ReactNode } from 'react';

export enum LabelSizes {
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl',
}

export interface LabelProps {
    children: ReactNode;
    size: LabelSizes;
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
