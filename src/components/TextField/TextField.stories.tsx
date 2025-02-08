import { Meta, StoryObj } from '@storybook/react';
import TextField from '.';

type StoryProps = React.ComponentProps<typeof TextField>;

const meta: Meta<StoryProps> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
};
type Story = StoryObj<StoryProps>;
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text here',
  },
  render: (args) => <TextField {...args} />,
};

export default meta;
