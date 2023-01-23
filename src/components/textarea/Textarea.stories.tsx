import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';

const meta: Meta = {
    title: 'Components/Textarea',
    component: Textarea,
    argTypes: {
        placeholder: {
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

const Template: Story<TextareaProps> = ({ ...args }) => <Textarea {...args}></Textarea>;

export const Default = Template.bind({});
Default.storyName = 'Textarea';
