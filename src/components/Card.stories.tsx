import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Card, CardProps} from "./Card";
import {Paragraph, ParagraphSizes} from "./typography/Paragraph";
import {Textarea} from "./Textarea";
import {Heading, HeadingTags} from "./typography/Heading";
import {Button, ButtonColors} from "./Button";
import Upload from "./icons/Upload";
import Send from "./icons/Send";
import {Avatar, AvatarSize} from "./Avatar";
import {IconLink, IconLinkColors} from "./Icon-Link";
import Profile from "./icons/Profile";
import Time from "./icons/Time";
import {ActionType, InteractionButton} from "./Interaction-Button";
import {Link} from "./Link";
import {Label, LabelSizes} from "./typography/Label";

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
                <Paragraph size={ParagraphSizes.m}>Verfasse deinen ersten Mumble oder folge anderen Usern!</Paragraph>
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
                <div className={'mb-1'}><Label size={LabelSizes.m}>Damian Caduff</Label></div>
                <div className={'flex space-x-5 mb-6'}>
                    <IconLink color={IconLinkColors.VIOLET} label={'damiancaduff'}><Profile/></IconLink>
                    <IconLink color={IconLinkColors.SLATE} label={'vor 17 Minuten'}><Time/></IconLink>
                </div>
                <div className={'mb-6'}><Paragraph size={ParagraphSizes.m}>Laoreet tincidunt vulputate in commodo. Sed
                    vestibulum interdum sed
                    neque.</Paragraph></div>
                <div className="flex space-x-1 mb-8">
                    <Link hasUnderline={false}>#casfee</Link>
                    <Link hasUnderline={false}>#goOST</Link>
                    <Link hasUnderline={false}>#smartive</Link>
                </div>
                <div className="flex relative -left-3 space-x-8">
                    <InteractionButton type={ActionType.REPLY} label={'Comments'}>Comments</InteractionButton>
                    <InteractionButton type={ActionType.LIKE} label={'Likes'}>Likes</InteractionButton>
                    <InteractionButton type={ActionType.SHARE} label={'Share'}>Share</InteractionButton>
                </div>
            </Card>
        </div>
    </div>
);


export const WriteCard = WriteTemplate.bind({});
export const MumbleCard = MumbleTemplate.bind({});





