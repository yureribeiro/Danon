import Image from 'next/image';
import s from './CTA.module.css'
import Link from 'next/link';
import x from '../../../public/x.svg'
import telegram from '../../../public/telegram.svg'

export default function CTA() {
  return (
    <div className={s.container} id='social'>
      <div className={s.card}>
        <h1 className={s.title}>Join our community</h1>
        <p className={s.description}>Join the community that knows how to have fun while making history in the world of crypto!</p>
        <div className={s.links}>
          <Link href='https://t.me/danoncoin' target='_blank' className={s.button}><Image src={telegram} alt="telegram" className={s.icon} /> Telegram</Link>
          <Link href='https://x.com/danoncoin_' target='_blank' className={s.button}><Image src={x} alt="x" className={s.icon} /> Twitter</Link>
        </div>
      </div>
    </div>
  );
}