export const UCOUNT: number = 12;

//export const BASE_URL: string = import.meta.env.BASE_URL;
export const B_URL: string = "/";
export const PAGE_URL: string = B_URL + "page";

export function formatCurrency(paramCurr: number) {
  let res: string = "";
  res = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(paramCurr);

  return res;
}

export function getNameCount(param: number) {
  let res: string = "";
  let abc: string = String(param);
  let tempR: number = Number(abc[abc.length - 1]);

  if (param >= 10 && param <= 19) return (res = param + " штук");
  if (param > 110) {
    tempR = Number(abc.substring(abc.length - 2, abc.length));
    //console.log(tempR);
    if (tempR >= 10 && tempR <= 20) {
      return (res = param + " штук");
    } else {
      tempR = Number(abc.substring(abc.length - 1, abc.length));
    }
  }

  switch (tempR) {
    case 0:
      res = param + " штук";
      break;
    case 1:
      res = param + " штука";
      break;
    case 2:
    case 3:
    case 4:
      res = param + " штуки";
      break;
    default:
      res = param + " штук";
      break;
  }

  return res;
}
