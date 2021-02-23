type NavbarProps = {
  navLinks: NavLink[]
}

type NavLink = {
  icon: React.FC
  title: string
  url: string
  subLinks?: Array<Pick<NavLink, 'title' | 'url'>>
}

export default function Navbar ({ navLinks }: NavbarProps) {
  return (
    <nav>
      {navLinks.map((navLink) => (
        <>
          <a key={navLink.title} href={navLink.url}>
            <navLink.icon />
            <span>{navLink.title}</span>
          </a>

          {navLink.subLinks?.map((subLink) => (
            <a key={subLink.title} href={subLink.url}>
              {subLink.title}
            </a>
          ))}
        </>
      ))}
    </nav>
  )
}
