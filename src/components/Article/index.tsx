'use client'

import Image from 'next/image'
import React, { useContext } from 'react'
import Button from '../Button'
import './styles.css'
import { motion } from 'framer-motion'
import { AppContext } from '@/contexts/AppContext'

type ArticleProps = {
  image: any,
  title: string,
  text: string,
}

export default function Article({
  image,
  title,
  text
}: ArticleProps) {
  const { windowSize } = useContext<any>(AppContext);

  return (
    <motion.article
      initial={windowSize.width >= 780 ? motion_settings.offScreenLeft : motion_settings.offScreenMobile}
      whileInView={motion_settings.onScreen}
      viewport={{ once: true, amount: "some" }}
      className="article-container"
    >
      <Image src={image} alt='Imagem acerca do texto' className='article-image' />
      <aside className="article-align-text">
        <h3 className="article-title">{title}</h3>
        <p className="article-text">{text}</p>
        <Button variant='secondary' type='button' value='Saiba mais' />
      </aside>
    </motion.article>
  )
}

const motion_settings = {
  offScreenMobile: {
    opacity: 0,
  },
  offScreenLeft: {
    opacity: 0,
    translateX: -500
  },
  onScreen: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }
  }
}