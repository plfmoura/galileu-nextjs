import Image from 'next/image'
import React from 'react'
import './styles.css';
import Button from '../Button';
import { ArrowDownwardOutlined } from '@mui/icons-material';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import logo_white from '../../../public/logo/logo-white.png';

type HeaderProps = {
  image: string | StaticImport,
  variant: 'loja' | 'home'
}

export default function Header({ image, variant }: HeaderProps) {
  return (
    <>
      <div className="align-logo-header">
        <Image src={logo_white} className='header-logo-image' alt='Galileu logo' />
      </div>
      <section className='header-container'>
        <Image src={image} alt='man' className='header-man-image' style={{ width: 'auto' }} />
        {
          variant == 'loja' &&
          <div className="header-text-content">
            <h1 className="header-galileu-icon">Explore Nossa Loja de Móveis</h1>
            <p className="header-galileu-desc">Explore nossa loja e descubra peças perfeitas para complementar seu espaço de maneira rápida e conveniente.</p>
            {/* <p className="header-galileu-desc">Estamos prontos para atender às suas necessidades de decoração com a qualidade e o design que você merece.</p> */}
            <a href="#store"><Button value='Saiba Mais' type='button' variant='secondary' style={{ padding: "1rem 3rem" }} /></a>
          </div>
        }
        {
          variant == 'home' &&
          <div className="header-text-content">
            <h1 className="header-galileu-icon">Móveis Personalizados para você</h1>
            <p className="header-galileu-desc">Criamos soluções de design personalizado que se encaixam perfeitamente na sua vida e estilo.</p>
            {/* <p className="header-galileu-desc">Projetados visando atender às suas necessidades diárias. De cozinhas bem organizadas a closets espaçosos, estamos aqui para transformar sua visão em realidade.</p> */}
            <a href="#services"><Button value='Saiba mais' type='button' variant='secondary' style={{ padding: "1rem 3rem" }} /></a>
          </div>
        }
        <span className="bottom-decorative-shape"><ArrowDownwardOutlined /></span>
      </section>
    </>
  )
}
