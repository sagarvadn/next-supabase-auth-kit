import React from 'react'
import AuthButton from './AuthButton'

const Header = () => {
  return (
    <>
<header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">
        NextJS Supabase User Auth
      </div>

      <AuthButton />
    </header>
    </>
  )
}

export default Header