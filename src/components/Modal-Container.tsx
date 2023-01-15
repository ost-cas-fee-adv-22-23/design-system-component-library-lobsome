import React, { MouseEvent, ReactNode } from 'react';
import Cancel from './icons/Cancel';

export interface ModalContainerProps {
    title: string;
    onCancel: (e: MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
}

export const ModalContainer = ({ title, onCancel, children, ...rest}: ModalContainerProps) => {
    return <div className={['flex', 'flex-col', 'items-center', 'p-0', 'rounded-2xl'].join(' ')}>
        <div className={['flex', 'flex-row', 'justify-between', 'items-center', 'gap-2', 'py-6', 'px-8'].join(' ')}>
            <button onClick={onCancel}>
                <Cancel />
            </button>
        </div>
        <div>{children}</div>
        <div className={['flex', 'items-center', 'gap-4'].join(' ')}>
        </div>
    </div>;
};
