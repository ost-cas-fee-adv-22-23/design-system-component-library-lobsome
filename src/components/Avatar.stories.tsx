import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps, AvatarSize } from './Avatar';

const meta: Meta = {
    title: 'Components/Avatar',
    component: Avatar,
    args: {
        src: 'https://i.pravatar.cc/',
    },
    argTypes: {
        src: {
            control: { type: 'text' },
        },
        alt: {
            control: { type: 'text' },
        },
        size: {
            options: [AvatarSize.S, AvatarSize.M, AvatarSize.L, AvatarSize.XL],
            control: { type: 'select' },
        },
        showBorder: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: AvatarSize.S,
};

export const Medium = Template.bind({});
Medium.args = {
    size: AvatarSize.M,
};

export const Large = Template.bind({});
Large.args = {
    size: AvatarSize.L,
};

export const Extra_Large = Template.bind({});
Extra_Large.args = {
    size: AvatarSize.XL,
};

export const With_border = Template.bind({});
With_border.args = {
    size: AvatarSize.XL,
    showBorder: true,
};
