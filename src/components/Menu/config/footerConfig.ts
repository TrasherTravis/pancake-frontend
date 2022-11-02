import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.orkswap-frontend.vercel.app/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.orkswap-frontend.vercel.app/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.orkswap-frontend.vercel.app/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.orkswap-frontend.vercel.app/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.orkswap-frontend.vercel.app/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.orkswap-frontend.vercel.app/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.orkswap-frontend.vercel.app/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.orkswap-frontend.vercel.app',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.orkswap-frontend.vercel.app/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.orkswap-frontend.vercel.app/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.orkswap-frontend.vercel.app/hiring/become-a-chef',
      },
    ],
  },
]
