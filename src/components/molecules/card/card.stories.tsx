import Cards from './card'

import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';
import book from '../../../assets/1.png'

interface Props{
    image:string;
    title:string;
    author:string;
    time:string;
    read:string;
}

export default {
  title: "molecules/card",
  component: Cards,
} as ComponentMeta<typeof Cards>;



const Template:ComponentStory<typeof Cards> = (args) => <Cards  {...args}/>;


export const BookCard = Template.bind({});

BookCard.args={
    title:'Bring Your Human to Work',
    author:'Ericson',
    time:'13-mute read',
    read:'1.9k reads',
    image:book
}

