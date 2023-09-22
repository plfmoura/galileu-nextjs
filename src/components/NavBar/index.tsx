'use client'

import React, { useState, useContext } from 'react';
import './styles.css';
import { HomeSharp, AutoStoriesSharp, HandymanSharp, PermPhoneMsgSharp, Menu } from '@mui/icons-material';
import { AppContext } from '@/contexts/AppContext';

export const BottomNavigation: React.FC = () => {
  const { active, setActive } = useContext<any>(AppContext);

  return (
    <nav className='navbar-container-mobile'>
      <ul className="navbar-content-list-mobile">
        {NAVBAR_LINK.map((item, key) =>
          <a key={key} href={`${item.path}`}>
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
      <h1 className="navbar-logo">GALILEU</h1>
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
                <a href={`${item.path}`}>
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
    icon: <HomeSharp />,
  },
  {
    name: "Sobre",
    path: '#about',
    icon: <AutoStoriesSharp />,
  },
  {
    name: "Serviços",
    path: '#services',
    icon: <HandymanSharp />,
  },
  {
    name: "Contato",
    path: '#contact',
    icon: <PermPhoneMsgSharp />,
  },
]