import { Navigation } from '../../components/menu/navigation';
import messages from './messages';
import { isFeatureEnabled } from '../../helpers/config/markets-and-network-config';

export const moreMenuItems: Navigation[] = [
  {
    link: 'https://phiat.io/public/faq.html',
    title: messages.faq,
    absolute: true,
  },
  {
    link: 'https://phiat.io/public/sac.html',
    title: messages.sac,
    absolute: true,
  },
  {
    link: 'https://t.me/+_2BI2i6MFtg1N2I9',
    title: messages.tele,
    absolute: true,
  },
  {
    link: 'https://twitter.com/phiatcrypto',
    title: messages.twitter,
    absolute: true,
  },
];

export const moreMenuExtraItems: Navigation[] = [];

export const moreMenuMobileOnlyItems: Navigation[] = [];
