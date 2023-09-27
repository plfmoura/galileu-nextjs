'use client'

import React from 'react'
import styles from './page.module.css'
import Header from '@/components/Header'
import example from '../../../public/contact.png'
import products from '../../utils/products.json'
import ProductCard from '@/components/ProductCard'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function Store() {
  const router = useRouter();

  return (
    <main className={styles.store_container}>
      <header className={styles.header_align}>
        <Header image={example} variant="loja"/>
      </header>
      <section id="store" className={styles.store_content}>
        {/* {
          products.products.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price}/>
          ))
        } */}

        Página em construção

        <Button value='Voltar' variant='secondary' type='button' onPress={() => router.push('/')}/>
      </section>
    </main>
  )
}
