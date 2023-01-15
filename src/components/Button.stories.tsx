import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonColors, ButtonProps, ButtonSizes } from './Button';
import Heart from "./icons/Heart";

const meta: Meta = {
    title: 'Button',
    component: Button,
    args: {
        label: 'Button Test',
        size: ButtonSizes.M,
        color: ButtonColors.SLATE,
        showOnlyIcon: false,
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: [ButtonSizes.M, ButtonSizes.L],
            },
        },
        color: {
            control: {
                type: 'select',
                options: [ButtonColors.SLATE, ButtonColors.VIOLET, ButtonColors.GRADIENT],
            },
        },
        showOnlyIcon: {
            control: {
                type: 'boolean',
            },
        },
        children: {
            control: { type: 'text' },
        },
    },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default_Button = Template.bind({});
Default_Button.storyName = 'Default';
export const Default_button_with_icon = Template.bind({});
Default_button_with_icon.storyName = 'Default with Icon';
Default_button_with_icon.args = {
    children: <Heart />,
};

export const Icon_only = Template.bind({});
Icon_only.storyName = 'Icon';
Icon_only.args = { color: ButtonColors.SLATE, showOnlyIcon: true, children: <Heart /> };
