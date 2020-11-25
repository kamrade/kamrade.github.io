export const menuItems = [{
  id: 'applications',
  togglerTitle: 'Applications',
  nav: [{
    title: 'Wheelson',
    link: '/wheelson'
  }, {
    title: 'Exchange',
    link: '/exchange'
  }]
}, {
  id: 'components',
  togglerTitle: 'Components',
  nav: [{
    id: 'subgroup',
    togglerTitle: 'Subgroup',
    nav: [{
      id: 'subsubgroup',
      togglerTitle: 'Sub-subgroup',
      nav: [{
        title: 'Sub-subgroup item 1',
        link: '/sub-subgroup-item-1'
      }]
    }, {
      title: 'Subgroup item 1',
      link: '/subgroup-item-1'
    }, {
      title: 'Subgroup item 2',
      link: '/subgroup-item-2'
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
