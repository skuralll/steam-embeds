import Image from "next/image";
import styles from "@/styles/card_header.module.css";

// カードのヘッダ
export default function CardHeader({
  title,
  username,
  avatar,
}: {
  title: string;
  username: string;
  avatar: string;
}) {
  return (
    <div className={styles.header}>
      <Image
        src={avatar}
        alt=""
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
