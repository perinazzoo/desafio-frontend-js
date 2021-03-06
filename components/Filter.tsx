import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'
import Icon from './Icon'

const fullConfig = resolveConfig(tailwindConfig)

export default function Filter () {
  return (
    <div className="flex space-x-6 pb-4 md:pb-0 w-full md:w-max px-5 sm:px-8">
      <div className="flex space-x-2">
        <Icon
          color={fullConfig.theme.colors.action[500]}
          name="trending"
        />
        <span className="text-grey-500">Em alta:</span>
      </div>

      <div className="flex space-x-4">
        <button className="focus:outline-none flex items-center space-x-2">
          <div className="flex items-center justify-center bg-gradient-to-r from-action-500 to-action-600 rounded-full w-6 h-6">
            <Icon
              size={14}
              name="videos"
            />
          </div>
          <span className="hidden md:inline-block text-action-600 text-sm">Vídeos</span>
        </button>

        <button className="focus:outline-none flex items-center space-x-2">
          <div className="flex items-center justify-center bg-gradient-to-r from-action-500 to-action-600 rounded-full w-6 h-6">
            <Icon
              size={14}
              name="podcasts"
            />
          </div>
          <span className="hidden md:inline-block text-action-600 text-sm">Podcasts</span>
        </button>

        <button className="focus:outline-none flex items-center space-x-2">
          <div className="flex items-center justify-center bg-gradient-to-r from-action-500 to-action-600 rounded-full w-6 h-6">
            <Icon
              size={14}
              name="artigos"
            />
          </div>
          <span className="hidden md:inline-block text-action-600 text-sm">Artigos</span>
        </button>

        <button className="focus:outline-none flex items-center space-x-2">
          <div className="flex items-center justify-center bg-gradient-to-r from-action-500 to-action-600 rounded-full w-6 h-6">
            <Icon
              size={14}
              name="trilhas"
            />
          </div>
          <span className="hidden md:inline-block text-action-600 text-sm">Trilhas</span>
        </button>
      </div>
    </div>
  )
}
