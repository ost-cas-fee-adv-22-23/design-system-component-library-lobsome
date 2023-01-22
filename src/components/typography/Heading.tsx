import React, { ReactNode } from 'react';

export enum HeadingTags {
    HEADING1 = 'h1',
    HEADING2 = 'h2',
    HEADING3 = 'h3',
    HEADING4 = 'h4',
}

export enum HeadingColors {
    SLATE = 'slate',
    VIOLET = 'violet',
    WHITE = 'white',
}

export interface HeadingProps {
    tag?: HeadingTags;
    shownAs?: HeadingTags;
    children: ReactNode;
    color?: HeadingColors;
}

const headingClasses: Record<string, string[]> = {
    h1: ['text-5xl', 'font-bold'],
    h2: ['text-[40px]', 'font-bold'],
    h3: ['text-[32px]', 'font-semibold'],
    h4: ['text-2xl', 'font-semibold'],
};

const headingColorClasses: Record<HeadingColors, string[]> = {
    slate: ['text-slate-600'],
    violet: ['text-violet-600'],
    white: ['text-white'],
};

export const Heading = ({ children, tag = HeadingTags.HEADING1, color = HeadingColors.SLATE, shownAs }: HeadingProps) => {
    const headingStyle = shownAs || tag;
    // This is a workaround as of tag can not be used directly
    const CustomTag = tag;
    return <CustomTag className={['leading-125', ...headingClasses[headingStyle], ...headingColorClasses[color]].join(' ')}>{children}</CustomTag>;
};
