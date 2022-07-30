export interface IMenuLink {
  title: string;
  link: string;
}

export interface IMenuItem {
  id: string;
  togglerTitle: string;
  nav: (IMenuLink | IMenuItem)[]
}

export const menuItems: (IMenuItem | IMenuLink)[] = [{
  id: 'applications',
  togglerTitle: 'Applications',
  nav: [{
    title: 'Line chart',
    link: '/apps/linechart'
  }, {
    title: 'RX training',
    link: '/apps/rx-training'
  },
  ]
}, {
  id: 'components',
  togglerTitle: 'Components',
  nav: [{
    id: 'helpers',
    togglerTitle: 'Helpers',
    nav: [{
      title: 'Spacers',
      link: '/apps/spacers'
    }]
  }, {
    title: 'Alerts',
    link: '/apps/uikit/alerts'
  }, {
    title: 'Badge',
    link: '/apps/uikit/badge'
  }, {
    title: 'Breadcrumb',
    link: '/apps/uikit/breadcrumb'
  }, {
    title: 'Buttons',
    link: '/apps/uikit/buttons'
  }]
}];
