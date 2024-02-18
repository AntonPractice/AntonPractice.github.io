import type { Meta,StoryObj } from '@storybook/react';

import  { Header } from './Header';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
  title: 'Headereus',
  component: Header
};

export default meta;

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    size: true,
    label: 'Headereus',
  },
};

