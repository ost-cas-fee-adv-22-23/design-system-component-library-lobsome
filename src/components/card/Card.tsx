import React, {ReactNode} from 'react';

export interface CardProps {
    children: ReactNode;
}

export const Card = ({children}: CardProps) => {
    return (
        <div className={'bg-white px-12 py-8 relative rounded-2xl'}>
            {children}
        </div>
    );
};
