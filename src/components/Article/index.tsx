
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import './styles.css'

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
      <article className="article-container">
        <Image src={image} alt='Imagem acerca do texto' className='article-image'/>
        <aside className="article-align-text">
          <h2 className="article-title">{title}</h2>
          <p className="article-text">{text}</p>
          <Button variant='secondary' type='button' value='Saiba mais' />
        </aside>
    </article>
  )
}
