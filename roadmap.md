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

### Accordion. NavGroup.
- [X] Implement AsideGroupAccordion component
- [ ] Hide Aside if click on navigation on mobile (use Context?)
- [X] Control Accordion state from parent
- [X] Recursive render of navigation bar in Aside
- [ ] Change Aside width handler
- [X] Animate AsideNavGroup height with JS
- [X] Correct offset for every Accordion subitem layer
- [ ] CMD (Ctrl) + Click should fold/unfold all the tree of AsideNav
- [-] Change NavState implementation for AsideNav Component

