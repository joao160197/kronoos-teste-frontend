import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardContent>
      <p>This is the content of the card.</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});