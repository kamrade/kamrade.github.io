import React from 'react';
import { Input, FormRow, DocSection } from 'shared';

export const UIKitInput = () => {

  return (
    <div className='uikit-page uikit-input'>
      <DocSection space={'sm'}>
        <FormRow>
          <label>
            Position
            <Input size={'sm'} name={'position'} placeholder={'Your position in the company'} />
          </label>
        </FormRow>

        <FormRow>
          <label>
            Title
            <Input size={'md'} name={'position'} placeholder={'Please provide the title'} />
          </label>
        </FormRow>

        <FormRow>
          <label>
            Business Description
            <Input size={'lg'} name={'position'} placeholder={'Describe your business'} />
          </label>
        </FormRow>
      </DocSection>

      <DocSection space={'sm'}>
        <FormRow>
          <label>
            Circled input
            <Input shape={'circle'} name={'circled-input'} placeholder={'Circled input'} />
          </label>
        </FormRow>
        <FormRow>
          <label>
            Circled input
            <Input size={'lg'} shape={'circle'} name={'circled-input'} placeholder={'Circled input'} />
          </label>
        </FormRow>
        <FormRow>
          <label>
            Circled input
            <Input size={'sm'} shape={'circle'} name={'circled-input'} placeholder={'Circled input'} />
          </label>
        </FormRow>
      </DocSection>

    </div>
  );
}
