import Head from 'next/head'
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../tailwind.config'

import CardItem from '../components/CardItem'
import Carousel from '../components/Carousel'
import Filter from '../components/Filter'
import Header from '../components/Header'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'

const fullConfig = resolveConfig(tailwindConfig)

export default function Home () {
  return (
    <>
      <Head>
        <title>Desafio-frontend-js</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>

      <div className="2xl:container mx-auto pb-16">
        <div className="relative">
          <Header className="absolute z-10 px-5 items-center"/>
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
          <Carousel
            rubberband={false}
            loop={false}
            arrows={{
              show: true
            }}
            dots={{
              show: true,
              position: 'bottom-left'
            }}
          >
            <div className="w-full h-80 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./images/people-writing.png")' }}>
              <div className="flex flex-col w-full h-full text-base-white px-5 py-8 pt-20">
                <h1 className="text-2xl mb-2 tracking-wider leading-8">
                  <span className="text-vibrant-500">Lorem</span> ipsum dolor sit amet,
                  consectetuer adipiscing.
                </h1>
                <p className="text-sm leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
                </p>

                <button
                  className="ml-auto mt-auto w-max py-3 px-6 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                >
                  VER MAIS
                </button>
              </div>
            </div>
            <div className="w-full h-80 bg-center bg-no-repeat" style={{ backgroundImage: 'url("./images/people-writing.png")' }}>
              <div className="flex flex-col w-full h-full text-base-white px-5 py-8 pt-20">
                <h1 className="text-2xl mb-2 tracking-wider leading-8">
                  <span className="text-vibrant-500">Lorem</span> ipsum dolor sit amet,
                  consectetuer adipiscing.
                </h1>
                <p className="text-sm leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
                </p>

                <button
                  className="ml-auto mt-auto w-max py-3 px-6 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                >
                  VER MAIS
                </button>
              </div>
            </div>
            <div className="w-full h-80 bg-center bg-no-repeat" style={{ backgroundImage: 'url("./images/people-writing.png")' }}>
              <div className="flex flex-col w-full h-full text-base-white px-5 py-8 pt-20">
                <h1 className="text-2xl mb-2 tracking-wider leading-8">
                  <span className="text-vibrant-500">Lorem</span> ipsum dolor sit amet,
                  consectetuer adipiscing.
                </h1>
                <p className="text-sm leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
                </p>

                <button
                  className="ml-auto mt-auto w-max py-3 px-6 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                >
                  VER MAIS
                </button>
              </div>
            </div>
          </Carousel>
        </div>

        <Filter />

        <hr className="border-grey-300"/>

        <section className="px-5 py-8">
          <h2 className="text-grey-800 text-lg mb-6">Recomendados</h2>

          <CardItem
            cardData={{
              averageTime: 4,
              icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
              category: 'Produtos',
              metric: '10:45',
              image: '/images/man.png',
              tag: 'confidencial',
              title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e',
              percentage: 60
            }}
          />
          <CardItem
            cardData={{
              averageTime: 4,
              icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
              category: 'Produtos',
              metric: '13:20',
              image: '/images/journalist.png',
              tag: 'interno',
              title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e',
              percentage: 37
            }}
          />
          <CardItem
            cardData={{
              averageTime: 4,
              icon: () => <Icon size={14} name="documents" color={fullConfig.theme.colors.action[600]} />,
              category: 'Produtos',
              metric: '12 slides',
              image: '/images/dust.png',
              tag: 'interno',
              title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
            }}
          />

          <button className="text-action-600 text-sm w-full leading-6">
            Ver mais
          </button>
        </section>

        <section className="bg-gradient-to-bl from-vibrant-50 to-vibrant-100 py-8 pl-5 w-full">
          <h2 className="text-grey-800 text-lg mb-6">Conteúdos especiais</h2>

          <Carousel
            rubberband={false}
            spacing={16}
            count={1.4}
            loop={false}
          >
            <div
             className="rounded relative h-66 bg-center bg-no-repeat bg-cover"
             style={{ backgroundImage: 'url("./images/walking-guy.png")' }}
            >
              <div className="relative pb-5 px-5 pt-8 flex flex-col h-full z-10">
                <p className="text-2xl whitespace-pre text-base-white">
                  Dicas de{'\n'}
                  <span className="text-orange-50">
                    carreira
                  </span>
                </p>

                <div className="text-sm text-base-white mt-auto">
                  <span className="block">Nome</span>
                  <span className="block">Sobrenome</span>
                </div>

                <button
                className="text-base-white mt-8 ml-auto uppercase py-3.5 px-4 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                >
                  SAIBA MAIS
                </button>
              </div>
              <div
               className="rounded opacity-70 w-full h-full top-0 left-0 absolute bg-gradient-to-r from-opaque-900 to-transparent"
              />
            </div>
            <div
             className="rounded relative h-66 bg-center bg-no-repeat bg-cover"
             style={{ backgroundImage: 'url("./images/woman-upstairs.png")' }}
            >
              <div className="relative pb-5 px-5 pt-8 flex flex-col h-full z-10">
                <p className="text-2xl whitespace-pre text-base-white">
                  Do mil ao{'\n'}
                  <span className="text-orange-50">
                    milhão
                  </span>
                </p>

                <div className="text-sm text-base-white mt-auto">
                  <span className="block">Nome</span>
                  <span className="block">Sobrenome</span>
                </div>

                <button
                className="text-base-white mt-8 ml-auto uppercase py-3.5 px-4 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                >
                  SAIBA MAIS
                </button>
              </div>
              <div
               className="rounded opacity-70 w-full h-full top-0 left-0 absolute bg-gradient-to-r from-opaque-900 to-transparent"
              />
            </div>
            <div
             className="rounded relative h-66 bg-center bg-no-repeat bg-cover"
             style={{ backgroundImage: 'url("./images/calculator.png")' }}
            >
              <div className="relative pb-5 px-5 pt-8 flex flex-col h-full z-10">
                <p className="w-full text-2xl whitespace-pre text-base-white">
                  Dicas de{'\n'}organização{'\n'}dos{' '}
                  <span className="text-orange-50">
                    lucros
                  </span>
                </p>

                <div className="text-sm text-base-white mt-auto">
                  <span className="block">Nome</span>
                  <span className="block">Sobrenome</span>
                </div>

                <button
                className="text-base-white mt-8 ml-auto uppercase py-3.5 px-4 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                >
                  SAIBA MAIS
                </button>
              </div>
              <div
               className="rounded opacity-70 w-full h-full top-0 left-0 absolute bg-gradient-to-r from-opaque-900 to-transparent"
              />
            </div>
            <div
             className="rounded relative h-66 bg-center bg-no-repeat bg-cover"
             style={{ backgroundImage: 'url("./images/handshake.png")' }}
            >
              <div className="relative pb-5 px-5 pt-8 flex flex-col h-full z-10">
                <p className="w-full text-2xl whitespace-pre text-base-white">
                  Aprenda a{' '}
                  <span className="text-orange-50">
                    vender{'\n'}melhor{' '}
                  </span>
                  com um{'\n'}especialista
                </p>

                <div className="text-sm text-base-white mt-auto">
                  <span className="block">Nome</span>
                  <span className="block">Sobrenome</span>
                </div>

                <button
                className="text-base-white mt-8 ml-auto uppercase py-3.5 px-4 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                >
                  SAIBA MAIS
                </button>
              </div>
              <div
               className="rounded opacity-70 w-full h-full top-0 left-0 absolute bg-gradient-to-r from-opaque-900 to-transparent"
              />
            </div>
          </Carousel>
        </section>

        <section className="px-5 py-8">
          <h2 className="text-grey-800 text-lg mb-6">
            Você também pode gostar de:
          </h2>

          <CardItem
            cardData={{
              averageTime: 4,
              icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
              category: 'Produtos',
              metric: '10:45',
              image: '/images/man.png',
              tag: 'interno',
              title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e',
              percentage: 78
            }}
          />
          <CardItem
            cardData={{
              averageTime: 4,
              icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
              category: 'Produtos',
              metric: '13:20',
              image: '/images/journalist.png',
              tag: 'confidencial',
              title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e',
              percentage: 13
            }}
          />
          <CardItem
            cardData={{
              averageTime: 4,
              icon: () => <Icon size={14} name="documents" color={fullConfig.theme.colors.action[600]} />,
              category: 'Produtos',
              metric: '12 slides',
              image: '/images/dust.png',
              tag: 'interno',
              title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
            }}
          />

          <button className="text-action-600 text-sm w-full leading-6">
            Ver mais
          </button>
        </section>
      </div>
    </>
  )
}
