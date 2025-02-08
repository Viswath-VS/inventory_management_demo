import { Meta } from '@storybook/react';
import Loading from '.';

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Loading>;

export const Default = () => <Loading />;
