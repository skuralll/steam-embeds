import styles from "@/styles/card.module.css";
import Image from "next/image";

export default function Card() {
  const title = "プレイ時間の長いゲーム";
  const username = "skuralll";

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image
          src="https://avatars.akamai.steamstatic.com/a0dcc9416dc25a1cefd874a9b1698ec5301d5c78_full.jpg"
          alt="プロフィールアイコン"
          width={152}
          height={152}
          className={styles.user_icon}
        />
        <div className={styles.card_info}>
          <h1 className={styles.card_title}>{title}</h1>
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
}
