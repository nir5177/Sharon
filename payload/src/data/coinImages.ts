export interface Coin {
  id: string;
  denomination: number;
  label: string;
  size: number;
  image: ReturnType<typeof require>;
}

export const COINS: Coin[] = [
  {
    id: 'half',
    denomination: 0.5,
    label: '½',
    size: 52,
    image: require('../../assets/coins/coin_half.png'),
  },
  {
    id: 'one',
    denomination: 1,
    label: '1',
    size: 58,
    image: require('../../assets/coins/coin_1.png'),
  },
  {
    id: 'two',
    denomination: 2,
    label: '2',
    size: 64,
    image: require('../../assets/coins/coin_2.png'),
  },
  {
    id: 'five',
    denomination: 5,
    label: '5',
    size: 72,
    image: require('../../assets/coins/coin_5.png'),
  },
  {
    id: 'ten',
    denomination: 10,
    label: '10',
    size: 80,
    image: require('../../assets/coins/coin_10.png'),
  },
];
