import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Card, CardProps} from "./Card";
import {Paragraph} from "./typography/Paragraph";
import {Textarea} from "./Textarea";
import {Heading, HeadingTags} from "./typography/Heading";
import {Button, ButtonColors} from "./Button";
import Upload from "./icons/Upload";
import Send from "./icons/Send";
import {Avatar, AvatarSize} from "./Avatar";

const meta: Meta = {
    title: 'Components/Cards',
    component: Card,
};

export default meta;

const WriteTemplate: Story<CardProps> = (args) => (
    <div className={'bg-slate-100 p-10'}>
        <div className={'w-[680px]'}>
            <Card {...args}>


                <Heading tag={HeadingTags.HEADING3}>Voll leer hier! 😲</Heading>
                <Paragraph size={'m'}>Verfasse deinen ersten Mumble oder folge anderen Usern!</Paragraph>

                <div className={'mt-8 mb-4'}><Textarea placeholder={'Und was meinst du dazu?'}></Textarea></div>

                <div className={'flex space-x-5'}>
                    <Button color={ButtonColors.SLATE} fullWidth={true}>Bild hochladen <Upload/></Button>
                    <Button color={ButtonColors.VIOLET} fullWidth={true}>Absenden <Send/></Button>
                </div>

            </Card>
        </div>

    </div>
);

const MumbleTemplate: Story<CardProps> = (args) => (
    <div className={'bg-slate-100 p-10'}>
        <div className={'w-[680px]'}>
            <Card {...args}>

                <div className="absolute -left-8 top-4">
                    <Avatar
                        size={AvatarSize.M}
                        src="https://i.pravatar.cc/"
                        alt="Portrait of Matilda"
                        showBorder={true}
                    />
                </div>

                <Paragraph size={"l"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid at delectus dolor doloremque facilis fugit illo labore laudantium modi nesciunt nobis nostrum, officiis quae quibusdam tempore vero voluptate.</Paragraph>
            </Card>
        </div>

    </div>
);


export const WriteCard = WriteTemplate.bind({});
export const MumbleCard = MumbleTemplate.bind({});





