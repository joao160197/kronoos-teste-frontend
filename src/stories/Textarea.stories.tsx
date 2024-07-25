import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Pre-filled text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled textarea',
};