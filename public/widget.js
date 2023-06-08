const main = () => {
  // iframe追加
  const parent = document.getElementById("steam-widget");
  const iframe = document.createElement("iframe");
  iframe.src = `${parent.dataset.target}/get?id=${parent.dataset.steamid}&num=${parent.dataset.num}`;
  iframe.style.border = "none";
  iframe.style.width = parent.dataset.width;
  iframe.style.borderRadius = "5px";
  iframe.allowtransparency = "true";
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
