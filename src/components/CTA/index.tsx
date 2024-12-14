import Image from 'next/image';
import s from './CTA.module.css'
import Link from 'next/link';

export default function CTA() {
  return (
    <div className={s.container} id='social'>
      <div className={s.card}>
        <h1 className={s.title}>Join our community</h1>
        <p className={s.description}>Join the community that knows how to have fun while making history in the world of crypto!</p>
        <div className={s.links}>
          <Link href='https://t.me/danoncomunidade' target='_blank' className={s.button}>Telegram</Link>
          <Link href='https://x.com/danoncoin_' target='_blank' className={s.button}>Twitter</Link>
          <Link href='https://discord.com/invite/danoncomunidade' target='_blank' className={s.button}>Instagram</Link>
        </div>
      </div>
    </div>
  );
}