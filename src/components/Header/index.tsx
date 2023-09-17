import Image from 'next/image'
import React from 'react'
import './styles.css';
import image_bg from '../../../public/bg-mobile.jpg'
import Button from '../Button';
import { ArrowDownwardOutlined, SquareFootSharp } from '@mui/icons-material';

export default function Header() {
  return (
    <section className='header-container'>
      <Image
        src={image_bg}
        alt="451"
        className='header-image'
        loading='lazy'
      />
      <div className="header-overlay"></div>
      <div className="header-text-content">
        <h1 className="header-galileu-icon">Móveis Planejados</h1>
        <p className="header-galileu-desc">lorem ipsunm daz quer pra tayas car pra zium</p>
        <Button value='Descubra' type='button' variant='primary' style={{padding: "1rem 3rem"}}/>
      </div>
      <span className="bottom-decorative-shape"><ArrowDownwardOutlined /></span>
    </section>
  )
}
