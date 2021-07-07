export const menuItemsSm = [{
  id: 'apps',
  togglerTitle: 'Applications',
  nav: [{
    title: 'Typing tutorial',
    link: '/typing'
  }, {
    title: 'Wheelson',
    link: '/wheelson'
  }, {
    title: 'Exchange',
    link: '/exchange'
  }, {
    title: 'Test01',
    link: '/test-01'
  }, {
    title: 'Test02',
    link: '/test-02'
  }, {
    title: 'Test03',
    link: '/test-03'
  }, {
    title: 'Test04',
    link: '/test-04'
  }]
}];

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
    title: 'Typing tutorial',
    link: '/apps/typing'
  }, {
    title: 'Wheelson',
    link: '/apps/wheelson'
  }, {
    title: 'Exchange',
    link: '/apps/exchange'
  }, {
    title: 'Formaline',
    link: '/apps/formaline'
  }, {
    title: 'Rx Tutorial',
    link: '/apps/rx-tutorial'
  }]
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
