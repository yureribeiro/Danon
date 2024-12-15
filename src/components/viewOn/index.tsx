import s from './viewOn.module.css'
import Image from 'next/image';
import dexscreen from '../../../public/dexscreener.png'
import jupiter from '../../../public/jupiter.svg'
import pumpfun from '../../../public/pumpfun.png'
import Link from 'next/link';
import danonIcon from '../../../public/logo.png'

export default function ViewOn() {
  return (
    <div className={s.container}>
      <div className={s.cards}>
        <Link href='https://dexscreener.com/' target='_blank' className={s.link}>
          <Image src={dexscreen} alt="dexscreener" className={s.icon} quality={100} priority />
        </Link>
        <Link href='https://pump.fun/coin/38BWrTTU17xWpgQfYQRJYcAKw4qBnKta72yYLCuepump' target='_blank' className={s.link}>
          <Image src={pumpfun} alt="pumpfun" className={s.icon} quality={100} priority />
        </Link>
        <Link href='https://jup.ag/swap/' target='_blank' className={s.link}>
          <Image src={jupiter} alt="jupiter" className={s.icon} quality={100} priority />
        </Link>
      </div>
      <p className={s.text}>Big exchanges lined up, just wait... <Image src={danonIcon} alt="logo" priority quality={100} className={s.image} /></p>
    </div>
  );
} 