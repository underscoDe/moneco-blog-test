import * as React from 'react';
import { Hourglass } from 'react-loader-spinner';

function Loading() {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Hourglass
        visible={true}
        height='80'
        width='80'
        ariaLabel='hourglass-loading'
        wrapperStyle={{}}
        wrapperClass=''
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  );
}

export default Loading;
