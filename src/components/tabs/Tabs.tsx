import React from 'react';

export interface TabsProps {
    items: Item[];
    onChange: (item: Item) => void;
    activeId: string | number;
}

export interface Item {
    id: string | number;
    label: string;
}

export const Tabs = ({ items, activeId, onChange }: TabsProps) => {
    return (
        <div className={['bg-slate-200', 'rounded-md', 'p-1', 'w-fit'].join(' ')}>
            <ul className={'flex flex-row'}>
                {items.map((item: Item) => (
                    <li
                        key={item.id}
                        onClick={() => onChange(item)}
                        className={[
                            'rounded-md',
                            'cursor-pointer',
                            'transition',
                            'py-2',
                            'px-3',
                            item.id === activeId ? 'bg-white text-violet-600 hover:text-violet-600' : 'text-slate-600 hover:text-slate-800',
                        ].join(' ')}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
