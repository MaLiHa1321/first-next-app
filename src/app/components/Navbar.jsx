import React from 'react'

export default function Navbar() {
  return (
    <div>
         <nav className='flex justify-center'>
          <ul className='flex justify-between'>
            <li className='m-3 p-3'>Home</li>
            <li className='m-3 p-3'>Service</li>
            <li className='m-3 p-3'>Contact</li>
          </ul>
        </nav>
    </div>
  )
}
