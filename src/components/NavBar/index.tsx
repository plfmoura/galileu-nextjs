'use client'

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useContext } from 'react';
import './styles.css';
import { MenuOutlined, HomeSharp, AutoStoriesSharp, HandymanSharp, PermPhoneMsgSharp } from '@mui/icons-material';
import { AppContext } from '@/contexts/AppContext';


const NavBar: React.FC = () => {
  const route = useRouter();
  const location = usePathname();
  const [active, setActive] = useState<string>(location);
  const [activeMenuList, setActiveMenuList] = useState<boolean>(false);
  const { width } = useContext<any>(AppContext);

  const handleNavigation = ({ path }: { path: string }) => {
    route.push(path);
    setActive(path);
    setActiveMenuList(false);
  };

  return (
    <>
      <nav className='navbar-container-mobile'>
        <Image src={"/csa.png"} width={100} height={20} alt="Galileu Design & Marcenaria logo" className='navbar-app-logo' />
        <ul className="navbar-content-list-mobile">
          {NAVBAR_LINK.map((item, key) =>
            <li
              key={key}
              className={active === item.path ? "navbar-list-item navbar-active" : "navbar-list-item"}
              id={item.name.toLowerCase()}
              onClick={() => handleNavigation({ path: `${item.path}` })}
            >
              {item.icon}
              <span className="navbar-item-name" >
                {item.name}
              </span>
            </li>
          )}
        </ul>
      </nav>
      <nav className='navbar-container-desktop'>
        {/* <Image src={"/csa.png"} width={100} height={20} alt="Galileu Design & Marcenaria logo" className='navbar-app-logo' /> */}
        <h1>GALILEU</h1>
        <MenuOutlined style={{ display: width > 768 ? "none" : 'block' }} className='navbar-dropdown-menu' onClick={() => setActiveMenuList(true)} />
        <div className="navbar-dropdown-overlay" style={{ display: activeMenuList ? "block" : 'none' }} onClick={() => setActiveMenuList(false)} ></div>
        <ul className="navbar-content-list-desktop" style={{ display: width >= 768 ? "flex" : activeMenuList ? 'flex' : "none" }}>
          {NAVBAR_LINK.map((item, key) =>
            <li
              key={key}
              className={active === item.path ? "navbar-list-item-desktop navbar-active" : "navbar-list-item-desktop"}
              id={item.name.toLowerCase()}
              onClick={() => handleNavigation({ path: `${item.path}` })}
            >
              {item.icon}
              <span className="navbar-item-name" >
                {item.name}
              </span>
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
    path: '/',
    icon: <HomeSharp />,
  },
  {
    name: "Sobre",
    path: '/sobre',
    icon: <AutoStoriesSharp />,
  },
  {
    name: "Serviços",
    path: '/servicos',
    icon: <HandymanSharp />,
  },
  {
    name: "Contato",
    path: '/contato',
    icon: <PermPhoneMsgSharp />,
  },
];