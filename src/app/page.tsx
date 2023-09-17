import Header from '@/components/Header'
import styles from './page.module.css'
import Article from '@/components/Article'
import liveRoom from '../../public/liveroom.jpg'
import room from '../../public/room.jpg'
import kitchen from '../../public/kitchen.jpg'

export default function Home() {
  return (
    <main className={styles.home_container}>
      <header id="header">
        <Header />
      </header>
      <section id="about" className={styles.article_align}>
        {
          ARTICLES_DATA.map((item) => (
            <Article image={item.image} text={item.text} title={item.title} />
          ))
        }
      </section>
      <section id="services">

      </section>
      <section id="contact">
        
      </section>
    </main>
  )
}

const ARTICLES_DATA = [
  {
    id: 0,
    image: liveRoom,
    title: "Solução para Espaços Personalizados",
    text: "Móveis planejados são a solução ideal para criar ambientes personalizados, oferecendo designs sob medida e uma ampla gama de materiais para atender às suas preferências e necessidades."
  },
  {
    id: 1,
    image: kitchen,
    title: "Vantagens dos Móveis Planejados",
    text: "Móveis planejados são altamente funcionais, proporcionam controle completo sobre o design e acabamento, enquanto também acrescentam valor ao seu imóvel a longo prazo."
  },
  {
    id: 2,
    image: room,
    title: "Como Escolher Móveis Planejados",
    text: "Na hora de escolher móveis planejados, leve em consideração suas necessidades de espaço, orçamento e a importância de trabalhar com um especialista para garantir um investimento inteligente e duradouro."
  }
]