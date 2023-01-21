import React from 'react';
import {Meta, Story} from '@storybook/react';
import {HeaderControl, HeaderControlProps} from "./Header-Control";

const meta: Meta = {
    title: 'Components/Header Control',
    component: HeaderControl,

};

export default meta;

const Template: Story<HeaderControlProps> = (args) =>(
    <div className={'bg-violet-600 max-w-fit'}>
            <div className={'p-2'}>
                <h1>Hello world</h1>
            </div>
    </div>
)

export const Settings = Template.bind({});
Settings.args = {};

export const Logout = Template.bind({});
Logout.args = {};

