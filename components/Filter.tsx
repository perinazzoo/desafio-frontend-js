import Icon from './Icon'

export default function Filter () {
  return (
    <div>
      <div>
        <Icon
          name="trending"
        />
        <span>Em alta:</span>
      </div>

      <div>
        <div>
          <div>
            <Icon
              name="videos"
            />
          </div>
          <span>Vídeos</span>
        </div>

        <div>
          <div>
            <Icon
              name="podcasts"
            />
          </div>
          <span>Podcasts</span>
        </div>

        <div>
          <div>
            <Icon
              name="articles"
            />
          </div>
          <span>Artigos</span>
        </div>

        <div>
          <div>
            <Icon
              name="trilhas"
            />
          </div>
          <span>Trilhas</span>
        </div>
      </div>
    </div>
  )
}
