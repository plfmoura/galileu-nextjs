import React from 'react'
import man_secondary_creative from '../../../public/man-secondary.png'
import Image from 'next/image'
import './styles.css'
import Button from '../Button'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material'

export default function Form() {
    return (
        <div className='form-container'>
            <aside className="left-container-side">
                <Image src={man_secondary_creative} alt='Criativo da área de contato' className='aside-man-image' />
            </aside>
            <form action="" className="form-contact-content">
                <p className="form-contact-text">Acesse nossos Perfis</p>
                <div className="form-contact-header">
                    <a href="" className="social-link"><WhatsApp /></a>
                    <a href="" className="social-link"><Facebook /></a>
                    <a href="" className="social-link"><Instagram /></a>
                </div>
                <p className="form-contact-text">ou Fale conosco:</p>
                <div className="form-contact-main">
                    <label htmlFor="name" className="input-label">Nome</label>
                    <input type="text" name="name" id="name" className="form-input" />
                    <label htmlFor="tel" className="input-label">Telefone</label>
                    <input type="tel" name="tel" id="tel" className="form-input" />
                    <label htmlFor="msg" className="input-label">Mensagem</label>
                    <textarea maxLength={105} name="msg" id="msg" className="form-input" />
                </div>
                <Button type='submit' value='Enviar' variant='tertiary' />
            </form>
        </div>
    )
}
