import React from 'react'
import { checkUser } from '@/lib/checkUser'

const MainLayout = async ({ children }) => {
  await checkUser();
  return (
    <div
      className="container mx-auto mt-24 mb-20 px-4"
      style={{ color: '#F0F0FF' }}
    >
      {children}
    </div>
  )
}

export default MainLayout;
