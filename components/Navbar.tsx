import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../tailwind.config'

import Icon, { iconsNames } from './Icon'

type NavbarProps = {
  navLinks: NavLink[]
}

type NavLink = {
  icon: iconsNames
  title: string
  url: string
  subLinks?: Array<Pick<NavLink, 'title' | 'url'>>
}

const fullConfig = resolveConfig(tailwindConfig)

export default function Navbar ({ navLinks }: NavbarProps) {
  const { pathname } = useRouter()

  return (
    <nav className="flex bg-base-white justify-between px-3 py-1 shadow-mobile">
      {navLinks.map((navLink) => (
        <React.Fragment key={navLink.title}>
          <Link href={navLink.url}>
            <a className={'flex flex-col items-center rounded p-1 ' + (navLink.url === pathname ? 'bg-action-50' : '')}>
              <Icon
                color={navLink.url === pathname ? fullConfig.theme.colors.action[600] : fullConfig.theme.colors.grey[500]}
                name={navLink.icon}
              />
              <span
               className={'min-w-55 text-center text-xs whitespace-nowrap leading-4 mt-0.5 ' + (navLink.url === pathname ? 'text-action-600' : 'text-grey-500')}
              >
                {navLink.title}
              </span>
            </a>
          </Link>

          {navLink.subLinks?.map((subLink) => (
            <a key={subLink.title} href={subLink.url}>
              {subLink.title}
            </a>
          ))}
        </React.Fragment>
      ))}
    </nav>
  )
}
