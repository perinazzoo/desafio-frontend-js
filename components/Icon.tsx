import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'
import { icons } from '../utils/icons'

const fullConfig = resolveConfig(tailwindConfig)

export type iconsNames = keyof typeof icons

type IconProps = {
  name: iconsNames
  color?: string
  size?: number | string
  className?: string
}

export default function Icon ({ name, color = fullConfig.theme.colors.base.white, size = 24, className = '' }: IconProps) {
  if (!icons[name] || !Array.isArray(icons[name])) {
    throw new Error('[Icon]: Name prop must have a valid value.')
  }

  const noEvenodd = ['videos']

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {icons[name].map((path, idx) => (
        <path fillRule={noEvenodd.includes(name) ? 'nonzero' : 'evenodd'} key={idx} d={path} fill={color} />
      ))}
    </svg>
  )
}
