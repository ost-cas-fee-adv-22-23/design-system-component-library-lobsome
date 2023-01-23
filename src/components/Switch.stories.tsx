import React from 'react';
import {Meta, Story} from '@storybook/react';
import { SwitchProps, Tab, Tabs} from './Switch';

const meta: Meta = {
    title: 'Switch',
    component: Tabs,
};

export default meta;


const Template: Story<SwitchProps> = (args) => (
    <Tabs>
        <Tab activeTab={undefined} currentTab={undefined} setActiveTab={undefined} >Deine Mumbles</Tab>
        <Tab activeTab={undefined} currentTab={undefined} setActiveTab={undefined} >Deine Likes</Tab>
    </Tabs>

);

export const Default = Template.bind({});
