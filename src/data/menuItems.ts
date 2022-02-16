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

  // {
  //   title: 'Wheelson',
  //   link: '/apps/wheelson'
  // }, {
  //   title: 'Exchange',
  //   link: '/apps/exchange'
  // }, {
  //   title: 'Formaline',
  //   link: '/apps/formaline'
  // }, {
  //   title: 'Rx Tutorial',
  //   link: '/apps/rx-tutorial'
  // }

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
    link: '/apps/alerts'
  }, {
    title: 'Badge',
    link: '/apps/badge'
  }, {
    title: 'Breadcrumb',
    link: '/apps/breadcrumb'
  }, {
    title: 'Buttons',
    link: '/apps/buttons'
  }]
}];
