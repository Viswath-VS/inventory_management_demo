import React from 'react';
import { Button } from './index';
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

export default meta;
