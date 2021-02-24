const icons = {
  bookmark: ['M17.1762 4.34017C17.403 4.34017 17.5904 4.52757 17.5904 4.75431V18.8083L12.6517 16.6909L11.9995 16.4114L11.3472 16.6909L6.40853 18.8083V4.75431C6.40853 4.52757 6.59593 4.34017 6.82267 4.34017H17.1762ZM17.1762 2.68359H6.82267C5.68688 2.68359 4.75195 3.61852 4.75195 4.75431V21.32L11.9995 18.214L19.247 21.32V4.75431C19.247 3.61852 18.312 2.68359 17.1762 2.68359Z']
}

type IconProps = {
  name: 'bookmark'
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
        <path d={path} fill={color} />
      ))}
    </svg>
  )
}
