import React from 'react'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

const menuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
        name: 'Projects',
        href: '/projects',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '#',
    },
]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
    const navigate = useNavigate()
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.href)}
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >{item.name}</button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <button
                      onClick={() => navigate(item.href)}
                      className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                      >{item.name}</button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
