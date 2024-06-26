import type { Meta } from '@storybook/react';
import { CartProducts } from './CartProducts';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CartProducts> = {
  title: 'ShopProduct Сarteus',
  component: CartProducts,
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    image:
      'https://img2.freepng.ru/20180806/siu/kisspng-laptop-asus-zenbook-3-intel-core-i5-cebrac-5b67cb65470759.909331961533528933291.jpg',
    price: 123456,
    name: 'Товар №1',
  },
};
