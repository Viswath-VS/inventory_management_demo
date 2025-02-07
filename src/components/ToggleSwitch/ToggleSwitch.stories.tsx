import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Checkbox>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: 'Components/ToggleSwitch',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
    label: { control: 'text' },
  },
};

export const Default: Story = {
  args: {
    id: 'checkbox',
  },
  render: (args) => <Checkbox {...args} />,
};
export const WithLabel: Story = {
  args: {
    id: 'checkbox',
    label: 'Label',
  },
  render: (args) => <Checkbox {...args} />,
};
export const Disabled: Story = {
  args: {
    id: 'checkbox',
    disabled: true,
  },
  render: (args) => <Checkbox {...args} />,
};

export default meta;
