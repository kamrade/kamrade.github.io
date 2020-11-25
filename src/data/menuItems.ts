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
      id: 'subgroupLevel2',
      togglerTitle: 'Subgroup level 2',
      nav: [{
        id: 'subgroupLevel3',
        togglerTitle: 'Subgroup level 3',
        nav: [{
          id: 'subgroupLevel4',
          togglerTitle: 'Subgroup level 4',
          nav: [{
            title: 'Subgroup level 4 item 1',
            link: '/subgroup-l4-item-1'
          }]
        }, {
          title: 'Subgroup level 3 item 1',
          link: '/subgroup-l3-item-1'
        }]
      }, {
        title: 'Subgroup level 2 item 1',
        link: '/subgroup-l2-item-1'
      }, {
        title: 'Subgroup level 2 item 2',
        link: '/subgroup-l2-item-2'
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
