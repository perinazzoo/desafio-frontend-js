import Icon, { iconsNames } from './Icon'

type SearchInputProps = {
  placeholder: string
  icon?: iconsNames
}

export default function SearchInput ({ placeholder, icon }: SearchInputProps) {
  return (
    <div>
      <Icon name="search" />
      <input type="text" placeholder={placeholder} />
      {Icon && (
        <Icon name={icon} />
      )}
    </div>
  )
}
