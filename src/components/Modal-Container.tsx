import React, { MouseEvent, ReactNode } from 'react';
import Cancel from './icons/Cancel';
import { Button, ButtonColors } from './Button';
import Checkmark from './icons/Checkmark';

export interface ModalContainerProps {
    title: string;
    cancelLabel?: string;
    confirmLabel?: string;
    onCancel?: (e: MouseEvent<HTMLButtonElement>) => void;
    onSave?: (e: MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
}

export const ModalContainer = ({ title, onCancel, onSave, children, cancelLabel = 'Cancel', confirmLabel = 'Save' }: ModalContainerProps) => {
    return (
        <div className={['flex', 'flex-col', 'items-center', 'p-0', 'rounded-2xl', 'w-[650px]', 'border-2', 'border-slate-200'].join(' ')}>
            <div
                className={[
                    'bg-violet-600',
                    'flex',
                    'flex-row',
                    'justify-between',
                    'items-center',
                    'gap-2',
                    'py-6',
                    'px-8',
                    'rounded-t-2xl',
                    'text-white',
                    'w-full',
                    'font-semibold',
                    'text-[32px]',
                    'leading-125'
                ].join(' ')}
            >
                {title}
                <button onClick={onCancel}>
                    <Cancel />
                </button>
            </div>
            <div className={['p-8'].join(' ')}>
                <div>{children}</div>
                <div className={['flex', 'items-center', 'gap-4', 'pt-8'].join(' ')}>
                    <Button label={cancelLabel} onClick={onCancel} fullWidth={true}>
                        <Cancel />
                    </Button>
                    <Button label={confirmLabel} color={ButtonColors.VIOLET} onClick={onSave} fullWidth={true}>
                        <Checkmark />
                    </Button>
                </div>
            </div>
        </div>
    );
};
