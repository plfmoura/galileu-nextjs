'use client'

import Image from 'next/image';
import React, { useState, useContext } from 'react';
import './styles.css';
import { MenuOutlined, HomeSharp, AutoStoriesSharp, HandymanSharp, PermPhoneMsgSharp } from '@mui/icons-material';
import { AppContext } from '@/contexts/AppContext';

const NavBar: React.FC = () => {
  const [active, setActive] = useState<string>("#header");
  const [activeMenuList, setActiveMenuList] = useState<boolean>(false);
  const { windowSize, scroll } = useContext<any>(AppContext);

  const handleNavigation = ({ path }: { path: string }) => {
    setActive(path);
    setActiveMenuList(false);
  };
  
  return (
    <>
      <nav className='navbar-container-mobile'>
        <Image src={"/csa.png"} width={100} height={20} alt="Galileu Design & Marcenaria logo" className='navbar-app-logo' />
        <ul className="navbar-content-list-mobile">
          {NAVBAR_LINK.map((item, key) =>
            <a key={key} href={`${item.path}`}>
              <li
                className={active === item.path ? "navbar-list-item navbar-active" : "navbar-list-item"}
                id={item.name.toLowerCase()}
                onClick={() => handleNavigation({ path: `${item.path}` })}
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
      <nav className='navbar-container-desktop' style={{
        background: scroll > 30 ? `#333333${scroll < 99 ? scroll : 'ff'}` : 'transparent',
        width: scroll > 30 ? '100vw' : '100vw',
        margin: 0,
        padding: '0 5%',
        boxShadow: scroll > 30 ? 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' : 'none'
      }}>
        {/* <Image src={"/csa.png"} width={100} height={20} alt="Galileu Design & Marcenaria logo" className='navbar-app-logo' /> */}
        <h1>GALILEU</h1>
        <MenuOutlined style={{ display: windowSize.width > 768 ? "none" : 'block' }} className='navbar-dropdown-menu' onClick={() => setActiveMenuList(true)} />
        <div className="navbar-dropdown-overlay" style={{ display: activeMenuList ? "block" : 'none' }} onClick={() => setActiveMenuList(false)} ></div>
        <ul className="navbar-content-list-desktop" style={{ display: windowSize.width >= 768 ? "flex" : activeMenuList ? 'flex' : "none" }}>
          {NAVBAR_LINK.map((item, key) =>
            <li
              key={key}
              className={active === item.path ? "navbar-list-item-desktop navbar-active" : "navbar-list-item-desktop"}
              id={item.name.toLowerCase()}
              onClick={() => handleNavigation({ path: `${item.path}` })}
            >
              <a href={`${item.path}`}>
                {item.icon}
                <span className="navbar-item-name" >
                  {item.name}
                </span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  )
}

export default NavBar;

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
];