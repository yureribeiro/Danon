import s from './howBuy.module.css'
import { ArrowRightLeft, ChartCandlestick, Crown, HandCoins, Wallet } from 'lucide-react'
import danon1 from '../../../public/danon1.png'
import danon2 from '../../../public/danon2.png'
import danon3 from '../../../public/danon3.png'
import Image from 'next/image'

export default function HowBuy() {
  return (
    <div className={s.container} id='howtobuy'>
      <h1 className={s.title}>How To Buy $DAN</h1>
      <section className={s.sectionCards}>
        <div className={s.card}>
          <h1 className={s.text}><Wallet color='#fff' /></h1>
          <p className={s.value}>Have or create a Phantom | Solflare wallet</p>
        </div>
        <div className={s.card}>
          <h1 className={s.text}><HandCoins color='#fff' /></h1>
          <p className={s.value}>Buy SOLANA and send it your wallet</p>
        </div>
        <div className={s.card}>
          <h1 className={s.text}><ChartCandlestick color='#fff' /></h1>
          <p className={s.value}>Conecte-o a uma exchange de sua preferência</p>
        </div>
        <div className={s.card}>
          <h1 className={s.text}><ArrowRightLeft color='#fff' /></h1>
          <p className={s.value}>Swap SOLANA for $DAN</p>
        </div>
        <div className={s.card}>
          <h1 className={s.text}><Crown color='#fff' /></h1>
          <p className={s.value}>Add $DAN contract address to your Wallet for your $DAN tokens to show.</p>
        </div>
      </section>
      <Image src={danon1} alt="danon" quality={100} className={s.image1} />
      <Image src={danon2} alt="danon" quality={100} className={s.image2} />
      <Image src={danon3} alt="danon" quality={100} className={s.image3} />
    </div>
  )
}