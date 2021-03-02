import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Browse () {
  return (
    <div className="3xl:container mx-auto pb-16 lg:pb-0 lg:flex">
      <aside className="fixed bottom-0 left-0 z-40 w-full lg:w-66 lg:relative lg:border-r lg:border-grey-300">
          <div className="lg:sticky lg:top-0 lg:left-0 lg:overflow-x-hidden">
            <Link href="/">
              <a className="hidden lg:flex justify-center shadow-menu">
                <Image
                  src="/images/nextlogo.png"
                  width="244"
                  height="62"
                  layout="fixed"
                />
              </a>
            </Link>
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
                  url: '/browse',
                  subLinks: [
                    {
                      title: 'Treinamentos',
                      url: '/browse'
                    },
                    {
                      title: 'Trilhas',
                      url: '/browse'
                    },
                    {
                      title: 'Podcasts',
                      url: '/browse'
                    }
                  ]
                },
                {
                  icon: 'squares',
                  title: 'Categorias',
                  url: '/categories',
                  subLinks: [
                    {
                      title: 'Ferramentas e Sistemas',
                      url: '/categories'
                    },
                    {
                      title: 'Gestão Estratégica',
                      url: '/categories'
                    },
                    {
                      title: 'Produtos',
                      url: '/categories'
                    },
                    {
                      title: 'testonly',
                      url: '/categories'
                    }
                  ]
                },
                {
                  icon: 'materials',
                  title: 'Materiais',
                  alternativeTitle: 'Material de Apoio',
                  url: '/materials',
                  subLinks: [
                    {
                      title: 'Ferramentas',
                      url: '/materials'
                    },
                    {
                      title: 'Biblioteca',
                      url: '/materials'
                    },
                    {
                      title: 'Anotações',
                      url: '/materials'
                    }
                  ]
                }
              ]}
            />
          </div>
        </aside>
      <h1>Navegar</h1>
    </div>
  )
}
