import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, LinkButtonProps } from './Link';

const meta: Meta = {
    title: 'Components/Link',
    component: Link,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            defaultValue: 'Hello Link',
            control: 'text',
        },
        hasUnderline: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

const Template: Story<LinkButtonProps> = ({ children, ...args }) => <Link {...args}>{children}</Link>;

export const Default = Template.bind({});

export const ExternalLink = Template.bind({});
ExternalLink.args = { href: 'https://lobos.ch', target: '_blank' };
