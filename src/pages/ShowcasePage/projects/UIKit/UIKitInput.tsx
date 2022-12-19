import React from 'react';
import { Input, FormRow, DocSection, Label } from 'shared';

export const UIKitInput = () => {

  return (
    <div className='uikit-page uikit-input'>



      <DocSection space={'sm'}>
        <FormRow>
          <Label text={'Position'}>
            <Input size={'sm'} name={'position'} placeholder={'Your position in the company'} />
          </Label>
        </FormRow>

        <FormRow>
          <Label text={'Title'}>
            <Input size={'md'} name={'position'} placeholder={'Please provide the title'} />
          </Label>
        </FormRow>

        <FormRow>
          <Label text={'Business Description'}>
            <Input size={'lg'} name={'position'} placeholder={'Describe your business'} />
          </Label>
        </FormRow>
      </DocSection>



      <DocSection space={'sm'}>
        <FormRow>
          <Input size={'sm'} shape={'circle'} name={'circled_input_small'} placeholder={'Circled input small'} />
        </FormRow>
        <FormRow>
          <Input size={'md'} shape={'circle'} name={'circled_input_medium'} placeholder={'Circled input medium'} />
        </FormRow>
        <FormRow>
          <Input size={'lg'} shape={'circle'} name={'circled_input_large'} placeholder={'Circled input large'} />
        </FormRow>
      </DocSection>



    </div>
  );
}
