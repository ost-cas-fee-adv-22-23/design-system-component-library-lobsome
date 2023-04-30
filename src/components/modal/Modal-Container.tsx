import React, { MouseEvent, ReactNode } from 'react';
import Cancel from '../icon/icons/Cancel';
import { Button, ButtonColors } from '../button/Button';
import { Heading, HeadingColors, HeadingTags } from '../foundation/typography/Heading';

export interface ModalContainerProps {
    title: string;
    cancelLabel?: string;
    confirmLabel?: string;
    onCancel?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    onSave?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    children?: ReactNode;
}

export const ModalContainer = ({
    title,
    onCancel,
    onSave,
    children,
    cancelLabel = 'Cancel',
    confirmLabel = 'Subscribe',
}: ModalContainerProps) => {
    return (
        <div className={['fixed', 'inset-0', 'z-10', 'overflow-y-auto'].join(' ')}>
            <div className={['fixed', 'inset-0', 'w-full', 'h-full', 'bg-black', 'opacity-40'].join(' ')} onClick={onCancel}></div>
            <div className="flex items-center min-h-screen px-4 py-8 justify-center">
                <div
                    className={['max-w-2xl', 'relative', 'flex', 'flex-col', 'items-center', 'p-0', 'rounded-2xl', 'border-2', 'border-slate-200'].join(
                        ' ',
                    )}
                >
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
                            'w-full',
                        ].join(' ')}
                    >
                        <Heading tag={HeadingTags.HEADING3} color={HeadingColors.WHITE}>
                            {title}
                        </Heading>
                        <button onClick={onCancel} className={'text-base text-white'}>
                            <Cancel />
                        </button>
                    </div>
                    <div className={['bg-white', 'p-8', 'rounded-b-2xl'].join(' ')}>
                        <div>{children}</div>
                        <div className={['flex', 'items-center', 'gap-4', 'pt-8'].join(' ')}>
                            <Button label={cancelLabel} onClick={onCancel} fullWidth={true}>
                            </Button>
                            <Button label={confirmLabel} color={ButtonColors.VIOLET} onClick={onSave} fullWidth={true}>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
