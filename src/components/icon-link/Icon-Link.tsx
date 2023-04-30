import React, {ReactNode} from 'react';

export enum IconLinkColors {
    SLATE = 'slate',

    VIOLET = 'violet',
}

export interface IconLinkProps extends React.HTMLProps<HTMLDivElement> {
    color: IconLinkColors;
    label: string;
    children: ReactNode;
}

const typeClassNames: Record<string, string[]> = {
    slate: ['text-slate-400', 'hover:text-slate-600'],
    violet: ['text-violet-600', 'hover:text-violet-900'],
};

export const IconLink = ({ color = IconLinkColors.SLATE, children, label, ...rest }: IconLinkProps) => {
    return (
        <div
            className={[
                'transition-all',
                'ease-in-out',
                'duration-350',
                'flex',
                'flex-row',
                'items-center',
                'p-0',
                'gap-1',
                'font-semibold',
                'text-sm',
                'leading-[14px]',
                'cursor-pointer',
                ...typeClassNames[color],
            ].join(' ')}
            {...rest}
        >
            <span>{children}</span>
            {label}
        </div>
    );
};
