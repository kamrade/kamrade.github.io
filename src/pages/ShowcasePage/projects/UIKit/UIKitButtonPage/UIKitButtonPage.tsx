import React from 'react';

import { IconContext } from "react-icons";
import { FaBeer } from 'react-icons/fa';
import { IoMdArrowForward } from "react-icons/io";
import { MdAddCircle, MdBookmark, MdInfoOutline, MdStars, MdChangeCircle } from "react-icons/md";

import { Button, DocSection, TermLoader, TermLoaderBlocks } from 'shared';

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
          <Button id={'block-button'} size={'sm'} block={true}>Block button</Button>
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

        <label>Button with icon</label>
        <DocSection space={'sm'}>

          <Button
            prefix={<MdAddCircle />}
            theme={'default'}
            size={'xs'}
          >Add</Button>

          <Button
            prefix={<MdBookmark />}
            theme={'default'}
            size={'sm'}
          >Bookmark</Button>

          <Button
            prefix={<MdInfoOutline />}
            theme={'accent'}
            size={'md'}
          >Information</Button>

          <Button
            prefix={<MdStars />}
            theme={'dark'}
            size={'lg'}
          >Star</Button>

          <Button
            suffix={<><MdChangeCircle /></>}
            theme={'default'}
            size={'sm'}
          >Refresh</Button>


        </DocSection>

        <label>React-icons examples</label>
        <DocSection space={'sm'}>
          <IconContext.Provider value={{ size: '2rem', color: "#AFBCC7", className: "icon-class-name" }}>
            <FaBeer />
            <IoMdArrowForward />
          </IconContext.Provider>
        </DocSection>


        <label>Another buttons</label>
        <DocSection space={'sm'}>
          <Button loading={true} suffix={<><MdChangeCircle /></>} theme={'default'} size={'sm'}>Default</Button>
          <Button loading={true} suffix={<><MdChangeCircle /></>} theme={'primary'} size={'sm'}>Primary</Button>
          <Button loading={true} suffix={<><MdChangeCircle /></>} theme={'success'} size={'sm'}>Success</Button>
        </DocSection>

        <DocSection space={'sm'}>
          <TermLoader />
          <TermLoaderBlocks />
        </DocSection>

      </div>
    </div>
  );
}
