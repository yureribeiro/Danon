'use client'

import Link from 'next/link';
import s from './header.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${s.container} ${scrolled ? s.scrolled : ''}`} id="header">
      <Link href="/" prefetch={false} className={s.logo}>
      <Image src={logo} alt="Danon" className={s.logo} />
      </Link>
      {!isOpen ? (
        <div className={s.responsive} onClick={handleOpen}>
          <Menu size={32} color={'#ffff'} />
        </div>
      ) : (
        <div className={s.responsive} onClick={handleClose}>
          <X size={32} color={'#ffff'} />
        </div>
      )}

      <div className={isOpen ? s.responsiveContent : s.content}>
      <nav className={s.nav}>
        <Link href="#about" className={s.link}>About</Link>
        <Link href="#danomics" className={s.link}>Danomics</Link>
        <Link href="#howtobuy" className={s.link}>How To Buy</Link>
        <Link href="#social" className={s.link}>Social</Link>
      </nav>
        <Link href="https://linktr.ee/crisgestaodepessoas" target="_blank" rel="noreferrer" prefetch={false} className={s.button}>BUY NOW</Link>
      </div>
    </header>
  );
}