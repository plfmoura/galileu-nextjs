'use client';

import React from 'react'
import styles from './page.module.css'
import Header from '@/components/Header'
import Article from '@/components/Article'
import liveRoom from '../../public/liveroom.jpg'
import room from '../../public/room.jpg'
import kitchen from '../../public/kitchen.jpg'
import Card from '@/components/Card'
import Contact from '@/components/Contact'
import man from '../../public/man.png';

export default function Home() {
  return (
    <main className={styles.home_container}>
      <header id="header" className={styles.header_align}>
        <Header image={man} variant='home'/>
      </header>
      <section id="about" className={styles.article_align}>
        {
          ARTICLES_DATA.map((item, key) => (
            <Article key={key} image={item.image} text={item.text} title={item.title} />
          ))
        }
      </section>
      <section id="services" className={styles.services_container}>
        <h2 className={styles.home_section_title}>Serviços</h2>
        <article className={styles.cards_align}>
          {
            SERVICES_DATA.map((item, key) => (
              <Card key={key} value={item.value} image={item.image} />
            ))
          }
        </article>
      </section>
      <section id="contact" className={styles.contact_container}>
        <h2 className={styles.home_section_title}>Contato</h2>
        <article className={styles.contacts_align}>
          <Contact />
        </article>
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

import kitchen_service from '../../public/home/kitchen2.jpg';
import liveroom_service from '../../public/home/liveroom2.jpg';
import office_service from '../../public/home/office.jpg';
import room_service from '../../public/home/room.webp';


const SERVICES_DATA = [
  {
    id: 0,
    image: room_service,
    value: "Móveis para Quarto",
  },
  {
    id: 1,
    image: kitchen_service,
    value: "Móveis para Cozinha",
  },
  {
    id: 2,
    image: office_service,
    value: "Móveis para Escritório",
  },
  {
    id: 3,
    image: liveroom_service,
    value: "Móveis para Sala",
  },
]