export const menuItemsSm = [{
  id: 'apps',
  togglerTitle: 'Applications',
  nav: [{
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
    title: 'Wheelson',
    link: '/wheelson'
  }, {
    title: 'Exchange',
    link: '/exchange'
  }, {
    title: 'Formaline',
    link: '/formaline'
  }]
}, {
  id: 'components',
  togglerTitle: 'Components',
  nav: [{
    id: 'helpers',
    togglerTitle: 'Helpers',
    nav: [{
      title: 'Spacers',
      link: '/spacers'
    }]
  }, {
    title: 'Alerts',
    link: '/alerts'
  }, {
    title: 'Badge',
    link: '/badge'
  }, {
    title: 'Breadcrumb',
    link: '/breadcrumb'
  }, {
    title: 'Buttons',
    link: '/buttons'
  }]
}];
