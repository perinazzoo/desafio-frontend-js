import SearchInput from './SearchInput'

export default function SearchBox () {
  return (
    <section>
      <span>Ainda não encontrou o que assistir?</span>
      <p>Busque por suas categorias preferidasBusque por suas categorias preferidas</p>

      <div>
        <button>Seguro Auto</button>
        <button>Nossa Rede</button>
        <button>Ferramentas e Sistemas</button>
        <button>Auditoria Interna</button>
        <button>ABA</button>
        <button>Estratégia e Modelo de Negócios</button>
        <button>Sinistros</button>
        <button>Gestão Comercial</button>
      </div>

      <form>
        <SearchInput placeholder="Ou procure por novas ideias..."/>
        <button type="submit">Buscar</button>
      </form>
    </section>
  )
}
