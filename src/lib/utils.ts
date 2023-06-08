import { IDENT } from "./constants";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function getDateString(unixtime: number) {
  const date = new Date(unixtime * 1000);
  const month_name = months[date.getMonth()];
  return `${date.getDay()} ${month_name}, ${date.getFullYear()}`;
}

export function getEmbedsCode(id: string, num: string, width: string) {
  const height = 46 + Math.ceil(55.367 * Number(num));
  const url = process.env.NEXT_PUBLIC_BASE_URL + `/get?id=${id}&num=${num}`;

  // return `<iframe id="steamembeds" title="SteamEmbeds" width="${width}" height="${height}" frameBorder="0" src="${url}"></iframe>`;
  return `<div id="${IDENT}" data-steamid="${id}" data-num="${num}" data-width="${width}px" data-target="${process.env.NEXT_PUBLIC_BASE_URL}"><script async src="${process.env.NEXT_PUBLIC_BASE_URL}/widget.js"></script></div>`;
}
