import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade on KCC. No registration, low fees.'),
  bodyText: t('Trade any token on KuCoin Community Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.orkswap-frontend.vercel.app/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'CAKE', alt: t('CAKE token') },
    ],
  },
  buttonColor: '#62D6C4',
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t(' Earn passive income with crypto.'),
  bodyText: t('Let your orks work for you! OrkSwap makes it easy to earn a passive income with crypto.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.orkswap-frontend.vercel.app/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
  buttonColor: '#FFD74E',
  textColor: '#FAF9FA',
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Orks makes our world work'),
  bodyText: t(
    'ORK token is the heart of the OrkSwap ecosystem. Buy it, win it, swap it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xD9088D9fa02b4F880eF6b71925c23F6983CCC789&chainId=321',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.orkswap-frontend.vercel.app/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      // { src: 'bottom-right', alt: t('Small 3d pancake') },
      // { src: 'top-right', alt: t('Small 3d pancake') },
      { src: 'coin', alt: t('ORK token') },
      // { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
  buttonColor: '#62D6C4',
})
