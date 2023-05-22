import styles from "@/styles/card.module.css";
import Image from "next/image";

type Game = {
  name: string;
  playtime: number;
  header: string;
};

export default function Card() {
  const title = "Most Played Games";
  const username = "skuralll";
  const games: Game[] = [
    {
      name: "Counter-Strike: Global Offensive",
      playtime: 1290,
      header: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    },
    {
      name: "Dota 2",
      playtime: 310.2,
      header: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
    },
    {
      name: "Grand Theft Auto V",
      playtime: 80,
      header: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    },
    {
      name: "Rust",
      playtime: 5,
      header: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg",
    },
  ];

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
          <span className={styles.user_name}>{username}</span>
        </div>
      </div>
      <div className={styles.content}>
        <ol className={styles.game_list}>
          {games.map((game) => (
            <li key={game.name}>
              <div className={styles.game_item}>
                <div>
                  <h2 className={styles.game_title}>{game.name}</h2>
                  <span className={styles.game_playtime}>
                    {game.playtime + "hours"}
                  </span>
                </div>
                {/* <div className={styles.game_image_wrapper}>
                  <Image
                    src={game.header}
                    alt="プロフィールアイコン"
                    width={460}
                    height={215}
                    style={{
                      width: "auto",
                      height: "100%",
                    }}
                    className={styles.game_image}
                  />
                </div> */}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
