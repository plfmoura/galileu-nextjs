'use client'

import React, { useState, useContext } from 'react';
import './styles.css';
import { HomeSharp, AutoStoriesSharp, HandymanSharp, PermPhoneMsgSharp, Menu, Store } from '@mui/icons-material';
import { AppContext } from '@/contexts/AppContext';
import logo_dark from '../../../public/logo/logo-dark.png';
import logo_white from '../../../public/logo/logo-white.png';
import Image from 'next/image';

export const BottomNavigation: React.FC = () => {
  const { active, setActive } = useContext<any>(AppContext);

  return (
    <nav className='navbar-container-mobile'>
      <ul className="navbar-content-list-mobile">
        {NAVBAR_LINK.map((item, key) =>
          <a key={key} href={`/${item.path}`}>
            <li
              className={active === item.path ? "navbar-list-item navbar-active" : "navbar-list-item"}
              id={item.name.toLowerCase()}
              onClick={() => setActive(`${item.path}`)}
            >
              {item.icon}
              <span className="navbar-item-name" >
                {item.name}
              </span>
            </li>
          </a>
        )}
      </ul>
    </nav>
  )
}

export const TopNavigation: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const { scroll, active, setActive } = useContext<any>(AppContext);

  return (
    <nav
      className='navbar-container-top'
      style={{
        background: scroll > 100 ? 'var(--tertiary-color)' : 'transparent',
        boxShadow: scroll > 100 ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none',
      }}
    >
      <Image src={scroll < 100 ? logo_dark : logo_white} className='logo-image' alt='Galileu logo' />
      {show && <div className="navbar-top-overlay" onClick={() => setShow(false)}></div>}
      <aside className="align-navbar-content">
        <Menu onClick={() => setShow(true)} />
        <ul className={show ? "navbar-content-list active-top-bar" : "navbar-content-list"}>
          {
            NAVBAR_LINK.map((item, key) => (
              <li
                onClick={() => { setShow(false); setActive(`${item.path}`) }}
                key={key}
                className="navbar-list-item"
                style={{
                  color: active === item.path ? 'var(--secondary-color'
                    : scroll > 100 ? 'var(--primary-color)'
                      : 'var(--tertiary-color)'
                }}
              >
                <a href={`/${item.path}`}>
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
      </aside>
    </nav>
  )
}

const NAVBAR_LINK = [
  {
    name: "Home",
    path: '#header',
    page: false,
    icon: <HomeSharp />,
  },
  {
    name: "Sobre",
    path: '#about',
    page: false,
    icon: <AutoStoriesSharp />,
  },
  {
    name: "Serviços",
    path: '#services',
    page: false,
    icon: <HandymanSharp />,
  },
  {
    name: "Contato",
    path: '#contact',
    page: false,
    icon: <PermPhoneMsgSharp />,
  },
  {
    name: "Loja",
    path: 'store',
    page: true,
    icon: <Store />,
  }
]