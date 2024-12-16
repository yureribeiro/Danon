'use client'

import s from './tokenomics.module.css'
import Image from 'next/image';
import danon from '../../../public/danomicsIcon.jpg'
import Link from 'next/link';

export default function Tokenomics() {
  return (
    <section className={s.container} id='danomics'>
      <h1 className={s.title}>DANOMICS</h1>
      <div className={s.section}>
        <Image src={danon} alt="logo" priority quality={100} className={s.image} />
        <div className={s.contentCards}>
          <div className={s.card}>
            <p className={s.text}>CONTRACT ADDRESS</p>
            <p className={s.valueContract}>38BWrTTU17xWpgQfYQRJYcAKw4qBnKta72yYLCuepump</p>
            <button className={s.button} onClick={() => navigator.clipboard.writeText('38BWrTTU17xWpgQfYQRJYcAKw4qBnKta72yYLCuepump')}>Copy</button>
          </div>
          <div className={s.columns}>
            <div className={s.card}>
              <p className={s.text}>TICKER</p>
              <p className={s.value}>$DAN</p>
            </div>
            <div className={s.card}>
              <p className={s.text}>BUY/SELL TAX</p>
              <p className={s.value}>0%</p>
            </div>
          </div>
          <div className={s.card}>
            <p className={s.text}>LIQUITY POOL <span>BURNED</span> </p>
            <p className={s.text}>OWNERSHIP <span>REVOKED</span></p>
          </div>
          <div className={s.card}>
            <p className={s.text}>SUPPLY</p>
            <p className={s.value}>1,000,000,000</p>
          </div>
          <Link href='https://pump.fun/coin/38BWrTTU17xWpgQfYQRJYcAKw4qBnKta72yYLCuepump' target='_blank' className={s.buttonBuy}>BUY $DAN NOW</Link>
        </div>
      </div>

    </section>
  );
}