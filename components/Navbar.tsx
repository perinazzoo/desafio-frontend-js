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
  alternativeTitle?: string
  url: string
  subLinks?: Array<Pick<NavLink, 'title' | 'url'>>
}

const fullConfig = resolveConfig(tailwindConfig)

export default function Navbar ({ navLinks }: NavbarProps) {
  const { pathname } = useRouter()

  return (
    <nav
     className="flex bg-base-white w-full justify-between px-3 xs:px-5 sm:px-8 py-1 shadow-mobile lg:flex-col lg:shadow-none lg:bg-transparent lg:px-8 lg:py-6"
    >
      {navLinks.map((navLink) => (
        <React.Fragment key={navLink.title}>
          <Link href={navLink.url}>
            <a
              className={
                'flex flex-col items-center rounded p-1 lg:bg-transparent ' +
                (navLink.url === pathname ? 'bg-action-50 ' : '') +
                (navLink.subLinks ? 'lg:border-t lg:border-grey-300 lg:mt-4.5 lg:pt-6 lg:mb-1' : 'lg:mb-0.5')
              }
            >
              <Icon
                className="lg:hidden"
                color={navLink.url === pathname ? fullConfig.theme.colors.action[600] : fullConfig.theme.colors.grey[500]}
                name={navLink.icon}
              />
              <span
                className={
                  'min-w-55 w-full text-center text-xs whitespace-nowrap leading-4 mt-0.5 lg:text-sm lg:text-left lg:mt-0 ' +
                  (navLink.alternativeTitle ? 'lg:hidden ' : '') +
                  (navLink.url === pathname ? 'text-action-600 ' : 'text-grey-500 ') +
                  (navLink.subLinks ? 'lg:text-brand-500 lg:uppercase lg:text-xs lg:tracking-wider' : '')
                }
              >
                {navLink.title}
              </span>
              {navLink.alternativeTitle && (
                <span
                  className={
                    'hidden lg:inline min-w-55 w-full text-center text-xs whitespace-nowrap leading-4 mt-0.5 lg:text-sm lg:text-left lg:mt-0 ' +
                    (navLink.url === pathname ? 'text-action-600 ' : 'text-grey-500 ') +
                    (navLink.subLinks ? 'lg:text-brand-500 uppercase lg:text-xs tracking-wider' : '')
                  }
                >
                  {navLink.alternativeTitle}
                </span>
              )}
            </a>
          </Link>

          {navLink.subLinks?.filter((_, idx) => idx < 3).map((subLink) => (
            <Link href={subLink.url} key={subLink.title}>
              <a
                className={
                  'hidden lg:inline text-grey-500 text-sm p-1 mb-0.5'
                }
              >
                {subLink.title}
              </a>
            </Link>
          ))}

          {navLink.subLinks?.length > 3 && (
            <Link href={navLink.url}>
              <a className="hidden lg:flex items-center mt-1 ml-4.5 text-xs text-action-600">
                Ver todas
                <Icon
                  className="ml-1"
                  size={16}
                  color={fullConfig.theme.colors.action[600]}
                  name="arrow-right"
                />
              </a>
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
