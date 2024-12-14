import s from './hero.module.css'
import ViewOn from '../viewOn'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>DANON</h1>
      <p className={s.description}>Memes in the heart, <span>$DAN</span> in the wallet. Join the community that knows how to have fun while making history in the world of crypto!</p>
      <div className={s.links}>
        <Link href='https://t.me/danoncomunidade' target='_blank' className={s.link}>Telegram</Link>
        <Link href='https://x.com/danoncoin_' target='_blank' className={s.link}>Twitter</Link>
      </div>
      <ViewOn />
    </div>
  )
}