import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Game } from './Game';

const meta = {
  title: 'Game',
  component: Game,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  play: async ({ canvasElement,step }) => {
    const canvas = within(canvasElement);

    const buttons =  canvas.getAllByRole('button');
    const filteredButtons = buttons.filter((button) => button.textContent === '');
    await step('左上', async () => {
      await userEvent.click(filteredButtons[0]);
    });
    await step('上真ん中', async () => {
      await userEvent.click(filteredButtons[1]);
    });
    await step('右上', async () => {
      await userEvent.click(filteredButtons[2]);
    });
    await step('左真ん中', async () => {
      await userEvent.click(filteredButtons[3]);
    });
    await step('真ん中', async () => {
      await userEvent.click(filteredButtons[4]);
    });
    await step('右真ん中', async () => {
      await userEvent.click(filteredButtons[5]);
    });
    await step('左下', async () => {
      await userEvent.click(filteredButtons[6]);
    });

   expect(canvas.getByText('Winner: X')).toBeInTheDocument();
  },
} satisfies Meta<typeof Game>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
