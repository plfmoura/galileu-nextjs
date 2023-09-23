'use client'

import { AppContext } from '@/contexts/AppContext'
import { WhatsApp } from '@mui/icons-material'
import React, { useContext } from 'react'

export default function FloatBtn() {
  const { scroll } = useContext<any>(AppContext);

  const onFloatBtnClick = () => {
    let owner_number: number = 5521980693374;
    let final_message: string = `Olá, estou aqui através do Site da Galileu Marcenaria.`
    const WHATSAPP_URI = `https://wa.me/${owner_number}?text=${encodeURIComponent(final_message)}`
    setTimeout(() => {
      window.open(WHATSAPP_URI, '_blank');
    }, 2000);
  }

  return (
    <>
      <style>
        {
          `
          .float-btn:active {
            transform: scale(0.9);
            filter: brightness(0.5);
          }
          .float-btn {
            transform: scale(0.5);
          }
          @media screen and (min-width: 320px) {
            .float-btn {
              bottom: 60px;
              right: -10px;
            }
          }
          @media screen and (min-width: 481px) {
            .float-btn {
              bottom: 20px;
              right: 5px;
              transform: scale(0.8);
            }
          }
          @media screen and (min-width: 768px) {
            .float-btn {
              right: 10px;
              transform: scale(1);
            }
          }
        `
        }
      </style>
      {scroll > 300 &&
        <button
          type='button'
          className='float-btn'
          onClick={onFloatBtnClick}
          style={{
            background: '#25d368',
            padding: '.7rem',
            borderRadius: '100%',
            border: 'none',
            cursor: 'pointer',
            position: 'fixed',
            zIndex: 700,
          }}
        >
          <WhatsApp style={{
            color: '#fff',
            fontSize: 70,
          }} />
        </button>
      }
    </>
  )
}
