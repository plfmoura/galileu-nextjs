import Image from 'next/image'
import React from 'react'
import './styles.css';
import man from '../../../public/man.png'
import Button from '../Button';
import { ArrowDownwardOutlined } from '@mui/icons-material';

export default function Header() {
  return (
    <section className='header-container'>
      <Image src={man} alt='man' className='header-man-image' />
      <div className="header-text-content">
        <h2 className='logo-content'>GALILEU</h2>
        <h1 className="header-galileu-icon">Móveis Planejados</h1>
        <p className="header-galileu-desc">lorem ipsunm daz quer pra tayas car pra zium</p>
        <p className="header-galileu-desc">lorem ipsunm daz quer pra tayas car pra zium</p>
        <a href="#services"><Button value='Descubra' type='button' variant='secondary' style={{padding: "1rem 3rem"}}/></a>
      </div>
      <span className="bottom-decorative-shape"><ArrowDownwardOutlined /></span>
    </section>
  )
}
