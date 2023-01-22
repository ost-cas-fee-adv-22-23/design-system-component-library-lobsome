import React from 'react';
import {Meta, Story} from '@storybook/react';
import {HeaderControl, HeaderControlProps} from "./Header-Control";
import Settings from "../icon/icons/Settings";
import {Label, LabelColors, LabelSizes} from "../foundation/typography/Label";
import LogOut from "../icon/icons/LogOut";

const meta: Meta = {
    title: 'Components/Header Control',
    component: HeaderControl,

};

export default meta;

const SettingsTemplate: Story<HeaderControlProps> = (args) =>(
    <div className={'bg-violet-600 max-w-fit'}>
        <div className={'p-5 items-center max-w-fit'}>
            <div className={'flex items-center justify-center text-white'}><Settings/></div>
            <Label size={LabelSizes.s} color={LabelColors.WHITE}>Settings</Label>
        </div>
    </div>
)

const LogoutTemplate: Story<HeaderControlProps> = (args) =>(
    <div className={'bg-violet-600 max-w-fit'}>
        <div className={'p-5 items-center max-w-fit'}>
            <div className={'flex items-center justify-center text-white'}><LogOut/></div>
            <Label size={LabelSizes.s} color={LabelColors.WHITE}>Logout</Label>
        </div>
    </div>
)

export const SettingsControl = SettingsTemplate.bind({});
SettingsControl.args = {};

export const LogoutControl = LogoutTemplate.bind({});
LogoutControl.args = {};

