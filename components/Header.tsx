import Image from 'next/image'
import Link from 'next/link'
import Icon from './Icon'

export default function Header ({ className }: { className: string }) {
  return (
    <header className={'flex pt-3 w-full justify-between ' + className}>
      <Link href="/">
        <a className="flex">
          <Image
            src="/images/nextlogo.png"
            layout="fixed"
            width="115"
            height="29"
          />
        </a>
      </Link>

      <div className="flex items-center space-x-4">
        <button>
          <Icon
            name="search"
            size={20}
          />
        </button>
        <button
          className="flex"
        >
          <Image
            src="/images/profile-icon.png"
            layout="fixed"
            width="24"
            height="24"
          />
        </button>
      </div>
    </header>
  )
}
