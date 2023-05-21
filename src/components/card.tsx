import styles from "@/styles/card.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image
          src="https://avatars.akamai.steamstatic.com/a0dcc9416dc25a1cefd874a9b1698ec5301d5c78_full.jpg"
          alt="プロフィールアイコン"
          width={184}
          height={184}
          className={styles.user_icon}
        />
      </div>
    </div>
  );
}
