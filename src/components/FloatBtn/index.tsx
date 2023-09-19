'use client'

import { AppContext } from '@/contexts/AppContext'
import { WhatsApp } from '@mui/icons-material'
import React, { useContext } from 'react'

export default function FloatBtn() {
  const { scroll } = useContext<any>(AppContext);

  return (
    <>
      {scroll > 500 &&
        <button
          type='button'
          onClick={() => console.log('Linkei com whatsapp')}
          style={{
            background: '#25d368',
            padding: '.7rem',
            borderRadius: '100%',
            border: 'none',
            cursor: 'pointer',
            position: 'fixed',
            bottom: 10,
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
