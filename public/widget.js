const isDev = true;

const main = () => {
  // URLを取得
  const targetUrl = isDev
    ? "http://localhost:3000"
    : "https://steam-embeds.vercel.app/";

  // iframe追加
  const parent = document.getElementById("steam-widget");
  const iframe = document.createElement("iframe");
  iframe.src = `${targetUrl}/get?id=${parent.dataset.steamid}&num=${parent.dataset.num}`;
  iframe.style.border = "none";
  iframe.style.width = parent.dataset.width;
  iframe.id = `steam-widget-iframe`;
  parent.appendChild(iframe);

  // メッセージ受け取り→高さを変更
  window.addEventListener(
    "message",
    function (event) {
      try {
        const data = JSON.parse(event.data);
        if (!data.ident === "steam-widget") return;
        const iframe = document.getElementById("steam-widget-iframe");
        if (!iframe) return;
        iframe.height = data.height;
      } catch (e) {}
    },
    false
  );
};

main();
