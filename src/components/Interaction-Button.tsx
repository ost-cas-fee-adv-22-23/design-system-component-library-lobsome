import React, {HTMLAttributes, ReactNode} from 'react';
import Heart from './icons/Heart';
import Reply from './icons/Reply';
import Share from './icons/Share';
import HeartFilled from "./icons/HeartFilled";
import ReplyFilled from "./icons/ReplyFilled";

export enum ActionType {
    LIKE = 'like',
    SHARE = 'share',
    REPLY = 'reply',
}

export interface InteractionButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    label: string;
    count?: number;
    active?: boolean;
    type: ActionType;
}

const typeClasses: Record<ActionType, Record<'active' | 'inactive', string[]>> = {
    share: {
        active: ['hover:bg-slate-100'],
        inactive: ['hover:bg-slate-100'],
    },
    like: {
        active: ['hover:bg-pink-50', 'hover:text-pink-600', 'text-pink-900'],
        inactive: ['hover:bg-pink-50', 'hover:text-pink-600'],
    },
    reply: {
        active: ['hover:bg-violet-50', 'hover:text-violet-600'],
        inactive: ['hover:bg-violet-50', 'hover:text-violet-600'],
    },
};

function renderIcon(type: ActionType, active: boolean): ReactNode {
    switch (type) {
        case ActionType.LIKE:
            return active ? <HeartFilled className={active && 'text-pink-500'}/> : <Heart/>;
        case ActionType.REPLY:
            return active ? <ReplyFilled className={active && 'text-violet-500'}/> : <Reply/>;
        case ActionType.SHARE:
            return <Share/>;
    }

    return <></>;
}

/**
 * Primary UI component for user interaction
 */
export const InteractionButton = ({children, type, active = false, count = 0, ...props}: InteractionButtonProps) => {
    return (
        <button
            {...props}
            className={[
                'flex',
                'flex-row',
                'items-center',
                'gap-2',
                'text-slate-600',
                'py-2',
                'px-3',
                'rounded-md',
                'hover:rounded-2xl',
                'font-semibold',
                'text-base',
                'leading-none',
                ...typeClasses[type][active ? 'active' : 'inactive'],
            ].join(' ')}
        >
            {renderIcon(type, active)}
            {count > 0 && <span>{count}</span>}
            {children}
        </button>
    );
};
