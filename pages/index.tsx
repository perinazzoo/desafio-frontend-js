import Head from 'next/head'
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../tailwind.config'

import CardItem from '../components/CardItem'
import Carousel from '../components/Carousel'
import Filter from '../components/Filter'
import Header from '../components/Header'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const fullConfig = resolveConfig(tailwindConfig)

export default function Home () {
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
      <div className="flex-1">
        <div className="relative">
          <Header className="absolute z-10 px-5 sm:px-8 xl:px-16 items-center"/>
          <Carousel
            slideHeightClass="h-74 lg:h-84"
            arrows={{
              show: true
            }}
            dots={{
              show: true
            }}
            options={{
              rubberband: false,
              loop: false
            }}
          >
            <div className="h-74 lg:h-84 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./images/people-writing.png")' }}>
              <div className="flex flex-col h-full w-full text-base-white px-5 sm:px-8 xl:px-16 py-8 xl:pb-12 pt-20 xl:pt-28">
                <h1 className="text-2xl mb-2 tracking-wider lg:text-2xl md:w-6/12 lg:w-full xl:w-5/12">
                  <span className="text-vibrant-500">Lorem</span> ipsum dolor sit amet,
                  consectetuer adipiscing.
                </h1>
                <p className="text-sm leading-6 line-clamp-1 xs:line-clamp-2 md:w-5/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
                </p>

                <button
                  className="ml-auto mt-auto w-max py-3 px-6 xl:px-7 bg-gradient-to-r from-action-500 to-action-600 text-xs md:text-sm rounded tracking-widest"
                >
                  VER MAIS
                </button>
              </div>
            </div>
            <div className="h-74 lg:h-84 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./images/people-writing.png")' }}>
              <div className="flex flex-col h-full w-full text-base-white px-5 sm:px-8 xl:px-16 py-8 xl:pb-12 pt-20 xl:pt-28">
                <h1 className="text-2xl mb-2 tracking-wider lg:text-2xl md:w-6/12 lg:w-full xl:w-5/12">
                  <span className="text-vibrant-500">Lorem</span> ipsum dolor sit amet,
                  consectetuer adipiscing.
                </h1>
                <p className="text-sm leading-6 line-clamp-1 xs:line-clamp-2 md:w-5/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
                </p>

                <button
                  className="ml-auto mt-auto w-max py-3 px-6 xl:px-7 bg-gradient-to-r from-action-500 to-action-600 text-xs md:text-sm rounded tracking-widest"
                >
                  VER MAIS
                </button>
              </div>
            </div>
            <div className="h-74 lg:h-84 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./images/people-writing.png")' }}>
              <div className="flex flex-col h-full w-full text-base-white px-5 sm:px-8 xl:px-16 py-8 xl:pb-12 pt-20 xl:pt-28">
                <h1 className="text-2xl mb-2 tracking-wider lg:text-2xl md:w-6/12 lg:w-full xl:w-5/12">
                  <span className="text-vibrant-500">Lorem</span> ipsum dolor sit amet,
                  consectetuer adipiscing.
                </h1>
                <p className="text-sm leading-6 line-clamp-1 xs:line-clamp-2 md:w-5/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
                </p>

                <button
                  className="ml-auto mt-auto w-max py-3 px-6 xl:px-7 bg-gradient-to-r from-action-500 to-action-600 text-xs md:text-sm rounded tracking-widest"
                >
                  VER MAIS
                </button>
              </div>
            </div>
          </Carousel>
        </div>

        <main>
          <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between pt-4 pb-6 md:pt-10">
            <Filter />

            <hr className="w-full border-grey-300 md:hidden"/>

            <h2 className="px-5 sm:px-8 xl:px-16 text-grey-800 text-lg mt-8 md:m-0">Recomendados</h2>
          </div>

          <section className="px-5 sm:px-8 xl:px-16 pb-8 md:pb-10">

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-6 gap-x-4">
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
                  averageTime: 8,
                  icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Contact Center',
                  metric: '13:20',
                  image: '/images/journalist.png',
                  tag: 'interno',
                  title: 'Proin nec quam pulvinar turpis vulputate gravida ut vel felis. Vivamus tempus tincidunt neque.',
                  percentage: 37
                }}
              />
              <CardItem
                cardData={{
                  icon: () => <Icon size={14} name="documentos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Estratégia e Modelo de Negócios',
                  metric: '12 slides',
                  image: '/images/dust.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  icon: () => <Icon size={14} name="podcasts" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Ferramentas e Sistemas',
                  metric: '14:35',
                  image: '/images/conference-call.png',
                  tag: 'interno',
                  title: 'Sed dignissim tincidunt diam, vitae varius erat faucibus ac. Sed sagittis magna diam, molestie posuere tortor eleifend a'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  averageTime: 5,
                  icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Tecnologia da Informaçào',
                  metric: '10:45',
                  image: '/images/laptop.png',
                  tag: 'interno',
                  title: 'Proin nec quam pulvinar turpis vulputate gravida ut vel felis. Vivamus tempus tincidunt neque.'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  icon: () => <Icon size={14} name="artigos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Recursos Humanos',
                  metric: '~ 5m',
                  image: '/images/kids.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  icon: () => <Icon size={14} name="documentos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Ferramentas e Sistemas',
                  metric: '16 slides',
                  image: '/images/planning.png',
                  tag: 'interno',
                  title: 'Sed dignissim tincidunt diam, vitae varius erat faucibus ac. Sed sagittis magna diam, molestie posuere tortor eleifend a'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  averageTime: 3,
                  icon: () => <Icon size={14} name="podcasts" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Compliance',
                  metric: '36:28',
                  image: '/images/speaker-guy.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
            </div>

            <button className="text-action-600 text-sm w-full leading-6 xs:hidden mt-8">
              Ver mais
            </button>
          </section>

          <section className="bg-gradient-to-bl from-vibrant-50 to-vibrant-100 py-8 pl-5 w-full sm:pl-8 md:py-10 xl:pl-16">
            <h2 className="text-grey-800 text-lg mb-6">Conteúdos especiais</h2>

            <Carousel
              slideHeightClass="h-66"
              options={{
                spacing: 16,
                slidesPerView: 1.6,
                loop: false,
                rubberband: false,
                breakpoints: {
                  '(min-width: 1025px)': {
                    slidesPerView: 2.25
                  },
                  '(min-width: 1441px)': {
                    slidesPerView: 3.25
                  },
                  '(min-width: 1536px)': {
                    slidesPerView: 4.25
                  }
                }
              }}
            >
              <div
                className="rounded relative h-66 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("./images/walking-guy.png")' }}
              >
                <div className="relative pb-5 px-5 pt-8 flex flex-col h-full z-10">
                  <p className="text-2xl whitespace-pre-wrap text-base-white">
                    Dicas de{'\n'}
                    <span className="text-orange-50">
                      carreira
                    </span>
                  </p>

                  <div className="flex flex-col sm:flex-row text-sm text-base-white mt-auto">
                    <div>
                      <span className="block">Nome</span>
                      <span>Sobrenome</span>
                    </div>
                    <button
                      className="text-base-white mt-8 sm:mt-0 ml-auto uppercase py-3.5 px-4 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                    >
                      SAIBA MAIS
                    </button>
                  </div>

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
                  <p className="text-2xl whitespace-pre-wrap text-base-white">
                    Do mil ao{'\n'}
                    <span className="text-orange-50">
                      milhão
                    </span>
                  </p>

                  <div className="flex flex-col sm:flex-row text-sm text-base-white mt-auto">
                    <div>
                      <span className="block">Nome</span>
                      <span>Sobrenome</span>
                    </div>

                    <button
                      className="text-base-white mt-8 sm:mt-0 ml-auto uppercase py-3.5 px-4 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                    >
                      SAIBA MAIS
                    </button>
                  </div>
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
                  <p className="text-2xl whitespace-pre-wrap text-base-white">
                    Dicas de{'\n'}
                    organização{'\n'}
                    dos{' '}
                    <span className="text-orange-50">
                      lucros
                    </span>
                  </p>

                  <div className="flex flex-col sm:flex-row text-sm text-base-white mt-auto">
                    <div>
                      <span className="block">Nome</span>
                      <span>Sobrenome</span>
                    </div>
                    <button
                    className="text-base-white mt-8 sm:mt-0 ml-auto uppercase py-3.5 px-4 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                    >
                      SAIBA MAIS
                    </button>
                  </div>
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
                  <p className="text-2xl whitespace-pre-wrap text-base-white">
                    Aprenda a{' '}
                    <span className="text-orange-50">
                      vender{'\n'}melhor{' '}
                    </span>
                    com um{'\n'}especialista
                  </p>

                  <div className="flex flex-col sm:flex-row text-sm text-base-white mt-auto">
                    <div>
                      <span className="block">Nome</span>
                      <span>Sobrenome</span>
                    </div>
                    <button
                      className="text-base-white mt-8 sm:mt-0 ml-auto uppercase py-3.5 px-4 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
                    >
                      SAIBA MAIS
                    </button>
                  </div>

                </div>
                <div
                className="rounded opacity-70 w-full h-full top-0 left-0 absolute bg-gradient-to-r from-opaque-900 to-transparent"
                />
              </div>
            </Carousel>
          </section>

          <section className="px-5 py-8 sm:px-8 md:py-10 xl:px-16">
            <h2 className="text-grey-800 text-lg mb-6">
              Você também pode gostar de:
            </h2>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-6 gap-x-4">
              <CardItem
                cardData={{
                  icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Seguro Auto',
                  metric: '10:45',
                  image: '/images/car.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
              <CardItem
                cardData={{
                  icon: () => <Icon size={14} name="documentos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Contact Center',
                  metric: '12 slides',
                  image: '/images/people-working.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
              <CardItem
                cardData={{
                  icon: () => <Icon size={14} name="documentos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Estratégia e Modelo de Negócios',
                  metric: '16 slides',
                  image: '/images/showing-metrics.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Ferramentas e Sistemas',
                  metric: '10:45',
                  image: '/images/numbers.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
              <CardItem
                className="hidden xs:block"
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
                className="hidden xs:block"
                cardData={{
                  averageTime: 8,
                  icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Contact Center',
                  metric: '13:20',
                  image: '/images/journalist.png',
                  tag: 'interno',
                  title: 'Proin nec quam pulvinar turpis vulputate gravida ut vel felis. Vivamus tempus tincidunt neque.',
                  percentage: 37
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  icon: () => <Icon size={14} name="documentos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Estratégia e Modelo de Negócios',
                  metric: '12 slides',
                  image: '/images/dust.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  icon: () => <Icon size={14} name="podcasts" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Ferramentas e Sistemas',
                  metric: '14:35',
                  image: '/images/conference-call.png',
                  tag: 'interno',
                  title: 'Sed dignissim tincidunt diam, vitae varius erat faucibus ac. Sed sagittis magna diam, molestie posuere tortor eleifend a'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  averageTime: 5,
                  icon: () => <Icon size={14} name="videos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Tecnologia da Informaçào',
                  metric: '10:45',
                  image: '/images/laptop.png',
                  tag: 'interno',
                  title: 'Proin nec quam pulvinar turpis vulputate gravida ut vel felis. Vivamus tempus tincidunt neque.'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  icon: () => <Icon size={14} name="artigos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Recursos Humanos',
                  metric: '~ 5m',
                  image: '/images/kids.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  icon: () => <Icon size={14} name="documentos" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Ferramentas e Sistemas',
                  metric: '16 slides',
                  image: '/images/planning.png',
                  tag: 'interno',
                  title: 'Sed dignissim tincidunt diam, vitae varius erat faucibus ac. Sed sagittis magna diam, molestie posuere tortor eleifend a'
                }}
              />
              <CardItem
                className="hidden xs:block"
                cardData={{
                  averageTime: 3,
                  icon: () => <Icon size={14} name="podcasts" color={fullConfig.theme.colors.action[600]} />,
                  category: 'Compliance',
                  metric: '36:28',
                  image: '/images/speaker-guy.png',
                  tag: 'interno',
                  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
                }}
              />
            </div>

            <button className="text-action-600 text-sm w-full leading-6 xs:hidden mt-8 xs:w-max xs:mx-auto">
              Ver mais
            </button>
          </section>
        </main>
      </div>
    </div>
  )
}
