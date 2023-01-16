import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconLink, IconLinkColors, IconLinkProps } from './Icon-Link';
import Mumble from './icons/Mumble';

const meta: Meta = {
    title: 'Components/Icon-Link',
    component: IconLink,
    args: {
        color: IconLinkColors.SLATE,
        label: 'Icon link',
    },
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: [...Object.values(IconLinkColors)],
            },
        },
        label: {
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

const Template: Story<IconLinkProps> = (args) => (
    <IconLink {...args}>
        <Mumble />
    </IconLink>
);

export const Icon_Link = Template.bind({});
