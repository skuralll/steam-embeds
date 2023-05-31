import styles from "@/styles/index.module.css";
import Head from "next/head";
import URLGenerator from "@/components/url_generator";

export default function Home() {
  return (
    <>
      <Head>
        <title>SteamEmbeds</title>
        <meta
          name="description"
          content="Generate embed code for the list of Steam games played"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.index}>
        <div className={styles.section}>
          <h1>これは何？</h1>
          <div className={styles.content}>
            <span>
              Steamでプレイしたゲームを表示する埋め込みコードを生成できます。
            </span>
          </div>
        </div>
        <div className={styles.section}>
          <h1>使用例</h1>
          <div className={styles.content}>
            <div className={styles.iframe}>
              <iframe
                id="steamembeds"
                title="SteamEmbeds"
                width="300"
                height="489"
                frameBorder="0"
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/get?id=76561198424303465`}
              />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h1>埋め込みコード生成</h1>
          <div className={styles.content}>
            <URLGenerator />
          </div>
        </div>
        <div className={styles.section}>
          <h1>その他</h1>
          <a href="https://github.com/skuralll/steam-embeds" target="_blank">
            ソースコード
          </a>
        </div>
      </div>
    </>
  );
}
