
import { SiCashapp } from 'react-icons/si';
import { FaCartShopping, FaPiggyBank, FaHouseChimneyUser } from 'react-icons/fa6';
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import { BsReceiptCutoff } from 'react-icons/bs';

export const transactionCategories = {
  'history': {
    name: 'Historial',
    bg: 'bg-sky-500',
    color: 'text-sky-500',
    Icon: BsReceiptCutoff,
    location: '/wallet/history',
  },
  'receive': {
    name: 'Recibir',
    bg: 'bg-green-600',
    color: 'text-green-600',
    Icon: GiReceiveMoney,
    location: '/wallet/receive',
  },
  'transfer': {
    name: 'Transferir',
    bg: 'bg-amber-600',
    color: 'text-amber-600',
    actionText: 'Transferiste',
    Icon: GiPayMoney,
    location: '/wallet/transfer',
  },
  'rental': {
    name: 'Alquiler',
    bg: 'bg-purple-600',
    color: 'text-purple-600',
    actionText: 'Pagaste un alquiler',
    Icon: FaHouseChimneyUser,
    location: '/wallet/transfer/rental',
  },
  'tax': {
    name: 'Impuestos',
    bg: 'bg-red-600',
    color: 'text-red-600',
    actionText: 'Pagaste al banco',
    Icon: FaPiggyBank,
    location: '/wallet/transfer/tax',
  },
  'buy': {
    name: 'Comprar',
    bg: 'bg-cyan-800',
    color: 'text-cyan-800',
    actionText: 'Compraste una propiedad',
    Icon: FaCartShopping,
    location: '/wallet/transfer/buy',
  },
  /*'earn': {
    name: 'Intereses',
    bg: 'bg-lime-800',
    color: 'text-lime-800',
    Icon: GiTakeMyMoney,
    location: '/wallet/earn',
  },*/
}