'use client'

import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import './styles.css'
import { motion } from 'framer-motion'

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
  return (
    <motion.article
      initial={{
        opacity: 0, 
        translateX: 500
      }}
      whileInView={{
        opacity: 1, 
        translateX: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }
      }}
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
