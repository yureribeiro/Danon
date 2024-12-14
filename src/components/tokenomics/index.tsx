'use client'

import s from './tokenomics.module.css'
import Image from 'next/image';
import danon from '../../../public/danomicsIcon.jpg'

export default function Tokenomics() {
  return (
    <section className={s.container} id='danomics'>
      <h1 className={s.title}>DANOMICS</h1>
      <div className={s.section}>
        <Image src={danon} alt="logo" priority quality={100} className={s.image} />
        <div className={s.contentCards}>
          <div className={s.card}>
            <p className={s.text}>CONTRACT ADDRESS</p>
            <p className={s.value}>XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <button className={s.button} onClick={() => navigator.clipboard.writeText('XXXXXXXXXXXXXXXXXXXXXXXXXX')}>Copy</button>
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
          <div className={s.columns}>
            <div className={s.card}>
              <p className={s.text}>MARKET CAP</p>
              <p className={s.value}>$1,000,00</p>
            </div>
            <div className={s.card}>
              <p className={s.text}>HOLDERS</p>
              <p className={s.value}>30</p>
            </div>
          </div>
          <div className={s.card}>
            <p className={s.text}>SUPPLY</p>
            <p className={s.value}>1,000,000,000</p>
          </div>
          <button className={s.buttonBuy}>BUY $DAN NOW</button>
        </div>
      </div>

    </section>
  );
}