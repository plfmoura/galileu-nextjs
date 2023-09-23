import Image from 'next/image';
import React from 'react';
import logo_white from '../../../public/logo/logo-white.png';
import './styles.css';

export default function Footer() {
    return (
        <footer
            className='footer-container'
            style={{
                width: '100vw',
            }}
        >
            <section className="footer-content">
                <Image src={logo_white} className='footer-logo-image' alt='Galileu logo' height={100} />
                <aside className="right-footer-align">
                    <p>Rua Magno Martins 430, Ilha do Governador - RJ, 21911-190</p>
                    <p>Telefone: (21) 4701-2000</p>
                    <p>WhatsApp: (21) 9 9999-9999</p>
                </aside>
            </section>
            <div className="copyright-container">
                <p>Desenvolvido por Label Soluções em T.I</p>
                <p>Galileu Marcenaria &copy; 2023. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
