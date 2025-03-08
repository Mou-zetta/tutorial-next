import React from 'react'

const NewLayout = ({children} : {
  children: React.ReactNode
}) => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      {children}
      </div>
  )
}

export default NewLayout