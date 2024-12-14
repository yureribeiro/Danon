import s from './about.module.css'
import danonImage from '../../../public/danon.png'
import Image from 'next/image';
import Link from 'next/link';
import telegram from '../../../public/telegram.svg'

export default function About() {
  return (
    <div className={s.container} id='about'>
      <Image src={danonImage} alt="logo" priority quality={100} className={s.image} />
      <div className={s.content}>
        <h1>What the hell is $DAN?</h1>
        <b>$DAN is a memecoin, DANON is a memecoin addict</b>
        <p>Immerse yourself in the universe of $DAN, where cryptocurrency merges with humor, and embark on an exciting journey toward the next big meme coin sensation on SOLANA!</p>
        <Link href='https://t.me/danoncoin' target='_blank' className={s.link}> <Image src={telegram} alt="telegram" className={s.icon} />  Telegram</Link>
      </div>
    </div>
  );
}