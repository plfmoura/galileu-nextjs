import React from 'react'
import styles from './page.module.css'
import Header from '@/components/Header'
import example from '../../../public/contact.png'
import products from '../../utils/products.json'
import ProductCard from '@/components/ProductCard'

export default function Store() {
  return (
    <main className={styles.store_container}>
      <header className={styles.header_align}>
        <Header image={example} title='Veja nossa Loja'/>
      </header>
      <section className={styles.store_content}>
        {
          products.products.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price}/>
          ))
        }
      </section>
    </main>
  )
}
