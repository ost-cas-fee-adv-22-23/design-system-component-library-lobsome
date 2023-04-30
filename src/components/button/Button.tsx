import React, { HTMLAttributes, ReactNode } from 'react';

export enum ButtonColors {
    SLATE = 'slate',
    VIOLET = 'violet',
    GRADIENT = 'gradient',
}

export enum ButtonSizes {
    M = 'm',
    L = 'l',
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    color?: ButtonColors;
    size?: ButtonSizes;

    showOnlyIcon?: boolean;
    label?: string;
    fullWidth?: boolean;
}

const typeClasses: Record<string, string[]> = {
    slate: [
        'bg-slate-600',
        'hover:bg-slate-700',
        'hover:outline',
        'hover:outline-slate-100',
        'hover:outline-[3px]',
        'active:outline-slate-200',
    ],
    violet: [
        'bg-violet-600',
        'hover:bg-violet-700',
        'hover:outline',
        'hover:outline-violet-100',
        'hover:outline-[3px]',
        'active:outline-violet-200',
    ],
    gradient: [
        'bg-gradient-50',
        'hover:bg-gradient-70',
        'from-pink-500',
        'to-violet-600',
        'hover:outline',
        'hover:outline-violet-100',
        'hover:outline-[3px]',
        'active:outline-violet-200',
    ],
};

const buttonSizes: Record<string, string[]> = {
    m: ['gap-2', 'p-3'],
    l: ['gap-3', 'py-4', 'px-6'],
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    children,
    color = ButtonColors.SLATE,
    size = ButtonSizes.M,
    showOnlyIcon = false,
    label,
    fullWidth = false,
    ...props
}: ButtonProps) => {
    const sizeOptions = showOnlyIcon && size === ButtonSizes.L ? ['gap-3', 'p-3'] : buttonSizes[size];

    return (
        <button
            className={[
                'flex',
                'flex-row',
                'items-center',
                'justify-center',
                'text-white',
                'font-semibold',
                'leading-4',
                showOnlyIcon ? 'rounded-3xl' : 'rounded-lg',
                fullWidth && 'w-full',
                ...typeClasses[color],
                ...sizeOptions,
            ].join(' ')}
            {...props}
        >
            {showOnlyIcon ? '' : label}
            {children}
        </button>
    );
};
