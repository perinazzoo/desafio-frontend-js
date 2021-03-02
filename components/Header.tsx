import Image from 'next/image'
import Link from 'next/link'
import Icon from './Icon'
import SearchInput from './SearchInput'

export default function Header ({ className }: { className: string }) {
  return (
    <header className={'flex pt-3 w-full justify-between ' + className}>
      <Link href="/">
        <a className="flex lg:hidden">
          <Image
            src="/images/nextlogo.png"
            layout="fixed"
            width="115"
            height="29"
          />
        </a>
      </Link>

      <SearchInput
        className="hidden lg:flex"
        placeholder="Pesquisar"
        icon="filter"
      />

      <div className="flex items-center space-x-4 lg:space-x-6">
        <button className="lg:hidden">
          <Icon
            name="search"
            size={24}
          />
        </button>
        <button className="hidden lg:block">
          <Icon
            name="help"
            size={24}
          />
        </button>
        <button className="hidden lg:block">
          <Icon
            name="notification"
            size={24}
          />
        </button>
        <button
          className="flex w-6 h-6 xs:h-8 xs:w-8 relative"
        >
          <Image
            className="rounded-full"
            src="/images/profile-icon.png"
            layout="fill"
          />
        </button>
      </div>
    </header>
  )
}
