import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

const Layout = ({ children }) => {
  return (
    <div className='px-2 md:px-0'>
      <Suspense
        fallback={
          <BarLoader
            className='mt-4'
            width={'100%'}
            color='#7c3aed'
          />
        }
      >
        {children}
      </Suspense>
    </div>
  )
}

export default Layout;
