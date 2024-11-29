import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="w-100 h-25 bg-dark-subtle p-2 align-items-center d-flex">
            <h1>Portfolio</h1>
            <div className="w-75 text-center">
              <ul className='d-flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;