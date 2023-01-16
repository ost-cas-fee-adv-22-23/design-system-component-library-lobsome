import React from 'react';
import {Meta, Story} from '@storybook/react';
import {ActionType, InteractionButton, InteractionButtonProps} from './Interaction-Button';

const meta: Meta = {
    title: 'Components/Interaction Button',
    component: InteractionButton,
    argTypes: {
        children: {
            defaultValue: 'Label',
            control: 'text',
        },
        count: {
            control: {
                type: 'number'
            }
        },
        active: {
            control: {
                type: 'boolean'
            }
        }
    },
};

export default meta;

const Template: Story<InteractionButtonProps> = ({children, ...args}) =>
    <InteractionButton {...args}>{children}</InteractionButton>;

export const Like = Template.bind({});
Like.args = {
    children: 'Like',
    type: ActionType.LIKE
}

export const Reply = Template.bind({});
Reply.args = {
    children: 'Comment',
    type: ActionType.REPLY
}

export const Share = Template.bind({});
Share.args = {
    children: 'Copy Link',
    type: ActionType.SHARE
}
