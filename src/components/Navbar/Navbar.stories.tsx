import React from 'react';
import Navbar from '.';
import { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
type StoryProps = React.ComponentProps<typeof Navbar>;
type Story = StoryObj<StoryProps>;
const meta: Meta<StoryProps> = {
  component: Navbar,
  title: 'Components/Navbar',
};

export const Default: Story = {
  args: {},
  render: (args) => (
    <Provider store={store}>
      <Navbar {...args} />
    </Provider>
  ),
};

export default meta;
