'use client'

import React from 'react'
import man_secondary_creative from '../../../public/man-secondary.png'
import Image from 'next/image'
import './styles.css'
import Button from '../Button'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react';

type Inputs = {
    name: string,
    tel: string,
    text: string
}

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [controller, setController] = useState<boolean>(true);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        let owner_number: number = 5521980693374;
        let final_message: string = `
            Olá! Me chamo(a) ${data.name}, estou aqui através do Site da Galileu Marcenaria.
            ${data.text}.

            Atenciosamente ${data.name} - ${data.tel}.
        `
        const WHATSAPP_URI = `https://wa.me/${owner_number}?text=${encodeURIComponent(final_message)}`
        setController(false);
        setTimeout(() => {
            window.open(WHATSAPP_URI, '_blank');
            setController(true);
        }, 3000);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
            <aside className="left-container-side">
                <Image src={man_secondary_creative} alt='Criativo da área de contato' className='aside-man-image' />
            </aside>
            <div className="form-contact-content">
                <p className="form-contact-text">Acesse nossos Perfis</p>
                <div className="form-contact-header">
                    <a href="www.google.com" className="social-link"><WhatsApp /></a>
                    <a href="www.google.com" className="social-link"><Facebook /></a>
                    <a href="www.google.com" className="social-link"><Instagram /></a>
                </div>
                {
                    !controller ?
                        <>
                            <p className="form-contact-text">ou Fale conosco:</p>
                            <div className="form-contact-main">
                                <label htmlFor="name" className="input-label">Nome {errors.name && <span>Insira seu nome</span>}</label>
                                <input type="text" {...register('name', { required: true })} className="form-input" />
                                <label htmlFor="tel" className="input-label">Telefone {errors.tel && <span>Insira seu telefone</span>}</label>
                                <input type="tel" {...register('tel', { required: true })} className="form-input" />
                                <label htmlFor="msg" className="input-label">Mensagem {errors.text && <span>Deixe sua mensagem</span>}</label>
                                <textarea maxLength={105} {...register('text', { required: true })} className="form-input" />
                            </div>
                            <Button type='submit' value='Enviar' variant='tertiary' />
                        </> : <div className='form-loading-content'>
                            <span>CARREGANDO</span>
                            <p>Vamos abrir um link seguro com o Whatsapp para finalizar o envio, aguarde!</p>
                            <p>Você falará com <strong>Reinaldo Moura</strong></p>
                        </div>
                }
            </div>
        </form>
    )
}
