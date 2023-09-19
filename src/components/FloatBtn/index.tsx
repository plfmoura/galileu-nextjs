'use client'

import { AppContext } from '@/contexts/AppContext'
import { WhatsApp } from '@mui/icons-material'
import React, { useContext } from 'react'

export default function FloatBtn() {
  const { scroll } = useContext<any>(AppContext);

  return (
    <>
      <style>
        {
          `
          @media screen and (min-width: 320px) {
            .float-btn {
              bottom: 80px
            }
          }

          @media screen and (min-width: 481px) {
            .float-btn {
              bottom: 20px
            }
          }
        `
        }
      </style>
      {scroll > 500 &&
        <button
          type='button'
          className='float-btn'
          onClick={() => console.log('Linkei com whatsapp')}
          style={{
            background: '#25d368',
            padding: '.7rem',
            borderRadius: '100%',
            border: 'none',
            cursor: 'pointer',
            position: 'fixed',
            right: 10
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
