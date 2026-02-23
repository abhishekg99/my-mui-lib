import StatusBadge from '../../src/components/StatusBadge';
import  { Meta , StoryObj } from '@storybook/react';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Success: Story = {
  args: {
    label: 'Completed',
    variant: 'success',
    isLive: false,
  },
};

export const Warning: Story = {
  args: {
    label: 'Pending Review',
    variant: 'warning',
    isLive: false,
  },
};

export const LiveError: Story = {
  args: {
    label: 'System Failure',
    variant: 'error',
    isLive: true,
  },
};