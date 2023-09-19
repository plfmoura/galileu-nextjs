import React from 'react'

export default function Footer() {
    return (
        <footer
            className='footer-container'
            style={{
                width: '100vw',
            }}
        >
            <section 
            className="footer-content"
            style={{
                width: '100%',
                minHeight: '20vh',
                background: 'var(--secondary-color)'
            }}
            >

            </section>
            <div
                className="copyright-container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    background: 'var(--tertiary-color)',
                    color: 'var(--primary-color)',
                    padding: '1rem 10%'
                }}
            >
                <p>Desenvolvido por Label Soluções em T.I</p>
                <p>Galileu Marcenaria &copy; 2023. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
