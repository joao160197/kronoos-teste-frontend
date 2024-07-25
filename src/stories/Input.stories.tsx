
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

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
  placeholder: 'Disabled input',
};
