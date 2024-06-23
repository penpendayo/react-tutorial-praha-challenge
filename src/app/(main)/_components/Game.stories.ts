import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Game } from './Game';

const meta = {
  title: 'Game',
  component: Game,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Game>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
