import { icons } from '../utils/icons'

type names = keyof typeof icons

type IconProps = {
  name: names
  color?: string
  size?: number | string
}

export default function Icon ({ name, color = '#999999', size = 24 }: IconProps) {
  if (!icons[name] || !Array.isArray(icons[name])) {
    throw new Error('[Icon]: Name prop must have a valid value.')
  }

  return (
    <svg
     width={size}
     height={size}
     viewBox="0 0 24 24"
     fill="none"
     xmlns="http://www.w3.org/2000/svg">
      {icons[name].map((path) => (
        <path key={path} d={path} fill={color} />
      ))}
    </svg>
  )
}
