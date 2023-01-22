import React, {ReactNode} from 'react';


export interface HeaderControlProps {
    label: string;
    children: ReactNode;
}


export const HeaderControl = ({ children, label, ...props }: HeaderControlProps) => {
    return (
        <div>
            <div>{children}</div>
            <h1>{label}</h1>

        </div>
    );
};
