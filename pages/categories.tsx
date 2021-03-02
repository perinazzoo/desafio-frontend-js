import Navbar from '../components/Navbar'

export default function Categories () {
  return (
    <>
      <h1>Categorias</h1>
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
