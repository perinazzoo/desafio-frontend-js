import Navbar from '../components/Navbar'

export default function Browse () {
  return (
    <>
      <h1>Navegar</h1>
      <aside className="fixed bottom-0 left-0 z-40 w-full">
        <Navbar
          navLinks={[
            {
              icon: 'house',
              title: 'Início',
              url: '/'
            },
            {
              icon: 'bookmark',
              title: 'Minha Lista',
              url: '/my-list'
            },
            {
              icon: 'cobrowsing',
              title: 'Navegar',
              url: '/browse'
            },
            {
              icon: 'squares',
              title: 'Categorias',
              url: '/categories'
            },
            {
              icon: 'materials',
              title: 'Materiais',
              url: '/materials'
            }
          ]}
        />
      </aside>
    </>
  )
}
