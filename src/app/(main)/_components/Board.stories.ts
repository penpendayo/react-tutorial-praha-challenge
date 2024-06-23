import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Board } from './Board';

const meta = {
  title: 'Board',
  component: Board,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onPlay: () => { },
    squares: Array(9).fill(null),
    xIsNext: true,
  },
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};