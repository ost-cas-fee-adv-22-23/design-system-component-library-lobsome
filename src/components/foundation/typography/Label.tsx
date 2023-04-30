import React, { HTMLAttributes, ReactNode } from 'react';

export enum LabelSizes {
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl',
}

export enum LabelColors {
    SLATE = 'slate',
    VIOLET = 'violet',
    WHITE = 'white',
}

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
    size?: LabelSizes;
    color?: LabelColors;
    htmlFor?: string;
}

const labelSizes: Record<string, string[]> = {
    xl: ['text-2xl', 'leading-6'],
    l: ['text-xl', 'leading-5'],
    m: ['text-base', 'leading-4'],
    s: ['text-sm', 'leading-3'],
};

const labelColorClasses: Record<LabelColors, string[]> = {
    slate: ['text-slate-600'],
    violet: ['text-violet-600'],
    white: ['text-white'],
};

export const Label = ({ children, size = LabelSizes.m, color = LabelColors.SLATE, ...rest }: LabelProps) => {
    return (
        <label className={['font-semibold', ...labelColorClasses[color], ...labelSizes[size]].join(' ')} {...rest}>
            {children}
        </label>
    );
};
