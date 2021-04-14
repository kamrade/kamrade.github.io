## Backlog
- [ ] Avoid to use :global in the Aside component.
- [X] useWindowResize hook
- [ ] try to avoid multiple window resize event listeners
- [ ] component for responsivity. Smth like <Media query={SM}></Media>
- [ ] App component useEffect setShowAsideMemo dependency. Is it correct behaviour?
- [ ] App component: use state for size. Now it looks incorrect to use variable
- [X] App, Aside, AsideElement: avoid to use ref: any
- [ ] Move window onResize event to single service
- [ ] Check PureComponent
- [ ] Start unit testing
- [ ] Improve performance
- [X] Fix AsideNav any type for state. Just add [key:string]: <type>
- [ ] Find a way to avoid use setTimeout in the Accordion Component
- [ ] Check out isNamedSlots function in Accordion Component. And check out result if not true.

## Milestones
- [ ] Implement UserMenu dropdown using React Portal.
- [ ] Implement AnchorButton component
- [ ] Use css variables. Sync it with TS
- [ ] Implement certain Home Page
- [ ] Change Aside width handler
- [ ] Choose theme

## Services
### Authentication


## Components
### Accordion. NavGroup.

> Structure: AsideNav > AsideNavGroup > Accordion > AsideNavGroupHead, AsideNavItem

- [X] Implement AsideGroupAccordion component
- [X] Control Accordion state from parent
- [X] Recursive render of navigation bar in Aside
- [X] Animate AsideNavGroup height with JS
- [X] Correct offset for every Accordion subitem layer
- [X] CMD (Ctrl) + Click should fold/unfold all the tree of AsideNav
- [X] Change NavState implementation for AsideNav Component
- [ ] Hide Aside if click on navigation on mobile (use Context?)
- [ ] Aside with nice icons.
- [ ] Auto collapse if another expand (option)
- [X] If user collapse the group and in this group located active link, the group should be lightened in certain way.
      If the group is nested indicator should be on each group.
- [ ] If user reload the page - open accordion group of current page
- [ ] Rename Accordion component to ToggleList. Rename AsideNav to Accordion.
- [ ] All data blocks in menuItems should have a unique id.
- [ ] Search in nested Tree

### Input
- [ ] forwardRef

### Button
- [ ] forwardRef

### Card

### Icon

### Modal Window

### Dropdown


----------------------------------------

# Notes

- Чтобы внутренний элемент в контейнере flex не выходил за его пределы нужно задать ему min-width: 0;
- При перерендере компонента совсем необязательно,
  что все его child-компоненты перерендерятся.
  Этого можно избежать с помощью memo.

- Difference between useMemo and useCallback
  https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60
