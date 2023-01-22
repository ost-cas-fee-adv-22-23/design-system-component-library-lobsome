import React, { HTMLAttributes } from 'react';

export enum AvatarSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
    size?: AvatarSize;
    src: string;
    alt?: string;
    showBorder?: boolean;
}

const avatarClasses: Record<string, string[]> = {
    s: ['w-10', 'h-10'],
    m: ['w-16', 'h-16'],
    l: ['w-24', 'h-24'],
    xl: ['w-40', 'h-40'],
};

export const Avatar = ({ size = AvatarSize.M, src, alt, showBorder = false, ...props }: AvatarProps) => {
    return (
        <div className={['inline-block', 'overflow-hidden', 'rounded-full', showBorder && 'border-[6px] border-slate-100'].join(' ')}>
            <img
                className={[
                    'rounded-full bg-violet-200',
                    'hover:scale-110',
                    'transition',
                    'duration-300',
                    'ease-in-out',
                    ...avatarClasses[size],
                ].join(' ')}
                src={src}
                alt={alt}
                {...props}
            />
        </div>
    );
};
