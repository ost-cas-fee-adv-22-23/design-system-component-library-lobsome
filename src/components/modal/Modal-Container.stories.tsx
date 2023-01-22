import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ModalContainer, ModalContainerProps } from './Modal-Container';

const meta: Meta = {
    title: 'Components/Modal-Container',
    component: ModalContainer,
    args: {
        title: 'Modal-Title',
        cancelLabel: 'Abbrechen',
        confirmLabel: 'Speichern',
    },
    argTypes: {
        title: {
            control: {
                type: 'text',
            },
        },
        cancelLabel: {
            control: {
                type: 'text',
            },
        },
        confirmLabel: {
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

const Template: Story<ModalContainerProps> = ({ children, ...args }) => (
    <div className={'w-[623px]'}>
        <ModalContainer {...args}>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </ModalContainer>
    </div>
);

export const Default = Template.bind({});
