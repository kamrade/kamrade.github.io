import React from 'react';
import { Button, DocSection } from 'shared';

export const UIKitButtonPage = () => {
  return (
    <div className='uikit-page uikit-button-page'>
      <h2>UIKitButtonPage</h2>

      <div className={'py-3'}>
        <label>Themes</label>
        <DocSection space={'sm'}>
          <Button theme={'text'}>Text</Button>
          <Button theme={'link'}>Link</Button>
          <Button>Default</Button>
          <Button theme={'accent'}>Accent</Button>
          <Button theme={'success'}>Success</Button>
          <Button theme={'danger'}>Danger</Button>
          <Button theme={'primary'}>Test</Button>
          <Button theme={'dark'}>Dark</Button>
        </DocSection>

        <label>Sizes</label>
        <DocSection space={'sm'}>
          <Button size={'xs'}>XSmall</Button>
          <Button size={'sm'}>Small</Button>
          <Button size={'md'}>Medium</Button>
          <Button size={'lg'}>Large</Button>
        </DocSection>

        <label>Block button</label>
        <DocSection space={'xs'}>
          <Button id={'block-button'} size={'sm'} block={true}>Block</Button>
        </DocSection>

        <label>Shapes</label>
        <DocSection space={'xs'}>
          <Button size={'sm'} shape={'circle'} theme={'dark'}>Circle</Button>
          <Button size={'sm'} shape={'square'}>Square</Button>
        </DocSection>

        <label>Disabled</label>
        <DocSection space={'xs'}>
          <Button disabled={true} theme={'text'}>Text</Button>
          <Button disabled={true} theme={'link'}>Link</Button>
          <Button disabled={true}>Default</Button>
          <Button disabled={true} theme={'accent'}>Accent</Button>
          <Button disabled={true} theme={'success'}>Success</Button>
          <Button disabled={true} theme={'danger'}>Danger</Button>
          <Button disabled={true} theme={'primary'}>Test</Button>
          <Button disabled={true} theme={'dark'}>Dark</Button>
        </DocSection>

        <label>Wide</label>
        <DocSection space={'sm'}>
          <Button wide={true} theme={'text'}>Text</Button>
          <Button wide={true} theme={'link'}>Link</Button>
          <Button wide={true}>Default</Button>
          <Button wide={true} theme={'accent'}>Accent</Button>
          <Button wide={true} theme={'success'}>Success</Button>
          <Button wide={true} theme={'danger'}>Danger</Button>
          <Button wide={true} theme={'primary'}>Test</Button>
          <Button wide={true} theme={'dark'}>Dark</Button>
        </DocSection>



      </div>
    </div>
  );
}
