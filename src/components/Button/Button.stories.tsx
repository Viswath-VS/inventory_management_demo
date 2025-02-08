import React from 'react';
import Button from '.';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

type StoryProps = React.ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: 'centered',
  },
};
type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: 'filled',
    size: 'md',
    disabled: false,
  },
  render: (args) => <Button {...args}>Primary</Button>,
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
    disabled: false,
  },
  render: (args) => <Button {...args}>Secondary</Button>,
};

export const Text: Story = {
  args: {
    variant: 'text',
    size: 'md',
    disabled: false,
  },
  render: (args) => <Button {...args}>Text Button</Button>,
};

export default meta;
