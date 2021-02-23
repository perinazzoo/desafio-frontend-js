type SearchInputProps = {
  placeholder: string
  icon?: React.FC
}

export default function SearchInput ({ placeholder, icon: Icon }: SearchInputProps) {
  return (
    <div>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.78089 12.5547C8.13654 12.5547 9.39247 12.1307 10.4184 11.4098L10.4224 11.4138L12.8754 13.8999C13.1922 14.221 13.7093 14.2245 14.0304 13.9077C14.3514 13.5909 14.3549 13.0738 14.0381 12.7527L11.6219 10.3038C12.5119 9.23944 13.0466 7.87609 13.0466 6.38868C13.0466 2.97987 10.238 0.222656 6.78089 0.222656C3.32375 0.222656 0.515137 2.97987 0.515137 6.38868C0.515137 9.7975 3.32375 12.5547 6.78089 12.5547ZM2.14858 6.38867C2.14858 8.88853 4.2192 10.9212 6.78089 10.9212C9.34259 10.9212 11.4132 8.88853 11.4132 6.38867C11.4132 3.8888 9.34259 1.85609 6.78089 1.85609C4.2192 1.85609 2.14858 3.8888 2.14858 6.38867Z" fill="white"/>
      </svg>
      <input type="text" placeholder={placeholder} />
      {Icon && (
        <Icon />
      )}
    </div>
  )
}
