import React from 'react'


const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className=' mx-5 mt-auto bg-black text-white text-center py-2'>
       @ {date} KTL. All rights reserved
    </footer>
  )
}

export default Footer