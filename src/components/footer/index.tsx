import s from './footer.module.css'

export default function Footer() {
  return (
    <div className={s.container}>
      <p className={s.disclaimer}>DISCLAIMER: The content of this site is for informational purposes only and is not intended as financial advice. Investments in cryptocurrencies are subject to high market risks and volatility. The Danon team does not endorse or recommend the purchase of any cryptocurrency mentioned on this site. Readers are advised to conduct their own research or consult a professional financial advisor before making any investment decisions. The Danon team will not be liable for any financial losses incurred based on the information presented here.</p>
      <p className={s.copyright}>© 2024 Danon. All rights reserved.</p>
    </div>
  );
}