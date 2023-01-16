import React from 'react';
import {Meta, Story} from '@storybook/react';
import {InteractionButton, InteractionButtonProps} from './Interaction-Button';

const meta: Meta = {
    title: 'Components/Interaction Button',
    component: InteractionButton,
    argTypes: {
        onClick: {action: 'clicked'},
        children: {
            defaultValue: 'Default Text',
            control: 'text',
        },
    },
};

export default meta;

const Template: Story<InteractionButtonProps> = ({children, ...args}) =>
    <InteractionButton {...args}>{children}</InteractionButton>;

export const Default = Template.bind({});
