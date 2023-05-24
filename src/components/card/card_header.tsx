import Image from "next/image";
import styles from "@/styles/card_header.module.css";

// カードのヘッダ
export default function CardHeader({
  title,
  username,
}: {
  title: string;
  username: string;
}) {
  return (
    <div className={styles.header}>
      <Image
        src="https://avatars.akamai.steamstatic.com/a0dcc9416dc25a1cefd874a9b1698ec5301d5c78_full.jpg"
        alt="プロフィールアイコン"
        width={100}
        height={100}
        className={styles.user_icon}
      />
      <div className={styles.card_info}>
        <h1 className={styles.card_title}>{title}</h1>
        <span className={styles.user_name}>{username}</span>
      </div>
    </div>
  );
}
