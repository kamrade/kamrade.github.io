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
  }, {
    title: 'Formaline',
    link: '/apps/formaline'
  }

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
      link: '/apps/uikit/spacers'
    }]
  }, {
    title: 'Alerts',
    link: '/apps/uikit/alerts'
  }, {
    title: 'Box',
    link: '/apps/uikit/box'
  }, {
    title: 'Badge',
    link: '/apps/uikit/badge'
  }, {
    title: 'Breadcrumb',
    link: '/apps/uikit/breadcrumb'
  }, {
    title: 'Inputs',
    link: '/apps/uikit/inputs'
  }, {
    title: 'Buttons',
    link: '/apps/uikit/buttons'
  }, {
    title: 'Skeleton',
    link: '/apps/uikit/skeleton'
  }, {
    title: 'Grid cards',
    link: '/apps/grid-cards'
  }]
}];
