import { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from '.';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof ToggleSwitch>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
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
    id: 'ToggleSwitch',
  },
  render: (args) => <ToggleSwitch {...args} />,
};
export const WithLabel: Story = {
  args: {
    id: 'ToggleSwitch',
    label: 'Label',
  },
  render: (args) => <ToggleSwitch {...args} />,
};
export const Disabled: Story = {
  args: {
    id: 'ToggleSwitch',
    disabled: true,
  },
  render: (args) => <ToggleSwitch {...args} />,
};

export default meta;
