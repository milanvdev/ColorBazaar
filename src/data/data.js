import Entypo from 'react-native-vector-icons/Entypo';

export const balanceCard = [
  {
    id: 1,
    text: 'Wallet',
    icon: <Entypo name="wallet" size={35} color="black" />,
    route: 'WalletScreen',
  },
  {
    id: 2,
    text: 'Deposit',
    icon: <Entypo name="wallet" size={35} color="black" />,
    route: 'Deposit',
  },
  {
    id: 3,
    text: 'Withdraw',
    icon: <Entypo name="wallet" size={35} color="black" />,
    route: 'Withdraw',
  },
];

export const gamingCard = [
  [
    {id: '1', title: 'Popular'},
    {id: '2', title: 'Lottery'},
  ],
  [
    {id: '3', title: 'Casino'},
    {id: '4', title: 'Slots'},
    {id: '5', title: 'Sports'},
  ],
  [
    {id: '6', title: 'Rummy'},
    {id: '7', title: 'Fishing'},
    {id: '8', title: 'Originals'},
  ],
];

export const lotteryGameCard = [
  [
    {id: '1', title: 'Win Go', route: 'WinGo'},
    {id: '2', title: 'K3'},
  ],
  [
    {id: '3', title: '5D'},
    {id: '4', title: 'Trx Win Go'},
  ],
];
