import Image from 'next/image'
import React from 'react'
import './styles.css';
import Button from '../Button';
import { ArrowDownwardOutlined } from '@mui/icons-material';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import logo_white from '../../../public/logo/logo-white.png';

type HeaderProps = {
  image: string | StaticImport,
  title: string
}

export default function Header({ image, title }: HeaderProps) {
  return (
    <>
      <div className="align-logo-header">
        <Image src={logo_white} className='header-logo-image' alt='Galileu logo' />
      </div>
      <section className='header-container'>
        <Image src={image} alt='man' className='header-man-image' style={{ width: 'auto' }} />
        <div className="header-text-content">
          <h1 className="header-galileu-icon">{title}</h1>
          <p className="header-galileu-desc">lorem ipsunm daz quer pra tayas car pra zium</p>
          <p className="header-galileu-desc">lorem ipsunm daz quer pra tayas car pra zium</p>
          <a href="#services"><Button value='Consultar serviços' type='button' variant='secondary' style={{ padding: "1rem 3rem" }} /></a>
        </div>
        <span className="bottom-decorative-shape"><ArrowDownwardOutlined /></span>
      </section>
    </>
  )
}
