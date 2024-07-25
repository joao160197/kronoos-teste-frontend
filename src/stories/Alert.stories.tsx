import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: Story = (args) => (
  <Alert {...args}>
    <AlertTitle>Alert Title</AlertTitle>
    <AlertDescription>This is an alert description.</AlertDescription>
  </Alert>
);

export const Default = Template.bind({});
Default.args = {
  className: 'bg-lime-200 rounded-2xl p-10 w-80 mt-4',
};