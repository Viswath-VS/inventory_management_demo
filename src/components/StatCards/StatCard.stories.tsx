import { Meta } from '@storybook/react';
import { ComponentProps } from 'react';
import StatCard from '.';
import { StatCardProps } from './types';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type StoryProps = ComponentProps<typeof StatCard>;

const meta: Meta<StoryProps> = {
  component: StatCard,
  title: 'Components/StatCard',
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
  },
};
const Template = ({ icon, label, value }: StatCardProps) => (
  <StatCard label={label} value={value} icon={icon} />
);

export const Default = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Default.args = {
  icon: <ShoppingCartIcon />,
  label: 'Total Product',
  value: '9000',
};

export default meta;
