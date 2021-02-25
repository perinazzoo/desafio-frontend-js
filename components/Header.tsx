import Image from 'next/image'
import Icon from './Icon'

export default function Header () {
  return (
    <header>
      <Image
        src="/nextlogo.png"
        layout="responsive"
        width="244"
        height="62"
      />

      <div>
        <Icon
          name="search"
        />
        <Image
          src="/profile-icon.png"
          layout="responsive"
          width="32"
          height="32"
        />
      </div>
    </header>
  )
}
