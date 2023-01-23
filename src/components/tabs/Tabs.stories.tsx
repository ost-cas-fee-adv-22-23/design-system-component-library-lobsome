import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Item, Tabs, TabsProps } from './Tabs';
import { useArgs } from '@storybook/addons';

const meta: Meta = {
    title: 'Components/Tabs',
    component: Tabs,
    args: {
        activeId: 1,
        items: [
            { id: 1, label: 'Meine Mumbles' },
            { id: 2, label: 'Deine Likes' },
        ],
    },
};

export default meta;

const Template: Story<TabsProps> = (args) => {
    const [{}, updateArgs] = useArgs();
    const handleItemChange = (item: Item) => updateArgs({ activeId: item.id });
    return <Tabs items={args.items} onChange={handleItemChange} activeId={args.activeId} />;
};

export const Default = Template.bind({});
