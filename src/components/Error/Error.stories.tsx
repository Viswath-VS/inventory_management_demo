import { Meta, StoryObj } from '@storybook/react';
import Error from '.';

type StoryProps = React.ComponentProps<typeof Error>;
type Story = StoryObj<StoryProps>;
export default {
  title: 'Components/Error',
  component: Error,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    message: { control: 'text' },
  },
} as Meta<typeof Error>;

export const Default: Story = {
  render: (args) => <Error {...args} />,
};

export const WithMessage: Story = {
  args: {
    message: 'An error occurred',
  },
  render: (args) => <Error {...args} />,
};
