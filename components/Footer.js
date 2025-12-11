import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='flex justify-center items-center flex-col text-sm m-10'>
        <p>Non-Govt and Public Serving foundation with care</p>
        <p className='font-bold'>©{currentYear} Helping Hand Foundation🕊</p>
        <p>Helping hands Foundation in your service❤</p>
    </div>
  )
}

export default Footer