import React from 'react';

import { IconContext } from "react-icons";
import { FaBeer } from 'react-icons/fa';
import { RiAddCircleFill, RiArrowLeftCircleFill, RiBookmarkFill, RiChat4Fill, RiInformationLine, RiStarFill, RiRefreshLine, RiArrowRightFill } from 'react-icons/ri';

import { Button, DocSection, TermLoader, TermLoaderBlocks } from 'shared';

export const UIKitButton = () => {
  return (
    <div className='uikit-page uikit-button-page'>

      <h3>UIKit. Buttons</h3>
      <div className={'py-3'}>

        <div className={'mb-8'}>
          <h4 className={'text-muted'}>Custom button</h4>
          <DocSection flex space={'sm'}>
            <Button className={'some-custom-button'} bold theme={'base'}>Custom button</Button>
          </DocSection>
        </div>

        {/* Theme */}
        <div className={'mb-8'}>
          <h4 className={'text-muted'}>Theme</h4>
          <DocSection flex space={'sm'}>
            <Button  theme={'base'}>Base</Button>
            <Button  disabled theme={'base'}>Base</Button>
            <Button  variant={'contained'} theme={'base'}>Base</Button>
            <Button  variant={'light'} theme={'base'}>Base</Button>
            <Button  variant={'outlined'} theme={'base'}>Base</Button>
          </DocSection>

          <DocSection flex space={'sm'}>
            <Button bold theme={'primary'}>Primary</Button>
            <Button bold variant={'contained'} theme={'primary'}>Primary</Button>
            <Button bold variant={'light'} theme={'primary'}>Primary</Button>
            <Button bold variant={'outlined'} theme={'primary'}>Primary</Button>
            <Button bold prefix={<RiChat4Fill />} theme={'primary'} size={'sm'} variant={'contained'}>Chat</Button>
            <Button bold suffix={<RiBookmarkFill />} theme={'primary'} size={'sm'} variant={'contained'}>Bookmark</Button>
            <Button bold prefix={<RiArrowLeftCircleFill />} theme={'primary'} size={'sm'} variant={'outlined'}>Back</Button>
          </DocSection>

          <DocSection flex space={'sm'}>
            <Button bold theme={'success'}>Success</Button>
            <Button bold variant={'contained'} theme={'success'}>Success</Button>
            <Button bold variant={'light'} theme={'success'}>Success</Button>
            <Button bold variant={'outlined'} theme={'success'}>Success</Button>
            <Button disabled bold variant={'outlined'} theme={'success'}>Success</Button>
          </DocSection>

          <DocSection flex space={'sm'}>
            <Button bold theme={'danger'}>Danger</Button>
            <Button bold variant={'contained'} theme={'danger'}>Danger</Button>
            <Button disabled bold variant={'contained'} theme={'danger'}>Danger</Button>
            <Button bold variant={'light'} theme={'danger'}>Danger</Button>
            <Button bold variant={'outlined'} theme={'danger'}>Danger</Button>
          </DocSection>

          <DocSection flex space={'sm'}>
            <Button bold theme={'warning'}>Warning</Button>
            <Button bold variant={'contained'} theme={'warning'}>Warning</Button>
            <Button bold variant={'light'} theme={'warning'}>Warning</Button>
            <Button disabled bold variant={'light'} theme={'warning'}>Warning</Button>
            <Button bold variant={'outlined'} theme={'warning'}>Warning</Button>
          </DocSection>
        </div>


        {/* Size */}
        <div className={'mb-8'}>
          <h4 className={'text-muted'}>Size</h4>
          <DocSection flex space={'sm'}>
            <Button bold variant={'light'} size={'xs'}>XSmall</Button>
            <Button bold variant={'light'} size={'sm'}>Small</Button>
            <Button bold variant={'light'} size={'md'}>Medium</Button>
            <Button bold variant={'light'} size={'lg'}>Large</Button>
          </DocSection>
        </div>


        {/* Block */}
        <div className="mb-8">
          <h4 className={'text-muted'}>Block button</h4>
          <DocSection flex space={'xs'}>
            <Button variant={'light'} id={'block-button'} size={'sm'} block bold>Block button</Button>
          </DocSection>
        </div>

        {/* Bold */}
        <div className="mb-8">
          <h4 className={'text-muted'}>Bold</h4>
          <DocSection flex space={'sm'}>
            <Button variant={'contained'} bold>Bold text in the button</Button>
            <Button variant={'light'}>Regular text in the button</Button>
          </DocSection>
        </div>

        {/* Shapes */}
        <div className="mb-8">
          <h4 className={'text-muted'}>Shapes</h4>
          <DocSection flex space={'xs'}>
            <Button variant={'contained'}>Circle</Button>
            <Button variant={'contained'} shape={'circle'} >Circle</Button>
            <Button variant={'contained'} shape={'square'}>Square</Button>
          </DocSection>
        </div>

        {/* Wide */}
        <div className="mb-8">
          <h4 className={'text-muted'}>Wide</h4>
          <DocSection flex space={'sm'}>
            <Button variant={'light'} wide={true}>Default</Button>
            <Button variant={'light'} wide={true} theme={'success'}>Success</Button>
            <Button variant={'light'} wide={true} theme={'danger'}>Danger</Button>
            <Button variant={'light'} wide={true} theme={'primary'}>Test</Button>
          </DocSection>
        </div>

        {/* Button with icon */}
        <div className="mb-8">
          <h4 className={'text-muted'}>Button with icon</h4>
          <DocSection flex space={'sm'}>
            <Button prefix={<RiAddCircleFill />} variant={'contained'} size={'xs'} bold theme={'primary'}>Add</Button>
            <Button prefix={<RiBookmarkFill />} variant={'outlined'} size={'sm'} bold theme={'primary'}>Bookmark</Button>
            <Button prefix={<RiInformationLine />} variant={'light'} size={'md'}>Information</Button>
            <Button prefix={<RiStarFill />} variant={'contained'} size={'lg'} bold theme={'success'}>Star</Button>
            <Button suffix={<><RiRefreshLine /></>} variant={'outlined'} size={'sm'}>Refresh</Button>
          </DocSection>
        </div>

        {/* Icons */}
        <div className="mb-8">
          <h4 className={'text-muted'}>React-icons examples</h4>
          <DocSection flex space={'sm'}>
            <IconContext.Provider value={{ size: '2rem', color: "#F45B69", className: "icon-class-name" }}>
              <FaBeer />
              <RiArrowRightFill />
            </IconContext.Provider>
          </DocSection>
        </div>

        {/* Loading */}
        <div className="mb-8">
          <h4 className={'text-muted'}>Loading</h4>
          <DocSection flex space={'sm'}>
            <Button loading={true} suffix={<><RiRefreshLine /></>} variant={'contained'} theme={'base'} size={'xs'}>Default</Button>
            <Button loading={true} suffix={<><RiRefreshLine /></>} variant={'light'} theme={'base'} size={'sm'}>Default</Button>
            <Button loading={true} suffix={<><RiRefreshLine /></>} variant={'contained'} theme={'primary'} size={'md'}>Primary</Button>
            <Button loading={true} suffix={<><RiRefreshLine /></>} variant={'outlined'} theme={'success'} size={'lg'}>Success</Button>

            <Button loading={true} suffix={<><RiRefreshLine /></>} variant={'text'} theme={'base'} size={'sm'}>Default</Button>
            <Button loading={true} suffix={<><RiRefreshLine /></>} variant={'text'} theme={'primary'} size={'md'}>Primary</Button>
            <Button loading={true} suffix={<><RiRefreshLine /></>} variant={'text'} theme={'success'} size={'lg'}>Success</Button>
          </DocSection>
        </div>

        {/* Icon Button */}
        <label>Icon Button</label>
        <DocSection flex space={'sm'}>
          <Button iconButton prefix={<><RiRefreshLine /></>} variant={'contained'} theme={'base'} size={'xs'} />
          <Button iconButton prefix={<><RiRefreshLine /></>} variant={'outlined'} theme={'danger'} size={'sm'} />
          <Button iconButton prefix={<><RiRefreshLine /></>} variant={'contained'} theme={'warning'} size={'md'} />
          <Button iconButton prefix={<><RiRefreshLine /></>} variant={'text'} theme={'base'} size={'md'} />
          <Button iconButton shape={'circle'} prefix={<><RiRefreshLine /></>} variant={'contained'} theme={'primary'} size={'lg'} />
        </DocSection>

        <label>In progress</label>
        <DocSection flex space={'sm'}>
          <TermLoader />
          <TermLoaderBlocks />
        </DocSection>


      </div>
    </div>
  );
}
