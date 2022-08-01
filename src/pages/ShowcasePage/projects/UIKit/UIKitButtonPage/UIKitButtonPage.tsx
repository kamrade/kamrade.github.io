import React from 'react';

import { IconContext } from "react-icons";
import { FaBeer } from 'react-icons/fa';
import { IoMdArrowForward } from "react-icons/io";
import { MdAddCircle, MdBookmark, MdInfoOutline, MdStars, MdChangeCircle } from "react-icons/md";

import { Button, DocSection, TermLoader, TermLoaderBlocks } from 'shared';

export const UIKitButtonPage = () => {
  return (
    <div className='uikit-page uikit-button-page'>
      <h3>UIKit. Buttons</h3>

      <div className={'py-3'}>

        <label>Themes</label>
        <DocSection space={'sm'}>
          {/*<Button theme={'text'}>Text</Button>*/}
          {/*<Button theme={'link'}>Link</Button>*/}
          {/*<Button>Default</Button>*/}

          <Button theme={'primary'}>Primary</Button>
          <Button variant={'contained'} theme={'primary'}>Primary</Button>
          <Button variant={'light'} theme={'primary'}>Primary</Button>
          <Button variant={'outlined'} theme={'primary'}>Primary</Button>

          <Button theme={'base'}>Base</Button>
          <Button variant={'contained'} theme={'base'}>Base</Button>
          <Button variant={'light'} theme={'base'}>Base</Button>
          <Button variant={'outlined'} theme={'base'}>Base</Button>

          <Button theme={'success'}>Success</Button>
          <Button variant={'contained'} theme={'success'}>Success</Button>
          <Button variant={'light'} theme={'success'}>Success</Button>
          <Button variant={'outlined'} theme={'success'}>Success</Button>

          <Button theme={'danger'}>Danger</Button>
          <Button variant={'contained'} theme={'danger'}>Danger</Button>
          <Button variant={'light'} theme={'danger'}>Danger</Button>
          <Button variant={'outlined'} theme={'danger'}>Danger</Button>

          <Button theme={'warning'}>Warning</Button>
          <Button variant={'contained'} theme={'warning'}>Warning</Button>
          <Button variant={'light'} theme={'warning'}>Warning</Button>
          <Button variant={'outlined'} theme={'warning'}>Warning</Button>

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

        <label>Bold</label>
        <DocSection space={'sm'}>
          <Button size={'sm'} bold={true}>Bold text in the button</Button>
        </DocSection>

        <label>Shapes</label>
        <DocSection space={'xs'}>
          <Button size={'sm'} shape={'circle'} theme={'base'}>Circle</Button>
          <Button size={'sm'} shape={'square'}>Square</Button>
        </DocSection>

        <label>Disabled</label>
        <DocSection space={'xs'}>
          <Button disabled={true} theme={'base'}>Text</Button>
          <Button disabled={true} theme={'primary'}>Link</Button>
          <Button disabled={true}>Default</Button>
          <Button disabled={true} theme={'success'}>Success</Button>
          <Button disabled={true} theme={'danger'}>Danger</Button>
          <Button disabled={true} theme={'primary'}>Test</Button>
        </DocSection>

        <label>Wide</label>
        <DocSection space={'sm'}>
          <Button wide={true}>Default</Button>
          <Button wide={true} theme={'success'}>Success</Button>
          <Button wide={true} theme={'danger'}>Danger</Button>
          <Button wide={true} theme={'primary'}>Test</Button>
        </DocSection>

        <label>Button with icon</label>
        <DocSection space={'sm'}>

          <Button
            prefix={<MdAddCircle />}
            theme={'base'}
            size={'xs'}
            bold
          >Add</Button>

          <Button
            prefix={<MdBookmark />}
            theme={'base'}
            size={'sm'}
            bold
          >Bookmark</Button>

          <Button
            prefix={<MdInfoOutline />}
            theme={'base'}
            size={'md'}
          >Information</Button>

          <Button
            prefix={<MdStars />}
            theme={'base'}
            size={'lg'}
            bold
          >Star</Button>

          <Button
            suffix={<><MdChangeCircle /></>}
            theme={'base'}
            size={'sm'}
            bold
          >Refresh</Button>


        </DocSection>

        <label>React-icons examples</label>
        <DocSection space={'sm'}>
          <IconContext.Provider value={{ size: '2rem', color: "#AFBCC7", className: "icon-class-name" }}>
            <FaBeer />
            <IoMdArrowForward />
          </IconContext.Provider>
        </DocSection>


        <label>Loading buttons</label>
        <DocSection space={'sm'}>
          <Button loading={true} suffix={<><MdChangeCircle /></>} theme={'base'} size={'sm'}>Default</Button>
          <Button loading={true} suffix={<><MdChangeCircle /></>} theme={'primary'} size={'md'}>Primary</Button>
          <Button loading={true} suffix={<><MdChangeCircle /></>} theme={'success'} size={'lg'}>Success</Button>
        </DocSection>

        <label>In progress</label>
        <DocSection space={'sm'}>
          <TermLoader />
          <TermLoaderBlocks />
        </DocSection>

      </div>
    </div>
  );
}
