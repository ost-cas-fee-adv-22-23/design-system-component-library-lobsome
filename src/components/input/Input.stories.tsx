import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './Input';
import Mumble from '../icon/icons/Mumble';

const meta: Meta = {
    title: 'Components/Input',
    component: Input,
    args: {
        label: 'Label',
        placeholder: 'Placeholder'
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        errorMessage: {
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

const Template: Story<InputProps> = (args) => (
    <Input {...args}>
        <Mumble />
    </Input>
);
export const Default = Template.bind({});

export const With_Error = Template.bind({})
With_Error.args = {
    label: 'Label*',
    errorMessage: 'This field is required!'
}
