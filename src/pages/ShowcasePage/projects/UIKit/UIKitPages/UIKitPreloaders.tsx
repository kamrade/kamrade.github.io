import React from 'react';
import { Skeleton, DocSection } from 'shared';

export const UIKitPreloaders = () => {
  return (
    <div className='uikit-page uikit-skeleton-page'>

      <DocSection space={'sm'}>
        <Skeleton marginBottom={'8px'} width={'40%'} height={'20px'} />
        <Skeleton marginBottom={'8px'} width={'80%'} height={'20px'} />
        <Skeleton width={'60%'} height={'20px'} />
      </DocSection>

      <DocSection flex space={'sm'}>
        <Skeleton block marginBottom={'4px'} width={'120px'} height={'12px'} />
        <Skeleton block marginBottom={'4px'} width={'180px'} height={'12px'} />
        <Skeleton block width={'100px'} height={'12px'} />
      </DocSection>

      <DocSection space={'sm'}>
        <Skeleton block marginBottom={'4px'} width={'120px'} height={'12px'} />
        <Skeleton block marginBottom={'4px'} width={'180px'} height={'12px'} />
        <Skeleton block width={'100px'} height={'12px'} />
      </DocSection>

    </div>
  );
}
