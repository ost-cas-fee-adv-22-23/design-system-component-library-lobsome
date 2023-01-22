import React, { ReactNode } from 'react';

export interface LinkButtonProps extends React.HTMLProps<HTMLAnchorElement> {
    children: ReactNode;
    hasUnderline?: boolean
}

/**
 * Link Button uses <a> as Element
 */
export const Link = ({ children, hasUnderline = true, ...props }: LinkButtonProps) => {
    console.log(props);
    return (
        <a
            {...props}
            className={[
                'text-sm',
                'font-semibold',
                'text-violet-600',
                'hover:decoration-violet-200',
                'cursor-pointer',
                hasUnderline ? 'underline underline-offset-4' : ''
            ].join(' ')}
        >
            {children}
        </a>
    );
};
