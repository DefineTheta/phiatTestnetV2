import {
  assetsList as assetsListFromKit,
  Asset,
  assetsOrder as assetsOrderFromKit,
  STABLE_ASSETS as stableAssetsFromKit,
} from '@aave/aave-ui-kit';

// adding new tokenIcons here is easier

assetsListFromKit.push({
  name: 'PHIAT',
  symbol: 'PHIAT',
  color: '#b6509e',
  icon: 'https://phiat.io/public/images/favicon.png',
});

assetsListFromKit.push({
  name: 'TPLS',
  symbol: 'TPLS',
  color: '#b6509e',
  icon: 'https://phiat.io/public/images/pulse.svg',
});

assetsListFromKit.push({
  name: 'HEX',
  symbol: 'HEX',
  color: '#b6509e',
  icon: 'https://phiat.io/public/images/HEX.png',
});

assetsListFromKit.push({
  name: 'Hedron',
  symbol: 'HDRN',
  color: '#b6509e',
  icon: 'https://phiat.io/public/images/hedron.png',
});

assetsListFromKit.push({
  name: 'HELGO',
  symbol: 'HELGO',
  color: '#b6509e',
  icon: 'https://phiat.io/public/images/helgo2.png',
});

assetsListFromKit.push({
  name: 'PulseX',
  symbol: 'PLSX',
  color: '#b6509e',
  icon: 'https://phiat.io/public/images/pulsex.jpeg',
});

export const assetsList: Asset[] = assetsListFromKit;
export const assetsOrder: string[] = assetsOrderFromKit;
export const stableAssets: string[] = stableAssetsFromKit;
